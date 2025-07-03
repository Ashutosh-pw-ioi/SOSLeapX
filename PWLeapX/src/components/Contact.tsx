import { useEffect } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

const Contact = () => {
  useEffect(() => {
    // Initialize Calendly widget when component mounts
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/your-username/30min',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, []);

  const benefits = [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Pick a time that works best for you from our available slots'
    },
    {
      icon: Clock,
      title: '30-minute consultation',
      description: 'Focused discussion about your business goals and challenges'
    },
    {
      icon: CheckCircle,
      title: 'Actionable Insights',
      description: 'Walk away with concrete next steps and recommendations'
    }
  ];

  return (
    <section id="contact" className="bg-[#E68C32] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to take your business to the next level? Schedule a consultation with our experts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-[#E68C32] p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Email us directly:</p>
                  <a href="mailto:hello@pwleapx.com" className="text-[#E68C32] font-semibold hover:text-[#F4A460] transition-colors">
                    hello@pwleapx.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-600">Call us:</p>
                  <a href="tel:+1-555-123-4567" className="text-[#E68C32] font-semibold hover:text-[#F4A460] transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calendly Widget */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-[#E68C32] to-[#F4A460]">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Consultation</h3>
              <p className="text-white/90">Choose a time that works for you</p>
            </div>
            
            {/* Calendly Inline Widget Placeholder */}
            <div 
              id="calendly-inline-widget" 
              className="min-h-[600px] p-8 flex items-center justify-center bg-gray-50"
            >
              <div className="text-center">
                <Calendar className="h-16 w-16 text-[#E68C32] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Calendar Integration</h4>
                {/* <p className="text-gray-600 mb-4">
                  To enable the calendar booking system, please configure your Calendly integration.
                </p> */}
                <button className="bg-[#E68C32] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#F4A460] transition-colors">
                  Book a Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;