# Service Promotion Website



Welcome to the Service Promotion Website! This is a responsive web application built with React, Tailwind CSS, and React Router. It showcases services like Web Development, SEO, and Digital Marketing, and includes features such as a Google Map integration and a contact form using Formspree.

## Live Demo

Check out the live version of the project: [Service Promotion Website](https://service-promotion.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Project Structure](#project-structure)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design:** Fully responsive design using Tailwind CSS.
- **Service Promotion:** Highlight services like Web Development, SEO, and Digital Marketing.
- **Google Maps Integration:** Shows the business location with Google Maps API.
- **Contact Form:** Allows users to send inquiries directly via a contact form using Formspree API.
- **Testimonials Section:** Fetches and displays testimonials using a free API.

## Technologies Used

- **React JS**
- **Tailwind CSS**
- **React Router**
- **Google Maps API**
- **Formspree API**

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager) or Yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Abhiii-shek/service-promotion-website.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd service-promotion-website
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```


5. **Start the development server:**

    ```bash
    npm run dev
    ```

6. **Open your browser and visit `http://localhost:5173` to view the application.**



### Contact Form

The contact form on the Contact Us page uses Formspree to handle submissions. Replace the Formspree endpoint in the `ContactForm` component with your own.



## Need To work on

1) Enhanced Form Validation: Add more robust validation on the contact form, including regex checks for email format and preventing spam submissions.
2) Loading States: Implement loading states for API calls, such as when the contact form is submitting or the testimonials are loading.
3) Adding Testinomials API
4) Adding google location API
5) Animations: Add smooth animations and transitions using libraries like react-spring to improve user experience.

