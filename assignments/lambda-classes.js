class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }

    editGrade(student){
        let placeHolder = student.grade;
        
        if (Math.random() > .50){
            placeHolder = placeHolder + 10*Math.random()
        } else {
            placeHolder = placeHolder - 10*Math.random()
        }
        
        student.grade = placeHolder;
        
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.grade = attr.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => console.log(element));
        // for (let i = 0; i<this.favSubjects.length; i++){
        //     console.log(this.favSubjects[i]);
        // }
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}` );
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}` );
    }
    graduate(){
        if (this.grade >=70) {
            console.log (`Congrats on finishing Lambda School! Now go get a job.`)
        } else {
            console.log (`Keep coding, friend.`)
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

/* INSTRUCTOR OBJECTS */  

const tony = new Instructor({
    name: 'Tony',
    location: 'MN',
    age: 80,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: `I love JS`
  });

  const beatrice = new Instructor({
    name: 'Beatrice',
    location: 'Minneapolis',
    age: 25,
    gender: 'female',
    favLanguage: 'Scheme',
    specialty: 'back-end',
    catchPhrase: `Boolean`
  });

  const greg = new Instructor({
    name: 'Greg',
    location: 'Jacksonville',
    age: 24,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Led Zepp`
  });

/* STUDENT OBJECTS */  

const jake = new Student({
    name: 'jake',
    location: 'Rochester',
    age: 30,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Front-end',
    catchPhrase: `go big or go home`,
    className: 'web23',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 100,
  });

const trevor = new Student({
    name: 'Trevor',
    location: 'St. Paul',
    age: 31,
    gender: 'male',
    favLanguage: 'Latin',
    specialty: 'back-end',
    catchPhrase: `Descartes`,
    className: 'web23',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 86,
});

const frank = new Student({
    name: 'Frank',
    location: 'NW Roch',
    age: 31,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `tanenx`,
    className: 'web23',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 44,
});

/* PM OBJECTS */ 

const mike = new ProjectManager({
    name: 'Michael',
    location: 'FL',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Yes`,
    gradClassName: 'web1',
    favInstructor: 'Tony',
});

const ryan = new ProjectManager({
    name: 'Ryan',
    location: 'Wabasha',
    age: 91,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'back-end',
    catchPhrase: `Fortnite`,
    gradClassName: 'web4',
    favInstructor: 'Tony',
});

 const dan = new ProjectManager({
    name: 'Dan',
    location: 'Roch',
    age: 78,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `none`,
    gradClassName: 'mow1',
    favInstructor: 'Tony',
});


/*editGrade and graduate testing */ 
console.log(jake.grade)

jake.graduate();
jake.listsSubjects();



/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/