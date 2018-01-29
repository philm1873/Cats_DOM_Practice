const Cat = function (name, favouriteFood, image) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.image = image;
};

var boba = new Cat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
var barnaby = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
var max =  new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
var mylo = new Cat("Mylo", "Chicken", "https://78.media.tumblr.com/37c40e7414d74bb90c3e7c6540d2a83b/tumblr_ofm6xbXidF1s1vn29o1_500.jpg");

var cats = [boba, barnaby, max, mylo];

var app = function() {
  for (let cat of cats) {
    var unorderedList = addUnorderedListElement();
    addListElements(unorderedList, cat);
    addPicture(unorderedList, cat);
  }
};

document.addEventListener("DOMContentLoaded", app);

var createUnorderedListElement = function() {
  var unorderedListElement = document.createElement("ul");
  unorderedListElement.setAttribute("class", "cat");
  return unorderedListElement;
};

var createAppendListItem = function(unorderedList) {
  var listItem = document.createElement("li");
  unorderedList.appendChild(listItem);
  return listItem;
}

var createImageElement = function(cat) {
  var imageElement = document.createElement("img");
  imageElement.setAttribute("width", "500");
  imageElement.setAttribute("src", cat.image);
  return imageElement;
};

var addUnorderedListElement = function() {
  var unorderedListElement = createUnorderedListElement();
  var section = document.getElementById("cats");
  section.appendChild(unorderedListElement);
  return unorderedListElement;
};

var addListElements = function(unorderedList, cat) {
  var nameElement = createAppendListItem(unorderedList);
  nameElement.innerText = `Name: ${cat.name}`;
  var favouriteFoodElement = createAppendListItem(unorderedList);
  favouriteFoodElement.innerText = `Favourite Food: ${cat.favouriteFood}`;
};

var addPicture = function(unorderedList, cat) {
  var imageListItem = createAppendListItem(unorderedList);
  var imageElement = createImageElement(cat);
  imageListItem.appendChild(imageElement);
};
