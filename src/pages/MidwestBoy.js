import React from 'react';
import "./Home.css";
import joehomebanner from "../img/joebackground.png";

    
function MidwestBoy () {

  return (
    <main className="MainContainer">
      <section className={`p-3`}>
        <img className='imgHome' src={joehomebanner} />
      </section>
    </main>
  )
}

export default MidwestBoy;
