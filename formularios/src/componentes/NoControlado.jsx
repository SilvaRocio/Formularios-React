import { useRef } from "react";

const NoControlado=()=>{
    const form= useRef(null);
    // console.log(form);
    const accionBoton=(e)=>{
        e.preventDefault();

        // console.log("me diste click");
        /******************* Capturando los datos******* */
        const data= new formData(form.current);

        const {title,descripcion,opciones}= Object.fromEntries([...data.entries()]);

        if (title.trim()===""){
            console.log("completa el campo");
        }
        if (descripcion===""){
            console.log("completa el campo");
        }


        
    };
    return (
        <form action=""  onSubmit={accionBoton} ref={form}>
            <input type="text" placeholder="Ingrese Tarea" className="form-control mb-2" name="title"/>
            
            <textarea  placeholder="Descripcion" className="form-control mb-2" name="descripcion"></textarea>

            <select className="form-select mb-2" name="opciones">

                <option >PENDIENTE</option>
                <option >REALIZADO</option>

            </select>

            <button type="submit" className="btn btn-primary">PROCESAR</button>

        </form>
    )
}
export default NoControlado;