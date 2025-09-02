// Generics

class StorageContainer<T> {
  //T is a generic aka type parameter
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const usernames = new StorageContainer<string>();
usernames.addItem("pedro");
usernames.addItem("jose");
console.log(usernames.getItem(0));

const friendsCount = new StorageContainer<number>();
friendsCount.addItem(5);
friendsCount.addItem(10);
console.log(friendsCount.getItem(0));
