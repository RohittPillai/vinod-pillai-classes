"use client";
import React, { useState, useEffect } from 'react';
import { Phone, X, CheckCircle, MapPin, Clock, Award, BookOpen, Users, Star, Navigation, Library } from 'lucide-react';

export default function LandingPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [expandedFaculty, setExpandedFaculty] = useState('sunanda');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const students = [
    { id: 1, name: "Kashvi Gandhi", percentage: "95.33%" },
    { id: 2, name: "Tanay Sanghvi", percentage: "95.33%" },
    { id: 3, name: "Akshaj Patel", percentage: "95%" },
    { id: 4, name: "Mimiksha Parmar", percentage: "95%" },
  ];

  const batches = [
    { grade: 'Class 10', focus: 'Full Board Exam Focus • Intensive Paper Solving • Time Management' },
    { grade: 'Class 9', focus: 'Foundation Excellence • Pre-Board Prep • Advance Science & Math' },
    { grade: 'Class 8', focus: 'Fundamental Strengthening • Logical Reasoning • Board Patterns' }
  ];

  const subjects = ["Maths", "Science", "English", "Social Studies", "Sanskrit", "Hindi", "Gujarati"];

  return (
    <div className="bg-[#FCFCFC] text-slate-900 font-sans selection:bg-blue-100 transition-colors duration-500">
      
      {/* --- POPUP MODAL --- */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setShowPopup(false)}></div>
          <div className="relative bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border-t-8 border-blue-600 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={24} />
            </button>
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Admissions Open</h3>
            <p className="text-slate-600 mb-6 font-medium text-sm">Class 8, 9 & 10 State Board Specialist</p>
            <a href="tel:+919376294258" className="block w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
              Call: +91 93762 94258 
            </a>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-white py-12">
        <div className="mb-8 px-4 py-1 border border-blue-200 rounded-full text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          Est. 2010 • State Board Specialists
        </div>
        
        {/* LOGO ON THE LEFT + RESPONSIVE TITLE */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 max-w-7xl mx-auto px-4">
          <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 transition-transform duration-300 hover:scale-105">
             <img src="/logo.jpg" alt="Vinod Pillai Classes Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-baseline gap-x-4">
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-slate-900 leading-none">Vinod Pillai</h1>
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-blue-600 leading-none">Classes</h1>
          </div>
        </div>

        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-light italic">
          Empowering students through <span className="text-slate-900 font-semibold underline decoration-blue-200 underline-offset-4">concept clarity</span> and <span className="text-slate-900 font-semibold">unwavering discipline</span>.
        </p>

        <a href="tel:+919376294258" className="bg-slate-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-xl flex items-center gap-3 active:scale-95 group">
            <Phone size={20} className="group-hover:animate-bounce" /> Enquire Now
        </a>
      </section>

      {/* --- RESULTS SECTION --- */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-16 italic text-slate-800 underline decoration-blue-200 underline-offset-8">Our Hall of Fame</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-left">
            {students.map((student) => (
              <div key={student.id} className="group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-[3/4] bg-slate-200 relative">
                   <img src={`/${student.id}.jpg`} alt={student.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                   <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent text-white">
                    <p className="text-2xl font-bold italic text-white leading-tight">{student.percentage}</p>
                    <p className="text-xs font-bold uppercase tracking-widest mt-1">{student.name}</p>
                    <p className="text-[10px] opacity-70 uppercase tracking-tighter">Class 10 Board</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FACULTY SECTION --- */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-900">Our Founders</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg italic font-light mb-16">Continuing a legacy of academic excellence.</p>

          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[500px]">
            {/* Sunanda Pillai */}
            <div 
              onClick={() => setExpandedFaculty('sunanda')}
              className={`relative cursor-pointer transition-all duration-700 ease-in-out rounded-[2.5rem] overflow-hidden group shadow-2xl border border-slate-100
                ${expandedFaculty === 'sunanda' ? 'lg:flex-[3] bg-slate-900 text-white p-8 md:p-12' : 'lg:flex-[1] bg-slate-100 grayscale'}`}
            >
              <div className="flex flex-col md:flex-row h-full items-center gap-10">
                <div className={`flex-shrink-0 transition-all duration-700 ${expandedFaculty === 'sunanda' ? 'w-48 h-64 md:w-64 md:h-80' : 'w-full h-full p-4'}`}>
                   <img src="/sunanda.jpg" alt="Sunanda Pillai" className="w-full h-full object-cover rounded-3xl" />
                </div>
                {expandedFaculty === 'sunanda' && (
                  <div className="animate-in fade-in slide-in-from-right-8 duration-700 text-left">
                    <h3 className="text-4xl font-serif font-bold mb-2">Sunanda Pillai</h3>
                    <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 underline decoration-blue-800 underline-offset-8">Lead Faculty</p>
                    <p className="text-slate-300 text-xl leading-relaxed mb-8 italic font-light font-serif">
                      "With over 25 years of teaching experience, we provide personalized mentorship to ensure every student reaches their full potential. Our mission is to continue a legacy of academic excellence through unwavering discipline and dedicated focus."
                    </p>
                  </div>
                )}
              </div>
              {expandedFaculty !== 'sunanda' && (
                <div className="absolute bottom-6 left-0 right-0 text-center font-black uppercase tracking-widest text-xs text-slate-900">Sunanda Pillai</div>
              )}
            </div>

            {/* Vinod Pillai */}
            <div 
              onClick={() => setExpandedFaculty('vinod')}
              className={`relative cursor-pointer transition-all duration-700 ease-in-out rounded-[2.5rem] overflow-hidden group shadow-2xl border border-slate-100
                ${expandedFaculty === 'vinod' ? 'lg:flex-[3] bg-slate-900 text-white p-8 md:p-12' : 'lg:flex-[1] bg-slate-100 grayscale'}`}
            >
              <div className="flex flex-col md:flex-row h-full items-center gap-10">
                <div className={`flex-shrink-0 transition-all duration-700 ${expandedFaculty === 'vinod' ? 'w-48 h-64 md:w-64 md:h-80' : 'w-full h-full p-4'}`}>
                   <img src="/vinod.jpg" alt="Vinod Pillai" className="w-full h-full object-cover rounded-3xl" />
                </div>
                {expandedFaculty === 'vinod' && (
                  <div className="animate-in fade-in slide-in-from-left-8 duration-700 text-left">
                    <h3 className="text-4xl font-serif font-bold mb-2">Vinod Pillai</h3>
                    <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 underline decoration-blue-800 underline-offset-8">Visionary Founder</p>
                    <p className="text-slate-300 text-xl leading-relaxed mb-8 italic font-light font-serif">
                      "Our foundation was built on Vinod Sir's 20 years of passion for teaching. His legacy of discipline and concept clarity remains the heartbeat of these classes."
                    </p>
                  </div>
                )}
              </div>
              {expandedFaculty !== 'vinod' && (
                <div className="absolute bottom-6 left-0 right-0 text-center font-black uppercase tracking-widest text-xs text-slate-900">Vinod Pillai</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- SUBJECTS SECTION --- */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Library className="text-blue-600" size={28} />
            <h2 className="text-3xl font-serif font-bold text-slate-900">Comprehensive Subject Coverage</h2>
          </div>
          <p className="text-slate-500 mb-10 italic">We provide expert guidance across all core and language subjects.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {subjects.map((subject, index) => (
              <span key={index} className="px-6 py-3 bg-blue-50 text-blue-700 rounded-full font-bold text-sm border border-blue-100 shadow-sm">
                {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
              { icon: <Users size={32}/>, title: "Small Batches", desc: "Personalized attention for every child." },
              { icon: <CheckCircle size={32}/>, title: "Regular Tests", desc: "Weekly progress monitoring." },
              { icon: <BookOpen size={32}/>, title: "Board Syllabus", desc: "Strict alignment with school exams." },
              { icon: <Clock size={32}/>, title: "Fixed Timings", desc: "Instilling discipline and routine." }
            ].map((f, i) => (
              <div key={i} className="group">
                <div className="text-blue-400 mb-4 inline-block md:block transform group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      {/* --- BATCHES SECTION --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center">Academic Batches</h2>
        <div className="grid gap-6">
          {batches.map((item) => (
            <div key={item.grade} className="flex flex-col md:flex-row justify-between md:items-center p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-400 transition-all shadow-sm group text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{item.grade}</h3>
                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mt-1">{item.focus}</p>
              </div>
              <span className="bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-blue-600 group-hover:text-white transition-colors">Enrolling Now</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-24 px-6 bg-blue-50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <Award size={48} className="mx-auto text-blue-600 mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-slate-900 tracking-tight leading-tight uppercase">Academic Excellence</h2>
          
          <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-blue-100 mt-12 overflow-hidden relative">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Admissions & Inquiries</p>
            <a href="tel:+919376294258" className="text-3xl md:text-6xl font-serif font-bold text-slate-900 hover:text-blue-600 transition-all block mb-10">
               +91 93762 94258
            </a>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left border-t border-slate-100 mt-12 pt-10 px-4">
               <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <MapPin className="text-blue-600 shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Location</h4>
                      <p className="text-slate-700 text-sm font-medium">L-23 Suryakiran Apartment, Ghod Dod Rd, beside St. Xavier School, Miranagar Society, Surat, Gujarat 395001</p>
                    </div>
                  </div>
                  <a href="https://maps.google.com/?q=Vinod+Pillai+Classes+Surat" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-xl font-bold text-xs hover:bg-blue-700 transition-all shadow-lg active:scale-95 group">
                    <Navigation size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                    Click to Map / Get Directions
                  </a>
               </div>
               
               <div className="flex gap-4">
                  <Clock className="text-blue-600 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Timing</h4>
                    <p className="text-slate-700 text-sm font-medium italic">Mon — Sat: 02:00 PM to 08:00 PM <br/> Sundays Closed</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-[10px] uppercase tracking-[0.5em] font-medium border-t border-slate-100">
        © 2026 Vinod Pillai Classes — Built for Success
      </footer>

    </div>
  );
}