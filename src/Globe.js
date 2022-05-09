import ReactGlobe from "react-globe";
import globeBackground from "./media/globe2.png";
import background from "./media/background.png";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const markers = [
  {
    id: "marker1",
    country: "Paraguai",
    color: "#1974D2",
    coordinates: [-20, -60],
    value: 50,
    mercosul: true,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker2",
    country: "Uruguai",
    color: "#1974D2",
    coordinates: [-31, -55.5],
    value: 50,
    mercosul: true,
    unasul: true,
    prosul: false,
  },
  {
    id: "marker3",
    country: "Argentina",
    color: "#1974D2",
    coordinates: [-32, -65],
    value: 50,
    mercosul: true,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker4",
    country: "Chile",
    color: "#1974D2",
    coordinates: [-32, -72],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker5",
    country: "Bolivia",
    color: "#1974D2",
    coordinates: [-15, -65],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: false,
  },
  {
    id: "marker6",
    country: "Brasil",
    color: "#1974D2",
    coordinates: [-10, -50],
    value: 50,
    mercosul: true,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker7",
    country: "Peru",
    color: "#1974D2",
    coordinates: [-10, -73],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker8",
    country: "Equador",
    color: "#1974D2",
    coordinates: [1, -78],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker9",
    country: "Colombia",
    color: "#1974D2",
    coordinates: [5, -74],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker10",
    country: "Venezuela",
    color: "#1974D2",
    coordinates: [10, -65],
    value: 50,
    mercosul: true,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker11",
    country: "Guiana",
    color: "#1974D2",
    coordinates: [7, -59],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: true,
  },
  {
    id: "marker12",
    country: "Suriname",
    color: "#1974D2",
    coordinates: [7, -56],
    value: 50,
    mercosul: false,
    unasul: true,
    prosul: false,
  },
  {
    id: "marker13",
    country: "Guiana Francesa",
    color: "#1974D2",
    coordinates: [7, -54],
    value: 50,
  },
];

export default function Globe() {
  const options = {
    enableCameraAutoRotate: false,
    enableCameraZoom: false,
    enableGlobeGlow: false,
    markerTooltipRenderer: (marker) =>
      `${marker.country} / ${marker.mercosul ? "Mercosul" : ""} - ${
        marker.unasul ? "Unasul" : ""
      } - ${marker.prosul ? "Prosul" : ""}`,
    markerType: "dot",
  };

  return (
    <div className="globe">
      <ReactGlobe
        height="90vh"
        width="100vw"
        globeBackgroundTexture={background}
        globeTexture={globeBackground}
        initialCoordinates={[-20, -60]}
        options={options}
        markers={markers}
      />
    </div>
  );
}
