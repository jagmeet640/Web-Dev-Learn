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

        form.reset()
        

    });
});