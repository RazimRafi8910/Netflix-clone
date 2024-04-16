import React from "react";
import Accordion from "../Accordion/Accordion";
import "./AccordionSection.css";

function AccordionSection() {
  let data = [
    {
      qustion: "What is netflix",
      ans1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      ans2:"You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      qustion: "How much dose netflix cost",
      ans1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
    },
    {
      qustion: "Whare i can watch",
      ans1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      ans2:"You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      qustion: "How do i cancel",
      ans1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    }
  ];

  return (
    <div className="AccordContainer pb-3">
      <h1 className="head">Frequently Asked Questions</h1>
      {data.map(({qustion,ans1,ans2}, index) => (
        <Accordion key={index} qustion={qustion} ans1={ans1} ans2={ans2} />
      ))}
      <div className="inputContainer mt-4">
        <p className="fs-4">Ready to watch? Enter your email to create or restart your membership.</p>
        <input type="text" className="emailInput" name="email" />
        <button type="button" className="signBtn px-4 py-3">Get started</button>
      </div>
    </div>
  );
}

export default AccordionSection;
