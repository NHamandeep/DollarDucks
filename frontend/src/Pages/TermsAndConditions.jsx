import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-18">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>Welcome to Dollar Ducks (“we,” “our,” or “us”), a brand of YPCA LLC operating exclusively within the United States. These Terms and Conditions (“Terms”) govern your access to and use of our website, services, and any other related activities (collectively, the “Services”). By accessing or using our Services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Services.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Definitions</h2>
        <p><strong>“Client,” “You,” or “Your”</strong> refers to the individual or entity that engages with Dollar Ducks for services.</p>
        <p><strong>“Agreement”</strong> refers to these Terms and any other written agreement executed between Dollar Ducks and the Client.</p>
        <p><strong>“Services”</strong> include digital marketing, website creation, business consultancy, and any other services provided by Dollar Ducks.</p>
        <p><strong>“Website”</strong> refers to the Dollar Ducks website located at <a href="https://www.dollarducks.com" className="text-blue-600 underline">https://www.dollarducks.com</a>.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. Scope of Services</h2>
        <p>Dollar Ducks provides a range of digital marketing and related services, including but not limited to:</p>
        <ul className="list-disc list-inside">
          <li>Digital marketing strategy and consultation</li>
          <li>Social media management and advertising</li>
          <li>Website design and development</li>
          <li>Search engine optimization (SEO)</li>
          <li>Pay-per-click (PPC) advertising</li>
          <li>Content creation and graphic design</li>
          <li>Email marketing</li>
          <li>Custom CRM development</li>
          <li>Business digital consultancy</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">4. Client Obligations</h2>
        <p><strong>4.1 Provision of Information:</strong> The Client agrees to provide all necessary information required for Dollar Ducks to perform the Services.</p>
        <p><strong>4.2 Cooperation:</strong> The Client agrees to cooperate with Dollar Ducks, including timely approvals and feedback.</p>
        <p><strong>4.3 Accuracy of Information:</strong> The Client warrants that all information provided is accurate and up-to-date.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">5. Payment Terms</h2>
        <p><strong>5.1 Fees and Charges:</strong> The fees for the Services will be detailed in the Service Agreement.</p>
        <p><strong>5.2 Payment Schedule:</strong> Payments are due as per the agreed terms in the Service Agreement.</p>
        <p><strong>5.3 Late Payments:</strong> Dollar Ducks reserves the right to suspend services for late payments.</p>
        <p><strong>5.4 Refund Policy:</strong> Payments are non-refundable unless explicitly stated otherwise.</p>
      </section>
      
      <footer className="mt-8 text-sm text-gray-500">
        <p>If you have any questions, please contact us at <a href="mailto:legal@dollarducks.com" className="text-blue-600 underline">legal@dollarducks.com</a>.</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;