document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Clear previous resume content
        resumeSection.innerHTML = '';

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());

        // Create resume content
        const resumeHTML = `
            <div class="profile">
                <h1>${name}</h1>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
            </div>
            <section id="education">
                <h2>Education</h2>
                <p>${education}</p>
            </section>
            <section id="experience">
                <h2>Work Experience</h2>
                <p>${experience}</p>
            </section>
            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
            </section>
        `;

        resumeSection.innerHTML = resumeHTML;
    });
});
