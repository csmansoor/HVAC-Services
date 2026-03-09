import React from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic',
    price: '14.99',
    period: '/month',
    badge: '',
    color: '#B3B3B3',
    features: [
      { text: 'Annual system inspection', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Filter replacement (1x/year)', included: true },
      { text: '10% discount on repairs', included: true },
      { text: '24/7 emergency support', included: false },
      { text: 'No overtime charges', included: false },
      { text: 'Parts & labor warranty extension', included: false },
      { text: 'Indoor air quality check', included: false },
    ],
  },
  {
    name: 'Standard',
    price: '29.99',
    period: '/month',
    badge: 'Most Popular',
    color: '#E61E32',
    features: [
      { text: 'Bi-annual system inspections', included: true },
      { text: 'Priority scheduling', included: true },
      { text: 'Filter replacement (2x/year)', included: true },
      { text: '15% discount on repairs', included: true },
      { text: '24/7 emergency support', included: true },
      { text: 'No overtime charges', included: true },
      { text: 'Parts & labor warranty extension', included: false },
      { text: 'Indoor air quality check', included: false },
    ],
  },
  {
    name: 'Premium',
    price: '49.99',
    period: '/month',
    badge: 'Best Value',
    color: '#FFD700',
    features: [
      { text: 'Quarterly system inspections', included: true },
      { text: 'Top priority scheduling', included: true },
      { text: 'Filter replacement (4x/year)', included: true },
      { text: '25% discount on repairs', included: true },
      { text: '24/7 emergency support', included: true },
      { text: 'No overtime charges', included: true },
      { text: 'Parts & labor warranty extension', included: true },
      { text: 'Indoor air quality check', included: true },
    ],
  },
]

const CarePlansPage = () => {
  return (
    <div>
      <style>{`
        .plans-hero {
          background: linear-gradient(135deg, #000000 0%, #1A1A1A 100%);
          padding: 120px 0 80px;
          text-align: center;
        }
        .plans-badge {
          display: inline-block;
          background: rgba(230, 30, 50, 0.15);
          border: 1px solid #E61E32;
          color: #E61E32;
          padding: 6px 20px;
          border-radius: 50px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .plans-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: clamp(2rem, 5vw, 3.5rem);
          color: #FFFFFF;
          margin-bottom: 15px;
          text-shadow: 2px 2px 0 #E61E32, 4px 4px 10px rgba(0,0,0,0.5);
        }
        .plan-card {
          background: #FFFFFF;
          border: 2px solid #E5E5E5;
          border-radius: 16px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .plan-card.featured {
          border-color: #E61E32;
          box-shadow: 0 0 15px rgba(230,30,50,0.3);
        }
        .plan-card.featured:hover {
          box-shadow: 0 0 20px rgba(230,30,50,0.4), 0 20px 40px rgba(0,0,0,0.15);
        }
        .plan-badge {
          position: absolute;
          top: 0;
          right: 0;
          padding: 8px 20px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 0 14px 0 12px;
        }
        .plan-name {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 24px;
          color: #000;
          margin-bottom: 10px;
        }
        .plan-price {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          font-size: 48px;
          color: #E61E32;
          margin: 10px 0 5px;
        }
        .plan-price span {
          font-size: 20px;
          color: #8A8A8A;
          font-weight: 600;
        }
        .plan-period {
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          color: #8A8A8A;
          margin-bottom: 30px;
        }
        .plan-feature {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #F0F0F0;
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
        }
        .plan-feature.included { color: #333; }
        .plan-feature.excluded { color: #CCC; text-decoration: line-through; }
        .plan-feature-icon { font-size: 16px; flex-shrink: 0; }
        .plan-btn {
          display: block;
          padding: 14px;
          border-radius: 6px;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 15px;
          margin-top: auto;
          padding-top: 30px;
          transition: all 0.3s;
        }
        .plan-btn-primary {
          background: linear-gradient(to bottom, #E61E32, #B81828);
          color: #FFFFFF;
          box-shadow: 0 4px 0 #B81828;
        }
        .plan-btn-primary:hover { transform: translateY(-2px); color: #FFF; box-shadow: 0 6px 0 #B81828; }
        .plan-btn-secondary {
          background: #F5F5F5;
          color: #000;
          border: 1px solid #E5E5E5;
        }
        .plan-btn-secondary:hover { background: #E61E32; color: #FFF; border-color: #E61E32; }
      `}</style>

      {/* Hero */}
      <section className="plans-hero">
        <div className="container">
          <span className="plans-badge">Care Plans</span>
          <h1 className="plans-title">Protect Your Investment</h1>
          <p style={{ fontFamily: 'Open Sans', fontSize: '18px', color: '#B3B3B3', maxWidth: '600px', margin: '0 auto' }}>
            Choose a care plan that fits your needs. Regular maintenance prevents costly breakdowns
            and keeps your HVAC system running at peak efficiency.
          </p>
        </div>
      </section>

      {/* Benefits Banner */}
      <section style={{ padding: '50px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', textAlign: 'center' }}>
            {[
              { icon: '🛡️', text: 'Extended Warranty' },
              { icon: '⚡', text: 'Priority Service' },
              { icon: '💰', text: 'Save on Repairs' },
              { icon: '📋', text: 'Regular Maintenance' },
              { icon: '📞', text: '24/7 Support' },
            ].map((b, i) => (
              <div key={i} style={{ flex: '0 0 auto' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>{b.icon}</span>
                <span style={{ fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', color: '#333', letterSpacing: '0.5px' }}>{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '60px 0 100px', background: '#F5F5F5' }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {plans.map((plan, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className={`plan-card ${i === 1 ? 'featured' : ''}`}>
                  {plan.badge && (
                    <span className="plan-badge" style={{
                      background: plan.color === '#E61E32' ? '#E61E32' : '#000',
                      color: plan.color === '#FFD700' ? '#FFD700' : '#FFF',
                    }}>
                      {plan.badge}
                    </span>
                  )}
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    ${plan.price}<span>{plan.period}</span>
                  </div>
                  <p className="plan-period">Billed monthly. Cancel anytime.</p>

                  <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                    {plan.features.map((f, fi) => (
                      <div key={fi} className={`plan-feature ${f.included ? 'included' : 'excluded'}`}>
                        <span className="plan-feature-icon">{f.included ? '✅' : '❌'}</span>
                        <span>{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className={`plan-btn ${i === 1 ? 'plan-btn-primary' : 'plan-btn-secondary'}`}>
                    {i === 1 ? 'Get Started →' : 'Choose Plan'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ color: '#E61E32', fontFamily: 'Montserrat', fontWeight: 600, fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>FAQ</span>
            <h2 style={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000' }}>Frequently Asked Questions</h2>
          </div>
          {[
            { q: 'Can I cancel my care plan at any time?', a: 'Yes! All care plans are month-to-month with no long-term contracts. You can cancel anytime with no penalty.' },
            { q: 'What does "priority scheduling" mean?', a: 'Care plan members get moved to the front of our service queue. In emergencies, you\'ll be serviced before non-members.' },
            { q: 'Are parts included in the care plans?', a: 'Filter replacements are included. For other parts, you receive a discount based on your plan tier (10%, 15%, or 25% off).' },
            { q: 'Can I upgrade my plan later?', a: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect on your next billing cycle.' },
          ].map((faq, i) => (
            <div key={i} style={{ marginBottom: '25px', padding: '25px', background: '#F9F9F9', borderRadius: '8px', border: '1px solid #E5E5E5' }}>
              <h4 style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '16px', color: '#000', marginBottom: '10px' }}>{faq.q}</h4>
              <p style={{ fontFamily: 'Open Sans', fontSize: '15px', color: '#555', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CarePlansPage
