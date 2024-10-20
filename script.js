var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePicInput = document.getElementById("profilePic");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePicInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        educationElement &&
        experienceElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePicFile = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePicURL = profilePicFile
            ? URL.createObjectURL(profilePicFile)
            : "";
        var resumeOutput = "<h2>Resume</h2>\n".concat(profilePicURL
            ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profilePic\">")
            : "", "\n<p><strong>Name:</strong> ").concat(name_1, "</p>\n<p><strong>Email:</strong> ").concat(email, "</p>\n<p><strong>Phone:</strong> ").concat(phone, "</p>\n<h3>Education:</h3>\n<p>").concat(education, "</p>\n<h3>Work Experience:</h3>\n<p>").concat(experience, "</p>\n<h3>Skills:</h3>\n<p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
        }
        else {
            console.error("One or more form elements are missing");
        }
    }
    else {
        alert("Please fill out all the fields");
    }
});
