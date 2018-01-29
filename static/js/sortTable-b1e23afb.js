
function reverseTable(){
    $('#archiveTable').children('tbody').each(function(elem,index){
      var arr = $.makeArray($("tr",this).detach());
      arr.reverse();
        $(this).append(arr);
    });
}

/**
* @param {integer} n index of the column by which to sort
* currently using a quadratic sort, could replace by merge sort?
*/

function sortTable(n) {
  var table, headers, rows, switching, i, x, y, shouldSwitch, dir;
  table = document.getElementById("archiveTable");
  headers = table.getElementsByTagName("TH");

  // Set the sorting direction to ascending:
  if(headers[n].classList.contains("sortDesc")) {
    dir = "asc";
    headers[n].classList.replace("sortDesc","sortAsc");
    reverseTable();
    switching = false;
  }
  else if(headers[n].classList.contains("sortAsc")) {
    dir = "desc";
    headers[n].classList.replace("sortAsc","sortDesc");
    reverseTable();
    switching = false;
  }
  else {
    dir = "asc";
    headers[n].classList.add("sortAsc");
    switching = true;
  }

  for (i = 0; i < headers.length; i++) {
    if(i != n) {
      if(headers[i].classList.contains("sortDesc")) {
        headers[i].classList.remove("sortDesc");
      }
      else if(headers[i].classList.contains("sortAsc")) {
        headers[i].classList.remove("sortAsc");
      }
    }
  }

  while (switching) {    
    switching = false;
    rows = table.getElementsByTagName("TR");

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
