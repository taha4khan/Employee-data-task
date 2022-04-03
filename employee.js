var employee = [
     {
        "f_name":"taha",
        "l_name":"khan",
        "id":001,
        "salary":25000
    },
    {
        "f_name":"khubaib",
        "l_name":"hanif",
        "id":002,
        "salary":30000
    },
    {
        "f_name":"shaikh",
        "l_name":"wahab",
        "id":003,
        "salary":35000
    }
]

console.log(employee)

class Employee {
    constructor(f_name,l_name,id,salary){
        this.f_name=f_name
        this.l_name=l_name
        this.id=id
        this.salary=salary
    }
    getf_name(){
        
        for(let i=0; i<employee.length; i++){
            
            if (employee[i].f_name == this.f_name){
                console.log(employee[i].id);
            }    
        }

//        return this.f_name
    }
    getl_name(){
        
        return this.l_name
    }
    getid(){
        
        return this.id
    }  
    getsalary(){
        
        return this.salary
    } 
}

var Emp = new Employee("taha","khan","001","25000");
Emp.getf_name()
// console.log(Emp.getf_name());
// console.log(Emp.getl_name());
// console.log(Emp.getid());
// console.log(Emp.getsalary());