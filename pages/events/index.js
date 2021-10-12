import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from '@/components/EventItem';
import Pagination from '@/components/Pagination';
const PER_PAGE = 5;

export default function EventsPage({ events,page,total }) {


    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}

            {
                events.map(evt => (
                    <EventItem key={evt.id} evt={evt} />
                ))
            }
           <Pagination page={page} total={total} per_page={PER_PAGE} />
        </Layout>
    )
}

export async function getServerSideProps({query:{page=1}}) {
    
    const start = +page === 1? 0 :(+page-1)*PER_PAGE; 

    //Fetch Total
    const totalRes = await fetch(`${API_URL}/events/count`);
    const total = await totalRes.json();
    //Fetch Event
    const  eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`);
    const events = await eventRes.json();

    return {
        props: { events,page:+page, total },
      
    }
}
