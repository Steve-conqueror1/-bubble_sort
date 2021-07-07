/** 
 * 
 *  Bubble sort sorts an array, by swapping elements that are in the wrong order.

 The algorithm starts with the first element in the array until the last element in the array, and keeps on doing so until there is one complete pass without swapping! This creates a “bubble” effect, hence the name.
*
*/

const bubbleSort = (array) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {     
        [array[i], array[i + 1]] = [array[i+ 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return array;
};

console.log('bubblesorted array: ' + bubbleSort([4, 2, 3, 8, 6, 5]));
