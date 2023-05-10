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
  const [formValues, setFormValues] = useState({
    age: "",
    casePrefer: "",
    cna: "",
    date: "",
    day: "",
    driving: "",
    email: "",
    experience: "",
    hours: "",
    lift: "",
    location: "",
    phone: "",
    position: "",
    shift: "",
  });

  console.dir(formValues);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (parseInt(id) === 15) {
      alert("Submitted!");
    }

    if (e.target.type !== "button") {
      setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    setCurrentQuestion(currentQuestion + 1);
    navigate(`/caregiver-forms/${parseInt(id) + 1}`);
  };

  const handleOptionClick = (option, name) => {
    console.log("clicked", option, name);
    setCurrentQuestion(currentQuestion + 1);
    navigate(`/caregiver-forms/${parseInt(id) + 1}`);
    setFormValues((prev) => ({ ...prev, [name]: option }));
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setFormValues({ ...formValues, phone: value });
  };

  const handleCheckInput = (e, formName) => {
    if (e.target.type === "checkbox") {
      const value = e.target.value;
      const isChecked = e.target.checked;
  
      setFormValues((prevFormValues) => {
        let updatedValues;
  
        if (isChecked) {
          // Add the selected option to the array
          updatedValues = {
            ...prevFormValues,
            [formName]: [...(prevFormValues[formName] || []), value],
          };
        } else {
          // Remove the deselected option from the array
          updatedValues = {
            ...prevFormValues,
            [formName]: prevFormValues[formName].filter(
              (option) => option !== value
            ),
          };
        }
  
        return updatedValues;
      });
    } else {
      const value = e.target.value;
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [formName]: value,
      }));
    }
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
  console.log(currentQuestion);

  const letters = [...Array(26)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );

  const questions = caregiverForms.map((form, index) => {
    if (parseInt(id) === index) {
      return (
        <form onSubmit={handleAnswer} key={index}>
          <h2>{form.question}</h2>

          <h4>{form.desc}</h4>
          {form.image && <img src={form.image} alt="" className="form-image"/>}
          <div className={form.type === "check" ? "options" : "options-flex"}>
            {form.options &&
              form.options.map((option, optionIndex) => {
                if (option === "Other") {
                  return (
                    <div className="other" key={optionIndex}>
                      <h4>Other:</h4>
                      <input
                        type="text"
                        name={form.name}
                        placeholder="Type your answer here..."
                        onKeyDown={(e) => {
                          if (e.keyCode === 13) {
                            e.preventDefault();
                            handleCheckInput(e, form.name);
                          }
                        }}
                        onChange={(e) => handleCheckInput(e, form.name)}
                        required
                        value={formValues[form.name] || ""}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="check-or-not" key={optionIndex}>
                      {form.type === "check" ? (
                        <label className="checkboxOption" >
                          <input
                            type="checkbox"
                            name={form.name}
                            value={option}
                            onChange={(e) => handleCheckInput(e, form.name)}
                            checked={(formValues[form.name] || []).includes(option)}
                          />
                          {option}
                        </label>
                      ) : (
                        <button
                          className="option"
                          key={optionIndex}
                          onClick={() => handleOptionClick(option, form.name)}
                        >
                          <div className="optionLetter">
                            {letters[optionIndex]}
                          </div>

                          {option}
                        </button>
                      )}
                    </div>
                  );
                }
              })}
          </div>
          {form.type === "phone" ? (
            <PhoneNumber
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
          ) : form.type === "email" ? (
            <input
              type="email"
              name={form.name}
              placeholder="Type your email here..."
              onChange={(e) => handleCheckInput(e, form.name)}
              required
              value={formValues[form.name] || ""}
            />
          ) : form.type === "datetime" ? (
            <input
              type="date"
              name={form.name}
              placeholder="Select a date..."
              onChange={(e) => handleCheckInput(e, form.name)}
              required
              value={formValues[form.name] || ""}
            />
          ) : form.input && form.options.indexOf("Other") === -1 ? (
            <input
              type={form.type === "integer" ? "number" : "text"}
              name={form.name}
              placeholder="Type your answer here..."
              onChange={(e) => handleCheckInput(e, form.name)}
              required
              value={formValues[form.name] || ""}
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
