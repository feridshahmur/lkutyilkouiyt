const fileInput = document.querySelector("#file");
const text = document.querySelector(".text");

const profilePictureInput = document.querySelector("#profile-pic");
const profilePicture = document.querySelector(".profile");



profilePictureInput.addEventListener("change", function (e) {
  const files = e.target.files;
  //   console.log(file);

  console.log(files);

  if (files.length > 0) {
    for (const file of files) {
      const trElem = document.createElement("tr");
      const tdImage = document.createElement("td");
      const tdFileName = document.createElement("td");
      const tdRemove = document.createElement("td");
      const removeBtn = document.createElement("button");

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        tdImage.innerHTML = `<img src="${reader.result}" style="width: 100px"/>`;
      };
      reader.onerror = function () {
        console.log(reader.error);
      };

      tdFileName.textContent = file.name;
      

      removeBtn.textContent = "remove";

      removeBtn.addEventListener("click", function () {
        this.closest("tr").remove();
      });
      tdRemove.append(removeBtn);

      trElem.append(tdImage, tdFileName,  tdRemove);
      document.querySelector("tbody").append(trElem);
    }
  } else {
    alert("heç bir file seçilməyib!");
  }
});