function recommendWorkout() {

    let goal = document.getElementById("goal").value;

    let result = document.getElementById("result");

    if (goal == "weightloss") {
        result.innerHTML = "Your Workout: Running + Squats + Push Ups";
    }

    else if (goal == "muscle") {
        result.innerHTML = "Your Workout: Push Ups + Squats + Plank";
    }

    else {
        result.innerHTML = "Your Workout: Running + Squats + Stretching";
    }
}