// Object Array Storage
const randomArrObj = {
    first: [
        "Running", "Cycling", "Jumping Jacks", "Burpees", "Rowing", "Swimming", "Dancing", "Skipping Rope"
    ],

    middle: [
        "Push-ups", "Squats", "Deadlifts", "Bench Press", "Pull-ups", "Lunges", "Bicep Curls", "Plank"
    ],

    last: [
        "Yoga", "Stretching", "Pilates", "Foam Rolling", "Tai Chi", "Dynamic Stretching", "Static Stretching", "Pigeon Pose"
    ],
};

const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const generateWorkout = () => {
    const first = randomizer(randomArrObj.first);
    const middle = randomizer(randomArrObj.middle);
    const last = randomizer(randomArrObj.last);

    return `Today's workout routine: ${first} for cardio, ${middle} for strength, and ${last} for flexibility.`;
};


console.log(generateWorkout());