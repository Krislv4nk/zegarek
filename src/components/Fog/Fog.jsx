
import { useState, useEffect, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

export const MyFog = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      setVantaEffect(
        FOG({
          THREE, // <-- ОЦЕ головне
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
           highlightColor: 0x451cae,
  midtoneColor: 0xae1c25,
  lowlightColor: 0x27e0d2,
  baseColor: 0x272525,
  blurFactor: 0.46,
  speed: 0.80,
  zoom: 0.50
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} style={{ width: '100vw', height: '100vh' }}>
      {children}
    </div>
  );
};
