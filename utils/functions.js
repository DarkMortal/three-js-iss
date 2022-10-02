const factorAngle = Math.PI / 180;

export function calcPosFromLatLonRad({ lat, lon, radius }) {
  var phi = (90 - lat) * factorAngle;
  var theta = (lon + 180) * factorAngle;

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return { x, y, z };
}

export function clickZoom(value, zoomType){
  if (value >= 20 && zoomType === "zoomIn") {
    return value - 5;
  } else if (value <= 75 && zoomType === "zoomOut") {
    return value + 5;
  } else {
    return value;
  }
};