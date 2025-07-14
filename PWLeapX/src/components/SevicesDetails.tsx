import React, { useState, useEffect } from 'react';
import { ChevronLeft, Code, Database, Bot, BarChart3, Settings, Cloud, Search, TrendingUp, DollarSign, MessageCircle, Megaphone, FileText, Package, RotateCcw, Users } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const servicesData = {
  tech: {
    title: "Tech Services",
    services: [
      {
        id: "web-mvp-development",
        title: "Web & MVP Development",
        description: "End-to-end website development for landing pages, portfolios, or product showcases. Interactive web platforms with login systems, user dashboards, and workflows. We create responsive, modern websites that not only look great but also provide seamless user experiences across all devices.",
        icon: <Code className="w-8 h-8" />,
        image: "https://res.cloudinary.com/dlnyzjn5e/image/upload/v1752140613/project1_k6rdh8.svg",
        features: ["Responsive Design", "User Authentication", "Dashboard Development", "SEO Optimization"]
      },
      {
        id: "android-app-development",
        title: "Android App Development",
        description: "Multi-screen Android application development with structured user journeys. Implementation of login systems, data input forms, and navigational flows. Our apps are built with modern Android development practices ensuring smooth performance and intuitive user interfaces.",
        icon: <Package className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Native Android Development", "User Flow Design", "API Integration", "App Store Deployment"]
      },
      {
        id: "chatbot-integration-workflow-automation",
        title: "Chatbot Integration & Workflow Automation",
        description: "Conversational chatbot development for lead generation, onboarding, and user support. Integration of chatbots with CRMs, emails, and website forms. Streamline your business processes with intelligent automation that saves time and improves customer experience.",
        icon: <Bot className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
        features: ["AI-Powered Chatbots", "CRM Integration", "Lead Generation", "24/7 Support"]
      },
      {
        id: "data-analytics-visualization",
        title: "Data Analytics & Visualization",
        description: "Design and deployment of real-time dashboards for performance, growth, and sales metrics. Funnel, cohort, and behavioral analysis for data-driven decision-making. Transform your raw data into actionable insights with beautiful, interactive visualizations.",
        icon: <BarChart3 className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Real-time Dashboards", "Custom Analytics", "Data Visualization", "Performance Tracking"]
      },
      {
        id: "data-science-applied-ai",
        title: "Data Science & Applied AI",
        description: "Predictive modeling for churn, sales, engagement, or demand forecasting. User segmentation and clustering for targeted campaigns and personalization. Leverage the power of AI and machine learning to gain competitive advantages and optimize your business strategies.",
        icon: <Database className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Predictive Analytics", "Machine Learning", "User Segmentation", "AI Implementation"]
      },
      {
        id: "backend-automation-system-integration",
        title: "Backend Automation & System Integration",
        description: "Seamless API integration with CRMs, payment gateways, communication tools, and analytics platforms. Process automation for internal workflows. Build robust, scalable backend systems that grow with your business needs.",
        icon: <Settings className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        features: ["API Development", "System Integration", "Process Automation", "Database Management"]
      },
      {
        id: "tech-planning-infrastructure-deployment",
        title: "Tech Planning & Infrastructure Deployment",
        description: "Tech stack consultation based on product goals, scalability, and resource capacity. Hosting and deployment setup for Android, web apps, or internal systems. Get expert guidance on technology choices that align with your business objectives.",
        icon: <Cloud className="w-8 h-8" />,
        image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752173259/tech_edzxlq.svg",
        features: ["Tech Stack Planning", "Cloud Deployment", "Infrastructure Setup", "Scalability Planning"]
      }
    ]
  },
  management: {
    title: "Management Services",
    services: [
      {
        id: "market-research-customer-insight",
        title: "Market Research & Customer Insight",
        description: "In-depth competitor benchmarking with feature, pricing, and positioning analysis. Industry trend reports and opportunity white-space identification. Understand your market landscape and discover untapped opportunities for growth.",
        icon: <Search className="w-8 h-8" />,
        image: "https://res.cloudinary.com/dsdcta1sr/image/upload/v1752173255/MarketResearch_ech9nt.svg",
        features: ["Competitor Analysis", "Market Trends", "Customer Research", "Opportunity Mapping"]
      },
      {
        id: "go-to-market-growth-strategy",
        title: "Go-To-Market & Growth Strategy",
        description: "GTM roadmaps with channel prioritization, launch sequencing, and traction KPIs. Customer acquisition strategy tailored for direct, referral, or community-led growth. Develop comprehensive strategies that drive sustainable business growth.",
        icon: <TrendingUp className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        features: ["GTM Strategy", "Channel Planning", "Growth Metrics", "Launch Planning"]
      },
      {
        id: "pricing-monetization-strategy",
        title: "Pricing & Monetization Strategy",
        description: "Monetization model design (freemium, tiered, transactional, subscription, etc.). Pricing validation based on user perception, competitor benchmarking, and cost modeling. Optimize your revenue streams with data-driven pricing strategies.",
        icon: <DollarSign className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Pricing Models", "Revenue Optimization", "Market Validation", "Cost Analysis"]
      },
      {
        id: "brand-messaging-positioning",
        title: "Brand Messaging & Positioning",
        description: "Strategic brand positioning to differentiate in competitive markets. Narrative development across product, team, and customer value stories. Create compelling brand narratives that resonate with your target audience and drive engagement.",
        icon: <MessageCircle className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Brand Strategy", "Message Development", "Positioning", "Story Creation"]
      },
      {
        id: "digital-marketing-strategy-execution",
        title: "Digital Marketing Strategy & Execution",
        description: "Full-funnel marketing strategy across organic, paid, and referral channels. Campaign planning and content mapping aligned to growth goals. Execute comprehensive digital marketing campaigns that drive measurable results.",
        icon: <Megaphone className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80",
        features: ["Marketing Strategy", "Campaign Management", "Multi-channel Approach", "Performance Tracking"]
      },
      {
        id: "content-creation-distribution",
        title: "Content Creation & Distribution",
        description: "Long and short-form content strategy (social, blog, video, email, decks). Founder-led content mapping for brand visibility and leadership positioning. Create engaging content that builds brand authority and drives customer engagement.",
        icon: <FileText className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        features: ["Content Strategy", "Multi-format Content", "Distribution Planning", "Brand Building"]
      },
      {
        id: "product-strategy-feature-planning",
        title: "Product Strategy & Feature Planning",
        description: "Feature prioritization matrix based on business impact and user value. Sprint planning support and roadmap creation for iterative delivery. Develop products that truly solve user problems and drive business growth.",
        icon: <Package className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Product Roadmap", "Feature Planning", "User Research", "Agile Development"]
      },
      {
        id: "customer-lifecycle-funnel-design",
        title: "Customer Lifecycle & Funnel Design",
        description: "Complete lifecycle funnel mapping from awareness to retention. Sales pipeline structuring and CRM flow planning. Design customer journeys that maximize conversion and retention at every stage.",
        icon: <RotateCcw className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        features: ["Funnel Design", "Customer Journey", "Conversion Optimization", "Retention Strategy"]
      },
      {
        id: "team-operations-structuring",
        title: "Team & Operations Structuring",
        description: "Team structure blueprinting based on goals, capacity, and required roles. Responsibility matrices (RACI) for clarity across functions. Build efficient, scalable teams that can execute your business strategy effectively.",
        icon: <Users className="w-8 h-8" />,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        features: ["Team Structure", "Role Definition", "Operations Planning", "Process Optimization"]
      }
    ]
  }
};

const ServicesDetails: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'tech', 'management'

  const navigate = useNavigate();
  const location = useLocation();

  // Get selected service from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('service');
    if (serviceId) {
      setSelectedService(serviceId);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  type ServiceType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
};

type ServiceCardProps = {
  service: ServiceType;
  index: number;
};

  const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
    <div
      id={service.id}
      className={`py-12 md:py-16 lg:py-16 transition-all duration-300`}
    >
      <div className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 ${
        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
      }`}>
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 px-4 md:px-0">
          <div className="flex items-start gap-4">
            <div className="p-3 md:p-4 bg-[#E68C32] text-white rounded-xl md:rounded-2xl shadow-lg flex-shrink-0">
              {service.icon}
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
              {service.title}
            </h3>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-4">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                <div className="w-2 h-2 bg-[#E68C32] rounded-full flex-shrink-0"></div>
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Auto-scroll to selected service
  useEffect(() => {
    if (selectedService && selectedService !== 'all' && !isLoading) {
      const timer = setTimeout(() => {
        const element = document.getElementById(selectedService);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
          });
          // Remove highlight after animation
          setTimeout(() => setSelectedService(null), 3000);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedService, isLoading]);

  const handleFilterChange = (filter: 'all' | 'tech' | 'management') => {
  setActiveFilter(filter);
};

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFF5D8] to-white flex items-center justify-center">
        <div className="text-xl md:text-2xl font-semibold text-[#E68C32]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF5D8] to-white">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('services')}
              className="flex items-center gap-2 text-[#E68C32] hover:text-[#f68a6b] font-semibold transition-colors hover:scale-105 text-sm md:text-base"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              Back to Home
            </button>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Where we can support you</h1>
            <div className="w-20 md:w-32"></div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-[#E68C32] text-white shadow-lg transform scale-105'
                : 'bg-white text-[#E68C32] border-2 border-[#E68C32] hover:bg-[#E68C32] hover:text-white'
            }`}
          >
            All Supports
          </button>
          <button
            onClick={() => handleFilterChange('tech')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'tech'
                ? 'bg-[#E68C32] text-white shadow-lg transform scale-105'
                : 'bg-white text-[#E68C32] border-2 border-[#E68C32] hover:bg-[#E68C32] hover:text-white'
            }`}
          >
            Tech Supports
          </button>
          <button
            onClick={() => handleFilterChange('management')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeFilter === 'management'
                ? 'bg-[#E68C32] text-white shadow-lg transform scale-105'
                : 'bg-white text-[#E68C32] border-2 border-[#E68C32] hover:bg-[#E68C32] hover:text-white'
            }`}
          >
            Strategic Supports
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
        {/* Tech Services Section */}
        {(activeFilter === 'all' || activeFilter === 'tech') && (
          <div className="mb-10 md:mb-10">
            <div className="divide-y divide-gray-200/50">
              {servicesData.tech.services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Management Services Section */}
        {(activeFilter === 'all' || activeFilter === 'management') && (
          <div className="mb-10">
            <div className="divide-y divide-gray-200/50">
              {servicesData.management.services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index + (activeFilter === 'all' ? servicesData.tech.services.length : 0)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesDetails;