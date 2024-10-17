document.getElementById('server').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'portfolio.html';
});

document.getElementById('about-me').addEventListener('click', function() {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('hobbies').addEventListener('click', function() {
    document.getElementById('hobbies').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', () => {
    const gameInput = document.getElementById('gameInput');
    const nicknameInput = document.getElementById('nicknameInput');
    const messageInput = document.getElementById('messageInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const gameText = gameInput.value.trim();
        const nicknameText = nicknameInput.value.trim();
        const messageText = messageInput.value.trim();

        if (!gameText || !nicknameText || !messageText) {
            alert("All fields must be filled out");
            return;
        }

        const li = document.createElement('li');
        li.textContent = `Game: ${gameText}, Nickname: ${nicknameText}, Message: ${messageText}`;

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        gameInput.value = '';
        nicknameInput.value = '';
        messageInput.value = '';
    });

    const requestForm = document.getElementById('requestForm');
    requestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const gameName = document.getElementById('gameName').value.trim();
        const nickname = document.getElementById('nickname').value.trim();
        const adminMessage = document.getElementById('adminMessage').value.trim();
        console.log(`Game sent to server: ${gameName}, Nickname: ${nickname}, Message: ${adminMessage}`);
        requestForm.reset();
    });
});
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    checkbox.nextElementSibling.style.textDecoration = 'line-through';
                } else {
                    checkbox.nextElementSibling.style.textDecoration = 'none';
                }
            });
});
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultDisplay = document.getElementById("result");

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        case "modulus":
            result = num1 % num2;
            break;
        case "power":
            result = Math.pow(num1, num2);
            break;
        default:
            result = "Invalid operation";
    }

    resultDisplay.textContent = `Result: ${isNaN(result) ? 'Please enter valid numbers' : result}`;
}
function calculateTax() {
    const carPrice = parseFloat(document.getElementById("carPrice").value);
    const taxResult = document.getElementById("taxResult");

    if (isNaN(carPrice) || carPrice < 0) {
        taxResult.textContent = "Please enter a valid price.";
        return;
    }

    let taxRate;

    if (carPrice > 10000) {
        taxRate = 0.25;
    } else if (carPrice >= 5000) {
        taxRate = 0.20;
    } else {
        taxRate = 0.15;
    }

    const taxAmount = carPrice * taxRate;
    taxResult.textContent = `Tax: $${taxAmount.toFixed(2)} (Rate: ${taxRate * 100}%)`;
}

        
        