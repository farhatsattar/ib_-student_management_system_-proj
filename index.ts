'#!/bin/usr/env node';

import inquirer from "inquirer";

const randomNumber: number = Math.floor(10000 + Math.random()*90000);

let myBalance :number = 0;
let answer = await inquirer.prompt([
    {
        name :"students",
        type : "input",
        message : "Enter student name:",
        validate : function(value){
            if(value.trim() !== ""){
                return true;
            }return "please enter a non-empty value.";
        }
    },

    {
        name : "courses",
        type : "list",
        message : "select the course to enroll",
        choices : ["typescript","javascript","HTML","CSS","python"]
    },

]
);

const tuitionFee:{[key:string]:number}={


    "typescript" : 6000,
    "javascript" : 5000,
     "HTML"      :3000,
     "CSS"       : 3000,
     "python"    :8000



};

console.log(`\nTuition Fee:${tuitionFee[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);

let paymentType = await inquirer.prompt([

    {
        name : "payment",
        type : "list",
        message :"select your payment method!",
        choices : ["Bank transfer","Easypaisa","Jazzcash"]

    },
    {

      name : "amount",
      type : "input",
      message : "Transfer Money :",
      validate : function(value) {
        if(value.trim()!==""){
            return true;
        }
        return "please enter a non-empty value .";

      } 
    }
])
console.log(`\n you select paymentg method :${paymentType.payment}\n`);
const tuitionFees = tuitionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount)
if (tuitionFees===paymentAmount){

    console.log(`Congratulation! you are successfully enrolled in :${answer.courses}.\n`);
    let ans= await inquirer.prompt([
        {
            name : "select",
            type : "list",
            message : "what would you like to do next?",
            choices : ["view status","Exit"]
        }
    ])
    if(ans.select === "view status" ){


        console.log("\n******status******\n");
        console.log(`student Name:${answer.students}`);
        console.log(`student ID:${randomNumber}`);
        console.log(`course:${answer.courses}`);
        console.log(`Tuition fee paid:${paymentAmount}`);
        console.log(`Balance :${myBalance += paymentAmount}`);

        
        
        }else{

            console.log(`\n Existing School Management System\n`);
            
        }


    
}else{
    console.log("Invalid amount due to course.\n ");
    
}


