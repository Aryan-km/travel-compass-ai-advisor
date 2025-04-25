
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is travel insurance?",
      answer: "Travel insurance is a type of coverage that protects travelers from financial losses and helps with emergencies that may occur during a trip, such as medical issues, trip cancellations, lost luggage, and more."
    },
    {
      question: "When should I purchase travel insurance?",
      answer: "It's best to purchase travel insurance as soon as you've booked your trip. Many benefits, especially trip cancellation coverage, are only available if you buy insurance shortly after making your initial trip deposit."
    },
    {
      question: "Does travel insurance cover COVID-19?",
      answer: "Many travel insurance policies now include some form of COVID-19 coverage, but coverage varies by provider and policy. Our AI advisor can help you understand what's covered for pandemic-related issues."
    },
    {
      question: "Can I buy insurance if I'm already traveling?",
      answer: "Yes, though it's typically better to purchase before departure. Some providers offer insurance for travelers who are already abroad, but coverage options may be more limited."
    },
    {
      question: "How do I file a claim?",
      answer: "Claims processes vary by provider, but generally involve submitting a claim form along with supporting documentation like receipts, medical reports, or police reports. Our AI advisor can guide you through the specific steps for your policy."
    }
  ];

  return (
    <div className="py-16" id="faq">
      <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Find answers to common questions about travel insurance
      </p>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
