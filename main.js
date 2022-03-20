const inquirer = require("inquirer");

const cp = require('child_process')


function displayList(){
       inquirer
       .prompt([
         {
           type: "list",
           name: "selection",
           choices: ["About", "Skills", "Academics", "Projects","Portfolio","Resume","Contact"],
         },
       ])
       .then(function (ans) {
         if (ans.selection == "About") {
           console.log(`A passionately curious Web developer 
           who just found out that making websites and seeing 
           the magic happen on the Internet is what excites him the most.`);
           displayNext()
         } else if (ans.selection == "Skills") {
           console.log("Java , JavaScript , React , HTML , React Native,Data Structure & Algorithms, SQL");
           displayNext()
         } else if (ans.selection == "Academics") {
            cp.execSync('start chrome https://vishalkumar215.github.io/portfolio/education.html')
            displayNext()
         }else if (ans.selection == "Portfolio") {
            cp.execSync('start chrome https://vishalkumar215.github.io/portfolio/')
            displayNext()
         }
         else if (ans.selection == "Resume") {
            cp.execSync('start chrome https://drive.google.com/file/d/1vebeIx56NCY3pUIFFB3sDCpUrnfqmLJ3/view')
            displayNext()
         }
          else if (ans.selection == "Projects") {
            cp.execSync('start chrome https://github.com/vishalkumar215')
            displayNext()
         }
         else if (ans.selection == "Contact") {
            cp.execSync('start chrome https://vishalkumar215.github.io/portfolio/contact.html')
            displayNext()
         }
       });
}

displayList()

// Go back option ->

function displayNext(){
       inquirer
  .prompt([
    {
           type : 'list',
           name : 'selection',
           choices : ['Go back' , 'exit']

    }
  ])
  .then(function(ans){
    if(ans.selection =='Go back'){
           displayList()
    }
    else if(ans.selection == "exit"){
           console.log('Resume closed')
    }
  })
}
//augshgkudgekrgugrgrguxdcxguk