import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-18">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-4">Effective Date: [Insert Date]</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p>Dollar Ducks, a brand of YPCA LLC (“we,” “our,” or “us”), respects your privacy and is committed to protecting your personal data...</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <h3 className="font-semibold">2.1. Personal Data</h3>
        <ul className="list-disc pl-6">
          <li>Contact Information: Name, email, phone number, company name, etc.</li>
          <li>Identity Information: Title, date of birth, identification numbers.</li>
          <li>Financial Information: Payment details, transaction history.</li>
          <li>Communication Data: Emails, chats, phone calls.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold">2.2. Non-Personal Data</h3>
        <ul className="list-disc pl-6">
          <li>Technical Data: IP address, browser type, operating system, etc.</li>
          <li>Usage Data: Website interaction details.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. How We Collect Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Direct interactions (forms, emails, phone calls).</li>
          <li>Automated tracking technologies (cookies, analytics).</li>
          <li>Third-party sources (payment processors, marketing networks).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Providing and improving our services.</li>
          <li>Processing payments and transactions.</li>
          <li>Sending marketing materials (with consent).</li>
          <li>Legal compliance and fraud prevention.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">5. Sharing Your Information</h2>
        <ul className="list-disc pl-6">
          <li>Service providers (hosting, payments, analytics).</li>
          <li>Business partners (marketing, consultancy services).</li>
          <li>Legal obligations and business transfers.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. Cookies and Tracking Technologies</h2>
        <p>We use cookies to improve user experience. You can manage cookies through browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">7. Data Security</h2>
        <p>We implement security measures to protect your data, but absolute security cannot be guaranteed.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">8. Your Rights</h2>
        <p>You have rights regarding your personal data, including access, correction, and deletion.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">9. Contact Us</h2>
        <p>If you have any questions, contact us at: <a href="mailto:privacy@dollarducks.com" className="text-blue-500">privacy@dollarducks.com</a></p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
