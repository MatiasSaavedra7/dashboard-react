function Statistics(info) {
  return (
    <section className="content">
      <h2 className="mt-3">Estadísticas</h2>
      <div className="info-boxes">
        {info.props.map((element, i) => {
          <div key={element + i} className="info-box">
            <div className="box-icon">
              <i
                className={element.icono}
                style={{ fontSize: "2.5rem", color: element.colorIcono }}
              ></i>
            </div>

            <div className="box-content">
              <span className="big">{element.cifra}</span>
              { element.titulo }
            </div>
          </div>;
        })}
      </div>
    </section>
  );
}

export default Statistics;
