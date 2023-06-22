import React from 'react';
const HomePage = (props) => {
    return (

<main className="holder">
        <div>
            <img className="logohome" src="images/home/cyberspace.jpg" alt="redlan" />
        </div>
        <div className="columnas">


            <section className="bienvenidos">


                <h2>Bienvenidos</h2>
                <p>Nuestro soporte tecnico de redes en Buenos Aires esta pensado para empresas que necesitan una
                    asistencia
                    técnica para sus sistemas informáticos. A través de planes mensuales de mantenimiento,
                    controlamos
                    el
                    hardware y software de su empresa, ya sea por medio de nuestra mesa de ayuda o bien en su
                    oficina
                    con
                    visitas de un técnico, nuestros clientes siempre cuentan con herramientas adecuadas para
                    prevenir
                    los
                    problemas antes que sucedan.</p>

            </section>
       
        <section className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
                <p>Tenemos mas de 20 años de experiencia en el mercado y trabajamos únicamente a traves de abonos, lo
                    que
                    nos
                    permite realizar un verdadero mantenimiento preventivo y correctivo sobre las computadoras,
                    servidores y
                    dispositivos. Nuestra asistencia incluye todo lo necesario para que su red funcione al nivel óptimo,
                    ya
                    sea
                    revisando y mantenimiento routers, switch y mas. Somos partners certificados de las mejores empresas
                    del
                    mercado y contamos con stock inmediato en caso de que fuera necesario cambiar partes.</p>

            </div>
        </section>
        </div>
       
    </main>



    );
}

export default HomePage;