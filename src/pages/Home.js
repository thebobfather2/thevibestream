import React, { useState } from 'react';
import "./Home.css";
import joehomebanner from "../img/joebackground.png";

function Home() {
  const [selectedGame, setSelectedGame] = useState("super-mario-64");

  const handleGameChange = (event) => {
    setSelectedGame(event.target.value);
  };

  return (
    <div className="MainContainer" style={{ minHeight: "100vh", position: "relative" }}>
    {/* Dropdown menu for game selection */}
    <div className="Dropdown" style={{ position: "absolute", top: "20px", left: "20px" }}>
      <select
        value={selectedGame}
        onChange={handleGameChange}
        style={{
          width: "200px", // Adjust the width as needed
          fontSize: "16px", // Adjust the font size as needed
          backgroundColor: "#000", color: "#ccc"
        }}
      >
          <option value="super-mario-64">Super Mario 64</option>
          <option value="mario-kart-64">Mario Kart 64</option>
          <option value="super-smash-bros">Super Smash Bros</option>
          <option value="007-goldeneye">007 GoldenEye</option>
          <option value="tony-hawks-pro-skater">Tony Hawk's Pro Skater</option>
          <option value="the-legend-of-zelda-ocarina-of-time">The Legend of Zelda: Ocarina of Time</option>
          <option value="star-fox-64">Star Fox 64</option>
          <option value="nfl-blitz-2001">NFL Blitz 2001</option>
          <option value="ken-griffey-jr">Major League Baseball featuring Ken Griffey Jr</option>
          <option value="spyro-the-dragon">Spyro the Dragon</option>
          <option value="sonic-the-hedgehog">Sonic the Hedgehog</option>
          <option value="mortal-kombat">Mortal Kombat</option>
          <option value="dinosaurs-for-hire">Dinosaurs for Hire</option>
          <option value="super-mario-bros">Super Mario Bros</option>
          <option value="super-mario-star-road">Super Mario Star Road Multiplayer v1.2.1</option>
        </select>
      </div>

      <iframe
        title="Mario"
        src={`https://www.miniplay.com/embed/${selectedGame}`}
        style={{
          width: "100%",
          border: "none",
          minHeight: "100vh",
        }}
      />
    </div>
  );
}

export default Home;

