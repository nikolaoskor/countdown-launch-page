# Countdown Launch Page

## Description

This is a countdown launch webpage created using HTML, CSS, and JavaScript. It features a full-screen video background, a countdown timer to the website's launch date, and modals for subscribing to a newsletter and for contacting. The modals are interactive and provide feedback to the user on successful form submission.

## Technologies Used

- **HTML:** For structuring the web pages.
- **CSS:** For styling and formatting the application.
- **JavaScript:** For adding interactivity and dynamic functionality.

## Tools Used

- **Visual Studio Code:** For writing and editing code.
- **Bootstrap:** For responsive design and UI components.
- **Font Awesome:** For using icons in the web page.

## Features

1. **Full-Screen Video Background:**
   - A video plays in the background to enhance the visual appeal of the landing page.

2. **Countdown Timer:**
   - Displays the remaining time until the website's official launch date.

3. **Newsletter Subscription:**
   - A modal allows users to enter their email address and subscribe to a newsletter.
   - Includes form validation to ensure a valid email format.

4. **Contact Form:**
   - A modal with a detailed contact form collects user information.
   - Displays appropriate form fields based on user input (e.g., military service based on gender).

5. **Social Media Links:**
   - Social media icons link to external profiles, enhancing user engagement.

## How to Run

Follow these steps to set up and run the application locally:

1. **Clone the Repository:**
   - Clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/nikolaoskor/countdown-launch-page.git
     ```
   - Alternatively, download the project as a ZIP file from the repository and extract it to your desired location.

2. **Open the Project:**
   - Navigate to the project folder in your file explorer.

3. **Launch the Application:**
   - Open the `index.html` file in a web browser. This will display the countdown launch page with all features enabled.

4. **Modify Launch Date (Optional):**
   - To change the countdown timer's end date, edit the JavaScript in `js/script.js`:
     ```javascript
     var countDownDate = new Date("Dec 5, 2027 15:37:25").getTime();
     ```
   - Replace `"Dec 5, 2027 15:37:25"` with your desired launch date and time.

## Demo

You can view the live demo of the project [here](https://nikolaoskor.github.io/countdown-launch-page/).     
