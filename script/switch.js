// Lesson: The switch statement

// A switch is a clean way to compare one value against many options
function getDayType(day) {
  // The value inside switch() is compared to each "case"
  switch (day) {
    case "Saturday":
    case "Sunday":
      // Both cases above share this code because there is no break between them
      return "It's the weekend!";
    case "Monday":
      return "Start of the work week.";
    case "Friday":
      return "Almost the weekend!";
    default:
      // "default" runs when nothing else matches
      return "A regular work day.";
  }
}

console.log(getDayType("Saturday"));
console.log(getDayType("Monday"));
console.log(getDayType("Friday"));
console.log(getDayType("Wednesday"));

// Another example: turning a score letter into a message
function gradeMessage(grade) {
  switch (grade) {
    case "A":
      return "Excellent work!";
    case "B":
      return "Good job.";
    case "C":
      return "You passed.";
    default:
      return "Let's keep practicing.";
  }
}

console.log(gradeMessage("A"));
console.log(gradeMessage("C"));
console.log(gradeMessage("F"));
