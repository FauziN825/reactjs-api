import React, { Component } from 'react'
import ProductService from './ProductService';

class CreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            _id: this.props.match.params._id,
            groupname: '',
            carrot: '',
            note: '',

        }
        this.changeGroupNameHandler = this.changeGroupNameHandler.bind(this);
        this.changeCarrotHandler = this.changeCarrotHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);

    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state._id === '_add'){
            return
        }else{
            ProductService.getEmployeeById(this.state._id).then( (res) =>{
                let employee = res.data;
                this.setState({groupname: employee.groupname,
                    carrot: employee.carrot,
                    note : employee.note,
                    
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {groupname: this.state.groupname, carrot: this.state.carrot, note: this.state.note};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state._id === '_add'){
            ProductService.createEmployee(employee).then(res =>{
                this.props.history.push('/groups');
            });
        }else{
            ProductService.updateEmployee(employee, this.state._id).then( res => {
                this.props.history.push('/groups');
            });
        }
    }
    
    changeGroupNameHandler= (event) => {
        this.setState({groupname: event.target.value});
    }

    changeCarrotHandler= (event) => {
        this.setState({carrot: event.target.value});
    }

    changeNoteHandler= (event) => {
        this.setState({note: event.target.value});
    }


    cancel(){
        this.props.history.push('/groups');
    }

    getTitle(){
        if(this.state._id === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Group Name: </label>
                                            <input placeholder="First Name" name="groupname" className="form-control" 
                                                value={this.state.groupname} onChange={this.changeGroupNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Number of Carrot </label>
                                            <input placeholder="Carrot" name="carrot" className="form-control" type="number"
                                                value={this.state.carrot} onChange={this.changeCarrotHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Note: </label>
                                            <input placeholder="Note" name="note" className="form-control" 
                                                value={this.state.note} onChange={this.changeNoteHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateComponent