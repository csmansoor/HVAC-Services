import React from 'react'
import ServiceTemplate from '../../components/common/ServiceTemplate'

const AirQualityPage = () => (
  <ServiceTemplate
    title="Air Quality & Ventilation"
    icon="🌬️"
    description="Breathe easier with professional indoor air quality solutions. HRV/ERV systems, air purifiers, and ventilation."
    image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    features={[
      { icon: '🌬️', title: 'HRV/ERV Systems', description: 'Heat Recovery Ventilators and Energy Recovery Ventilators for fresh, filtered air.' },
      { icon: '🔬', title: 'Air Purification', description: 'Whole-home air purifiers and UV germicidal systems to eliminate allergens and pathogens.' },
      { icon: '💨', title: 'Ventilation Solutions', description: 'Bathroom fans, range hoods, and whole-house ventilation for proper air circulation.' },
      { icon: '📊', title: 'Air Quality Testing', description: 'Comprehensive indoor air quality assessments to identify problems and recommend solutions.' },
    ]}
    benefits={['Allergy & asthma relief', 'Humidity control', 'Odour elimination', 'Virus & bacteria reduction', 'Energy-efficient systems', 'Quiet operation']}
    faqItems={[
      { q: 'Do I need an HRV or ERV?', a: 'HRVs are ideal for cold climates (like Canada) where humidity is low in winter. ERVs are better for humid climates.' },
      { q: 'How does an air purifier help?', a: 'Whole-home air purifiers remove 99.9% of airborne particles including dust, pollen, bacteria, and viruses.' },
    ]}
  />
)

export default AirQualityPage
