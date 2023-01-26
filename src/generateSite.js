 //Manager Card
const generateHtml = (team) => {
 return `<div class="row col-md-4">
            <div class="card">
                <div class="cardHead">${team[0].name}</div>
                <div class="cardBody">Role:${team[0].getRole()}</div>
                <div class="cardBody">ID: ${team[0].id}</div>
                <div class="cardBody">Email:${team[0].email}</div>
            </div>
        </div>`


//Engineer Card
`<div class="row col-md-4">
    <div class="card">
        <div class="cardHead">${engineer.name}</div>
        <div class="cardBody">Role:${engineer.getRole()}</div>
        <div class="cardBody">ID: ${engineer.id}</div>
        <div class="cardBody">Email:${engineer.email}</div>
        <div class="cardBody">GitHub:${engineer.gitHubName}</div>
    </div>
</div>`

//Intern Card 
`<div class="row col-md-4">
    <div class="card">
        <div class="cardHead">${intern.name}</div>
        <div class="cardBody">Role:${intern.getRole()}</div>
        <div class="cardBody">ID: ${intern.id}</div>
        <div class="cardBody">Email:${intern.email}</div>
        <div class="cardBody">School:${intern.school}</div>
    </div>
</div>`
}

const generateCards = (team) => {
    
};


//write for loop for employee info index 
//create gen.cards fx
//update card data
//update CSS