exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index = -1;

    arr.some(function(currentItem, currentIndex) {
      if (currentItem === item) {
        index = currentIndex;
        return true;
      }
    });

    return index;
  },

  sum : function(arr) {
    return arr.reduce(function(acc, curr) {
      return acc + curr;
    })
  },

  remove : function(arr, item) {
    return arr.filter(function(currentItem) {
      return currentItem !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var index = arr.indexOf(item);

    if (index === -1) {
      return arr;
    }

    arr.splice(index, 1);

    return this.removeWithoutCopy(arr, item);
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.length = arr.length - 1;
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
