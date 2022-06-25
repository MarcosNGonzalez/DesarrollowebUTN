import '../styles/ContactosPage.css';









const ContactosPage = (props) => {
    return (

        <main className="holder contactos">
        <div>
            <h2>Contacto rapido</h2>

            <form action="" method="" className="formulario">

                <p>
                    <label for="Nombre"> Nombre:</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="Email"> Email:</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="Telefono"> Telefono:</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="Mensaje"> Mensaje:</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>


            </form>

            <div className="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Utilizando cualquiera de los siguientes medios:
                </p>
                <ul>
                    <li>Wsp: +54 1152467954 </li>
                    <li>Email: Contacto@transportesrulo.com.ar </li>
                    <li>Facebook: @transportesXrulo </li>
                    <li>Instragram: @transportesXrulo </li>
                    <li>Twitter: @transportesXrulo </li>

                </ul>


            </div>



        </div>




    </main>
        
    );
}


export default ContactosPage;