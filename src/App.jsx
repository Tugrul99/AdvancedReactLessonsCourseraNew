import "./App.css";
import { useState } from "react";
import GiftCard from "./advancedReact/GiftCard";

import RegistrationForm from "./advancedReact/RegistrationForm";
import UseEffectExample from "./advancedReact/UseEffectExample";
import FetchData from "./advancedReact/FetchData";
import CustomHook from "./advancedReact/CustomHook";
import CompositionExample from "./advancedReact/CompositionExample";

function App() {
  return (
    <>
      {/* <RegistrationForm />
      <GiftCard />
      <UseEffectExample /> 
      <FetchData /> */}
      {/* <CustomHook/> */}
      <CompositionExample />
    </>
  );
}

export default App;
