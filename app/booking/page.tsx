'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon,
  CheckCircleIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'general', name: 'General Medicine', icon: '🏥', duration: '30 min' },
    { id: 'cardiology', name: 'Cardiology', icon: '❤️', duration: '45 min' },
    { id: 'orthopedics', name: 'Orthopedics', icon: '🦴', duration: '45 min' },
    { id: 'pediatrics', name: 'Pediatrics', icon: '👶', duration: '30 min' },
    { id: 'dermatology', name: 'Dermatology', icon: '✨', duration: '30 min' },
    { id: 'neurology', name: 'Neurology', icon: '🧠', duration: '60 min' }
  ];

  const doctors = {
    general: [
      { id: 'dr-smith', name: 'Dr. Sarah Smith', specialty: 'General Physician', experience: '15 years' },
      { id: 'dr-jones', name: 'Dr. Michael Jones', specialty: 'Family Medicine', experience: '12 years' }
    ],
    cardiology: [
      { id: 'dr-anderson', name: 'Dr. Robert Anderson', specialty: 'Cardiologist', experience: '20 years' },
      { id: 'dr-white', name: 'Dr. Emily White', specialty: 'Heart Specialist', experience: '18 years' }
    ],
    orthopedics: [
      { id: 'dr-brown', name: 'Dr. James Brown', specialty: 'Orthopedic Surgeon', experience: '22 years' },
      { id: 'dr-davis', name: 'Dr. Lisa Davis', specialty: 'Sports Medicine', experience: '16 years' }
    ],
    pediatrics: [
      { id: 'dr-wilson', name: 'Dr. Patricia Wilson', specialty: 'Pediatrician', experience: '14 years' },
      { id: 'dr-taylor', name: 'Dr. David Taylor', specialty: 'Child Healthcare', experience: '19 years' }
    ],
    dermatology: [
      { id: 'dr-martin', name: 'Dr. Jennifer Martin', specialty: 'Dermatologist', experience: '17 years' },
      { id: 'dr-garcia', name: 'Dr. Carlos Garcia', specialty: 'Skin Specialist', experience: '13 years' }
    ],
    neurology: [
      { id: 'dr-lopez', name: 'Dr. Maria Lopez', specialty: 'Neurologist', experience: '21 years' },
      { id: 'dr-lee', name: 'Dr. Kevin Lee', specialty: 'Brain Specialist', experience: '16 years' }
    ]
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
    '04:30 PM', '05:00 PM', '05:30 PM'
  ];

  const getNextAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Simulate sending confirmation
    setTimeout(() => {
      console.log('Booking confirmed:', bookingData);
    }, 1000);
  };

  const selectedService = services.find(s => s.id === bookingData.service);
  const availableDoctors = bookingData.service ? doctors[bookingData.service as keyof typeof doctors] : [];
  const selectedDoctor = availableDoctors.find(d => d.id === bookingData.doctor);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center space-y-6">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircleIcon className="w-16 h-16 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900">Appointment Confirmed!</h1>
            
            <p className="text-xl text-gray-600">
              Your appointment has been successfully booked. We've sent a confirmation to {bookingData.email}
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-left space-y-4">
              <h3 className="text-2xl font-bold mb-4">Appointment Details</h3>
              
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold">{selectedService?.name}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Doctor:</span>
                  <span className="font-semibold">{selectedDoctor?.name}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">{new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{bookingData.time}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{selectedService?.duration}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6 text-left">
              <h4 className="font-bold mb-2">What to Bring:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />Photo ID</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />Insurance Card</li>
                <li className="flex items-center"><CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />Medical Records (if any)</li>
              </ul>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Link href="/" className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition font-semibold">
                Back to Home
              </Link>
              <button onClick={() => window.print()} className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition font-semibold">
                Print Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <nav className="bg-white shadow-lg">
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
            
            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                  step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {s}
                </div>
                {s < 4 && (
                  <div className={`w-24 h-1 transition-all ${
                    step > s ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-sm font-medium">Select Service</span>
            <span className="text-sm font-medium">Choose Doctor</span>
            <span className="text-sm font-medium">Date & Time</span>
            <span className="text-sm font-medium">Your Details</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Select a Service</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setBookingData({...bookingData, service: service.id, doctor: ''});
                      setStep(2);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
                      bookingData.service === service.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                    <p className="text-gray-600">Duration: {service.duration}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Choose Doctor */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Choose Your Doctor</h2>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back
                </button>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="font-semibold">Selected Service: {selectedService?.name}</p>
              </div>
              
              <div className="grid gap-4">
                {availableDoctors.map((doctor) => (
                  <button
                    key={doctor.id}
                    type="button"
                    onClick={() => {
                      setBookingData({...bookingData, doctor: doctor.id});
                      setStep(3);
                    }}
                    className={`p-6 rounded-xl border-2 transition-all text-left hover:shadow-lg ${
                      bookingData.doctor === doctor.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                        👨‍⚕️
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl">{doctor.name}</h3>
                        <p className="text-gray-600">{doctor.specialty}</p>
                        <p className="text-sm text-gray-500">Experience: {doctor.experience}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Select Date & Time</h2>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back
                </button>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="font-semibold">{selectedService?.name} with {selectedDoctor?.name}</p>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-3 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Select Date
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {getNextAvailableDates().map((date) => {
                    const dateObj = new Date(date);
                    return (
                      <button
                        key={date}
                        type="button"
                        onClick={() => setBookingData({...bookingData, date, time: ''})}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          bookingData.date === date
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="font-bold">{dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                        <div className="text-sm text-gray-600">{dateObj.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {bookingData.date && (
                <div>
                  <label className="block text-sm font-semibold mb-3 flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2" />
                    Select Time Slot
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => {
                          setBookingData({...bookingData, time});
                          setStep(4);
                        }}
                        className={`p-3 rounded-xl border-2 transition-all font-semibold ${
                          bookingData.time === time
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Personal Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Your Details</h2>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back
                </button>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="font-semibold mb-2">Appointment Summary:</p>
                <p className="text-sm">{selectedService?.name} with {selectedDoctor?.name}</p>
                <p className="text-sm">{new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {bookingData.time}</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center">
                    <UserIcon className="w-5 h-5 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center">
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">
                    Reason for Visit (Optional)
                  </label>
                  <textarea
                    value={bookingData.reason}
                    onChange={(e) => setBookingData({...bookingData, reason: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
                    rows={4}
                    placeholder="Brief description of your symptoms or reason for appointment..."
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg"
              >
                Confirm Appointment
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
