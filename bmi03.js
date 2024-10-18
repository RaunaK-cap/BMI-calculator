addEventListener( "submit", (e)=>{
    e.preventDefault();

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#results");
    result.style.color="white";
    

    if(height === ''|| height < 0 ||isNaN(height)){
        result.innerHTML = ` please give the valid number ${height}`;

    } else if(weight === ''|| weight < 0 ||isNaN(weight)){
        result.innerHTML = ` please give the valid number ${weight}`;

    } else {
        let bmi = (weight / ((height*height) / 10000)).toFixed(2); // (to fixed(2)): to get only 2 number after the decimal usefull whhen we get lots of decimal
        
        if ( bmi <= 18.6){
                result.innerHTML= `Under Weight ${bmi}`  

        } else if ( bmi >= 24.9){
            result.innerHTML=`Overweight ${bmi}`;

        } else {
            result.innerHTML= `Normal Weight ${bmi}`
        }
    }

    



})