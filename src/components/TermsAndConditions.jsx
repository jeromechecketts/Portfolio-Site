import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
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
              Terms &amp; Policy
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            {/* <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p> */}
            <h3 className={"mb-3 mt-2 " + (darkTheme ? "text-white" : "")}>
              Terms of Use
            </h3>
            {/* <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Simply
              dummy text of the printing and typesetting industry.
            </p> */}
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Introduction
            </h5>
            <p>
              Welcome to my portfolio website. By accessing and using my website, you agree to be bound by these terms of use, my privacy policy, and all applicable laws and regulations.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Intellectual Property Rights
            </h5>
            <p>
              All content on my website, including but not limited to text, graphics, images, logos, and software, is the property of my website or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content from my website without my prior written permission.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              User Conduct
            </h5>
            <p>
              You agree to use my website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict or inhibit their use and enjoyment of the website. You may not use my website to transmit or distribute any content that is unlawful, defamatory, obscene, or that infringes on any intellectual property rights.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Limitation of Liability
            </h5>
            <p>
              My website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the operation of my website or the content, information, or services provided on my website. We will not be liable for any damages of any kind arising from the use of my website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Indemnification
            </h5>
            <p>
              You agree to indemnify and hold harmless my website and its affiliates, officers, directors, employees, and agents from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of my website or your violation of these terms of use.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Termination
            </h5>
            <p>
              I reserve the right to terminate your access to our website at any time without notice if I determine, in my sole discretion, that you have violated these terms of use or any applicable laws or regulations.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Governing Law
            </h5>
            <p>
              These terms of use are governed by and construed in accordance with the laws of Texas. Any dispute arising out of or related to these terms of use will be submitted to the exclusive jurisdiction of the courts of Texas.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Privacy Policy
            </h3>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
            <ul className="lh-lg list-unstyled">
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Introduction
              </h5>
              <li>
                We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information when you use our portfolio website.
              </li>
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Information Collection
              </h5>
              <li>
                We collect personal information that you voluntarily provide to us, such as your name, email address, and other contact information. We may also collect information about your use of our website through cookies and other tracking technologies.
              </li>
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Use of Information
              </h5>
              <li>
                We use your personal information to provide you with information about our services and to communicate with you. We may also use your information to improve our website and to analyze how users interact with our website.
              </li>
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Disclosure of Information
              </h5>
              <li>
                We may disclose your personal information to third-party service providers who perform services on our behalf, such as web hosting and analytics. We may also disclose your information if required by law or if we believe that such disclosure is necessary to protect our rights or the rights of others.
              </li>
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Security
              </h5>
              <li>
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
              </li>
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Children's Privacy
              </h5>
              <li>
                Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
              </li>
              <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
                Changes to this Policy
              </h5>
              <li>
                We reserve the right to update this privacy policy from time to time. We will post the updated policy on our website and indicate the date of the latest revision. We encourage you to review the policy periodically to stay informed about our information practices. Your continued use of our website after we make changes to the policy will signify your acceptance of the updated policy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
