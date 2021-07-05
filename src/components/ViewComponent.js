import React, { Component } from 'react'
import ProductService from './ProductService'

class ViewComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            _id: this.props.match.params._id,
            employee: {}
        }
    }

    componentDidMount(){
        ProductService.getEmployeeById(this.state._id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = " col-md-6 offset-md-3">
              
                    <div className = "">
                        <div className = "row">
                            <label>Group name </label>
                            <div> { this.state.employee.groupname }</div>
                        </div>
                        <div className = "row">
                            <label> Number of Carrot: </label>
                            <div> { this.state.employee.carrot }</div>
                        </div>
                        <div className = "row">
                            <label> Note: </label>
                            <div> { this.state.employee.note }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewComponent