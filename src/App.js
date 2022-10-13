import './css/style.css';
import Header from './components/Layout';
import Panels from './components/Panels';
import Btns from './components/Btns';
import Footer from './components/Footer';
import { useState } from 'react';
import { useRef } from 'react';
//import image1 from './img/member1.jpg';
//import image2 from './img/member2.jpg';

function App() {

  const arr = ['Blizzards', 'Calm', "Dusty_Road", "Escape", "Payday", "Retreat", "Seasonal", "Vespers"];
  const deg = 360 / arr.length;

  let [txt, setTxt] = useState(arr);
  const frame = useRef(null);
  return (
    <figure>
      <Header />
      <section ref={frame}>
        {
          txt.map((data, index) => {
            return <Panels key={index} num={index} txt={data} deg={deg} />
          })
        };
      </section>
      <Btns deg={deg} frame={frame} />
      <Footer />
    </figure>

  );
}

export default App;
