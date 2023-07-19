let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/main_image_star-forming_region_carina_nircam_final-5mb.jpg") {
    myImage.setAttribute("src", "images/gameboy-1.jpg");
  } else {
    myImage.setAttribute("src", "images/main_image_star-forming_region_carina_nircam_final-5mb.jpg");
  }
};



if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Gameboy 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };

  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Gameboy 酷毙了，" + myName;
    }
  }
  

