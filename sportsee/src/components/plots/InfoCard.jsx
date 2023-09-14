/**
 * InfoCard component
 * @param {String} srcImg
 * @param {} colorImg
 * @param {} infoValue
 * @param {} infoUnit
 * @param {} infoLegend
 * @returns
 */
export default function InfoCard({
  srcImg,
  colorImg,
  infoValue,
  infoUnit,
  infoLegend,
}) {
  const styleImg = {
    backgroundColor: colorImg,
  };

  let nfObject = new Intl.NumberFormat('en-US');
  let output = nfObject.format(infoValue);

  return (
    <li className="infoCard">
      <figure>
        <img src={srcImg} alt="Icone" style={styleImg} />
        <figcaption>
          <p>
            {output}
            {infoUnit}
          </p>
          <p>{infoLegend}</p>
        </figcaption>
      </figure>
    </li>
  );
}
