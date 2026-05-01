'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserGroupIcon, 
  HeartIcon,
  PhoneIcon,
  MapPinIcon,
  StarIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Patient since 2021",
      text: "The care I received was exceptional. Dr. Anderson took the time to explain everything and made me feel comfortable throughout my treatment.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "James Peterson",
      role: "Patient since 2020",
      text: "Best medical facility I've ever visited. Professional staff, modern equipment, and genuine care for patients. Highly recommended!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Maria Rodriguez",
      role: "Patient since 2022",
      text: "From booking to treatment, everything was seamless. The online booking system is fantastic and the staff are incredibly friendly.",
      rating: 5,
      image: "👩‍⚕️"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Patients Treated", icon: UserGroupIcon },
    { number: "25+", label: "Expert Doctors", icon: AcademicCapIcon },
    { number: "98%", label: "Success Rate", icon: ChartBarIcon },
    { number: "15+", label: "Years Experience", icon: ShieldCheckIcon }
  ];

  const services = [
    {
      title: "General Medicine",
      description: "Comprehensive healthcare for all your medical needs",
      icon: "🏥",
      features: ["Health Checkups", "Disease Management", "Preventive Care"]
    },
    {
      title: "Cardiology",
      description: "Expert heart care with advanced diagnostics",
      icon: "❤️",
      features: ["ECG Testing", "Heart Surgery", "Cardiac Rehabilitation"]
    },
    {
      title: "Orthopedics",
      description: "Specialized bone and joint treatment",
      icon: "🦴",
      features: ["Sports Injuries", "Joint Replacement", "Fracture Care"]
    },
    {
      title: "Pediatrics",
      description: "Dedicated care for children's health",
      icon: "👶",
      features: ["Vaccinations", "Growth Monitoring", "Child Development"]
    },
    {
      title: "Dermatology",
      description: "Skin care solutions for all conditions",
      icon: "✨",
      features: ["Skin Treatments", "Cosmetic Procedures", "Laser Therapy"]
    },
    {
      title: "Neurology",
      description: "Brain and nervous system specialists",
      icon: "🧠",
      features: ["Headache Treatment", "Stroke Care", "Neurological Tests"]
    }
  ];

  const features = [
    {
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services",
      icon: ClockIcon,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Online Booking",
      description: "Schedule appointments instantly online",
      icon: CalendarIcon,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Expert Team",
      description: "Board-certified specialists and staff",
      icon: UserGroupIcon,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Modern Facility",
      description: "State-of-the-art medical equipment",
      icon: SparklesIcon,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Elite Clinic
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</Link>
              <Link href="/doctors" className="text-gray-700 hover:text-blue-600 transition font-medium">Doctors</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</Link>
              <Link href="/booking" 
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl hover:shadow-lg transition font-semibold">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  ⭐ Trusted by 50,000+ Patients
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Your Health is Our
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> Priority</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class healthcare with our team of expert doctors, 
                modern facilities, and patient-first approach. Available 24/7 for your care.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/booking"
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-lg flex items-center space-x-2">
                  <CalendarIcon className="w-6 h-6" />
                  <span>Book Appointment</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
                
                <Link href="/emergency"
                  className="bg-red-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-lg flex items-center space-x-2">
                  <PhoneIcon className="w-6 h-6" />
                  <span>Emergency: 911</span>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex -space-x-2">
                  {['👨‍⚕️', '👩‍⚕️', '👨‍⚕️', '👩‍⚕️'].map((emoji, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xl border-2 border-white">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Rated 4.9/5 by patients</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=800" 
                  alt="Medical professionals"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <CheckCircleIcon className="w-12 h-12 text-green-500" />
                    <div>
                      <p className="font-bold text-lg">Quick Appointments</p>
                      <p className="text-gray-600 text-sm">Get seen within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <stat.icon className="w-12 h-12 mx-auto opacity-80" />
                <p className="text-4xl font-bold">{stat.number}</p>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Elite Clinic?</h2>
            <p className="text-xl text-gray-600">Excellence in healthcare, every step of the way</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-xl text-gray-600">Comprehensive healthcare solutions for everyone</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={`/services#${service.title.toLowerCase()}`}
                  className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition">
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Patient Stories</h2>
            <p className="text-xl text-gray-600">Real experiences from real patients</p>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-6xl text-blue-600 mb-6">"</div>
              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                {testimonials[activeTestimonial].text}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                    {testimonials[activeTestimonial].image}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100">
            Book your appointment today and experience the Elite Clinic difference
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-lg">
              Book Appointment Now
            </Link>
            <Link href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all font-semibold text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Elite Clinic</span>
              </div>
              <p className="text-gray-400">
                Providing world-class healthcare with compassion and excellence since 2008.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
                <li><Link href="/doctors" className="hover:text-blue-400 transition">Doctors</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
                <li><Link href="/booking" className="hover:text-blue-400 transition">Book Appointment</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services#cardiology" className="hover:text-blue-400 transition">Cardiology</Link></li>
                <li><Link href="/services#orthopedics" className="hover:text-blue-400 transition">Orthopedics</Link></li>
                <li><Link href="/services#pediatrics" className="hover:text-blue-400 transition">Pediatrics</Link></li>
                <li><Link href="/services#dermatology" className="hover:text-blue-400 transition">Dermatology</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>123 Medical Plaza, Health City, HC 12345</span>
                </li>
                <li className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-2xl">📧</span>
                  <span>info@eliteclinic.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Elite Clinic. All rights reserved. | Built with ❤️ for better healthcare</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
