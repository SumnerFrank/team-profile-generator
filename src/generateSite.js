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
        <div class="cardHead">${team[i].name}</div>
        <div class="cardBody">Role:${team[i].getRole()}</div>
        <div class="cardBody">ID: ${team[i].id}</div>
        <div class="cardBody">Email:${team[i].email}</div>
        <div class="cardBody">GitHub:${team[i].gitHubName}</div>
    </div>
</div>`

//Intern Card 
`<div class="row col-md-4">
    <div class="card">
        <div class="cardHead">${team.name[i]}</div>
        <div class="cardBody">Role:${team[i].getRole()}</div>
        <div class="cardBody">ID: ${team[i].id}</div>
        <div class="cardBody">Email:${team[i].email}</div>
        <div class="cardBody">School:${team[i].school}</div>
    </div>
</div>`
}

const generateCards = (team) => {
    for (let i = 0; i < empArray.length; i++) {
        
    }
};


//write for loop for employee info index 
//create gen.cards fx
//update card data
//update CSS