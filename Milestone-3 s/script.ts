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
document.addEventListener("DOMContentLoaded", () => {
    // Safely get elements
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement | null;
  
    if (!form) {
      console.error("Form element not found!");
      return;
    }
  
    form.addEventListener("submit", (event: Event) => {
      event.preventDefault();
  
      // Safely get input values
      const name = (document.getElementById("name") as HTMLInputElement | null)?.value || "";
      const email = (document.getElementById("email") as HTMLInputElement | null)?.value || "";
      const phone = (document.getElementById("phone") as HTMLInputElement | null)?.value || "";
      const education = (document.getElementById("education") as HTMLInputElement | null)?.value || "";
      const experiance = (document.getElementById("experiance") as HTMLInputElement | null)?.value || "";
      const skills = (document.getElementById("skills") as HTMLInputElement | null)?.value || "";
  
      // Generate resume HTML
      const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
  
        <h3>Education</h3>
        <p>${education}</p>
  
        <h3>Experience</h3>
        <p>${experiance}</p>
  
        <h3>Skills</h3>
        <p>${skills}</p>
      `;
  
      // Update resume display element
      if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
      } else {
        console.error("The resume display element is missing!");
      }
    });
  });