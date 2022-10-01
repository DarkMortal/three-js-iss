const factorAngle = Math.PI / 180;

export default function calcPosFromLatLonRad({ lat, lon, radius }) {
  var phi = (90 - lat) * factorAngle;
  var theta = (lon + 180) * factorAngle;

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return { x, y, z };
}
