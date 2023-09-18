console.log("linked properly")

document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".Activity-Form")
    const sideNav = document.querySelector(".side-nav")
    document.addEventListener("submit", function(event){
        event.preventDefault()

        // Get the values from the form inputs
        const activityTitle = document.querySelector('input[name="Activity-title"]').value;
        const description = document.querySelector('input[name="Description"]').value;


        console.log(activityTitle)
        console.log(description)

        const activityItem = document.createElement("div")
        activityItem.classList.add("activity-item")
        activityItem.innerHTML = `<h3>${activityTitle}</h3><p>${description}</p>`;

        sideNav.appendChild(activityItem);

        form.reset()

    });
});



// Create a new element to display the activity information
const activityItem = document.createElement("div");
activityItem.setAttribute("class","activity-show")
activityItem.classList.add("activity-show");
activityItem.innerHTML = `${activityTitle}`;


// Append the new activity item to the side navigation
sideNav.appendChild(activityItem);