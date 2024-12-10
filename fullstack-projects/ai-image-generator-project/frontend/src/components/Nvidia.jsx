import { useState } from "react";

import cowImage from "../assets/cow.png";
import dancingCat from "../assets/cat-dancing.gif";
import drawingCat from "../assets/drawing.gif";

const Nvidia = () => {
  const [text, setText] = useState("");
  const [generating, setGenerating] = useState(false);
  const [image, setImage] = useState(null);

  const invokeUrl = "http://localhost:1312/generate-our-image-brotha";

  const generateImage = async () => {
    setGenerating(true);
    setImage(null);

    const payload = {
      text_prompts: [
        { text, weight: 1 },
        { text: "", weight: -1 },
      ],
      cfg_scale: 5,
      sampler: "K_EULER_ANCESTRAL",
      seed: 0,
      steps: 25,
    };

    try {
      const response = await fetch(invokeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody = await response.json();

      const imageData = responseBody.artifacts?.[0]?.base64;
      if (imageData) {
        setImage(`data:image/jpeg;base64,${imageData}`);
      } else {
        console.error("No image data returned.");
      }
    } catch (error) {
      console.error("Error during image generation:", error);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="title-and-input">
          <div className="text-and-cat">
            <h3>!התחל ליצור את התמונה שלך עכשיו</h3>
            <img className="dancing-cat" src={dancingCat} alt="Loading" />
          </div>

          <div id="input-field">
            <input
              onChange={(event) => setText(event.target.value)}
              placeholder="...תאר את התמונה שלך"
              value={text}
            />
            <button onClick={generateImage}>צור תמונה</button>{" "}
          </div>
        </div>

        <img
          className="generated-image"
          src={generating ? drawingCat : image || cowImage}
          alt="Generated"
        />
      </div>
    </div>
  );
};

export default Nvidia;
