import { questionedAskedData } from "@/shared/data/questioned-asked";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const QuestionedAskedAccordion = () => {
  return (
    <section className="relative w-full py-20">
      {/* Section header */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Expertise & Capabilities
          <br />
          What I Bring to the Table
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-xl mx-auto">
          A breakdown of my core skills, approach, and problem-solving mindset.
        </p>
      </div>

      {/* Accordion wrapper */}
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-3xl space-y-4"
      >
        {questionedAskedData.map((qa) => (
          <AccordionItem
            key={qa.id}
            value={`item-${qa.id}`}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10"
          >
            <AccordionTrigger
              className="px-6 py-5 text-left text-base md:text-lg font-semibold text-white transition-colors group-hover:text-indigo-300"
            >
              {qa.question}
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6 pt-1 text-sm md:text-base text-neutral-300 leading-relaxed">
              {qa.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Subtle glow background */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-72 max-w-3xl rounded-full bg-indigo-500/10 blur-3xl" />
    </section>
  );
};

export default QuestionedAskedAccordion;