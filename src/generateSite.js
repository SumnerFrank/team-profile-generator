 //Manager Card
const generateHtml = (team) => {
    console.log('inside genhtml', team);
    // for (let i = 0; i < team.length; i++) {
    //     let employee = team[i];
    //     console.log(team);
    //     console.log(employee);
    //     console.log(employee.getRole())
        // if(role === 'Manager') {

        // }
    


//Manager Card
const managerCard = manager => {
 return `<div class="row col-md-4">
            <div class="card">
                <div class="cardHead">${team[0].name}</div>
                <div class="cardBody">Role:${team[0].getRole()}</div>
                <div class="cardBody">ID: ${team[0].id}</div>
                <div class="cardBody">Email:${team[0].email}</div>
            </div>
        </div>`
};

const engineerCard = engineer => {
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
};

//Intern Card 
const internCard = intern => {
`<div class="row col-md-4">
    <div class="card">
        <div class="cardHead">${team.name[i]}</div>
        <div class="cardBody">Role:${team[i].getRole()}</div>
        <div class="cardBody">ID: ${team[i].id}</div>
        <div class="cardBody">Email:${team[i].email}</div>
        <div class="cardBody">School:${team[i].school}</div>
    </div>
</div>`
};
}
generateHtml();

//write for loop for employee info index 
//create gen.cards fx
//update card data
//update CSS

module.exports = generateHtml;