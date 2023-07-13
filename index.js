fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json =>{
      //  let countries=document.getElementById('countries');
        let select=document.getElementById('select');
        let imags=document.getElementById('flags');
        json.forEach(country => {

            console.log(country);
           // let myli= document.createElement('li');
            let myoption=document.createElement('option');
            let myimag = document.createElement('img');
            myimag.src = country.flags.png;
            myimag.addEventListener('click',()=>{
            const message= `country name is ${country.name.common}\n`;
            alert(message);
            });
            myoption.innerHTML=country.name.common;
            //myli.innerHTML= country.name.common;
           // countries.appendChild(myli);
           select.appendChild(myoption);
            imags.appendChild(myimag);
        });
      });