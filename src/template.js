const generateManager = (manager) => {
  return `<div class="card custom-card col-lg-3 col-md-9 col-12 text-white m-3">
    <div class="card-header bg-primary">
      <h4>${manager.getName()}</h4>
      <h5><i class="me-2 bi bi-cup-hot-fill"></i>Manager</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group my-3">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul> 
    </div>
  </div>`
}

const generateEngineer = (engineer) => {
  return `<div class="card custom-card col-lg-3 col-md-9 col-12 text-white m-3">
    <div class="card-header bg-primary">
      <h4>${engineer.getName()}</h4>
      <h5><i class="me-2 bi bi-file-earmark-code-fill"></i>Engineer</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group my-3">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
      </ul> 
    </div>
  </div>`
}

const generateIntern = (intern) => {
  return `<div class="card custom-card col-lg-3 col-md-9 col-12 text-white m-3">
    <div class="card-header bg-primary">
      <h4>${intern.getName()}</h4>
      <h5><i class="me-2 bi bi-mortarboard-fill"></i>Intern</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group my-3">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul> 
    </div>
  </div>`
}

const generateTeamHTML = (teamCards) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
          crossorigin="anonymous">
    <link rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.3/font/bootstrap-icons.min.css" 
          integrity="sha512-YFENbnqHbCRmJt5d+9lHimyEMt8LKSNTMLSaHjvsclnZGICeY/0KYEeiHwD1Ux4Tcao0h60tdcMv+0GljvWyHg==" 
          crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
  </head>
  <body>
    <header class="bg-danger d-flex text-center">
      <div class="container-fluid my-5">
        <span class="h1 text-light">
          My Team
        </span>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="d-flex justify-content-center flex-wrap p-5">
          ${teamCards}
        </div>
      </div>
    </main>
  </body>
  </html>`
}

const getHTML = (team) => {
  const htmlArr = [];

  team.forEach(employee => {
    if (employee.getRole() === 'Manager'){
      let managerHTML = generateManager(employee);
      htmlArr.push(managerHTML);
    } else if (employee.getRole() === 'Engineer'){
      let engineerHTML = generateEngineer(employee);
      htmlArr.push(engineerHTML).join(' ');
    } else {
      let internHTML = generateIntern(employee);
      htmlArr.push(internHTML).join(' ');
    }
  });

  const teamCards = htmlArr.join(' ');
  const generatePage = generateTeamHTML(teamCards);
  return generatePage;
}

module.exports = getHTML();