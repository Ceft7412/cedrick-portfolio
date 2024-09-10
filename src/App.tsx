import Header from "./components/Header";
import { Section1 } from "./components/sections/index";

export default function App() {
  return (
    <>
      <main className="flex flex-col">
        <Header />

        <Section1 />
      </main>
    </>
  );
}
