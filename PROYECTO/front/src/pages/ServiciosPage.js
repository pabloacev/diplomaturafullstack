import React from 'react';
const ServiciosPage = (props) => {
    return (
       

<main className="holder">
        <h2>Servicios</h2>
        <div className="servicio">
            <img src="images/servicios/si.jpg" alt="tren" />
            <div className="info">
                <h4>Auditorias Seguridad Informatica</h4>
                <p>Auditoría de seguridad informática es el proceso sistemático de examinar y verificar la seguridad de
                    los sistemas informáticos de una organización para determinar si el diseño, implementación y uso
                    cumplen con los estándares y las directrices requeridas para proteger la integridad, la
                    confidencialidad y la disponibilidad de la información almacenada en ellos.</p>
            </div>

        </div>

        <div className="servicio">
            <img src="images/servicios/lan.jpg" alt="tren"/>
            <div className="info">
                <h4>Cableado Estructurado</h4>
                <p>Auditoría de seguridad informática es el proceso sistemático de examinar y verificar la seguridad de
                    los sistemas informáticos de una organización para determinar si el diseño, implementación y uso
                    cumplen con los estándares y las directrices requeridas para proteger la integridad, la
                    confidencialidad y la disponibilidad de la información almacenada en ellos.</p>
            </div>

        </div>
        <div className="servicio">
            <img src="images/servicios/logonet.jpg" alt="tren"/>
            <div className="info">
                <h4>Soporte de redes LAN/WAN</h4>
                <p>Auditoría de seguridad informática es el proceso sistemático de examinar y verificar la seguridad de
                    los sistemas informáticos de una organización para determinar si el diseño, implementación y uso
                    cumplen con los estándares y las directrices requeridas para proteger la integridad, la
                    confidencialidad y la disponibilidad de la información almacenada en ellos.</p>
            </div>

        </div>



    </main>
              
    );
}

export default ServiciosPage;