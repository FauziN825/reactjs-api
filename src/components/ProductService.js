import axios from 'axios'


const Base_URL =  "http://localhost:8080/api/staffgroup";

class ProductService  {
    getEmployees(){
        return axios.get(Base_URL);
    }

    createEmployee(employee){
        return axios.post(Base_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(Base_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(Base_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(Base_URL + '/' + employeeId);
    }
}


export default new ProductService()