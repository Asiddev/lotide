const head = function (array) {
  if (array.length < 1) {
    return array;
  }
  return array[0];
};

module.exports = head;
