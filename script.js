// ==========================================
// 1. ACADEMIC PLANNER LOGIC
// ==========================================
// This section handles adding, completing, and deleting tasks on the planner page.

// Grab the necessary HTML elements using their unique IDs
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// IMPORTANT: We use an 'if' statement to check if the 'addTaskBtn' actually exists on the page.
// This prevents JavaScript errors when we are on other pages (like the Contact page) where this button is missing.
if (addTaskBtn) {
    // Listen for a "click" on the Add Task button
    addTaskBtn.addEventListener('click', function() {
        
        // Get the text the user typed and remove any extra blank spaces at the beginning or end
        const taskText = taskInput.value.trim();

        // Prevent adding empty tasks
        if (taskText === "") {
            alert("Please enter a task first!");
            return; // Stop the function completely so it doesn't create an empty list item
        }

        // Create a new list item (<li>) for the task
        const li = document.createElement('li');
        
        // Create a span to hold the actual text of the task
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        // Create a container (div) to hold our Complete and Delete buttons
        const buttonDiv = document.createElement('div');

        // Create the "Complete" button and style it green
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.style.backgroundColor = '#27ae60'; 
        completeBtn.style.marginRight = '10px';
        
        // Create the "Delete" button and style it red
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#e74c3c'; 

        // When the Complete button is clicked, toggle the 'completed-task' CSS class (which crosses out the text)
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed-task');
        });

        // When the Delete button is clicked, remove this entire list item from the task list
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // Assemble everything: put the buttons into the div, and put the text and the div into the list item
        buttonDiv.appendChild(completeBtn);
        buttonDiv.appendChild(deleteBtn);
        li.appendChild(taskSpan);
        li.appendChild(buttonDiv);

        // Finally, add the fully assembled list item to the actual HTML task list on the page
        taskList.appendChild(li);

        // Clear the input box so the user can immediately type the next task
        taskInput.value = "";
    });
}

// ==========================================
// 2. CONTACT FORM VALIDATION
// ==========================================
// This section ensures the user fills out the contact form correctly before it can be submitted.

// Grab the form and the container where we will display error or success messages
const contactForm = document.getElementById('contact-form');
const formErrors = document.getElementById('form-errors');

// Check if the contact form exists on the current page before running this code
if (contactForm) {
    // Listen for the form's "submit" event (when the user clicks Send Message)
    contactForm.addEventListener('submit', function(event) {
        
        // CRITICAL: Prevent the browser from refreshing the page immediately
        event.preventDefault();

        // Clear out any old error messages from previous attempts
        formErrors.innerHTML = "";
        
        // Create an empty array to store any new error messages we find
        let errors = [];

        // Grab the values the user typed into the input fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // 1. Validate Name: Check if it's completely empty
        if (name === "") {
            errors.push("Full Name is required.");
        }

        // 2. Validate Email: Check if it's empty, OR if it's missing an '@' or a '.'
        if (email === "") {
            errors.push("Email Address is required.");
        } else if (!email.includes("@") || !email.includes(".")) {
            errors.push("Please enter a valid Email Address.");
        }

        // 3. Validate Phone Number: Check if it's empty, and use a Regular Expression (Regex) to ensure it only has numbers 0-9
        const phoneRegex = /^[0-9]+$/;
        if (phone === "") {
            errors.push("Phone Number is required.");
        } else if (!phoneRegex.test(phone)) {
            errors.push("Phone Number must contain digits only.");
        }

        // 4. Validate Message: Check if the textarea is empty
        if (message === "") {
            errors.push("Please enter a message before submitting.");
        }

        // 5. Display Errors or Success Message
        if (errors.length > 0) {
            // If there are errors in our array, join them together with line breaks (<br>) and show them in red
            formErrors.innerHTML = errors.join("<br>");
            formErrors.style.color = "#e74c3c"; 
        } else {
            // If the array is still empty, that means no errors were found! Show a green success message.
            formErrors.innerHTML = "Thank you, Aliu Olabanji! Your message has been validated successfully.";
            formErrors.style.color = "#27ae60"; 
            
            // Automatically wipe the form fields clean
            contactForm.reset(); 
        }
    });
}