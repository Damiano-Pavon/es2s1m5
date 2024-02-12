import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import fantasy from "../Data/fantasy"
import CardItems from "./CardItems";


function Books() {
    return(
        <Container>
           <Row gap={5}>
            {fantasy.map((card)=>{
                return(
                    <CardItems
                    title={card.title}
                    img={card.img}
                    price={card.price}
                    />
                )
            })}
            </Row> 
        </Container>
    )
    
}

export default Books