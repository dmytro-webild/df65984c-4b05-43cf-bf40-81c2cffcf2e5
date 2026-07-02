// Created by add_section_from_catalog (TestimonialRatingCards).

import React from 'react';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';

export default function TestimonialsSection(): React.JSX.Element {
  return (
    <div data-webild-section="testimonials" id="testimonials">
      <TestimonialRatingCards
        textAnimation="slide-up"
        testimonials={[
          {
            "name": "Simon",
            "role": "Client, Huddersfield",
            "quote": "I just wanted to thank Steven and his team for the work that has been carried out for us. We are totally delighted! From start to finish we were thoroughly impressed on how professional and punctual the team was. I will certainly be recommending your services to others."
          },
          {
            "role": "Client, Huddersfield",
            "quote": "We were thrilled with Steve’s work! We had some raised beds built and an Indian sandstone patio laid, the work was done to a very high standard and the team were polite and hardworking.",
            "name": "Kit White"
          }
        ]}
        title="Hear From Our Happy Clients"
        tag="Kind Words"
        description="See why homeowners across Huddersfield choose us for their landscaping needs."
      />
    </div>
  );
}