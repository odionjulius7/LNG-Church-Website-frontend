import React from "react";
import "./home_comp.css";
import CustomButton from "../common/CustomButton";

const Request = () => {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0 h-request">
        <div className="col-md-4 h-request-1">
          <div className="h-request-content">
            <p className="mb-2">WE'RE GRATEFUL</p>
            <h3 className="mb-4">SHARE TESTIMONIES</h3>
            <CustomButton
              title="SHARE WITH US"
              className="btn btn-outline-light"
              type="link"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>
        <div className="col-md-4 h-request-2">
          <div className="h-request-content">
            <p className="mb-2">WE'RE LEARNING</p>
            <h3 className="mb-4">ACQUIRE SKILLS</h3>
            <CustomButton
              title="CONNECT EHUB"
              className="btn btn-light"
              type="link"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>
        <div className="col-md-4 h-request-3">
          <div className="h-request-content">
            <p className="mb-2">WE INTERCEDE</p>
            <h3 className="mb-4">REQUEST PRAYER</h3>
            <CustomButton
              title="LET'S PRAY"
              className="btn btn-outline-light"
              type="link"
              onClick={() => router.push("/contact")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
