// Define the async function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    // Fetch data using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create and append user list
        const userList = document.createElement('ul');
        
        // Loop through users array
        users.forEach(user => {
            // Create li element for each user
            const listItem = document.createElement('li');
            
            // Set text content to user's name
            listItem.textContent = user.name;
            
            // Append li to userList
            userList.appendChild(listItem);
        });
        
        // Append userList to dataContainer
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
