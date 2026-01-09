import { Accordion } from './components/Accordion'

export const accordionItems=[
  {
    title:"What is React?",
    content:"React is a UI library"
  },
  { title: "What is TypeScript?", content: "Typed JavaScript" },
    { title: "What is an Accordion?", content: "Expandable UI component" }
]
function App() {
  
  return (
    <>
      <div>
        <Accordion 
        items={accordionItems}
        />
      </div>
    </>
  )
}

export default App
