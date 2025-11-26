import React, { useState, useEffect } from 'react';
import { Shield, Stethoscope, Activity, Phone, MapPin, CheckCircle, Search, Menu, X, ChevronRight, Star, HeartPulse, UserCheck, HelpCircle, MessageCircle, Mail } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [nurseName, setNurseName] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'privacy', 'terms', 'disclaimer' or null

  // Handle scroll for sticky nav styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVerification = (e) => {
    e.preventDefault();
    // CNO registry doesn't support direct GET parameter queries easily for public deep linking
    // So we guide the user to the official source.
    window.open('https://registry.cno.org', '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openModal = (type, e) => {
    e.preventDefault();
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="font-sans text-slate-800 antialiased bg-white selection:bg-blue-100 selection:text-blue-900 relative">
      
      {/* SEO Meta structure would technically go in head, but for this single file we structure the visible content for crawlers */}
      <h1 className="sr-only">Experienced ICU Nurse Toronto | Private Ventilator Care & Medical Advocacy</h1>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {/* Favicon Placeholder: In a real app, this would be linked in the HTML head. */}
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 lg:text-slate-900'}`}>
                Toronto<span className="text-blue-600">ProRN</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Verification', 'About', 'FAQ'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20"
              >
                Hire a Nurse
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 p-2">
                {/* Toggles between Menu (Hamburger) and X (Close) icons */}
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl">
            <div className="px-4 py-6 space-y-4">
              {['Services', 'Verification', 'About', 'FAQ'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-lg font-medium text-slate-600 py-2 border-b border-slate-50"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-4"
              >
                Hire a Nurse
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-90"></div>
          {/* Abstract pattern */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Serving Greater Toronto Area</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Hospital-Grade <span className="text-blue-600">ICU Care</span> at Home.
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Don't settle for basic care. Hire EXPERIENCED ICU nurses in Toronto for ventilated loved ones, high acuity needs, and complex medical answers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contact')} className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30">
                  Find a Nurse Now
                </button>
                <button onClick={() => scrollToSection('verification')} className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all">
                  Verify Credentials
                </button>
              </div>

              <div className="mt-10 flex items-center space-x-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                     <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400`}>RN</div>
                  ))}
                </div>
                <p>Trusted by 50+ Toronto families this year.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-slate-100 aspect-[4/3] group">
                {/* HERO IMAGE FIX: Using your newest uploaded file ID */}
                <img 
                  src="uploaded:image_90b346.jpg-a6fd5f89-e4d3-46d2-9744-9bebb0bf2032" 
                  alt="Specialized ICU nurse in blue scrubs adjusting ventilator mask on elderly patient in a home setting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                  <div className="bg-white/95 backdrop-blur rounded-lg p-4 max-w-xs shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="flex items-center space-x-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-bold text-slate-900">Verified Professional</span>
                    </div>
                    <p className="text-xs text-slate-600">Registered with College of Nurses of Ontario (CNO).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats / Trust Bar */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-slate-400 text-sm">CNO Registered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">24/7</div>
              <div className="text-slate-400 text-sm">High Acuity Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">ICU</div>
              <div className="text-slate-400 text-sm">Specialized Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">GTA</div>
              <div className="text-slate-400 text-sm">Toronto & Area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Specialized Care for Complex Needs</h3>
            <p className="text-lg text-slate-600">
              General care isn't enough for ventilated or high-acuity patients. You need an expert who understands the machines, the numbers, and the subtle signs of change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Ventilator & Trach Care</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Specialized support for loved ones dependent on mechanical ventilation. We manage airway clearance, cuff pressures, and emergency troubleshooting.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> Tracheostomy Hygiene</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> Suctioning & O2 Management</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> Emergency Protocol Ready</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">High Acuity ICU Nursing</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Bring the ICU skill set home. We monitor hemodynamics, manage complex medication regimens (IVs, PICC lines), and provide critical assessments.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-teal-500 mr-2" /> PICC & Central Line Care</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-teal-500 mr-2" /> Wound & Ostomy Mgmt</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-teal-500 mr-2" /> Vital Signs Interpretation</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Consultation & Advocacy</h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                Got questions? We provide **clear** answers. We act as your medical translator and advocate during hospital visits or care planning meetings.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-500 mr-2" /> Care Plan Review</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-500 mr-2" /> Family Education</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-indigo-500 mr-2" /> System Navigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Previously SEO Block - now correctly named and ID'd) */}
      <section id="about" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3 text-center">Our Commitment</h2>
          <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Why Hire a Private ICU Nurse in Toronto?</h3>
          <div className="prose prose-blue max-w-none">
            <p className="mb-4">
              Families in Toronto, Ontario often face a gap between hospital discharge and standard home care, and that’s a scary place to be. When a loved one has high acuity needs or requires ventilator support, standard Personal Support Worker help is simply not enough. You can’t afford to guess about critical care.
            </p>
            <p className="mb-4">
              Our network connects you with experienced Registered Nurses (RNs) who specialize in Critical Care, meaning they know exactly what they’re doing when the pulse ox drops. Whether you need reliable answers to complex medical questions or a skilled bedside nurse to manage a ventilated loved one, we bridge the skill gap that exists outside the hospital walls. We don't just provide care, we provide peace of mind.
            </p>
            <p>
              We prioritize transparency because your trust is essential. We encourage all clients to verify nursing credentials via the official <a href="https://registry.cno.org" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-semibold">CNO Registry</a>, making sure your nurse is licensed and authorized to practice in Ontario without any restrictions.
            </p>
          </div>
        </div>
      </section>


      {/* FAQ Section (New section added for navigation functionality) */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Quick Answers</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border border-slate-200 rounded-xl p-6 shadow-sm">
              <h4 className="flex items-center text-lg font-bold text-slate-900 mb-2">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                What is the difference between an ICU Nurse and a regular RN?
              </h4>
              <p className="text-slate-600 pl-7">
                An ICU Nurse has specialized training and experience working in Intensive Care Units, which means they are highly skilled in managing life-support equipment like ventilators, interpreting complex patient data (hemodynamics), and rapidly responding to medical emergencies. A regular RN might have general training, but ICU care is a specialized skill set crucial for high-acuity patients.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div className="border border-slate-200 rounded-xl p-6 shadow-sm">
              <h4 className="flex items-center text-lg font-bold text-slate-900 mb-2">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                Are your services covered by OHIP?
              </h4>
              <p className="text-slate-600 pl-7">
                No, our private nursing services are not directly covered by OHIP, as they fall outside the scope of publicly funded home care. However, many private insurance plans or employer health spending accounts may cover the costs, so we recommend you check your policy details. We operate on a private contract basis to ensure the highest standard of one-on-one care is delivered promptly.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div className="border border-slate-200 rounded-xl p-6 shadow-sm">
              <h4 className="flex items-center text-lg font-bold text-slate-900 mb-2">
                <HelpCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" />
                How quickly can you staff a nurse?
              </h4>
              <p className="text-slate-600 pl-7">
                For urgent, high-acuity needs like ventilator management, we aim to match you with a qualified RN within 24 to 48 hours within the Greater Toronto Area. Non-urgent consultations or staffing for less critical needs can typically be arranged within three to five business days. We understand time is often critical when dealing with complex health issues, and we prioritize speed without sacrificing quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Feature */}
      <section id="verification" className="py-24 bg-blue-600 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
              <UserCheck className="w-8 h-8 text-blue-700" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Verify Your Nurse's License</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Safety is paramount. Every nurse we refer is in good standing. Use the College of Nurses of Ontario (CNO) registry to confirm the status of any nursing professional.
            </p>

            <form onSubmit={handleVerification} className="max-w-md mx-auto">
              <div className="flex flex-col space-y-4">
                <div className="text-left">
                  {/* LABEL: "Nurse's Last Name" */}
                  <label htmlFor="nurse-name" className="block text-sm font-medium text-slate-700 mb-1 ml-1">Nurse's Last Name</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="nurse-name"
                      placeholder="e.g. Smith"
                      value={nurseName}
                      onChange={(e) => setNurseName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow"
                    />
                    <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 ml-1">
                    *This will open the official CNO Registry "Find a Nurse" page.
                  </p>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  Search CNO Registry <ChevronRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Immediate Answers</h2>
              <p className="text-lg text-slate-600 mb-8">
                Tell us about your loved one's needs. We respond within 1 hour for urgent ICU requests in the Toronto area.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Service Area</h4>
                    <p className="text-slate-600">Toronto, North York, Scarborough, Etobicoke, Mississauga.</p>
                  </div>
                </div>

                {/* Secure Messaging Prompt with WhatsApp Button */}
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Secure WhatsApp</h4>
                    {/* WHATSAPP BUTTON INTEGRATION */}
                    <a 
                      href="https://wa.me/14168786704?text=Hi%20I%20found%20you%20on%20your%20website"
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      Message me on WhatsApp
                    </a>
                    <p className="text-sm text-slate-500 mt-2">Direct chat without exposing your number.</p>
                  </div>
                </div>

              </div>

              <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="italic text-slate-700 mb-4">"Finding a nurse who actually understood my father's ventilator settings was a nightmare until we found this team. Professional, calm, and incredibly skilled."</p>
                <p className="font-bold text-slate-900">— Sarah J., Etobicoke</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              {/* Added explicit Contact Header for clarity */}
              <div className="mb-6 border-b border-slate-100 pb-4">
                <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-3">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact Us via Email</h3>
                <p className="text-slate-600 text-sm">Fill out the form below to send us a secure email instantly.</p>
              </div>

              {/* Formsubmit Integration */}
              <form action="https://formsubmit.co/prorninc@gmail.com" method="POST" className="space-y-6">
                
                {/* HoneyPot and Captcha Management */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://your-success-page.com" /> {/* Ideally redirect to a branded success page */}


                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                    <input type="text" name="Name" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" name="Phone" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input type="email" name="Email" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Patient Needs (Check all that apply)</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Ventilator / Trach', 'Palliative Care', 'Post-ICU Rehab', 'Medication Mgmt'].map((need) => (
                      <label key={need} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" name="Needs[]" value={need} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                        <span className="text-slate-600 text-sm">{need}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows="4" name="Message" required className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Tell us about the patient's condition and your specific needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Request a Consultation
                </button>
                {/* Updated compliance text */}
                <p className="text-xs text-center text-slate-400">Your information is HIPAA/PHIPA compliant and strictly confidential © 2025.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <HeartPulse className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold text-white">Toronto<span className="text-blue-500">ProRN</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-4">
                Providing expert, licensed ICU nursing care for families in Toronto, Ontario. Specialized in ventilation, tracheostomy, and high-acuity patient support at home.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} className="hover:text-blue-400 transition-colors">Our Services</a></li>
                <li><a href="#verification" onClick={(e) => { e.preventDefault(); scrollToSection('verification'); }} className="hover:text-blue-400 transition-colors">Verify a Nurse</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }} className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="https://registry.cno.org" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">CNO Registry</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" onClick={(e) => openModal('privacy', e)} className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => openModal('terms', e)} className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" onClick={(e) => openModal('disclaimer', e)} className="hover:text-blue-400 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            {/* Updated copyright text */}
            Your information is HIPAA/PHIPA compliant and strictly confidential © 2025.
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl p-8 relative animate-fade-in-up">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
            
            {activeModal === 'privacy' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
                <div className="prose text-slate-600 text-sm space-y-3">
                  <p><strong>Last Updated: 2025</strong></p>
                  <p>At TorontoProRN, we are committed to protecting the privacy and confidentiality of your personal health information. We adhere strictly to the Personal Health Information Protection Act (PHIPA) of Ontario and all relevant Canadian privacy laws.</p>
                  <h4 className="font-bold text-slate-800 mt-4">Information Collection</h4>
                  <p>We collect only the information necessary to provide safe, competent nursing care. This may include your name, contact details, and relevant medical history necessary for triage and care planning.</p>
                  <h4 className="font-bold text-slate-800 mt-4">Information Usage</h4>
                  <p>Your data is used solely for the purpose of coordinating nursing services. We do not sell, trade, or rent your personal information to third parties.</p>
                  <h4 className="font-bold text-slate-800 mt-4">Security</h4>
                  <p>We employ industry-standard security measures to protect your data from unauthorized access. Your inquiries sent via our secure forms are encrypted.</p>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service</h2>
                <div className="prose text-slate-600 text-sm space-y-3">
                  <p><strong>Agreement to Terms</strong></p>
                  <p>By accessing our website and requesting our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                  <h4 className="font-bold text-slate-800 mt-4">Service Scope</h4>
                  <p>TorontoProRN acts as a specialized nursing agency connecting clients with independent Registered Nurses. We are not a hospital or emergency service provider. In a medical emergency, call 911 immediately.</p>
                  <h4 className="font-bold text-slate-800 mt-4">Cancellations</h4>
                  <p>We require a minimum of 24 hours notice for cancellations of non-urgent shifts to avoid cancellation fees.</p>
                </div>
              </div>
            )}

            {activeModal === 'disclaimer' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
                <div className="prose text-slate-600 text-sm space-y-3">
                  <p><strong>Not Medical Advice</strong></p>
                  <p>The content on this website is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
                  <h4 className="font-bold text-slate-800 mt-4">No Doctor-Patient Relationship</h4>
                  <p>Use of this website or transmission of information via our contact forms does not establish a doctor-patient or nurse-patient relationship until a formal care agreement is signed.</p>
                  <h4 className="font-bold text-slate-800 mt-4">Limitation of Liability</h4>
                  <p>TorontoProRN assumes no liability for any damages or injury resulting from your access to or inability to access this website, or from your reliance on any information provided herein.</p>
                </div>
              </div>
            )}
            
            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;