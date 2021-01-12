function getFile() {
  document.getElementById("upload").click();
}

function sub(obj) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById("Addimage").innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();
event.preventDefault();
}