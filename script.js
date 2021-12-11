//function tutorial

function calculateInterest(){
let principal = document.getElementById('p').value;
let time = document.getElementById('t').value;
let rate = document.getElementById('r').value;

let si = principal * time * rate / 100;

document.getElementById('info').innerHTML = si;
    }




    //object in js tutorial
    let person = {
        fname:"barsha",
        lname:"sharma",
        age:21,
        location:"KTM",
        fullname:function(){
            return this.fname +" " + this.lname;
        }
    }
    document.write(person.fullname());

    // random num tutorial
   /* let a = Math.PI;
    document.write(a)


    let b = Math.sqrt(25);
    document.write(b); */

    let c = (Math.random()*6);
    document.write(c);



 

