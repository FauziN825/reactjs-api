import React, { Component } from 'react'
import ProductService from './ProductService'

class ListComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(_id){
        ProductService.deleteEmployee(_id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee._id !== _id)});
        });
    }
    viewEmployee(_id){
        this.props.history.push(`/view-group/${_id}`);
    }
    editEmployee(_id){
        this.props.history.push(`/add-group/${_id}`);
    }

    componentDidMount(){
        ProductService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-group/_add');
    }

    render() {
        return (
            <div>
                 
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Create New Group</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Group Name</th>
                                    <th> Number of Carrot</th>
                                    <th> Note</th>
                                    <th> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee._id}>
                                             <td> { employee.groupname} </td>   
                                             <td> {employee.carrot}</td>
                                             <td> {employee.note}</td>
                                             
                                             <td>
                                                 {/* <button onClick={ () => this.editEmployee(employee._id)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee._id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee._id)} className="btn btn-success">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListComponent