const  calculate = () =>{


    let web = document.querySelector("#web").value;
    let maths = document.querySelector("#maths").value;
    let comp = document.querySelector("#comp").value;
    let phy = document.querySelector("#phy").value;
    let grades =" ";


    let totalgrades = parseFloat(web) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    
    let percentage = (totalgrades / 400) * 100;
    
    if(percentage<=100 && percentage>=80){

        grades ="A";


    }
    else if(percentage<=79 && percentage>=60)

    {

        grades = "B";
    }
    else if(percentage<=59 && percentage>=40)
    {

        grades = "c";
    }

    else{

        grades ="F";
    }


    /// checking value are empty if empty than
    // show please fill them


    if(web == " " || maths == " " || comp == " " || phy == " ")
    {

        document.querySelector("#showdata").innerHTML ="please enter all the fields";


    }

    else{
         
        /// checking the condition for fail and pass.
        if(percentage >=39.5)
        {

            document.querySelector("#showdata").innerHTML = `Out of 400, your total is ${totalgrades} and percentage is  ${percentage}.00%  Your garde is ${grades}. You Passed.`; 
        }

        else{

            document.querySelector("#showdata").innerHTML  = `Out of 400, your total is ${totalgrades} and percentage is  ${percentage}.00% Your garde is ${grades}. You Fail.`; 
        }

    }
    

};