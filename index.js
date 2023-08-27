// submitData() takes two strings as arguments, one representing a user's name and the other representing a user's email.
function submitData(userName, userEmail){
    const userData = {
        name : userName,
        email: userEmail,
    };
    const configObj = {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };

    let submittedData = fetch("http://localhost:3000/users",configObj)
    .then((response) => response.json())
    .then((obj) => {
        // Show the id in the DOM.
        const idNum = document.createElement("p");
        idNum.innerHTML = obj.id;
        document.body.appendChild(idNum);
    })
    .catch((error) => {
        // Show the message error in the DOM
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = error.message;
        document.body.appendChild(errorMessage);
    })
        
    return submittedData
}
submitData("Manova","manova@email.com");



