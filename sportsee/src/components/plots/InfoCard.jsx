export default function InfoCard({ infoValue, infoUnit, infoLegend }) {
  return (
    <li>
      <p>
        {infoValue}
        {infoUnit}
      </p>
      <p>{infoLegend}</p>
    </li>
  );
}
