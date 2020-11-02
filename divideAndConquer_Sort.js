  //bubbleSort - loop throught an array comparing adjacent items and switch them if needed for left to be the smallest
  
  function bubbleSort(list) {
    let swaps = 0;
  
    for (let i = 0; i < list.length; i++) {
      if (list[i] > list[i+1]) {
        [list[i], list[i + 1]] = [list[i+1], list[i]]
        swaps++;
      }
    }
  
    return swaps > 0
      ? bubbleSort(list)
      : list;
  }
  
  // console.log(bubbleSort([3, 5, 1, 9, 2, 7, 6]));
  
  //merge sort:
  // - base case if array is one item return array
  // - divide array into two parts,
  // - merge sorted left and right parts
  // - to merge loop through left and right, compare each item, push the smallest to the new arr
  
  
  function mergeSort(list) {
    if (list.length == 1)
      return list;
  
    let middleIndex = Math.floor(list.length / 2);
  
    let left = list.slice(0, middleIndex);
    let right = list.slice(middleIndex);
  
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    );
  }
  
  function merge(left, right) {
    let result = [];
  
    let indexLeft = 0;
    let indexRight = 0;
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
      console.log(result)
    }
  
    return result
      .concat(left.slice(indexLeft))
      .concat(right.slice(indexRight));
  }
  
  console.log(mergeSort([3, 5, 1, 9, 2, 7, 6]));

//insertion sort - selecting the element at the current index, i, and searches from right-to-left for the correct place to place the item.

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i - 1;
    let item = list[i];
    
    while (j >= 0 && list[j] > item) {
      list[j + 1] = list[j];
      j--;
    }
    list [j + 1] = item;
  }

  return list;
}

//selection sort
//compare array items with the first item, if the item is smaller place it to the beginning

function swap(list, i, j) {
  [list[i], list[j]] = [list[j], list[i]];
}

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let min = i;

    for (let j = i+1; j < list.length; j++) {
      if (list[j] < list[min])
        min = j;
    }

    if (i != min)
      swap(list, i, min);
  }
  return list;
}