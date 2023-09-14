const stylePage = {
  width: '100%',
  lineHeight: '24px',
};

const styleH1 = {
  fontFamily: 'Roboto',
  fontSize: '48px',
  fontWeight: '500',
  padding: '0.5em',
};

const styleP = {
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: '400',
  padding: '0.2em 1.5em',
};

export default function Error() {
  return (
    <div style={stylePage}>
      <h1 style={styleH1}>Désolé, cette page n'existe pas</h1>
      <p style={styleP}>
        Veuillez essayer un autre identifiant ou une autre page
      </p>
    </div>
  );
}
