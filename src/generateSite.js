 //Manager Card
//  return 
 `<div class="row col-md-4">
            <div class="card">
                <div class="cardHead">${manager.name}</div>
                <div class="cardBody">Role:${manager.getRole()}</div>
                <div class="cardBody">ID: ${manager.id}</div>
                <div class="cardBody">Email:${manager.email}</div>
            </div>
        </div>`


//Engineer Card
// return 
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
// return 
`<div class="row col-md-4">
    <div class="card">
        <div class="cardHead">${intern.name}</div>
        <div class="cardBody">Role:${intern.getRole()}</div>
        <div class="cardBody">ID: ${intern.id}</div>
        <div class="cardBody">Email:${intern.email}</div>
        <div class="cardBody">School:${intern.school}</div>
    </div>
</div>`