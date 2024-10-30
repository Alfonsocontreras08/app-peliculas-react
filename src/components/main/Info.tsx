import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FaPlay, FaStar  } from 'react-icons/fa'
import { ContainerInfo, MiniAvatar, ButtonBuy } from "../styled.components"
import blackWidow from "../../assets/black-widow.png"
import context from "../../context/AppContext"

const Info = () => {
  
  const { state } = useContext(context)
  const history = useNavigate();
  
  const goToDetails = ()=>{
    history('/detail/2')
  }

  return (<>
    <ContainerInfo height={50}>
      <section className="icon-info">
        <FaPlay size={25} color={"red"}/>
      </section>
      <section className="tile-info">
        {state.name}
      </section>
      <section className="details-info" >
        <section className="list-info">
          <div>2020</div>
          <div>Fantastic</div>
          <div>{state.time}</div>
        </section>
      </section>
      <section className="details-info" >
        <section className="list-info">
          <div>
            <FaStar size={25} color="orange"/>
            <FaStar size={25} color="orange"/>
            <FaStar size={25} color="orange"/>
            <FaStar size={25} color="orange"/>
            <FaStar size={25} />
          </div>
        </section>
      </section>
      <section className="description">
        <div className="description-title">Plot Summary</div>
        <div className="description-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque nesciunt veniam incidunt natus consequuntur id officia repudiandae facere neque, minus quo vitae, nam ut voluptatibus beatae quisquam fugiat illum. Eum?</div>
      </section>

      <section className="description">
        <div className="description-title">Cast</div>
        <div className="images">
          {[1,2,3,4].map(item=> <MiniAvatar key={item} src={blackWidow}/> )}
          </div>
      </section>
      <section className="button-buy">
      <ButtonBuy key={'/hola'} onClick={goToDetails}>Comprar Ahora</ButtonBuy>
      </section>
    </ContainerInfo>
  </>)
}

export default Info