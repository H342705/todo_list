import inquirer from "inquirer";
let dataStorage = [];
let answer = [
    {
        type: "list",
        name: "tasks",
        message: "Please select the option",
        choices: ["Add Task", "Delete Tasks", "Replace Tasks", "View Tasks List", "Exit"]
    }
];
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
];
let delet = [
    {
        type: "string",
        name: "remove",
        message: "Please Enter your taskTitle to delete that tasks"
    }
];
let replace = [
    {
        type: "string",
        name: "replac",
        message: "Please Enter Your tasks title to replace"
    }
];
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
];
while (true) {
    let { tasks } = await inquirer.prompt(answer);
    if (tasks == "Add Task") {
        let { title, adding } = await inquirer.prompt(add);
        let addTasks = {
            taskTitle: title,
            description: adding
        };
        dataStorage.push(addTasks);
        console.log("Congratulation, Your Tasks Is added");
        console.log(addTasks);
    }
    else if (tasks == "Delete Tasks") {
        let { remove } = await inquirer.prompt(delet);
        for (let i = 0; i < dataStorage.length; i++) {
            if (dataStorage[i].taskTitle == remove) {
                dataStorage.splice(i, 1);
                console.log('Congratulation, Your specific tasks is deleted');
                break;
            }
            else if (dataStorage[i].title !== remove && i == dataStorage.length) {
                console.log("Invalid Tasks Title Name");
            }
        }
    }
    else if (tasks == "Replace Tasks") {
        let { replac } = await inquirer.prompt(replace);
        for (let i = 0; i < dataStorage.length; i++) {
            if (dataStorage[i].taskTitle == replac) {
                let { neewTitle, neewDes } = await inquirer.prompt(newAdd);
                let addTasks = {
                    taskTitle: neewTitle,
                    description: neewDes
                };
                dataStorage.splice(i, 1, addTasks);
                console.log("Congratulaion, Your Tasks Is Completely Replace With New Tasks");
            }
            else if (dataStorage[i].title !== replac && i == dataStorage.length - 1) {
                console.log("Invalid Tasks Title Name");
            }
        }
    }
    else if (tasks == "View Tasks List") {
        console.log(dataStorage);
    }
    else if (tasks == "Exit") {
        break;
    }
}
// let array: any[] = [];
// let replace = [
//     {
//     title : "fog",
//     des: "wrokign ok"
//     },
//     {
//     title : "gOOD",
//     des: "wORK as ok"
//     }
// ]
// // console.log()
// for(let i = 0; i < replace.length; i++){
//     if(replace[i].title == "fog"){
//         console.log(replace[i]);
//         console.log("Now you enter your new tasks to replace")
//         replace.splice(i,1,{title: "khan", des: "now change"})
//         console.log(replace);
//         break;
//     }else if(replace[i].title !== "fog" && i == replace.length-1){
//     console.log("outside not valid")
//     }
// }
