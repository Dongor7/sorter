class Sorter {
  constructor() {
    this.store = [];
    this.compataror = null;
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {

    let sortedIndices = indices;
    sortedIndices.sort();

    let arr = [];

    sortedIndices.forEach((i) => {
      arr.push(this.store[i]);
    });

    if (this.compataror) {
      arr.sort(this.compataror);
    } else {
      arr.sort((a, b) => a - b);
    }

    indices.forEach((item, i) => {
      this.store.splice(indices[i], 1, arr[i]);
    })

  }

  setComparator(compareFunction) {
    this.compataror = compareFunction;
  }
}

module.exports = Sorter;
