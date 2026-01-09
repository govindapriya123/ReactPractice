import { useState } from "react";
interface AccordionItem {
  title: string;
  content: React.ReactNode;
}
interface AccordionProps {
  items: AccordionItem[];
}
export const Accordion: React.FC<AccordionProps> = ({
  items,
}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    setActiveIndex((prev) =>
      prev?.includes(index)
        ? prev?.filter((i) => i !== index)
        : [...prev, index]
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2>Accordion Example</h2>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex.includes(index)}
            style={{
              width: "100%",
              padding: 12,
              textAlign: "left",
              fontWeight: "bold",
              outline: "none",
              border: "none",
              cursor: "pointer",
              justifyContent:"space-between"
            }}
          >
            {item.title}
            <span>{activeIndex.includes(index) ? "▲" : "▼"}</span>
          </button>
          {activeIndex.includes(index) && (
            <div style={{ padding: 12 }}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
