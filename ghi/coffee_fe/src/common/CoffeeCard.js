import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

function CoffeeCard(props) {
    const date = new Date(props.date)
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        }
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date)

    return (
        <div className="my-3">
            <div id="accordion">
                <div className="card" id="card">
                    <div className="card-header" id="headingOne">
                        <h5>
                        <button id="btn-link" className="btn btn-link" data-bs-toggle="collapse" data-bs-target={`#${props.date}`} aria-expanded="true" aria-controls={`${props.date}`}>
                            {formattedDate}
                        </button>
                        </h5>
                    </div>
                    <div id={`${props.date}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        {props.coffees.map(coffee => {
                            var dateTime = new Date(coffee.date_time_brewed)
                            var minutes = dateTime.getMinutes()
                            var hours = dateTime.getHours()
                            return (
                                <div className="card-body">
                                    <h5 className="card-bean-name">
                                        {hours}:{minutes} - {coffee.bean.name}, {coffee.bean.roaster.name} - {coffee.rating}/10
                                    </h5>
                                    <div className="card-bean-body">
                                        {coffee.method.name}
                                    </div>
                                    <div className="card-bean-body">
                                        In: {coffee.coffee_dose_g} grams
                                    </div>
                                    <div className="card-bean-body">
                                        Out: {coffee.liquid_yield_g} grams
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
