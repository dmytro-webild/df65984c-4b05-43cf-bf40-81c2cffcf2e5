import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function QuoteRequestPage() {
  return (
    <>
      <div data-webild-section="ContactSplitForm"><ContactSplitForm
        tag="Free Quote"
        title="Request Your Free Quote"
        description="Share the details of your landscaping project with us. Our family-run Yorkshire team will provide a free, no-obligation estimate."
        inputs={[{"name":"name","type":"text","placeholder":"Full Name","required":true},{"name":"email","type":"email","placeholder":"Email Address","required":true},{"name":"phone","type":"tel","placeholder":"Phone Number","required":true}]}
        textarea={{"name":"description","placeholder":"Describe the landscaping work required...","rows":5,"required":true}}
        buttonText="Request Quote"
        imageSrc="https://img.freepik.com/free-photo/beautiful-green-park-with-trees-grass_181624-11855.jpg"
        textAnimation="slide-up"
      /></div>
    </>
  );
}
