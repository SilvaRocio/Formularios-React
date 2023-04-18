import { useState } from "react";


const Controlados=()=>{
    const [title, setTitle]=useState('');
    const [descripcion, setDescripcion]=useState('');
    const [opciones, setOpciones]=useState('PENDIENTE');

    const accionBoton=(e)=>{

    };

    return (
        <form onSubmit={accionBoton}>
            <input type="text" placeholder="Ingrese Tarea" className="form-control mb-2" name="title"
            value={title} onChange={e=>setTitle(e.target.value)}/>
            
            <textarea  placeholder="Descripcion" className="form-control mb-2" name="descripcion" value={descripcion}
            onChange={e=>setDescripcion(e.target.value)}></textarea>

            <select className="form-select mb-2" name="opciones" value={opciones}
            onChange={e=>setOpciones(e.target.value)}>

                <option >PENDIENTE</option>
                <option >REALIZADO</option>

            </select>

            <button type="submit" className="btn btn-primary">PROCESAR</button>

        </form>
    )
}
export default Controlados;