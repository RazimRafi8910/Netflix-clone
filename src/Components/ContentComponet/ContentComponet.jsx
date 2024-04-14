import React from "react";
import "./ContentComponet.css";
import ContentCard from "../ContentCard/ContentCard";

function ContentComponet() {
  return (
    <> 
      <ContentCard
        tittle="Enjoy on your TV"
        description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        right={false}
      />
      <ContentCard
        tittle="Download your shows to watch offline"
        description="Save your favourites easily and always have something to watch."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        right={true}
      />
      <ContentCard
        tittle="Download your shows to watch offline"
        description="Save your favourites easily and always have something to watch."
        image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        right={false}
      />
      <ContentCard
        tittle="Download your shows to watch offline"
        description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        image="https://occ-0-7777-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
        right={true}
      />
    </>
  );
}

export default ContentComponet;
