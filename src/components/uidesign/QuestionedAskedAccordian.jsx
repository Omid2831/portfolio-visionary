import { questionedAskedData } from "@/shared/data/questioned-asked"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "../ui/accordion"

const QuestionedAskedAccordion = () => {
    return (
        <>
            <Accordion
            type="single"
            collapsible
            className="w-1/4 mx-auto">
                {questionedAskedData.map((qa)=>(
                    <AccordionItem key={qa.id} value={`item-${qa.id}`}>
                        <AccordionTrigger>{qa.question}</AccordionTrigger>
                        <AccordionContent>{qa.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default QuestionedAskedAccordion