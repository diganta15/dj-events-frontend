import { Fragment } from "react";
import Link from 'next/link';


export default function Pagination({page, total, per_page}) {
    const lastPage = Math.ceil(total / per_page);
    return (
       <Fragment>
            {page > 1 && (
                <Link href={`events?page=${page - 1}`}>
                    <a className="btn-secondary">Prev</a>
                </Link>
            )}
            {page < lastPage && (
                <Link href={`events?page=${page + 1}`}>
                    <a className="btn-secondary">Next</a>
                </Link>
            )}
       </Fragment>
    )
}
