document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const profilePicInput = document.getElementById(
      "profilePic"
    ) as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;

    if (
      profilePicInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const profilePicFile = profilePicInput.files?.[0];
      const profilePicURL = profilePicFile
        ? URL.createObjectURL(profilePicFile)
        : "";

      const resumeOutput = `<h2>Resume</h2>
${
  profilePicURL
    ? `<img src="${profilePicURL}" alt="Profile Picture" class="profilePic">`
    : ""
}
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<h3>Education:</h3>
<p>${education}</p>
<h3>Work Experience:</h3>
<p>${experience}</p>
<h3>Skills:</h3>
<p>${skills}</p>
`;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
      } else {
        console.error("One or more form elements are missing");
      }
    } else {
      alert("Please fill out all the fields");
    }
  });
