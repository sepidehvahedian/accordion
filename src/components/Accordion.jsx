import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus quae fuga totam recusandae voluptate minus id aliquam possimus minima reprehenderit inventore fugiat voluptatem sequi, maiores accusantium animi doloribus similique tempore.",
  },
];

function Accordion() {
  // حالت برای نگه‌داری اینکه کدام آکاردئون باز است
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleOpenAccordion = (id) => {
    // اگر همان آکاردئون باز است، آن را ببندید، در غیر این صورت آکاردئون جدید باز شود
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id} // اضافه کردن کلید برای هر آیتم
          item={item}
          isOpen={openAccordionId === item.id} // چک کردن اگر آکاردئون باز است
          onClick={() => handleOpenAccordion(item.id)}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, isOpen, onClick }) {
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""} `}>
      <div className="accordion-item__header" onClick={onClick}>
        <div>{item.title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          style={{
            width: "1.2rem",
            transition: "all 0.2s ease-out",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {isOpen && <div className="accordion-item__content">{item.text}</div>}
    </div>
  );
}
