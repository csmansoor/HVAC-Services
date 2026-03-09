import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const BoilerPage = () => (
  <ServiceTemplate
    title="Boiler Services"
    icon="♨️"
    description="Expert boiler installation, maintenance, and emergency repair for residential and commercial properties."
    image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
    features={[
      { icon: '♨️', title: 'Boiler Installation', description: 'New high-efficiency boiler installation with hydronic heating system setup.' },
      { icon: '🔧', title: 'Boiler Repair', description: 'Emergency boiler repairs — leaks, no heat, strange noises, pressure issues.' },
      { icon: '🔍', title: 'Annual Servicing', description: 'Comprehensive boiler service including safety checks, cleaning, and efficiency testing.' },
      { icon: '📊', title: 'Boiler Replacement', description: 'Upgrade your old boiler to a modern, energy-efficient condensing model.' },
    ]}
    benefits={['Gas & oil boilers serviced', 'TSSA licensed', 'Emergency 24/7 service', 'Safety inspections', 'Energy-efficient upgrades', 'Competitive pricing']}
    faqItems={[
      { q: 'How long does a boiler last?', a: 'A well-maintained boiler can last 15-25 years. Annual servicing is key to maximizing lifespan.' },
      { q: 'What are signs my boiler needs repair?', a: 'Strange noises, uneven heating, rising energy bills, frequent cycling, or visible leaks are all signs to call us.' },
    ]}
  />
)

export default BoilerPage
