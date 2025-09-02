var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.contents = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    StorageContainer.prototype.getItem = function (idx) {
        return this.contents[idx];
    };
    return StorageContainer;
}());
var usernames = new StorageContainer();
usernames.addItem("pedro");
usernames.addItem("jose");
console.log(usernames.getItem(0));
var friendsCount = new StorageContainer();
friendsCount.addItem(5);
friendsCount.addItem(10);
console.log(friendsCount.getItem(0));
