import Card from 'react-bootstrap/Card'
import { Accordion, Button } from 'react-bootstrap'

function DisplayCoffeeCards(props) {
    console.log(props.brewedCoffees)
    return (
        <div className="row">
            <Accordion>
                {props.brewedCoffees.map(brewedCoffee =>{
                    return (
                    <Card>
                        <Card.Body>{brewedCoffee.method.name}</Card.Body>
                            <Accordion.Toggle as={Button} variant>

                            </Accordion.Toggle>

                    </Card>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default DisplayCoffeeCards