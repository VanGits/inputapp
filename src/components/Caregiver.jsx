import React, { useEffect, useState } from "react";
import caregiverForms from "../questions/caregiver-questions";
import "../styles/Caregiver.css";
import { useParams, useNavigate } from "react-router-dom";

import PhoneNumber from "./PhoneNumber";

const Caregiver = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(parseInt(id));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkInput, setCheckInput] = useState("");

  const handleAnswer = (e) => {
    e.preventDefault();

    if(parseInt(id) === 15) {
        alert("Submitted!")
        setCurrentQuestion(currentQuestion + 1)
        navigate(`/caregiver-forms/${parseInt(id) + 1}`)
    } else {
        setCurrentQuestion(currentQuestion + 1)
        navigate(`/caregiver-forms/${parseInt(id) + 1}`);
    }

   
  };
  

  const handleOptionClick = (option) => {
    console.log("clicked", option);
    setCurrentQuestion(currentQuestion + 1)
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
      setCurrentQuestion((prev) => prev - 1);
    };
  
    window.addEventListener("popstate", handlePopState);
  
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  console.log(currentQuestion)

  const letters = [...Array(26)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const questions = caregiverForms.map((form, index) => {
    
    if (parseInt(id) === index) {
      return (
        <form onSubmit={handleAnswer} key={index}>
          <h2>{form.question}</h2>
          
          <h4>{form.desc}</h4>
          {form.image && <img src={form.image} alt="" />}
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
         {!form.buttonsOnly && (
            <button type="submit">
              {currentQuestion === 15 ? "Submit" : "Next"}
            </button>
          )}
        </form>
      );
    }
    return null;
  });

  return <div className="Caregiver">{questions}</div>;
};

export default Caregiver;
