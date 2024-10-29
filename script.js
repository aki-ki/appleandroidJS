// // Controlling CSS & Attributes from JS

// document.getElementById("some-id").style; //Accesses CSS rule for "some-id" element

// document.getElementById("android").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.jpg"; // Changes an image

// document.getElementById("some-a-tag").href = "http://newlink.com"; //Change the Hyperlink

//Changing an image VS adding A new image
// To add an image where there wasn't one before, you need a container for the image in HTML
// Containers are empty <p>, <h1>, <div> elements.
//For Ex. In HTML: <div id="img-container"></div>

// document.getElementById("img-container").innerHTML = "<img src='images/pic.jpg' >";

// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  console.log("test");
  // Change the 'Android vs Apple' image to the Android Logo in the images folder
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  //   Change the 'Explore the Debate' link so that the link says 'Android Home'
  document.getElementById("the-link").innerHTML = "Android Home";
  // Change the 'Explore the Debate' link so that the background color is #a4c93b
  document.getElementById("the-link").style.background = "#a4c93b";
  // Change the 'Explore the Debate' link so that the href is now 'https://www.android.com/&#39;
  document.getElementById("the-link").href = "https://www.android.com";
  // Change the background color of the html to #a4c93b
  document.getElementById("the-html").style.background = "#a4c93b";
  // Change the base font-family to 'Roboto', sans-serif
  document.getElementById("the-body").style.fontFamily = "'Roboto', sans-serif";
  // Add the class 'active' to the Android button.
  document.getElementById("android").classList.add("redborder");
  // Remove the class 'active' from the Apple button.
  document.getElementById("apple").classList.remove("redborder");
  // E.g. document.getElementById('bruh').classList.add('thing')
  // This will add the class 'thing' to the element with id 'bruh'. CSS should have a .thing rule with the style set to what you want when this class is added.
  // E.g. document.getElementById('bruh').classList.remove('thing')
  // This removes 'thing' class from the 'bruh' element.
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  console.log("test");

  //   Change the 'Android vs Apple' image to the Apple Logo in the images folder
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  // Change the 'Explore the Debate' link so that the link says 'Apple Home'
  document.getElementById("the-link").innerHTML = "Apple Home";
  // Change the 'Explore the Debate' link so that the background color is #b6bcca
  document.getElementById("the-link").style.background = "#b6bcca";
  // Change the 'Explore the Debate' link so that the href is now 'https://www.apple.com/&#39;
  document.getElementById("the-link").href = "https://www.apple.com";
  // Change the background color of the html to #b6bcca
  document.getElementById("the-html").style.background = "#b6bcca";
  // Change the base font family to 'Brygada 1918', serif
  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', serif";
  // Add the class 'active' to the Apple button.
  document.getElementById("apple").classList.add("redborder");
  // Remove the class 'active' from the Android button.
  document.getElementById("android").classList.remove("redborder");
}
