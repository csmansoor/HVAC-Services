import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const DuctworkPage = () => (
  <ServiceTemplate
    title="Ductwork Services"
    icon="🔧"
    description="Duct installation, repair, sealing, and cleaning for optimal airflow and maximum HVAC efficiency."
    image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
    features={[
      { icon: '🔧', title: 'Duct Installation', description: 'New ductwork design and installation for additions, renovations, and new construction.' },
      { icon: '🔍', title: 'Duct Sealing', description: 'Seal leaky ducts to eliminate energy waste. Most homes lose 20-30% of heated/cooled air through duct leaks.' },
      { icon: '🧹', title: 'Duct Cleaning', description: 'Professional duct cleaning to remove dust, allergens, and debris for better air quality.' },
      { icon: '📊', title: 'Duct Inspection', description: 'Video inspection and airflow testing to identify problems and optimize your system.' },
    ]}
    benefits={['Improved airflow', 'Lower energy bills', 'Better indoor air quality', 'Reduced dust & allergens', 'Even room temperatures', 'Professional installation']}
    faqItems={[
      { q: 'How often should ducts be cleaned?', a: 'We recommend duct cleaning every 3-5 years, or sooner if you have pets, allergies, or have recently renovated.' },
      { q: 'How do I know if my ducts are leaking?', a: 'Signs include uneven room temperatures, high energy bills, excessive dust, and rooms that are hard to heat or cool.' },
    ]}
  />
)

export default DuctworkPage
