function confirmCancel(row) {
  if (confirm("Are you sure you want to cancel this input?")) {
    cancelData(row);
  }
}

function addData() {
  var documentTitle = document.getElementById('documentTitle').value;
  var purpose = document.getElementById('purpose').value;
  var agency = document.getElementById('agency').value;

  if (documentTitle === '' || purpose === '' || agency === '') {
    alert('Please fill in all fields');
    return;
  }

  var table = document.getElementById('dataTable');
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);

  cell1.innerHTML = documentTitle;
  cell2.innerHTML = purpose;
  cell3.innerHTML = agency;
  cell4.innerHTML = 'Pending';

  var actionCell = newRow.insertCell(4);
  var cancelButton = document.createElement('button');
  cancelButton.innerText = 'Cancel';
  cancelButton.onclick = function() {
    confirmCancel(this);
  };
  actionCell.appendChild(cancelButton);

  // Clear input fields
  document.getElementById('documentTitle').value = '';
  document.getElementById('purpose').value = '';
  document.getElementById('agency').value = 'selected';

  alert('Data entered successfully!');
}

function cancelData(row) {
  var rowIndex = row.parentNode.parentNode.rowIndex;
  var table = document.getElementById('dataTable');
  var statusCell = table.rows[rowIndex].cells[3];

  statusCell.innerHTML = 'Cancelled';

  // Remove cancel button
  row.parentNode.removeChild(row);

  alert('Input data cancelled.');
}

//data filter
    // Sort table rows based on the selected column
    function sortTable(columnIndex) {
      var table = document.getElementById('dataTable');
      var rows = Array.from(table.rows).slice(1); // Exclude the header row

      rows.sort(function(a, b) {
        var aValue = a.cells[columnIndex].innerText.toLowerCase();
        var bValue = b.cells[columnIndex].innerText.toLowerCase();
        return aValue.localeCompare(bValue);
      });

      // Clear table body
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }

      // Append sorted rows to the table
      rows.forEach(function(row) {
        table.appendChild(row);
      });
    }

    // Filter table rows based on the input value
    function filterTable() {
      var input = document.getElementById('filterInput');
      var filterValue = input.value.toLowerCase();
      var table = document.getElementById('dataTable');
      var rows = Array.from(table.rows).slice(1); // Exclude the header row

      rows.forEach(function(row) {
        var visible = false;
        var cells = Array.from(row.cells);

        cells.forEach(function(cell) {
          var cellValue = cell.innerText.toLowerCase();

          if (cellValue.includes(filterValue)) {
            visible = true;
            return; // Exit inner loop early if match found in any cell
          }
        });

        // Toggle row visibility based on filter
        row.style.display = visible ? '' : 'none';
      });
    }

    // Reset the table and filter input to default
    function resetTable() {
      var input = document.getElementById('filterInput');
      input.value = ''; // Clear filter input

      var table = document.getElementById('dataTable');
      var rows = Array.from(table.rows).slice(1); // Exclude the header row

      rows.forEach(function(row) {
        row.style.display = ''; // Reset row visibility
      });
    }

    //logout
    function confirmLogout() {
      var confirmLogout = confirm('Are you sure you want to log out?');
      if (confirmLogout) {
        alert('You have successfully logged out.');
        sessionStorage.removeItem('isLoggedIn'); // Remove the 'isLoggedIn' item
        window.location.href = '../login/login.html'; // Redirect to the login page
      }
    }
