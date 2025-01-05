const fs = require("fs");

const outcome = process.env.INPUT_CYPRESS_OUTCOME;

const badge =
  outcome === "success"
    ? "![Cypress Success](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)"
    : "![Cypress Failure](https://img.shields.io/badge/test-failure-red)";

const readmePath = "./README.md";
let content = fs.readFileSync(readmePath, "utf8");
content = content.replace(
  /RESULTAT DELS ÚLTIMS TESTS.*/,
  `RESULTAT DELS ÚLTIMS TESTS\n\n${badge}`
);
fs.writeFileSync(readmePath, content);
