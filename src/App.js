import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from './Components/Banner/Banner';
import ContentComponet from './Components/ContentComponet/ContentComponet';
import AccordionSection from './Components/AccordionSection/AccordionSection';

function App() {
  return (
    <>
      <Banner />
      <ContentComponet />
      <AccordionSection/>
    </>
  )
}

export default App