import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 border-b border-slate-800 pb-6">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy – BoltBlazers</h1>
          <p className="text-slate-400">Last Updated: November 19, 2025</p>
        </div>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <p>
              Welcome to BoltBlazers (“Company”, “we”, “our”, or “us”).
              We are committed to protecting your personal information and your right to privacy.
              This Privacy Policy explains what information we collect, how we use it, and what rights you have.
            </p>
            <p className="mt-4 font-medium text-white">
              By accessing or using boltblazers.com, you agree to this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-2">We collect information in the following ways:</p>
            
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-400 mb-2">1.1 Personal Information You Provide</h3>
                <p className="mb-2">When you contact us, request a service, or fill out any form, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company details</li>
                  <li>Project requirements or messages</li>
                  <li>Billing or payment information (when applicable)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-blue-400 mb-2">1.2 Automatically Collected Information</h3>
                <p className="mb-2">When you browse our site, we may collect:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
                  <li>IP address</li>
                  <li>Device type</li>
                  <li>Browser type</li>
                  <li>Pages visited</li>
                  <li>Time spent on website</li>
                  <li>Cookies and tracking data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-blue-400 mb-2">1.3 Third-Party Services</h3>
                <p>If you interact with our website through ads or integrations (Google, Meta, analytics tools, etc.), they may collect additional data based on their policies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
              <li>Provide and manage our services</li>
              <li>Communicate with you about inquiries or projects</li>
              <li>Personalize your user experience</li>
              <li>Improve website performance and service quality</li>
              <li>Send marketing or promotional content (only if you opt in)</li>
              <li>Process payments and maintain records</li>
              <li>Ensure security, fraud prevention, and compliance</li>
            </ul>
            <p className="mt-4 font-semibold text-green-400">We never sell your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookies & Tracking Technologies</h2>
            <p className="mb-3">We may use cookies, tracking pixels, and analytics tools to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
              <li>Enhance website performance</li>
              <li>Improve user experience</li>
              <li>Analyze site traffic</li>
              <li>Deliver relevant ads</li>
            </ul>
            <p className="mt-2">You may disable cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Sharing</h2>
            <p className="mb-3">We only share your information with:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
              <li>Trusted service providers (hosting, payment gateways, analytics tools)</li>
              <li>Contracted partners working on your project</li>
              <li>Legal authorities, if required by law</li>
            </ul>
            <p className="mt-2">All partners follow strict data-protection standards.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
            <p>We implement strong security measures to protect your information. While no digital platform is 100% secure, we work continuously to safeguard your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="mb-3">Depending on your region, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
              <li>Access your personal data</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-4 bg-slate-900 p-4 rounded border border-slate-800 inline-block">To request any of the above, email us at: <span className="text-blue-400">hello@boltblazers.com</span></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Retention</h2>
            <p className="mb-3">We retain personal information only for:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 ml-4">
              <li>As long as necessary for the services you requested</li>
              <li>Legal obligations</li>
              <li>Accounting and business requirements</li>
            </ul>
            <p className="mt-2">Information can be deleted upon request.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Children’s Privacy</h2>
            <p>Our website and services are not intended for children under 13. We do not knowingly collect data from minors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. International Users</h2>
            <p>If you access BoltBlazers from outside India, your data may be transferred and processed in India or other regions where our partners operate.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
            <p>We may update this policy periodically. Revisions will be posted on this page with the updated date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Us</h2>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <p className="mb-4">For any questions about this Privacy Policy, contact:</p>
              <p className="font-bold text-xl text-white">BoltBlazers</p>
              <p className="mt-2">📧 Email: <a href="mailto:hello@boltblazers.com" className="text-blue-400 hover:underline">hello@boltblazers.com</a></p>
              <p>🌐 Website: <a href="#" className="text-blue-400 hover:underline">boltblazers.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;