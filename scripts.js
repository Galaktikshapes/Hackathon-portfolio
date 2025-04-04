/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    font-family: 'Arial', sans-serif;
    height: 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: #f4f7f6;
}

/* Full-screen Section */
.full-screen {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition: transform 0.5s ease-in-out;
    position: relative;
}

/* Centering the headings */
h1, h2, h3 {
    text-align: center;
    margin-bottom: 20px; /* Spacing below headings */
    font-weight: 600;
}

/* Welcome Section */
#welcome {
    background-color: #abc8a2;
    color: white;
    position: relative;
    overflow: hidden;
    z-index: 10;
}

.welcome-text {
    font-size: 3rem;
    font-weight: 600;
    animation: moveText 10s ease-in-out infinite alternate;
}

.highlight {
    color: #5e4b3c; /* Deep Olive */
}

/* Alternating background colors for each section /* About Section */
#about {
    background-color: #f0f5f1;
    color: #333;
    padding: 40px;
    animation: fadeIn 2s ease-out;
}

.about-text {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 20px 0;
    color: #333;
}

.about-text strong {
    color: #abc8a2; /* Highlight for your name */
}

#languages {
    background-color: #abc8a2; /* Green for this scene */
    color: #333;
    padding: 40px;
    margin-bottom: 50px; /* Bottom margin for spacing */
}

.languages-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    opacity: 0;
    animation: fadeInList 7s ease-out forwards;
    text-align: center; /* Center list items */
}

.languages-list li {
    font-size: 1.2rem;
    color: #333;
    background-color: #e0e0e0; /* Slightly darker gray */
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    opacity: 0;
    animation: fadeInItem 1s ease forwards;
    margin: 10px; /* Consistent spacing for list items */
}

/* Animation for Fade-In */
@keyframes fadeInItem {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInList {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

/* Educational Background Section */
#education {
    background-color: #ffffff; /* White for this scene */
    color: #333;
    padding: 40px;
    margin-bottom: 50px; /* Bottom margin for spacing */
}

.download-link {
    color: #abc8a2;
    text-decoration: none;
    font-weight: bold;
}

/* Interests Section */
#interests {
    background-color: #abc8a2; /* Green for this scene */
    color: white;
    padding: 40px;
    margin-bottom: 50px; /* Bottom margin for spacing */
}

/* Portfolio Section */
#portfolio {
    background-color: #ffffff; /* White for this scene */
    color: #333;
    padding: 40px;
    margin-bottom: 50px; /* Bottom margin for spacing */
}

/* Contact Form Section */
#contact {
    background-color: #abc8a2; /* Green for this scene */
    padding: 40px;
    margin-bottom: 50px; /* Bottom margin for spacing */
}

/* Container for centering content */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;
}

/* Consistent text styling */
.about-text, .languages-list li, .education-text {
    font-size: 1.25rem;
    line-height: 1.6;
    margin: 20px 0;
    color: #333;
}

.about-text strong, .education-text strong {
    color: #abc8a2; /* Highlight for your name */
}

/* Contact Form */
form {
    display: flex;
    flex-direction: column;
}

form label {
    margin-top: 10px;
    font-size: 1.1rem;
}

form input, form textarea {
    padding: 10px;
    margin: 10px 0;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

form button {
    background-color: #5e4b3c;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Animation for Fade-In */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Variance in Section Animations */
@keyframes moveText {
    0% {
        transform: translateX(-30px);
        opacity: 0;
    }
    100% {
        transform: translateX(30px);
        opacity: 1;
    }
footer {
    text-align: center;
    padding: 20px;
    background-color: #2d2d2d;
    color: white;
}

footer p {
    margin-bottom: 10px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-icon {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.social-icon:hover {
    background-color: #444;
}

.github {
    background-color: #333;
}

.linkedin {
    background-color: #0077b5;
}

.email {
    background-color: #d14836;
}

/* Add icons to the social links */
.social-icon.github::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg');
    width: 20px;
    height: 20px;
}

.social-icon.linkedin::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png');
    width: 20px;
    height: 20px;
}

.social-icon.email::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/a/a7/Email_icon.png');
    width: 20px;
    height: 20px;
}
footer {
    text-align: center;
    padding: 20px;
    background-color: #2d2d2d;
    color: white;
}

footer p {
    margin-bottom: 10px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-icon {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.social-icon:hover {
    background-color: #444;
}

.github {
    background-color: #333;
}

.linkedin {
    background-color: #0077b5;
}

.email {
    background-color: #d14836;
}

/* Add icons to the social links */
.social-icon.github::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg');
    width: 20px;
    height: 20px;
}

.social-icon.linkedin::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png');
    width: 20px;
    height: 20px;
}

.social-icon.email::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/a/a7/Email_icon.png');
    width: 20px;
    height: 20px;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #2d2d2d;
    color: white;
}

footer p {
    margin-bottom: 10px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-icon {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.social-icon:hover {
    background-color: #f5f7f5;
}

.github {
    background-color: #f5f7f5;
}

.linkedin {
    background-color: #f5f7f5;
}

.email {
    background-color: #f5f7f5;
}

/* Add icons to the social links */
.social-icon.github::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg');
    width: 20px;
    height: 20px;
}

.social-icon.linkedin::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo_2023.png');
    width: 20px;
    height: 20px;
}

.social-icon.email::before {
    content: url('https://upload.wikimedia.org/wikipedia/commons/a/a7/Email_icon.png');
    width: 20px;
    height: 20px;
}
  
  /* Footer Styles */
footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
}

.social-links {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    gap: 20px;
}

.social-links a {
    color: white;
    font-size: 24px; /* You can adjust the size */
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #f0a500; /* Adjust this for the hover color */
}

footer p {
    margin-bottom: 10px;
  
  /* Icon size adjustment */
.languages-icons .tech-item i {
    font-size: 50px; /* Adjust this size to your preference */
    color: #333; /* Adjust icon color */
    margin-bottom: 10px;
}

.languages-icons .tech-item span {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

}

  


}




