import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const FireplacePage = () => (
  <ServiceTemplate
    title="Fireplace Services"
    icon="🔥"
    description="Gas fireplace installation, conversion, and servicing. Add warmth, ambiance, and value to your home."
    image="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80"
    features={[
      { icon: '🔥', title: 'Gas Fireplace Installation', description: 'Custom gas fireplace installation including venting, gas lines, and mantels.' },
      { icon: '🔧', title: 'Fireplace Repair', description: 'Pilot light issues, ignition problems, thermocouple replacement, and more.' },
      { icon: '🔄', title: 'Wood to Gas Conversion', description: 'Convert your wood-burning fireplace to a clean, convenient gas model.' },
      { icon: '🔍', title: 'Annual Inspection', description: 'Safety inspections and cleaning to ensure safe, efficient operation.' },
    ]}
    benefits={['All fireplace brands', 'Gas fitting licensed', 'Custom installations', 'Safety certified', 'Design consultation', 'Conversion specialists']}
    faqItems={[
      { q: 'Is a gas fireplace expensive to operate?', a: 'Gas fireplaces are very economical — typically costing $0.20-0.40 per hour to operate, much less than wood alternatives.' },
      { q: 'Can I convert my wood fireplace to gas?', a: 'Yes! We specialize in wood-to-gas conversions. It\'s a clean, convenient upgrade that most homeowners love.' },
    ]}
  />
)

export default FireplacePage
