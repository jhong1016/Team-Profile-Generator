const path = require("path");
const fs = require("fs");

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



module.exports = render;