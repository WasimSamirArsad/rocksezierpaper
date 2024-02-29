let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let compscorepara=document.querySelector("#comp_score")
let userscorepara=document.querySelector("#user_score")


const drawmatch=()=>{
    console.log("match is draw")
    msg.innerText="Match Draw"
    msg.style.background="blue"
}

const gencomp=()=>{
    let list=["rock","paper","Scissor"]
    let compuser=list[ Math.floor(Math.random() *3 )]
     return compuser
}

const showwin=(userwin,choiceuser,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore
        console.log("you are win")
        msg.innerText=`you win! your ${choiceuser} bets computer ${compchoice}`
        msg.style.background="green"
        
    }
    else{
        compscore++;
        compscorepara.innerText=compscore
        console.log("you lose")
        msg.innerText=`you lose! computer ${compchoice} bets your ${choiceuser}`
        msg.style.background="red"
    }
}




const playGame=(choiceuser)=>{
    console.log("user choice ",choiceuser)
    //generate comp choice
     const compchoice=gencomp()
    console.log("comp choice",compchoice)

    if(choiceuser===compchoice){
      drawmatch()    
    }
    else{
        let userwin=true
        if(choiceuser=="rock"){
            //secissor , paper
            userwin=compchoice==="paper"? false:true

        }
        else if(choiceuser=="paper"){
            //rock ,scissor
            userwin=compchoice==="Scissor"? false:true
        }
        else{//user Scissor
            //paper,rock
            userwin=compchoice==="rock" ? false:true
        }
        showwin(userwin,choiceuser,compchoice)

    }
}



choices.forEach((choice)=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const choiceuser=choice.getAttribute("id")
        // console.log(`choice was clicked ${choiceuser}`)
        playGame(choiceuser)
    })
}
)


// condition ? true:false