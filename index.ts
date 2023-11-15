import gradient from "gradient-string";
import showBanner from "node-banner";
import inquirer from "inquirer";
import chalk from "chalk";

let dataStorage: any[] = [];
let answer = [
    {
        type: "list",
        name: "tasks",
        message: "Please select the option",
        choices: ["Add Task","Delete Tasks","Replace Tasks","View Tasks List","Exit"]
    }
]
let add = [
    {
        type: "string",
        name: "title",
        message: "please Enter your tasks title"
    },
    {
        type: "string",
        name: "adding",
        message: "Please Enter your tasks description"
    }
]
let delet = [
    {
        type: "string",
        name: "remove",
        message: "Please Enter your taskTitle to delete that tasks"
    }
]
interface addtask {
    taskTitle: string,
    description: string
}
let replace = [
    {
        type: "string",
        name: "replac",
        message: "Please Enter Your tasks title to replace"
    }
]
let newAdd = [
    {
        type: "string",
        name: "neewTitle",
        message: "Please Enter Your tasks title to Add"
    },
    {
        type: "string",
        name: "neewDes",
        message: "Please Enter Your tasks Description to Add"
    }
]
while(true){
    let {tasks} = await inquirer.prompt(answer); 
    if(tasks == "Add Task"){
        let {title,adding} = await inquirer.prompt(add);
        let addTasks: addtask = { 
            taskTitle: title,
            description: adding   
        }
        dataStorage.push(addTasks)
        console.log("Congratulation, Your Tasks Is added")
        console.log(addTasks)
    }else if(tasks == "Delete Tasks"){
        let {remove} = await inquirer.prompt(delet);
        for(let i = 0; i < dataStorage.length; i++){
                if(dataStorage[i].taskTitle == remove){
                    dataStorage.splice(i,1);
                    console.log('Congratulation, Your specific tasks is deleted');
                    break;
                }else if(dataStorage[i].title !== remove && i == dataStorage.length-1){
                    console.log("Invalid Tasks Title Name");
                }
            }
    }else if(tasks == "Replace Tasks"){
        let {replac} = await inquirer.prompt(replace)
        for(let i = 0; i < dataStorage.length; i++){
            if(dataStorage[i].taskTitle == replac){
                let {neewTitle,neewDes} = await inquirer.prompt(newAdd)
                let addTasks: addtask = { 
                    taskTitle: neewTitle,
                    description: neewDes   
                }
                dataStorage.splice(i,1,addTasks);
                console.log("Congratulaion, Your Tasks Is Completely Replace With New Tasks")
            }else if(dataStorage[i].title !== replac && i == dataStorage.length-1){
                console.log("Invalid Tasks Title Name")
            }
        }
    }else if(tasks == "View Tasks List"){
        console.log(dataStorage)
    }else if(tasks == "Exit"){
        break;
    }
}
