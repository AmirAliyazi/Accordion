import { useState } from 'react'
import {ChevronDownIcon} from '@heroicons/react/24/outline'


const data = [
    {
        id:1,
        title:"Accordion one",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, hic."
    },
    {
        id:2,
        title:"Accordion two",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, hic."
    },
    {
        id:3,
        title:"Accordion three",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, hic."
    },
]

function AccordionItem() {

    const[open , setOpen] = useState(null);

    const handleOpen = (id) => {
        setOpen(id === open ? null : id);
    }

  return data.map((item) => <AccordionItems key={item.id} item={item} open={open}  onOpen={handleOpen}>
                                {item.text}
                            </AccordionItems>)
}

export default AccordionItem



function AccordionItems({item , open , onOpen , children}){
    
    const isOpen = item.id === open;

   

    return <div onClick={() => onOpen(item.id)} className={`accordion-item ${isOpen ? "extended" : ""}`}>
    <div className="accordion-item__header">
        <div className="accordion-item__title">{item.title}</div>
        <ChevronDownIcon className='chevron'/>
    </div>
    <div className="accordion-item__content">{children}</div>
  </div>
}