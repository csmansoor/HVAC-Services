import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const GasLinePage = () => (
  <ServiceTemplate
    title="Gas Line Services"
    icon="⚡"
    description="Licensed gas line installation, repair, and safety inspections. BBQ lines, dryer hookups, and more."
    image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
    features={[
      { icon: '⚡', title: 'Gas Line Installation', description: 'New gas line installation for furnaces, water heaters, stoves, dryers, and BBQs.' },
      { icon: '🔧', title: 'Gas Line Repair', description: 'Emergency gas leak detection and repair. Safety is our top priority.' },
      { icon: '🔍', title: 'Gas Safety Inspections', description: 'Comprehensive gas system inspections for home sales and insurance requirements.' },
      { icon: '🍖', title: 'BBQ Gas Lines', description: 'Never run out of propane again! Permanent natural gas BBQ line installation.' },
    ]}
    benefits={['TSSA licensed gas fitters', 'Gas leak detection', 'BBQ line installation', 'Dryer hookups', 'Safety certified', '24/7 emergency service']}
    faqItems={[
      { q: 'How much does a BBQ gas line cost?', a: 'BBQ gas line installation typically ranges from $300-$800 depending on distance from the gas meter and complexity.' },
      { q: 'How do I know if I have a gas leak?', a: 'Signs include a rotten egg smell, hissing sound near gas lines, or dead vegetation near gas pipes. If you suspect a leak, leave immediately and call us.' },
    ]}
  />
)

export default GasLinePage
