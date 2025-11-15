// import Home from "./components/Home";
import Counter from "./components/Counter";

function App() {
  return (
    // one parent element
    <>
      {/* props - properties - are immutable(unchanged) */}
      {/* <Home title="Read" matter="How to use chatGPT API in developement" />
      <Home title="Practice" matter="Explore Practice Problems" />
      <Home title="Learn" matter="DSA for cracking interview" /> */}

      <Counter />
    </>
  );
}

export default App;
