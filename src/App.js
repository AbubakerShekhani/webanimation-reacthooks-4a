import React, { useRef, useState } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import sonicAtRest from './images/sonic-at-rest.png';
import sonicrunning from './images/my-sonic-running.png';
import sonicfast from './images/sonic-fast.png';
import sonicfastest from './images/my-sonic-fastest.png';

const containerStyle = {
  position: 'absolute',
  top: '0',
  left: '50%',
  overflow: 'hidden',
  width: '120px',
  maxWidth: '180px',
  height: '177px',
  zIndex: '1',
}

const characterStyle = {
 /* position: 'absolute',*/

}


const App = () => {


  const [currentState, setCurrentState] = useState(sonicAtRest);

  const sonicContainerRef = useRef();
  const foregroundContainerRef = useRef();

  const sonicCharacter = useWebAnimations({

    keyframes: {
      transform: ["translateX(-100%)"],
    },

    timing: {
      delay:0,
      duration: 5000,
      iterations: Infinity,
      playbackRate: 1,
      autoPlay: false,
      direction: "normal",
      easing: "steps(1,end)",
    }
  });

  const adjustBackgroundAnimation = () => {
    if (sonicCharacter.getAnimation().playbackRate < .8) {
      sceneries.forEach(function(anim) {
        anim.playbackRate = sonicCharacter.getAnimation().playbackRate/2 * -1;
      });
    } else if (sonicCharacter.getAnimation().playbackRate > 1.2) {
      sceneries.forEach(function(anim) {
        anim.playbackRate = sonicCharacter.getAnimation().playbackRate/2;
      });
    } else {
      sceneries.forEach(function(anim) {
        anim.playbackRate = 0;
      });
    }
  }


  const runSonic = () => {
    const sonicCharacterAnimation = sonicCharacter.getAnimation();


    if (sonicCharacterAnimation.playState === 'running' && sonicCharacterAnimation.playbackRate === 1)
    {
      //Make it run faster
      setCurrentState(sonicrunning);
      sonicCharacterAnimation.cancel();

      sonicCharacter.animate({
        keyframes: {
          transform: ["translateX(-100%)", "translateX(0%)"],
        },
        timing: {
          delay: 0,
          duration: 800,
          iterations: Infinity,
          direction: "reverse",
          easing: "steps(11,start)",
        }
      })
      sonicCharacterAnimation.play()

    }

    sonicCharacter.getAnimation().updatePlaybackRate(sonicCharacterAnimation.playbackRate * 1.2);

    console.log(sonicCharacter.getAnimation().playbackRate);


    if (sonicCharacterAnimation.playState === 'running' && sonicCharacterAnimation.playbackRate > 2)
    {
      //Make it run faster
      setCurrentState(sonicfast);
      sonicCharacterAnimation.cancel();

      sonicCharacter.animate({
        keyframes: {
          transform: ["translateX(-100%)", "translateX(0%)"],
        },
        timing: {
          delay: 0,
          duration: 800,
          iterations: Infinity,
          direction: "reverse",
          easing: "steps(4,start)",
        }
      })
      sonicCharacterAnimation.play()

    }

    sonicCharacter.getAnimation().updatePlaybackRate(sonicCharacterAnimation.playbackRate * 1.2);

    console.log(sonicCharacter.getAnimation().playbackRate);


    if (sonicCharacterAnimation.playState === 'running' && sonicCharacterAnimation.playbackRate > 8)
    {
      //Make it run faster
      setCurrentState(sonicfastest);
      sonicCharacterAnimation.cancel();

      sonicCharacter.animate({
        keyframes: {
          transform: ["translateX(-100%)", "translateX(0%)"],
        },
        timing: {
          delay: 0,
          duration: 500,
          iterations: Infinity,
          direction: "normal",
          easing: "steps(9,end)",
        }
      })
      sonicCharacterAnimation.play()

    }

    sonicCharacter.getAnimation().updatePlaybackRate(sonicCharacterAnimation.playbackRate * 1.2);

    console.log(sonicCharacter.getAnimation().playbackRate);







  }


  useLayoutEffect(() => {

  });



  const sonicContainer = useWebAnimations({
    keyframes: {
      transform: ["translateX(0%)", "translateX(0%)"],

    },
    ref: sonicContainerRef,
    timing: {
      easing: 'steps(11, end)',
      duration: 800,
      playbackRate: 1,
      iterations: Infinity
    }
  });


  return (

    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div ref={sonicContainerRef} style={containerStyle}>
          <img ref={sonicCharacter.ref} src={currentState} style={characterStyle} alt=" " />
        </div>



      </div>

      <div>
        <button style={{position: 'absolute', right:'15%', top:'15%'}} onClick={runSonic} >Run</button>
      </div>
      <div className="scenery" ref={foregroundContainerRef}>
      </div>

      <div className="scenery" id="background1">

        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />

      </div>
      <div className="scenery" id="background2">

        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"  alt=" " />
      </div>

    </div>
  );
}

export default App;
