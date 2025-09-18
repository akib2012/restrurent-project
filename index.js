console.log("connected bhiya");


/* here categori item added and disply the ui */

/* load data */

fetch(" https://taxi-kitchen-api.vercel.app/api/v1/categories")
.then(res => res.json())
.then(cetegoris => cetegorisDisplay(cetegoris))

/* dis play the cetegoris */


const cetegorisDisplay  = (cetegoriss) =>{
    cetegoriss.forEach(element => {
        console.log(element);
        
    });
}