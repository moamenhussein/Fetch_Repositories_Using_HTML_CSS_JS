// Main Variables


let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-repos .get-button");
let reposData = document.querySelector(".show-data");


getButton.onclick = function () {

  getRepos();

};

//Get Repos Function
function getRepos() {

  if (theInput.value == "") {
    //If Value Is Empty

    alert("Please Enter Github Username");

  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((res) => {
        return res.json();
      })

      .then((repos) => {
        //Empty The Containe
        reposData.innerHTML = "";

        //Loop On Repos
        repos.forEach((repo) => {
          //Create Main Div Element
          let mainDiv = document.createElement("div");

          //Create Repo Name Text
          let repoName = document.createTextNode(repo.name);

          //Append The Text To Main Div
          mainDiv.appendChild(repoName);

          //Create Repo URL
          let theUrl = document.createElement("a");

          //Crete Url Repo Text
          let theUrlText = document.createTextNode("Visit");

          // Append The Text URL To Repo Url
          theUrl.appendChild(theUrlText);

          //Add The Hypertext Reference
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

          //Set Attrubit Blank
          theUrl.setAttribute("target", "_blank");

          //Append URL To Main Div
          mainDiv.appendChild(theUrl);

          //Add Class To main Div
          mainDiv.className = "repo-box";

          //Append The Main Div To Container
          reposData.appendChild(mainDiv);
        });
      });
  }
}