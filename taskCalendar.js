function scheduleCheck() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Reading Wattpad");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: Exercise");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: Watching BL series");
            break;
        case "Thursday":
            alert("Your task for Thursday is: Finish your activities");
            break;
        case "Friday":
            alert("Your task for Friday is: Doing Household Chores");
            break;
        case "Saturday":
            alert("Your task for Saturday is: Gala");
            break;
        case "Sunday":
            alert("Your task for Sunday is: Go to Church");
            break;
        default:
            alert("Please only enter a day of a week.");
    }
}
