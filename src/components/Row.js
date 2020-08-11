import React, { Component } from 'react'
import API from './utils/API'

export default class Row extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees()

            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err))
    }

    render() {
        return (

            <div>


                {this.state.employees.map(employee => (
                    <div className="row m-2">
                        <div className="col-md-1">
                            <img src={employee.picture.thumbnail} />
                        </div>
                        <div className="col-md-2">
                            <p>{employee.name.title} {employee.name.first} {employee.name.last} </p>
                        </div>
                        <div className="col-md-3">
                            <p>{employee.email}</p>
                        </div>
                        <div className="col-md-2">
                            <p>{employee.cell}</p>
                        </div>
                        <div className="col-md-4">
                            <p>Timezone: {employee.location.timezone.description}</p>
                        </div>
                    </div>
                ))}

            </div>

        )
    }
}
