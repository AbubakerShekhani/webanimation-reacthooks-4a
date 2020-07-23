import React from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";
import aliceSprite from './images/sprite_running-alice-queen_small.png';
import palm3 from './images/palm3_small.png';
import palm1 from './images/palm1_small.png';
import palm2 from './images/palm2_small.png';
import rknight from './images/r_knight_small.png';
import rpawn from './images/r_pawn_small.png';
import pawnupright from './images/r_pawn_upright_small.png';
import urook from './images/w_rook_small.png';
import urookupright from './images/w_rook_upright_small.png';
import bushSmall from './images/bush_small.png';

const App = () => {

  let sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
  ];

  let aliceSpriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
  ];


  let redQueenAlice = useWebAnimations({
    keyframes: aliceSpriteFrames,
    timing: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    }
  });


  let sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity
  };

  let sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity
  };

  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timings: sceneryTimingBackground
  })

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timings: sceneryTimingBackground
  })

  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timings: sceneryTimingForeground
  })

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    timings: sceneryTimingForeground
  })

  return (

    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" ref={redQueenAlice.ref} src={aliceSprite} alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
        <img id="palm3" src={palm3}  alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>
        <img id="bush" src={bushSmall} alt=" " />
        <img id="w_rook_upright" src={urookupright} alt=" " />
      </div>
      <div className="scenery" id="background1" ref={background1Movement.ref}>
        <img id="r_pawn_upright" src={pawnupright} alt=" " />
        <img id="w_rook" src={urook} alt=" " />
        <img id="palm1" src={palm1}  alt=" " />
      </div>
      <div className="scenery" id="background2" ref={background2Movement.ref}>
        <img id="r_pawn" src={rpawn}  alt=" " />

        <img id="r_knight" src={rknight} alt=" " />
        <img id="palm2" src={palm2} alt=" " />
      </div>
    </div>
  );
}

export default App;
