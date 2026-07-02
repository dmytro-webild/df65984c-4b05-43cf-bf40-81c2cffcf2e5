import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",    "href": "#about"
  },
  {
    "name": "Services",    "href": "#services"
  },
  {
    "name": "Portfolio",    "href": "#portfolio"
  },
  {
    "name": "Testimonials",    "href": "#testimonials"
  },
  {
    "name": "Hero",    "href": "#hero"
  },
  {
    "name": "Metrics",    "href": "#metrics"
  },
  {
    "name": "Faq",    "href": "#faq"
  },
  { name: "Quote Request", href: "/quote-request" },

];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="gridLines" heroBackground="radialGradient">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="Creactive Landscapes Yorkshire "
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3Fv83KUYlJoI2yCApMcJ43LguDH/uploaded-1782955418040-fvvvrrwk.png"
      ctaButton={{
        text: "Get Free Quote",        href: "/quote-request"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Portfolio",              href: "#portfolio"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Services",          items: [
            {
              label: "Paving & Stonework",              href: "#services"},
            {
              label: "Fencing & Decking",              href: "#services"},
            {
              label: "Landscape Design",              href: "#services"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      leftText="© 2026 Creative Landscapes Yorkshire"
      rightText="Professional Landscaping in Huddersfield & Holmfirth"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
