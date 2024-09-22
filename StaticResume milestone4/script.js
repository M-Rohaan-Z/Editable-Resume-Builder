document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Clear previous resume content
        resumeSection.innerHTML = '';
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
        // Create resume content
        var resumeHTML = "\n            <div class=\"profile\">\n                <h1>".concat(name, "</h1>\n                <p>Email: ").concat(email, "</p>\n                <p>Phone: ").concat(phone, "</p>\n            </div>\n            <section id=\"education\">\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n            </section>\n            <section id=\"experience\">\n                <h2>Work Experience</h2>\n                <p>").concat(experience, "</p>\n            </section>\n            <section id=\"skills\">\n                <h2>Skills</h2>\n                <ul>\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                </ul>\n            </section>\n        ");
        resumeSection.innerHTML = resumeHTML;
    });
});
