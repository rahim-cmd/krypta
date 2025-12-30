import { useParams } from "react-router-dom";
import bimServices from "./data/Bimservices";
import Breadcrumb from "./Breadcrump";
import ProcessWorkFlow from "./ProcessWorkFlow";
import SubServiceTabs from "./SubServiceTabs";

export default function ServiceDetail() {
  const { service, slug } = useParams();

  const serviceItems = bimServices[service].items;
  const item = serviceItems.find(i => i.slug === slug);

  return (
    <>
    <Breadcrumb/>
    <div className="container mb-5 text-center bg-gray p-3">
    <div className="service-detail p-3">
      <h3>{item.title}</h3>
      <p className="text-muted">{item.desc}</p>
    </div>
    <div className="container p-3">
{item.details && (
  typeof item.details === "string" ? (
    <p>{item.details}</p>
  ) : (
    <div className="row">
      {item.details.map(result => (
        <div
          className="col-lg-4 col-md-4 col-sm-12 text-justify"
          key={result.id}
        >
          <div className="card text-justify h-100" style={{ width: "18rem" }}>
            <img
              src={result.image}
              className="card-img-top"
              style={{height:'auto',width:'100%'}}
              alt={result.title}
            />
            <div className="card-body">
              <h5 className="card-title">{result.title}</h5>
              <p className="card-text">{result.desc}</p>
            </div>
          </div>
        </div>
      ))}

      
    </div>
  )
)}
    </div>
</div>
<div className="container-flex align-items-center justify-content-center justify-item-center">
  {item.tabs && item.tabs.length > 0 && (
  <SubServiceTabs tabs={item.tabs} />
)}
</div>
<div className="container text-justify bg-white text-dark shadow">
      <ProcessWorkFlow/>
    </div>
    
    </>
  );
}
