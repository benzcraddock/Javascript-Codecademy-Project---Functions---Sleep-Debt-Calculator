const getSleepHours = day => {
  if (day === 'monday') {
    return 7;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 7;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 7;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  }
};

/* TEST

getSleepHours();
console.log(getSleepHours('sunday')); // prints 8 hours

*/

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

/* alternate way to type above function

const getActualSleepHours = () => 7 + 7 + 7 + 7 + 7 + 8 + 8;

*/

const getIdealSleepHours = () => {
  idealHours = 8;
  return idealHours * 7;
};

/* alternate way to type above function, making idealHours a paramter and multiply by 7

const getIdealSleepHours = idealHours => idealHours * 7;
...
in below function, you would call it the following: 
const idealSleepHours = getIdealSleepHours(8);
*/

/* TEST

console.log(getActualSleepHours()); // prints 51
console.log(getIdealSleepHours()); // prints 56

*/

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('You achieved the ideal level of sleep, good job.');
} else if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours of less sleep than needed, you should get some rest.');
} else {
  console.log('You got ' + (actualSleepHours - idealSleepHours) + + ' hours of sleep, you should probably sleep less.');
};
};

calculateSleepDebt();


