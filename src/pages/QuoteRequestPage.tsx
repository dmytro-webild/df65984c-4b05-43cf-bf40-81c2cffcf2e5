import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function QuoteRequestPage() {
  const handleQuoteSubmit = (data: Record<string, string>) => {
    console.log("Quote requested:", data);
    // In a real app, this would send the data to an API
    alert("Thank you! Your quote request has been received.");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/quote-request" }}
      />

      <main className="flex-grow pt-24">
        <ContactSplitForm
          tag="Free Estimate"
          title="Request a Free Quote"
          description="Tell us a little bit about your project, and our team will get back to you within 24 hours with a detailed estimate and next steps."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true,
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false,
            },
          ]}
          textarea={{
            name: "description",
            placeholder: "Please describe the work required in detail...",
            rows: 6,
            required: true,
          }}
          buttonText="Submit Request"
          onSubmit={handleQuoteSubmit}
          imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          textAnimation="fade-blur"
        />

        <div className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <TestimonialTrustCard
              quote="The quoting process was incredibly straightforward. They provided a detailed breakdown of costs upfront, and the final invoice matched the quote exactly. Highly recommended for their transparency."
              rating={5}
              author="Michael Chen, Operations Director"
              avatars={[
                {
                  name: "Michael Chen",
                  imageSrc: "https://i.pravatar.cc/150?u=michael",
                },
              ]}
              textAnimation="slide-up"
            />
          </div>
        </div>
      </main>

      <FooterMinimal
        brand="Webild"
        copyright="© 2024 Webild Inc. All rights reserved."
      />
    </div>
  );
}