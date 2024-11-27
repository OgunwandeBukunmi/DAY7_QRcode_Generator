import { APIKEY } from "./storage.jsx";
const GetQRCODE = async (data) => {
  let url;
  try {
    let response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    url = URL.createObjectURL(blob);
  } catch (err) {
    console.log(err);
  }
  return url;
};

export default GetQRCODE;
