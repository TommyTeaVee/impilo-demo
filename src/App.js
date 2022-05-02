import "./App.css";
import HTMLFlipBook from "react-pageflip";
import { useMediaQuery } from 'react-responsive'
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";


export default function App() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
  const isBigScreen = useMediaQuery({ minWidth: 1824 })
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isPortrait = useMediaQuery({ orientation: 'portrait' })
  const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <div className="App">
      <HTMLFlipBook width={600} height={800} maxShadowOpacity={0.5}>
        <div className="demoPage">
          <img className="photo" src="leather.jpeg" />
        </div>
        <div className="demoPage1">
          <img className="photo" src="1.png?text=Page+1" />
        </div>
        <div className="demoPage2">
          <img className="photo" src="9.png?text=Page+2" />
        </div>
        <div className="demoPage3">
          <img className="photo" src="12.png?text=Page+3" />
        </div>
        <div className="demoPage4">
          <img className="photo" src="14.png?text=Page+4" />
        </div>
        <div className="demoPage5">
          <img className="photo" src="15.png?text=Page+5" />
        </div>
        <div className="demoPage6">
          <img className="photo" src="18.png?text=Page+6" />
        </div>
        <div className="demoPage7">
          <img className="photo" src="32.png?text=Page+7" />
        </div>
        <div className="demoPage8">
          <img className="photo" src="33.png?text=Page+8" />
        </div>
        <div className="demoPage9">
          <img className="photo" src="36.png?text=Page+9" />
        </div>
        <div className="demoPage10">
          <img className="photo" src="44.png?text=Page+10" />
        </div>
        <div className="demoPage11">
          <img className="photo" src="59.png?text=Page+11" />
        </div>
        <div className="demoPage12">
          <img className="photo" src="65.png?text=Page+12" />
        </div>
        <div className="demoPage13">
          <img className="photo" src="70.png?text=Page+13" />
        </div>
        <div className="demoPage14">
          <img className="photo" src="73.png?text=Page+14" />
        </div>
        <div className="demoPage15">
          <img className="photo" src="leather.jpeg?text=Page+15" />
        </div>
        <div className="demoPage16">
          <img className="photo" src="leather.jpeg?text=Page+16" />
        </div>
        <div className="demoPage17">
          <img className="photo" src="leather.jpeg?text=Page+17" />
        </div>
        <div className="demoPage18">
          <img className="photo" src="leather.jpeg?text=Page+18" />
        </div>
        <div className="demoPage19">
          <img className="photo" src="leather.jpeg?text=Page+19" />
        </div>
        <div className="demoPage20">
          <img className="photo" src="leather.jpeg?text=Page+20" />
        </div>
        <div className="demoPage21">
          <img className="photo" src="leather.jpeg?text=Page+21" />
        </div>
        <div className="demoPage22">
          <img className="photo" src="leather.jpeg?text=Page+22" />
        </div>
        <div className="demoPage23">
          <img className="photo" src="leather.jpeg?text=Page+23" />
          </div>
          <div className="demoPage24">
          <img className="photo" src="leather.jpeg?text=Page+24" />
        </div>
        <div className="demoPage25">
          <img className="photo" src="leather.jpeg?text=Page+25" />
        </div>
      </HTMLFlipBook>
    </div>
  );
}
