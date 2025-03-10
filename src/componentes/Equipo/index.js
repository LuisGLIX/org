import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) =>{
    //Destructuración
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    
    const obj = {
        backgroundColor: hexToRgba(colorSecundario, 0.6)
    }

    const estiloTitulo = {borderColor: colorSecundario}

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input
                type='color'
                className="input-color"
                value={colorSecundario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id);
                }}
            />
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map( (colaborador, index) => <Colaborador
                    datos={colaborador} 
                    key={index} 
                    colorSecundario={colorSecundario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                 />)
            }
        </div>
    </section>
    }</>
}


export default Equipo