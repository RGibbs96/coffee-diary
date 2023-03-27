import Card from 'react-bootstrap/Card'
import ReactBsOverlay from '../components/reactbsoverlay'
import CoffeeCard from './CoffeeCard'
import DisplayRecommendationCard from './RecommendationCard'


function DisplayCoffeeCards(props) {
    const allCoffees = props.brewedCoffees
    const dateGroupedCoffees = {}
    let username = ""

    for (let coffee of allCoffees){
        if (coffee.date_time_brewed.substring(0,10) in dateGroupedCoffees){
            dateGroupedCoffees[coffee.date_time_brewed.substring(0,10)].push(coffee)
        } else {
            dateGroupedCoffees[coffee.date_time_brewed.substring(0,10)] = [coffee]
        }
    }

    if ('username' in localStorage){
        username = localStorage.getItem("username")
    }

    return (
        <div className="my-5 container-fluid">
            <div className="row">
                <div className="my-5 col-2" style={{color:"white"}}>
                    Future ad space?!
                </div>
                <div className="col-7">
                    {username !== ""?
                    <div>
                        <div id="welcome-header">
                            Welcome, {username}!
                        </div>
                        <div id="welcome-text">
                            What will you be brewing today?
                        </div>
                    </div>:
                    <div>
                        <div id="welcome-header">
                            Welcome to Coffee Diary!
                        </div>
                        <div id="welcome-text">
                            Login/Sign up to start brewing today.
                        </div>
                    </div>
                    }

                    <div className='mb-3'>
                        <ReactBsOverlay props={props} />
                    </div>
                    {Object.entries(dateGroupedCoffees).map(([date,coffees]) => {
                        return (
                            <div id="accordion" key={date}>
                                <CoffeeCard className="my-5" date={date} coffees={coffees} />
                            </div>
                        )
                    })}
                </div>
                <div className="my-5 col-3" style={{paddingTop:"17px"}}>
                    <DisplayRecommendationCard brewedCoffees={props.brewedCoffees} beans={props.beans} />
                </div>
            </div>
        </div>
    )
}

export default DisplayCoffeeCards
