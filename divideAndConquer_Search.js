//Devide and conqure - recursive strategy to devide problem into smaller parts

//linear search - loop through all items of the array untill the needed is found

function linearSearch(list, item) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] == item)
        return i;
    }
    return -1;
}
  
linearSearch([2,6,7,90,130], 6)

// binarySearch - having a sorted array start with the middle item if searched item is less - go to the left,
// else go to the right an do the same thing
  
function binarySearch(list, item) {
    var min = 0;//1
    var max = list.length - 1;//1
    var guess;
  
    while (min <= max) {
      guess = Math.floor((min + max) / 2);//1
  
      if (list[guess] === item) {
        return guess;
      } else {
        if (list[guess] < item) {
          min = guess + 1;
        } else {
          max = guess - 1;
        }
      }
    }
  
    return -1;
}
   
  // binarySearch([2,6,7,90,130], 6)
  