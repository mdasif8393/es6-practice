class Student{
    constructor(name, id){
        this.name = name;
        this.age = id;
        this.school = "Zilla School"
    }
}

const student1 = new Student("Asif", 25);
const student2 = new Student("Anika", 26);
console.log(student1, student2);