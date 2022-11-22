function newUser (name, age, country){
    var name = name || 'oscar';
    var age = age || 34;
    var country = country ||'col';
    console.log(name,age,country); 
}

newUser();
newUser('David',15,'CD');

function newAdmin (name = 'Oscar', age=32,country='PR'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Ana',23,'CR')