# Workout Routine Generator

## Overview

This project generates a random workout routine by combining three different types of exercises: cardio, strength, and flexibility. The exercises are stored in an object with three arrays, and the routine is created by randomly selecting one exercise from each array.

## Code Structure

### Object Array Storage

The `randomArrObj` object contains three arrays:
- **first**: Contains different cardio exercises.
- **middle**: Contains various strength exercises.
- **last**: Contains different flexibility exercises.

```javascript
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
```

### Randomizer Function

The `randomizer` function takes an array as an argument and returns a random element from that array.

```javascript
const randomizer = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

### Generate Workout Function

The `generateWorkout` function uses the `randomizer` function to select one random exercise from each array in the `randomArrObj` object. It then combines these exercises into a coherent workout routine string.

```javascript
const generateWorkout = () => {
    const first = randomizer(randomArrObj.first);
    const middle = randomizer(randomArrObj.middle);
    const last = randomizer(randomArrObj.last);

    return `Today's workout routine: ${first} for cardio, ${middle} for strength, and ${last} for flexibility.`;
};
```

### Example Usage

The `console.log(generateWorkout())` statement generates and prints a random workout routine.

```javascript
console.log(generateWorkout());
```

## Sample Output

Running the code might produce an output like:
```
Today's workout routine: Running for cardio, Squats for strength, and Yoga for flexibility.
```

This setup ensures that each generated workout routine includes one exercise from each category, providing a balanced and varied workout plan.