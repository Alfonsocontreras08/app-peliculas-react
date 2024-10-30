import { useEffect, useState } from "react";
import { Container, Avatar, AvatarContainer, Degrade} from "../styled.components"
import { getAuthConnection } from "../../common/auth";
import { IItem, IMovie } from "../../interfaces/movie";
import IronMan from '../../assets/iron-man.png'
import Context from '../../context/AppContext'
const Carousel = () => {
  const [ data, setData ] = useState<IMovie[]>([]);
  
  const getData = async (): Promise<void> => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const uri = `/characters?${getAuthConnection()}`

    const items = await fetch(baseURL+uri)
    const response = await items.json();
    const aItems = response.data.results.map((item:IItem)=>{
      const obj: IMovie = {
        name: item.name,
        description: item.description,
        thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`
      }
      return obj
    });

    setData(aItems)
  }
  

  useEffect(()=>{
    getData()
  }, [])


  if(data.length>0){
    return (<>
      <Container height={50} src={data[3].thumbnail} ></Container>
      <AvatarContainer >
        <Avatar height={50} src={IronMan}></Avatar>
      </AvatarContainer>
      <Degrade height={50}></Degrade>
      </>)
  }

  return <section className="loading">Cargando !!!!</section>
}

export default Carousel