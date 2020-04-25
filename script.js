let submit = document.getElementById('submitBtn');

submit.onclick = function() {
  let list = document.getElementById('decklist').value;
  // let modList = list.replace(/^[^.]+\./, "")
  let splitList = list.split("\n");

  console.log(modList);
  document.getElementById('test').innerHTML = splitList;
}

