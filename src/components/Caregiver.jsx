import React, { useEffect, useState } from "react";
import caregiverForms from "../questions/caregiver-questions.json";
import "../styles/Caregiver.css";
import { useParams, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import PhoneNumber from "./PhoneNumber";

const Caregiver = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(parseInt(id));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInput, setCheckInput] = useState("");

  const handleAnswer = (e) => {
    e.preventDefault();

    navigate(`/caregiver-forms/${parseInt(id) + 1}`);
  };

  const handleOptionClick = (option) => {
    console.log("clicked", option);
    navigate(`/caregiver-forms/${parseInt(id) + 1}`);
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  const handleCheckInput = (e) => {
    setCheckInput(e.target.value);
    console.log(checkInput);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentQuestion(parseInt(id) - 1);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [id]);

  const letters = [...Array(26)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const questions = caregiverForms.map((form, index) => {
    if (parseInt(id) === index) {
      return (
        <form onSubmit={handleAnswer} key={index}>
          <h2>{form.question}</h2>
          <h4>{form.desc}</h4>
          {form.options &&
            form.options.map((option, optionIndex) => {
              if (option === "Other") {
                return (
                  <div className="other" key={optionIndex}>
                    <h4>Other:</h4>
                  </div>
                );
              } else {
                return (
                  <button
                    className="option"
                    key={optionIndex}
                    onClick={() => handleOptionClick(option)}
                  >
                    <div className="optionLetter">{letters[optionIndex]}</div>
                    {option}
                  </button>
                );
              }
            })}
          {form.type === "phone" ? (
  <PhoneNumber
    placeholder="Enter phone number"
    value={phoneNumber}
    onChange={handlePhoneChange}
  />
) : form.type === "email" ? (
  <input
    type="email"
    name="answer"
    placeholder="Type your email here..."
    onChange={handleCheckInput}
    required
  />
) : form.type === "datetime" ? (
  <input
    type="date"
    name="answer"
    placeholder="Select a date..."
    onChange={handleCheckInput}
    required
  />
) : form.input ? (
  <input
    type="text"
    name="answer"
    placeholder="Type your answer here..."
    onChange={handleCheckInput}
    required
  />
) : (
  ""
)}
          <button>Next</button>
        </form>
      );
    }
    return null;
  });

  return <div className="Caregiver">{questions}</div>;
};

export default Caregiver;
