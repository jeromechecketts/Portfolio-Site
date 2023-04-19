import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Copyright &amp; Disclaimer
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Copyright Statement:
            </h3>
              <p>
                All content, including text, graphics, images, logos, and software, on this personal portfolio website is the property of the website owner or its content suppliers and is protected by copyright laws. You may not use, reproduce, or distribute any content from this website without the prior written permission of the website owner.
              </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Disclaimer:
            </h3>
              <p>
              The information provided on this personal portfolio website is for general informational purposes only. The website owner makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              <br /><br />
              In no event will the website owner be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              <br /><br />
              Through this website you may be able to link to other websites which are not under the control of the website owner. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
              <br /><br />
              Every effort is made to keep the website up and running smoothly. However, the website owner takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
              <br /><br />
              By using this personal portfolio website, you agree to indemnify and hold harmless the website owner from any and all claims, damages, expenses, and costs, including reasonable attorneys' fees, arising from your use of the website or your violation of these terms and conditions.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
