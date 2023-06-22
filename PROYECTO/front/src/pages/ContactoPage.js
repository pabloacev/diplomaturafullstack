import React from 'react';
const ContactoPage = (props) => {
    return (
       
        <main className="holder contacto">

        <div>
            <h2>Contacto Rapido</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <input type="text" name=""/>

                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>

        </div>

        <div className="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse usando los siguientes medios</p>
            <ul>
                <li>Telefono: xxxxxx</li>
                <li>Email: xxx@gmail.com</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
                <li>Skype:</li>
            </ul>
        </div>


    </main>

              
    );
}

export default ContactoPage;