import {useState}  from 'react'
import './subservice.css'
const SubServiceTabs = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeData = tabs.find(tab => tab.id === activeTab);

  return (
    <>
    
    <div className="container text-center">
   <h3>Services We Offer</h3>
      {/* TAB HEADERS */}
      <div className="row mb-4 p-5 justify-content-center">
        
        {tabs.map(tab => (
        <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
          <div key={tab.id} className="btn-group mr-2 ">
            <button id="serviceButton"
              className={`btn btn-warning text-wrap mb-2 ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          </div>
          </div>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="row align-items-center m-2 p-2">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <p>{activeData.content}</p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            src={activeData.image}
            className="img-fluid"
            alt={activeData.title}
          />
        </div>
      </div>
       </div>
    </>
  );
}

export default SubServiceTabs
