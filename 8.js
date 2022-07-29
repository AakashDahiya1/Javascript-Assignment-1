function sortarr(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = i; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
  
  document.write(sortarr([10,3,20,7,6,2]));