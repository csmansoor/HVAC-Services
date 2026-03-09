import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const HeatPumpPage = () => (
  <ServiceTemplate
    title="Heat Pump Services"
    icon="🔥"
    description="Energy-efficient heating and cooling solutions for year-round comfort. We install, repair, and maintain all types of heat pump systems."
    image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    features={[
      { icon: '🔧', title: 'Heat Pump Installation', description: 'Professional installation of air-source, ground-source, and ductless mini-split heat pumps.' },
      { icon: '⚡', title: 'Heat Pump Repair', description: 'Fast, reliable repairs for all heat pump brands. 24/7 emergency service available.' },
      { icon: '🔍', title: 'Annual Maintenance', description: 'Comprehensive tune-ups to keep your heat pump running efficiently and extend its lifespan.' },
      { icon: '📊', title: 'Energy Audits', description: 'We assess your home to recommend the most energy-efficient heat pump solution for your needs.' },
    ]}
    benefits={['Licensed & certified technicians', 'All major brands serviced', 'Free in-home estimates', 'Financing options available', 'Manufacturer warranty honoured', '24/7 emergency repairs']}
    faqItems={[
      { q: 'How long does a heat pump last?', a: 'A well-maintained heat pump typically lasts 15-20 years. Regular maintenance can extend this significantly.' },
      { q: 'Can a heat pump work in Canadian winters?', a: 'Yes! Modern cold-climate heat pumps are designed to operate efficiently in temperatures as low as -30°C.' },
      { q: 'How much can I save with a heat pump?', a: 'Most homeowners save 30-50% on heating costs compared to traditional furnaces, depending on the system and home.' },
    ]}
  />
)

export default HeatPumpPage
