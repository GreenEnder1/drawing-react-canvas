import React from 'react'
import { SettingsLeft, SettingsRight } from './Settings';
import { Canvas } from './Canvas'
import { Header } from './Header';
import { Footer } from './Footer';

function App() {
  return (
    <>
      <Header/>
      <hr/>
      <div className="body-elements">
      <SettingsLeft/>
      <Canvas/>
      <SettingsRight/>
      </div>
      <hr/>
      <Footer/>
    </>
  );
}

export default App;
