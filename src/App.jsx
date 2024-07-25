import "./App.css";
import { useState } from "react";
import GiftCard from "./advancedReact/GiftCard";
import RegistrationForm from "./advancedReact/RegistrationForm";
import UseEffectExample from "./advancedReact/UseEffectExample";
import FetchData from "./advancedReact/FetchData";
import CustomHook from "./advancedReact/CustomHook";
import CompositionExample from "./advancedReact/CompositionExample";
import SpreadOperator from "./advancedReact/SpreadOperator";
import { MyOrder } from "./advancedReact/SpreadOperator";
import FeedbackForm from "./advancedReact/FeedbackForm";
function App() {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };
  return (
    <>
      {/* <RegistrationForm />
      <GiftCard />
        <UseEffectExample /> 
        <FetchData /> */}
      {/* <CustomHook/> */}
      {/* <CompositionExample /> */}
      {/* <SpreadOperator /> */}
      <FeedbackForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
