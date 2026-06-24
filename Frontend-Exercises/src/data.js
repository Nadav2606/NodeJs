import influenzaImg from "./assets/flu.jpg";
import covidImg from "./assets/covid.jpg";
import measlesImg from "./assets/measles.jpg";
import varicellaImg from "./assets/varicella.jpg";
import rabiesImg from "./assets/rabies.jpg";
import ebolaImg from "./assets/rabies.jpg";
import hivImg from "./assets/hiv.jpg";
import hepatitisbImg from "./assets/hepatitisb.jpg";
import dengueImg from "./assets/dengue.jpg";
import polioImg from "./assets/polio.jpg";

export const DISEASES = {
  influenza: {
    title: "Influenza Virus",
    image: influenzaImg,
    disease: "Flu",
    symptoms:
      "Fever, cough, sore throat, runny nose, body aches, headache, chills, and strong tiredness.",
    treatment:
      "Rest, drinking fluids, fever reducers when needed, and in some cases antiviral medicine from a doctor.",
    description:
      "Influenza is a respiratory virus that spreads through droplets from coughing or sneezing. It usually affects the nose, throat, and lungs. Most people recover after a few days to two weeks, but it can be more serious for older adults, babies, pregnant women, and people with weak immune systems.",
  },

  coronavirus: {
    title: "Coronavirus",
    image: covidImg,
    disease: "COVID-19",
    symptoms:
      "Fever, cough, tiredness, sore throat, headache, muscle pain, breathing difficulty, and sometimes loss of smell or taste.",
    treatment:
      "Rest, fluids, symptom relief, monitoring breathing, and medical care if symptoms become severe.",
    description:
      "Coronavirus can cause COVID-19, a disease that mainly affects the respiratory system. Some cases are mild, while others can become serious and affect the lungs. People with breathing problems, chest pain, or worsening symptoms should seek medical help.",
  },

  measles: {
    title: "Measles Virus",
    image: measlesImg,
    disease: "Measles",
    symptoms:
      "High fever, cough, runny nose, red eyes, white spots inside the mouth, and a red skin rash.",
    treatment:
      "There is no specific cure. Treatment focuses on rest, fluids, fever control, and medical monitoring.",
    description:
      "Measles is a very contagious viral disease. It spreads easily through the air when an infected person coughs or sneezes. It can lead to complications such as ear infections or pneumonia, especially in young children.",
  },

  varicella: {
    title: "Varicella-Zoster Virus",
    image: varicellaImg,
    disease: "Chickenpox",
    symptoms:
      "Itchy rash, small blisters, fever, tiredness, headache, and loss of appetite.",
    treatment:
      "Rest, fluids, anti-itch lotions, keeping the skin clean, and sometimes antiviral medicine if prescribed.",
    description:
      "Chickenpox usually causes an itchy blister-like rash. It is highly contagious and spreads through direct contact or the air. Scratching should be avoided because it can cause skin infections.",
  },

  rabies: {
    title: "Rabies Virus",
    image: rabiesImg,
    disease: "Rabies",
    symptoms:
      "Fever, headache, weakness, pain or tingling near the bite area, confusion, fear of water, and nervous system problems.",
    treatment:
      "Urgent medical care after any suspected animal bite. Treatment must begin quickly with rabies vaccine and immune globulin when needed.",
    description:
      "Rabies is a dangerous virus that affects the nervous system. It is usually spread through bites from infected animals. After symptoms appear, rabies is extremely serious, so immediate treatment after exposure is critical.",
  },

  ebola: {
    title: "Ebola Virus",
    image: ebolaImg,
    disease: "Ebola Virus Disease",
    symptoms:
      "Fever, weakness, muscle pain, headache, sore throat, vomiting, diarrhea, rash, and in severe cases bleeding.",
    treatment:
      "Emergency medical care, fluids, oxygen support, treating complications, and special medicines in medical settings.",
    description:
      "Ebola is a serious viral disease that spreads through contact with infected body fluids. It requires isolation and professional medical treatment. It is not spread like a common cold.",
  },

  hiv: {
    title: "HIV",
    image: hivImg,
    disease: "AIDS",
    symptoms:
      "Early symptoms may include fever, sore throat, rash, swollen glands, and tiredness. Later stages can include frequent infections and weight loss.",
    treatment:
      "Antiretroviral therapy, also called ART, helps control the virus and protect the immune system.",
    description:
      "HIV attacks the immune system, especially cells that help the body fight infection. Without treatment, it can progress to AIDS. With proper treatment, many people with HIV live long and healthy lives.",
  },

  hepatitisB: {
    title: "Hepatitis B Virus",
    image: hepatitisbImg,
    disease: "Hepatitis B",
    symptoms:
      "Tiredness, stomach pain, nausea, vomiting, dark urine, joint pain, and yellowing of the skin or eyes.",
    treatment:
      "Some cases improve on their own. Chronic cases may need antiviral medicine and regular liver monitoring.",
    description:
      "Hepatitis B affects the liver and can be short-term or long-term. Long-term infection can damage the liver over time. Medical follow-up is important if infection becomes chronic.",
  },

  dengue: {
    title: "Dengue Virus",
    image: dengueImg,
    disease: "Dengue Fever",
    symptoms:
      "High fever, severe headache, pain behind the eyes, joint and muscle pain, rash, nausea, and tiredness.",
    treatment:
      "Rest, fluids, and fever control. Avoid aspirin or ibuprofen unless a doctor says otherwise because bleeding risk may increase.",
    description:
      "Dengue is spread by mosquitoes. Most cases improve with supportive care, but severe dengue can be dangerous and requires urgent medical attention.",
  },

  polio: {
    title: "Poliovirus",
    image: polioImg,
    disease: "Polio",
    symptoms:
      "Many people have no symptoms. Some may have fever, sore throat, tiredness, headache, vomiting, neck stiffness, or muscle weakness.",
    treatment:
      "There is no cure for polio. Treatment focuses on supportive care, physical therapy, and preventing complications.",
    description:
      "Poliovirus can affect the nervous system. In rare serious cases, it can lead to paralysis. Vaccination is the main way to prevent polio.",
  },
};
