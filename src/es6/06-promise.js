const anotherFuncion = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Oki');
        }else{
            reject('Cagada');
        }
    }
)}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));