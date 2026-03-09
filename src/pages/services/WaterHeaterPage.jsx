import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const WaterHeaterPage = () => (
  <ServiceTemplate
    title="Water Heating Services"
    icon="💧"
    description="Reliable hot water solutions for your home. We install, repair, and maintain tankless and traditional water heaters."
    image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
    features={[
      { icon: '💧', title: 'Tankless Water Heaters', description: 'Endless hot water on demand. Energy-efficient tankless systems that save space and money.' },
      { icon: '🔧', title: 'Tank Water Heaters', description: 'Traditional tank water heater installation and replacement with top-rated models.' },
      { icon: '⚡', title: 'Emergency Repairs', description: 'No hot water? We provide same-day emergency repairs to restore your hot water fast.' },
      { icon: '🔍', title: 'Maintenance & Flushing', description: 'Annual maintenance and tank flushing to prevent sediment buildup and extend unit life.' },
    ]}
    benefits={['Same-day service available', 'Tankless & tank models', 'Energy-efficient options', 'Licensed gas fitters', 'Extended warranty options', 'Free estimates']}
    faqItems={[
      { q: 'Tankless vs tank water heater — which is better?', a: 'Tankless heaters are more energy-efficient and provide unlimited hot water but cost more upfront. Tank models are more affordable initially.' },
      { q: 'How often should I service my water heater?', a: 'We recommend annual maintenance including flushing and anode rod inspection to maximize lifespan.' },
    ]}
  />
)

export default WaterHeaterPage
