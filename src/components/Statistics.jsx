export default function Statistics2(props) {
  return (
    <section className="content">
      <h2 className="mt-3">Estadisticas</h2>
      <div className="info-boxes">
        {props.info.map((elemento, i) => {
            return <div className="info-box" key={elemento + i}>
                        <div className="box-icon">
                            <i
                                className={elemento.icono}
                                style={{ fontSize: "2.5rem", color: elemento.colorIcono }}
                            ></i>
                        </div>

                        <div className="box-content">
                            <span className="big">{elemento.cifra}</span>
                            {elemento.titulo}
                        </div>
                    </div>;
        })}
      </div>
    </section>
  );
}