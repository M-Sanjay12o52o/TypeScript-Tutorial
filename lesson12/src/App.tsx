import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Heading title={"Hello"} />
      <Section title="Different title">This is my Section.</Section>
      <Counter />
    </>
  );
}

export default App;
