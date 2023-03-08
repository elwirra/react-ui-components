import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'eg34gb',
            label: 'Some tx',
            content: 'You can use react in any project you want',
        },
        {
            id: 'eg34gc',
            label: 'Some tx2',
            content: 'You can use react in any project you want',
        },
        {
            id: 'eg34gd',
            label: 'Some tx3',
            content: 'You can use react in any project you want',
        }
    ]
    return (
        <div> 
            <Accordion items={items} /> 
        </div>
    );
}

export default AccordionPage;

