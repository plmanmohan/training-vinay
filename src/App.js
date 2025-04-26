import Home from "./components/customHook/Home";
import ContactFormIk from "./components/formik/ContactFormIk";
import Welcome from "./components/jest/Welcome";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <ContactFormIk /> */}
      <Welcome user='John'/>
    </div>
  );
}

export default App;
