import Card from 'react-bootstrap/Card'
import { Accordion, Button } from 'react-bootstrap'

function DisplayCoffeeCards(props) {
    const allCoffees = props.brewedCoffees
    const dateGroupedCoffees = {}
    for (let coffee of allCoffees){
        if (coffee.date_time_brewed.substring(0,10) in dateGroupedCoffees){
            dateGroupedCoffees[coffee.date_time_brewed.substring(0,10)].push(coffee)
        } else {
            dateGroupedCoffees[coffee.date_time_brewed.substring(0,10)] = [coffee]
        }
    }
    console.log(typeof(dateGroupedCoffees))
    console.log(dateGroupedCoffees)
    console.log(typeof(props.brewedCoffees))
    console.log(props.brewedCoffees)
    return (
        <div className="row">
            {[dateGroupedCoffees].map(test => {
                return (
                    <div>
                        {Object.keys(test)}
                    </div>
                )
            })}
                {/*{props.brewedCoffees.map(brewedCoffee =>{
                    return (
                    <Card key={brewedCoffee.id}>
                        <Card.Body>{brewedCoffee.method.name}</Card.Body>


                    </Card>
                    )
                })}*/}
        </div>
    )
}

export default DisplayCoffeeCards
