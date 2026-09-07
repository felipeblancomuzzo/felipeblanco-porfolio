import { useNavigate } from 'react-router-dom';
import Working from "../../img/working-png.png";
import Button from "../Button/Button";
import "./Introduction.css";

const Introduction = () => {

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  }
  return (
           <div className='introduction'>
               <div>
                   <h1>Hola. <br></br> 
                       Yo soy Felipe.
                   </h1>
                   <p>
                       Estudiante de Ingeniería de Software en Jala University.
                   </p>
                   <div className='intro-button'>
                        <Button onClick={goToAbout} text="Conocer más sobre mí" />
                    </div>               
               </div>
               <div>
                   <img src={Working} alt="Dibujo trabajando" />
               </div>
           </div>
  )
}

export default Introduction;