const fs = require("fs");
const path = require("path");

const templatesDir = path.resolve(__dirname, "../src");

const render = employees => {
  const html = [];
  
  employees.forEach(element => {
    switch (element.getRole()) {
      case "Manager":
        html.push(renderManager(element));
        break;
      case "Engineer":
        html.push(renderEngineer(element));
        break;
      case "Intern":
        html.push(renderIntern(element));
        break;
    }
  });

  return renderMain(html.join(''));

};

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
    return template;
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return template;
};

  
module.exports = render;