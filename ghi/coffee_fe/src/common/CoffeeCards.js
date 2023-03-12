import Card from 'react-bootstrap/Card'
import ReactBsOverlay from '../components/reactbsoverlay'
import IconSidebar from '../components/IconSidebar'
import { Sidebar } from 'react-pro-sidebar'

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

    return (
        <div className="my-5 container">
            <div className='mb-3'>
                <ReactBsOverlay props={props} />
            </div>
            <div className="row mb-3">
                {Object.entries(dateGroupedCoffees).map(([date,coffees]) => {
                    return (
                        <Card key={date}>
                            <Card.Header>{date}</Card.Header>
                            {coffees.map(coffee => {
                                return (
                                    <Card.Body key={coffee.id}>
                                        {coffee.date_time_brewed.substring(11,17)}, {coffee.method.name}: {coffee.bean.roaster.name}, {coffee.bean.name}: {coffee.coffee_dose_g} grams in, {coffee.liquid_yield_g} grams out
                                    </Card.Body>
                                )
                            })}
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayCoffeeCards
