const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function() {
        
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task first!");
            return;
        }

        const li = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const buttonDiv = document.createElement('div');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.style.backgroundColor = '#27ae60'; 
        completeBtn.style.marginRight = '10px';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = '#e74c3c'; 

        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed-task');
        });

        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        buttonDiv.appendChild(completeBtn);
        buttonDiv.appendChild(deleteBtn);
        li.appendChild(taskSpan);
        li.appendChild(buttonDiv);

        taskList.appendChild(li);

        taskInput.value = "";
    });
}

// 2. CONTACT FORM VALIDATION
const contactForm = document.getElementById('contact-form');
const formErrors = document.getElementById('form-errors');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        
        event.preventDefault();

        formErrors.innerHTML = "";
        
        let errors = [];

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "") {
            errors.push("Full Name is required.");
        }

        if (email === "") {
            errors.push("Email Address is required.");
        } else if (!email.includes("@") || !email.includes(".")) {
            errors.push("Please enter a valid Email Address.");
        }

        const phoneRegex = /^[0-9]+$/;
        if (phone === "") {
            errors.push("Phone Number is required.");
        } else if (!phoneRegex.test(phone)) {
            errors.push("Phone Number must contain digits only.");
        }

        if (message === "") {
            errors.push("Please enter a message before submitting.");
        }

        if (errors.length > 0) {
            formErrors.innerHTML = errors.join("<br>");
            formErrors.style.color = "#e74c3c"; 
        } else {
            formErrors.innerHTML = "Thank you, Aliu Olabanji! Your message has been validated successfully.";
            formErrors.style.color = "#27ae60"; 
            
            contactForm.reset(); 
        }
    });
}