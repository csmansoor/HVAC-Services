import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const HeatingPage = () => (
  <ServiceTemplate
    title="Heating Services"
    icon="🌡️"
    description="Keep your home warm through Canadian winters with professional furnace installation, repair, and maintenance."
    image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    features={[
      { icon: '🌡️', title: 'Furnace Installation', description: 'High-efficiency furnace installation from top brands. Properly sized for your home.' },
      { icon: '🔧', title: 'Furnace Repair', description: '24/7 emergency furnace repairs. No heat? We\'ll get it back fast.' },
      { icon: '🔍', title: 'Furnace Tune-Up', description: 'Annual maintenance to ensure safe, efficient operation all winter long.' },
      { icon: '📊', title: 'System Replacement', description: 'Expert guidance on replacing aging furnaces with modern, efficient models.' },
    ]}
    benefits={['All furnace brands serviced', 'TSSA licensed technicians', 'Carbon monoxide testing', 'High-efficiency models', '10-year warranty options', 'Flexible financing']}
    faqItems={[
      { q: 'How often should I change my furnace filter?', a: 'Every 1-3 months depending on the filter type, pets, and home conditions.' },
      { q: 'When should I replace my furnace?', a: 'If your furnace is 15-20 years old, requires frequent repairs, or your energy bills are rising, it\'s time to consider replacement.' },
    ]}
  />
)

export default HeatingPage
