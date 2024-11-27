import { useState } from "react";
import GetQRCODE from "./GetQRCODE";
const App = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [websiteURL, setwebsiteURL] = useState("http://localhost:3000");

  async function handleclick() {
    let tempUrl = await GetQRCODE(websiteURL);
    setImgUrl(tempUrl);
  }
  return (
    <div className="app">
      <h1>Generate Random QR Code</h1>
      <div>
        <label htmlFor="URL">Type In The Name Of Your Url</label>
        <input
          type="text"
          name="URL"
          id="URL"
          value={websiteURL}
          onChange={(e) => setwebsiteURL(e.target.value)}
        />
      </div>
      <button onClick={handleclick}>Generate</button>
      {imgUrl && <img src={imgUrl} alt="something" />}
    </div>
  );
};

export default App;
