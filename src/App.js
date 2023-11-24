import { useEffect, useState } from "react";
import "./App.css";
import LoveLoadingScreen from "./LoveLoadingScreen";
import useSound from 'use-sound'

function App() {
  const [playSound] = useSound('stupid.mp3')
  const [msg, setMsg] = useState([
    "Will you go out with me?",
    "Why dont you wanna go out with me",
    "Seriously!!!!",
    "😭😭😭😭😭😭Please stop",
    "😭😭😭😭😭😭Please stop it!!!",
    "😭😭😭😭😭😭Please stop !!!!!!!!!!",
    "Fine press yes, and i will go away",
  ]);
  const [message, setMessage] = useState("Are you coming on the 18th?");
  const [check,setCheck]=useState(false)
  const [gifSrc, setGifSrc] = useState("https://media.giphy.com/media/Vi0Ws3t4JSLOgdkaBq/giphy.mp4");
  const [item, setItem] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleNo = () => {
    setItem(item + 1);
  };

  const handleYesClick = () => {
    playSound();
    setCheck(true)
    setMsg(["Yay, see you on our date to Dekav"]);
    setItem(0);
    setGifSrc(prevGifSrc => "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif");
    // setGifSrc(prevGifSrc => "https://media.giphy.com/media/Vi0Ws3t4JSLOgdkaBq/giphy-downsized-large.gif");
  };
  

  const handleNoMouseOver = () => {
    if(item<6)
    setItem(item + 1);
    console.log("working")
    const noBtn = document.querySelector(".no-btn");
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  };


  useEffect(() => {

    // This useEffect will trigger when gifSrc changes
    console.log("Gif source updated:", gifSrc);
  }, [gifSrc]);

  useEffect(() => {
    // This useEffect will trigger when loading changes
    console.log("Loading state updated:", loading);
  }, [loading]);

  return (
    <>
      {loading && <LoveLoadingScreen loading={loading} set={setLoading} />}
      {!loading && (
        <div className="wrapper">
          <h2 className="question">{msg[item]}</h2>
          <img
            className="gif"
            alt="gif"
            src={`${check?'1st.gif':"2nd.gif"}`}
          />
          <div className="btn-group">
            <button className="yes-btn" onClick={handleYesClick}>
              Yes
            </button>
           {!check&& <button
              className="no-btn"
              onMouseOver={handleNoMouseOver}
              onClick={handleNo}
            >
              No
            </button>}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
