/**
 * InfoCard component to display the information of the user
 * @param {String} srcImg - Path of the image
 * @param {String} colorImg - Color code for the background of the image
 * @param {Number} infoValue - Value to be displayed
 * @param {String} infoUnit - Unit of the value
 * @param {String} infoLegend - Legend of the value
 * @returns {JSX.Element} - Return the info card as li
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
