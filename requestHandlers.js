let exec = require("child_process").exec;
// function for handling index.html business logic
function index() {
   console.log("Request handler for index was called.");
   // Function that will delay for 10 seconds before returning the text.
   var content = "empty";

   exec("ls -lah", function (error, stdout, stderr) {
      content = stdout;
   })

   return content
}

// function for handling portfolio.html business logic
function portfolio() {
   console.log("Request for handler for portfolio was called.");
   return "These are some of our portfolio projects";
}


exports.index = index;
exports.portfolio = portfolio;