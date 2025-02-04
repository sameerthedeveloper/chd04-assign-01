import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration (Replace with your credentials)
const firebaseConfig = {
    apiKey: "AIzaSyAwrafiLbVfkfnmukvVXzEpvq_GjAEiF1Q",
    authDomain: "personalprojects-4ea96.firebaseapp.com",
    projectId: "personalprojects-4ea96",
    storageBucket: "personalprojects-4ea96.firebasestorage.app",
    messagingSenderId: "122755752924",
    appId: "1:122755752924:web:ec4cbbccbdde69938ba519",
    measurementId: "G-WZQ4QM5P0T"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




  
    const topics = [
        { id: 1, topicName: "Electrical and Electronic Gadgets, Computers, Instruments (Semiconductor - N)" },
        { id: 2, topicName: "Electrical and Electronic Gadgets, Computers, Instruments (Semiconductor - S doped Silicon)" },
        { id: 3, topicName: "Electrical and Electronic Gadgets, Computers, Instruments (Semiconductor - CdX QDs)" },
        { id: 4, topicName: "Electrical and Electronic Gadgets, Computers, Instruments (Metal nano and other applications)" },
        { id: 5, topicName: "Networking and Robotic Construction (Networking of networks and connecting devices)" },
        { id: 6, topicName: "Networking and Robotic Construction (Metal alloys)" },
        { id: 7, topicName: "Networking and Robotic Construction (Kevlor)" },
        { id: 8, topicName: "Networking and Robotic Construction (Biodegradable smart materials)" },
        { id: 9, topicName: "Data Storage and Magnetic Devices (Data storage and magnetic hard disk and devices - Pendrive)" },
        { id: 10, topicName: "Data Storage and Magnetic Devices (Flash memory - Ferro magnetic materials)" },
        { id: 11, topicName: "Data Storage and Magnetic Devices (Super paramagnetic materials)" },
        { id: 12, topicName: "Data Storage and Magnetic Devices (Optical discs)" },
        { id: 13, topicName: "Nanomaterials for Data Storage (Nanomaterials to enhance the lifetime and storage of CD, DVD, and BD)" },
        { id: 14, topicName: "Nanomaterials for Data Storage (Nano incorporated Polycarbonate)" },
        { id: 15, topicName: "Nanomaterials for Data Storage (Aluminum - Al)" },
        { id: 16, topicName: "Nanomaterials for Data Storage (Lacquer)" },
        { id: 17, topicName: "Nanomaterials for Data Storage (Nanomaterials and small molecules for data storage)" },
        { id: 18, topicName: "3D Printing Materials (Nylon)" },
        { id: 19, topicName: "3D Printing Materials (ABS)" },
        { id: 20, topicName: "3D Printing Materials (PLA)" },
        { id: 21, topicName: "3D Printing Materials (Titanium - Ti)" },
        { id: 22, topicName: "3D Printing Materials (Gold - Au)" },
        { id: 23, topicName: "3D Printing Materials (Silver - Ag)" },
        { id: 24, topicName: "Solar Panels and IoT Monitoring (Solar panels function monitoring - IoT enabled)" },
        { id: 25, topicName: "Solar Panels and IoT Monitoring (Crystalline Si - Silicon)" },
        { id: 26, topicName: "Solar Panels and IoT Monitoring (Organometallics)" },
        { id: 27, topicName: "Displays and LEDs (Displays and LCD, LEDs and its types - OLEDs)" },
        { id: 28, topicName: "Displays and LEDs (Group III-V materials)" },
        { id: 29, topicName: "RGB Analysis and TV/Screens (RGB analysis - Sensing and TV/system screen)" },
        { id: 30, topicName: "RGB Analysis and TV/Screens (Quantum Dots - QDs)" },
        { id: 31, topicName: "RGB Analysis and TV/Screens (Anthocyanins)" },
        { id: 32, topicName: "Semiconductor Chemistry and VLSI (Semiconductor chemistry for VLSI processing technology)" },
        { id: 33, topicName: "Semiconductor Chemistry and VLSI (Metalloid staircase)" },
        { id: 34, topicName: "Semiconductor Chemistry and VLSI (Silicon - Si)" },
        { id: 35, topicName: "Semiconductor Chemistry and VLSI (Germanium - Ge)" },
        { id: 36, topicName: "Semiconductor Chemistry and VLSI (Gallium Arsenide - GaAs)" },
        { id: 37, topicName: "Inkjet Printable Circuit Boards (Materials for inkjet printable circuit board)" },
        { id: 38, topicName: "Inkjet Printable Circuit Boards (Nanocarbon-based)" },
        { id: 39, topicName: "Material Properties (Right material for signal speed and right thermal coefficient of expansion)" },
        { id: 40, topicName: "Remote Sensing (Photodetectors)" },
        { id: 41, topicName: "Remote Sensing (Radiometers)" },
        { id: 42, topicName: "Solder and Conductive Inks (Lead-based solder)" },
        { id: 43, topicName: "Solder and Conductive Inks (Issues and alternatives for lead-free solder)" },
        { id: 44, topicName: "Solder and Conductive Inks (Conductive inks)" },
        { id: 45, topicName: "Wireless Sensors (Introduction to sensors)" },
        { id: 46, topicName: "Wireless Sensors (Chemo sensors)" },
        { id: 47, topicName: "Wireless Sensors (Bio sensors)" },
        { id: 48, topicName: "Wireless Sensors (Gas sensors)" },
        { id: 49, topicName: "Wireless Sensors (Wearable/touch sensors)" },
        { id: 50, topicName: "Material Selection and Device Fabrication (Components selection of materials)" },
        { id: 51, topicName: "Material Selection and Device Fabrication (Device fabrication and function monitoring)" },
        { id: 52, topicName: "Material Selection and Device Fabrication (Wireless)" },
        { id: 53, topicName: "Material Selection and Device Fabrication (Smartphone-based and IoT enabled)" },
        { id: 54, topicName: "Properties of Materials (Anti-corrosive)" },
        { id: 55, topicName: "Properties of Materials (Waterproof)" },
        { id: 56, topicName: "Properties of Materials (Insulation)" },
        { id: 57, topicName: "Properties of Materials (Lamination)" },
        { id: 58, topicName: "Robotics and Molecular Modeling (Robotics in surgery, gene coding, and molecular modeling)" },
        { id: 59, topicName: "Biochips and DNA Microarray Chips (Fluorescent dyes)" },
        { id: 60, topicName: "Biochips and DNA Microarray Chips (Glass/Nylon)" },
        { id: 61, topicName: "Characterization Tools (UV-Visible - DRS)" },
        { id: 62, topicName: "Characterization Tools (FT-IR)" },
        { id: 63, topicName: "Characterization Tools (SEM - Scanning Electron Microscopy)" },
        { id: 64, topicName: "Characterization Tools (TEM - Transmission Electron Microscopy)" },
        { id: 65, topicName: "Characterization Tools (AFM - Atomic Force Microscopy)" },
        { id: 66, topicName: "Characterization Tools (TG-DTA - Thermogravimetric-Differential Thermal Analysis)" },
        { id: 67, topicName: "Characterization Tools (XRD - X-ray Diffraction)" },
        { id: 68, topicName: "Software for Molecular Modeling and Drug Design (ChemOffice)" },
        { id: 69, topicName: "Software for Molecular Modeling and Drug Design (Image J)" },
        { id: 70, topicName: "Software for Molecular Modeling and Drug Design (Origin)" },
        { id: 71, topicName: "Molecular Modeling and Drug Designing (Comparison of old drug structures with new)" },
        { id: 72, topicName: "Molecular Modeling and Drug Designing (Drug designing)" },
        { id: 73, topicName: "Molecular Modeling and Drug Designing (Drug for COVID-19 and drug delivery)" },
        { id: 74, topicName: "Molecular Modeling and Drug Designing (Molecular docking)" },
        { id: 75, topicName: "Molecular Modeling and Drug Designing (Drug interaction in a human body)" }
    ];
  
// ✅ Function to add topics
const addTopicsToFirestore = async () => {
    try {
      for (const topic of topics) {
        await addDoc(collection(db, "topics"), topic);

      }
      console.log("✅ Topics added successfully!");
    } catch (error) {
      console.error("❌ Error adding topics:", error);
    }
  };

  // Run the function
addTopicsToFirestore();