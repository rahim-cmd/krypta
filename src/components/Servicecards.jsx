import { Link } from "react-router-dom";

export default function Servicecards({ items, serviceKey }) {
  return (
    <div className="row mb-5 text-center mt-5">
      {items.map((item) => (
        <div className="col-lg-4 col-md-4 col-12 mb-2 h-100">
        <div className="card shadow">
        <div className=" card-body" key={item.id}>
           <h5>{item.title}</h5>
         
          <p>{item.desc}</p>
        </div>
        <div className="container mb-5 p-3">

          <Link
            to={`/services/${serviceKey}/${item.slug}`}
            className="read-more"
            >
           <button className="btn btn-outline-warning btn-sm p"> Explore More →</button>
          </Link>
            </div>
        </div>
        </div>
      ))}
    </div>
  );
}
