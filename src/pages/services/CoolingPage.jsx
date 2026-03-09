import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const CoolingPage = () => (
  <ServiceTemplate
    title="Cooling Services"
    icon="❄️"
    description="Stay cool all summer with professional air conditioning installation, repair, and maintenance services."
    image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
    features={[
      { icon: '❄️', title: 'AC Installation', description: 'Central air, ductless mini-splits, and window units — installed professionally.' },
      { icon: '🔧', title: 'AC Repair', description: 'Fast AC repairs when you need them most. Same-day emergency service available.' },
      { icon: '🔍', title: 'AC Tune-Up', description: 'Pre-season maintenance to ensure peak performance and prevent mid-summer breakdowns.' },
      { icon: '📊', title: 'System Sizing', description: 'Proper load calculations ensure your AC is the right size for maximum efficiency.' },
    ]}
    benefits={['All AC brands serviced', 'Free cooling assessments', 'ENERGY STAR certified options', 'Extended warranties', 'Same-day emergency service', 'Clean & respectful technicians']}
    faqItems={[
      { q: 'How often should my AC be serviced?', a: 'We recommend annual pre-season maintenance in spring to ensure reliable performance all summer.' },
      { q: 'What size AC do I need?', a: 'AC sizing depends on your home\'s square footage, insulation, windows, and other factors. We provide free load calculations.' },
    ]}
  />
)

export default CoolingPage
