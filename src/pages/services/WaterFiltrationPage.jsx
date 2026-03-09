import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const WaterFiltrationPage = () => (
  <ServiceTemplate
    title="Water Filtration"
    icon="🚰"
    description="Whole-home water filtration and purification systems for clean, safe, great-tasting water from every tap."
    image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    features={[
      { icon: '🚰', title: 'Whole-Home Filtration', description: 'Multi-stage filtration systems that clean all the water entering your home.' },
      { icon: '💧', title: 'Reverse Osmosis', description: 'Under-sink RO systems for pure drinking water. Removes 99% of contaminants.' },
      { icon: '🔧', title: 'Water Softeners', description: 'Hard water solutions that protect your pipes, appliances, and skin.' },
      { icon: '🔬', title: 'Water Testing', description: 'Professional water quality testing to identify contaminants and recommend solutions.' },
    ]}
    benefits={['Better tasting water', 'Protects appliances', 'Reduces contaminants', 'Low maintenance', 'Professional installation', 'Filter replacement service']}
    faqItems={[
      { q: 'Do I need a water filtration system?', a: 'If you notice odd tastes, smells, or staining from your water, a filtration system can dramatically improve quality.' },
      { q: 'How often do filters need replacing?', a: 'Most whole-home filters need replacement every 6-12 months. We offer filter replacement service as part of our care plans.' },
    ]}
  />
)

export default WaterFiltrationPage
