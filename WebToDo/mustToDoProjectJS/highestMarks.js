let marks = [80, 95, 89, 100, 88];

// Using the ternary operator to find the highest marks
let highestMarks = marks.length > 0 ? Math.max(...marks) : null;

// Displaying the highest marks
if (highestMarks !== null) {
    console.log(`The highest marks scored by a student: ${highestMarks}`);
} else {
    console.log("No student data provided.");
}

