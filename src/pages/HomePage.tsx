import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import { Award, CheckCircle, ThumbsUp } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Yorkshire's Premium Landscapers"
      title="Creating Exceptional Outdoor Living Spaces in Huddersfield & Yorkshire"
      description="We blend professional landscaping expertise with local heart. From bespoke patio design to complete garden renovations, we turn your outdoor vision into a premium reality."
      primaryButton={{
        text: "Request A Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "View Our Portfolio",
        href: "#portfolio",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-hugging-against-door-with-blurred-tropical-leaves_1153-3826.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/street-texture-retro-tuscany-city_1203-5049.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-patio-furniture-house-deck-with-vegetation_23-2150698322.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cityscape-office-buildings_1127-2949.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-futuristic-looking-city_23-2150946699.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-length-portrait-stylish-smiling-woman-walking-exotic-street-near-hotel-sunny-hot-day-spending-her-vacation-los-angeles_273443-2714.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Family-Run Excellence in the Heart of Yorkshire"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBentoGrid
      tag="Expert Landscaping Services"
      title="Comprehensive Garden Solutions"
      description="Tailored landscaping services designed to elevate your home's exterior appeal and functionality."
      features={[
        {
          title: "Bespoke Paving & Stone",
          description: "Expertly crafted patios and paths in natural stone.",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-stone-texture-pattern_58702-14140.jpg",
        },
        {
          title: "Modern Fencing & Decking",
          description: "High-quality privacy solutions and stunning decking areas.",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-wooden-fence-lush-green-hedge-garden-landscape_626616-510.jpg",
        },
        {
          title: "Professional Planting",
          description: "Expert landscape design with curated plants.",
          imageSrc: "http://img.b2bpic.net/free-photo/gardening_23-2148013398.jpg",
        },
        {
          title: "Water Features",
          description: "Add tranquility with custom-built ponds and water features.",
          imageSrc: "http://img.b2bpic.net/free-photo/chairs-white-garden-resort-chair_1203-4439.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesImageBento
      tag="Our Work"
      title="Showcasing Excellence Across Yorkshire"
      description="Explore our recent landscaping transformations throughout the region."
      items={[
        {
          title: "Huddersfield Patio",
          description: "Natural stone patio design.",
          imageSrc: "http://img.b2bpic.net/free-photo/city-view_1417-1895.jpg",
        },
        {
          title: "Holmfirth Garden",
          description: "Full garden renovation.",
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-seats-by-pool-with-parasols_53876-146253.jpg",
        },
        {
          title: "Premium Paving",
          description: "Bespoke driveway solutions.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-gardening-tools-wooden-floor_23-2148200429.jpg",
        },
        {
          title: "Modern Terrace",
          description: "Contemporary living space.",
          imageSrc: "http://img.b2bpic.net/free-photo/covered-lifestyle-garden-with-indoor-outdoor-living_1127-3426.jpg",
        },
        {
          title: "Planting Design",
          description: "Curated residential garden.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-houses-pamplona-spain-with-scenery-sunset-background_181624-24642.jpg",
        },
        {
          title: "Garden Path",
          description: "Detailed stonework finish.",
          imageSrc: "http://img.b2bpic.net/free-photo/analog-city-landscape-with-buildings-daylight_23-2149661429.jpg",
        },
        {
          title: "Outdoor Kitchen",
          description: "Bespoke patio feature.",
          imageSrc: "http://img.b2bpic.net/free-photo/fumigation_23-2148013411.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Proven Reliability"
      title="Why Clients Trust Us"
      description="Over a decade of transforming local outdoor spaces with passion."
      metrics={[
        {
          icon: Award,
          title: "Years Experience",
          value: "15+",
        },
        {
          icon: CheckCircle,
          title: "Projects Completed",
          value: "500+",
        },
        {
          icon: ThumbsUp,
          title: "Happy Clients",
          value: "480+",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Kind Words"
      title="Hear From Our Happy Clients"
      description="See why homeowners across Huddersfield choose us for their landscaping needs."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Homeowner",
          company: "Huddersfield",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-looking-camera_23-2148317302.jpg",
        },
        {
          name: "James & Emma",
          role: "Clients",
          company: "Holmfirth",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-decorating-home_23-2150633269.jpg",
        },
        {
          name: "David Thompson",
          role: "Property Owner",
          company: "Yorkshire",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/blue-eyed-bearded-male-using-laptop-cafe-street_613910-12216.jpg",
        },
        {
          name: "Linda Wright",
          role: "Client",
          company: "Huddersfield",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-taking-care-their-plants-greenhouse_23-2149037274.jpg",
        },
        {
          name: "Mark Roberts",
          role: "Homeowner",
          company: "Holmfirth",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoors-street-portrait-beautiful-young-brunette-woman_1153-5232.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Common Queries"
      title="Everything You Need to Know"
      description="Answers to frequently asked questions about our landscaping process."
      items={[
        {
          question: "What areas do you serve?",
          answer: "We primarily serve Huddersfield, Holmfirth, and the wider Yorkshire region.",
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free site visits and no-obligation quotes for all potential projects.",
        },
        {
          question: "How long does a landscaping project take?",
          answer: "Timelines vary based on complexity, but we always provide a clear schedule during consultation.",
        },
        {
          question: "Are you fully insured?",
          answer: "Yes, we are fully insured for all landscaping work we undertake, giving you total peace of mind.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Let’s transform your garden today. Get in touch for a free, professional consultation."
      primaryButton={{
        text: "Book Free Quote",
        href: "mailto:hello@creativelandscapes.co.uk",
      }}
      secondaryButton={{
        text: "Call 01484 000000",
        href: "tel:01484000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
