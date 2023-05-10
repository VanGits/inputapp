import email from "../assets/email.svg"
import location from "../assets/location.svg"
import drive from "../assets/drive.svg"
import location2 from "../assets/location-1.svg"


const caregiverData = [
  {
    "id": 1,
    "question": "Interested in working with us?",
    "desc": "We just need a few pieces of information to get the application process started.",
    "type": "text",
    "options": [],
    "input": false,
    "image": "",
    "buttonsOnly": false
    
  },
  {
    "id": 2,
    "question": "What's your full name?",
    "desc": "",
    "type": "text",
    "options": [],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "fullName"
  },

  {
    "id": 3,
    "question": "We don't mean to be rude, but how old are you?",
    "desc": "Our partners must be at least 18 years old.",
    "type": "integer",
    "options": [],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "age"
  },
  {
    "id": 4,
    "question": "What's the best phone number to contact you?",
    "desc": "",
    "type": "phone",
    "options": [],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "phone"
    
  },
  {
    "id": 5,
    "question": "What's the best email address for you?",
    "desc": "",
    "type": "email",
    "options": [],
    "input": true,
    "image": email,
    "buttonsOnly": false,
    "name": "email"
  },
  {
    "id": 6,
    "question": "Where are you located?",
    "desc": "This helps us potentially connect you to direct cases in your area.",
    "type": "text",
    "options": [],
    "input": true,
    "image": location2,
    "buttonsOnly": false,
    "name": "location"
  },
  {
    "id": 7,
    "question": "Do you have any caregiving-related experience? If so, how many years in total?",
    "desc": "",
    "type": "text",
    "options": [],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "experience"
  },
  {
    "id": 8,
    "question": "Please choose the best position(s) that may align with your experience below",
    "desc": "",
    "type": "text",
    "options": [
      "Elderly Care",
      "Babysitting",
      "Personal Assistant",
      "Construction",
      "Other"
    ],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "position"
  },
  {
    "id": 9,
    "question": "Are you driving?",
    "desc": "",
    "type": "text",
    "options": ["Yes", "No"],
    "input": false,
    "image": drive,
    "buttonsOnly": true,
    "name": "driving"
  },
  {
    "id": 10,
    "question": "Are you a Certified Nurse Assistant (CNA) or have any other medical background?",
    "desc": "",
    "type": "text",
    "options": ["Yes", "No"],
    "input": false,
    "image": "",
    "buttonsOnly": true,
    "name": "cna"
  },
  {
    "id": 11,
    "question": "Which cases do you prefer?",
    "desc": "",
    "type": "text",
    "options": ["Come & Go", "Live-in", "Other"],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "casePrefer"
  },
  {
    "id": 12,
    "question": "Choose the best case that applies to you",
    "desc": "",
    "type": "text",
    "options": [
      "I can do assisted lifting",
      "I can NOT do any lifting",
      "Other"
    ],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "lift"

  },

  {
    "id": 13,
    "question": "On what days are you available?",
    "desc": "",
    "type": "check",
    "options": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "input": false,
    "image": "",
    "buttonsOnly": false,
    "name": "day"

  },
  {
    "id": 14,
    "question": "How many hours are you available?",
    "desc": "",
    "type": "integer",
    "options": [],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "hours"
  },
  {
    "id": 15,
    "question": "And would you prefer cases that are...",
    "desc": "",
    "type": "text",
    "options": ["Day Shifts", "Night Shifts", "Overnight", "Live-in", "Other"],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "shift"
  },
  {
    "id": 16,
    "question": "When is the earliest that you can start?",
    "desc": "",
    "type": "datetime",
    "options": [],
    "input": true,
    "image": "",
    "buttonsOnly": false,
    "name": "date"
  },
  {
    "id": 17,
    "question": "Thank you for completing the form. Someone from our team will reach out to you as soon as possible.",
    "desc": "Any friend referrals are always appreciated! Feel free to send them this link to get started.",
    "type": "",
    "options": [],
    "input": false,
    "image": "",
    "buttonsOnly": true,
    "name": ""
  }
]

export default caregiverData
