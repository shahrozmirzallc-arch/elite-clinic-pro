import React from 'react';
import Link from 'next/link';

const services = [
  {
    category: "Primary Care",
    icon: "🏥",
    items: [
      { name: "General Medicine", description: "Comprehensive primary care for all ages" },
      { name: "Family Medicine", description: "Personalized care for the whole family" },
      { name: "Preventive Care", description: "Health screenings and wellness checkups" },
      { name: "Chronic Disease Management", description: "Ongoing care for chronic conditions" }
    ]
  },
  {
    category: "Specialized Care",
    icon: "⚕️",
    items: [
      { name: "Cardiology", description: "Heart and cardiovascular system care" },
      { name: "Dermatology", description: "Skin, hair, and nail treatments" },
      { name: "Orthopedics", description: "Bone, joint, and muscle care" },
      { name: "Neurology", description: "Brain and nervous system disorders" }
    ]
  },
  {
    category: "Women's Health",
    icon: "👩‍⚕️",
    items: [
      { name: "Gynecology", description: "Comprehensive women's health services" },
      { name: "Obstetrics", description: "Prenatal and maternity care" },
      { name: "Mammography", description: "Breast cancer screening" },
      { name: "Fertility Counseling", description: "Family planning support" }
    ]
  },
  {
    category: "Pediatrics",
    icon: "👶",
    items: [
      { name: "Well-Child Visits", description: "Regular checkups and vaccinations" },
      { name: "Pediatric Care", description: "Specialized care for children" },
      { name: "Adolescent Medicine", description: "Teen health and development" },
      { name: "Growth Monitoring", description: "Development tracking" }
    ]
  },
  {
    category: "Diagnostic Services",
    icon: "🔬",
    items: [
      { name: "Laboratory Testing", description: "Comprehensive lab services" },
      { name: "Radiology", description: "X-rays, CT scans, MRI" },
      { name: "Ultrasound", description: "Advanced imaging services" },
      { name: "EKG/ECG", description: "Heart monitoring and testing" }
    ]
  },
  {
    category: "Surgical Services",
    icon: "🏥",
    items: [
      { name: "General Surgery", description: "Minor and major procedures" },
      { name: "Outpatient Surgery", description: "Same-day surgical care" },
      { name: "Endoscopy", description: "Minimally invasive procedures" },
      { name: "Pain Management", description: "Chronic pain treatment" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Elite Clinic Pro
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
              <Link href="/doctors" className="text-gray-600 hover:text-blue-600">Doctors</Link>
              <Link href="/booking" className="text-gray-600 hover:text-blue-600">Book Now</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Medical Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive healthcare services delivered by expert medical professionals using state-of-the-art technology
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {services.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((service, sidx) => (
                    <div key={sidx} className="border-l-4 border-blue-500 pl-4 hover:border-purple-500 transition-colors">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book an appointment with our experienced medical team today</p>
          <Link 
            href="/booking"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule Appointment
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Elite Clinic Pro</h3>
              <p className="text-gray-400">Excellence in Healthcare</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/doctors" className="hover:text-white">Our Doctors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">📞 (555) 123-4567</p>
              <p className="text-gray-400">📧 info@eliteclinicpro.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Hours</h4>
              <p className="text-gray-400">Mon-Fri: 8AM-8PM</p>
              <p className="text-gray-400">Sat-Sun: 9AM-5PM</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
