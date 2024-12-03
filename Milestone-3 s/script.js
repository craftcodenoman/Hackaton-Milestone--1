// const form = document.getElementById("resume-form") as HTMLFormElement;
// const resumeDisplayElement = document.getElementById(
//   "resume-display"
// ) as HTMLDivElement;
// form.addEventListener("submit", (event: Event) => {
//   event.preventDefault();
//   const name =       (document.getElementById("name") as HTMLInputElement).value;
//   const email =      (document.getElementById("email") as HTMLInputElement).value;
//   const phone =      (document.getElementById("phone") as HTMLInputElement).value;
//   const education =  (document.getElementById("education") as HTMLInputElement).value;
//   const experiance = (document.getElementById("experiance") as HTMLInputElement).value;
//   const skills =     (document.getElementById("skills") as HTMLInputElement).value;
//     const resumeHTML = `
//     <h2><b> Resume</b> </h2>
//     <h3>Personal Information</h3>
//     <p><b>Name:</b>${name}</p>
//     <p><b>Email:</b>${email}</p>
//     <p><b>Phone:</b>${phone}</p> 
//     <h3>Education</h3>
//     <p>${education}</p>
//     <h3>Experiance</h3>
//     <p>${experiance}</p>
//     <h3>Skills</h3>
//     <p>${skills}</p>
//     `;
//   if(resumeDisplayElement) {
//     resumeDisplayElement.innerHTML = resumeHTML;
//   }else {
//     console.error( 'The Resume display element is missing!');
//   }
// });
// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Safely get elements
    var form = document.getElementById("resume-form");
    var resumeDisplayElement = document.getElementById("resume-display");
    if (!form) {
        console.error("Form element not found!");
        return;
    }
    form.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f;
        event.preventDefault();
        // Safely get input values
        var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "";
        var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "";
        var phone = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || "";
        var education = ((_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value) || "";
        var experiance = ((_e = document.getElementById("experiance")) === null || _e === void 0 ? void 0 : _e.value) || "";
        var skills = ((_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value) || "";
        // Generate resume HTML
        var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(name, "</p>\n        <p><b>Email:</b> ").concat(email, "</p>\n        <p><b>Phone:</b> ").concat(phone, "</p>\n  \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n  \n        <h3>Experience</h3>\n        <p>").concat(experiance, "</p>\n  \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
        // Update resume display element
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        }
        else {
            console.error("The resume display element is missing!");
        }
    });
});
