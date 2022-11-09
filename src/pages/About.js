import "./Styles/About.css"
const About = ()=>{
    return(
        <div className="About-content">
            <div className="Title-about">
                <h1>Envíanos un correo, mensaje a cualquiera de nuestras redes sociales o marcanos</h1>
            </div>

            <div className="Redescontainer">

               <a href="https://www.instagram.com/" className="NopeL" target="_blank" rel="noopener noreferrer"> <div className="Facebooki">
                    <div className="ficon"><i className="bi bi-instagram"></i><p className="IZx">artesaniascasacruz</p></div>
                </div></a>
                <div className="Facebookf"><div className="ficon"><i className="bi bi-facebook" ></i><p className="IZx">Casa Museo Isidoro Cruz</p></div></div>
                <div className="Facebookw"><div className="ficon"><i className="bi bi-whatsapp"></i><p className="IZx">+52 1 951 308 8625</p></div></div>
                
            </div>
            <div className="Viisitas-about">
                <h1>Visitanos!</h1>

               

            
            </div>
            <div className="horario-container">
                    <h2>Horario</h2>
                    <h4>Lunes-Domingo</h4>
                    <h4>8am-7pm</h4>
                    <h4>Abrimos los 365 días del año</h4>
                    
                </div>
                
            
            <div className="Iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2457994564097!2d-96.69874958590977!3d16.86373112213648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c73ef01a188393%3A0x6e4542955d62f7c!2sAlebrijes%20Casa%20Cruz!5e0!3m2!1ses!2smx!4v1667842731074!5m2!1ses!2smx" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
            </div>
            <div className="Ferretolo"> <h4>Libres #1,71506, </h4>
                  <h4>San Matín Tílcajete</h4>
            </div>

            <div id="contact-form">
            <form>
	
	              <div className="contact-left">
	               <h1 className="c-l-heading"><font className="NmmsLK" >Escríbenos</font></h1>
	
	               <div className="f-name">
	               <font >Nombre</font>
	               <input type="text" placeholder="Nombre Completo"/>
	               </div>
                   <div className="f-name">
	               <font >Asunto</font>
	               <input type="text" placeholder="Pedidos, preguntas, etc..."/>
	               </div>
                   <div className="f-name">
	               <font >Número de teléfono</font>
	               <input id="eunu" type="number" placeholder="Tu celular"/>
	               </div>
	
	               <div className="f-email">
	               <font >Email</font>
	               <input type="email" placeholder="Ejemplo@gmail.com"/>
	       </div>
	</div>
	
	<div className="contact-right">
	
	<div className="message">
	<font >Mensaje</font>
	<textarea name="message" rows="5" cols="20" placeholder="Escribe algo..."></textarea>
	</div>
	
	<button>Enviar</button>
	</div>
		
	</form>

            </div>

        </div>
    );
}
export default About