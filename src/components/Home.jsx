import React, { useState } from "react";
import Tesseract from "tesseract.js"; //#endregion#
import { Rate } from "antd";
import CardComponent from "./CArd";

const Home = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Display the uploaded image
    }
  };

  // Handle text extraction from the image
  const handleTextExtraction = () => {
    if (!image) return;

    setIsProcessing(true);

    // Use Tesseract.js for OCR
    Tesseract.recognize(
      image,
      "eng", // Language code, you can change based on the language
      {
        logger: (m) => console.log(m), // Logs the progress
      }
    )
      .then(({ data: { text } }) => {
        setText(text); // Set extracted text
        setIsProcessing(false); // Stop processing
      })
      .catch((error) => {
        console.error("Error during OCR:", error);
        setIsProcessing(false);
      });
  };

  return (
    <div className="ocr-container">
      <h1>Text Extraction from Image</h1>

      <input type="file" accept="image/*" onChange={handleFileUpload} />

      {image && (
        <div>
          <img
            src={image}
            alt="Uploaded"
            style={{ width: "100%", maxHeight: "300px", objectFit: "contain" }}
          />
        </div>
      )}

      <button onClick={handleTextExtraction} disabled={isProcessing || !image}>
        {isProcessing ? "Extracting..." : "Extract Text"}
      </button>

      {text && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{text}</p>
        </div>
      )}
      <div>
        <Rate />
      </div>
      <div>
        <CardComponent />
      </div>
    </div>
  );
};

export default Home;
