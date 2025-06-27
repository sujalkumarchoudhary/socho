// Show/hide "Other" text fields based on selection
document.getElementById('education-level').addEventListener('change', function() {
    const otherField = document.getElementById('education-other');
    otherField.classList.toggle('hidden', this.value !== 'Other');
    if (this.value !== 'Other') otherField.value = '';
});

document.querySelectorAll('input[name="tech-type"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const otherField = document.getElementById('tech-type-other');
        const otherChecked = document.querySelector('input[value="Other"]').checked;
        otherField.classList.toggle('hidden', !otherChecked);
        if (!otherChecked) otherField.value = '';
    });
});

// Basic form validation
document.getElementById('student-form').addEventListener('submit', function(e) {
    const checkboxes = document.querySelectorAll('input[name="tech-type"]:checked');
    if (checkboxes.length === 0) {
        e.preventDefault();
        alert('Please select at least one technology type.');
    } else {
        // Add loading animation on submit
        const button = document.querySelector('button');
        button.textContent = 'Submitting...';
        button.disabled = true;
        button.style.background = '#7f8c8d';
    }
});

// Trigger animations on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.form-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});