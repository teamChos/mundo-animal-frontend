import React from "react";
import { Marker } from "react-leaflet";

import { LocationIcon } from "./IconLocation";

const Markers = () => {

  return (
    <Marker position={{lat: '-26.185346', lon: '-58.174413'}} icon={LocationIcon} />
  );
};

export default Markers;