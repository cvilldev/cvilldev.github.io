

// ----------------------------------------------
				function addRow() {
         
					var myName = document.getElementById("name");
					var age = document.getElementById("age");
					var table = document.getElementById("myTableData");

					var rowCount = table.rows.length;
					var row = table.insertRow(rowCount);

					row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
					row.insertCell(1).innerHTML= myName.value;
					row.insertCell(2).innerHTML= age.value;

				}

				function deleteRow(obj) {
					 
					var index = obj.parentNode.parentNode.rowIndex;
					var table = document.getElementById("myTableData");
					table.deleteRow(index);
				   
				}

								
				//-----------------------------------------------------------
				
				function GenerateTable() {
					//Build an array containing Customer records.
					var customers = new Array();
					customers.push(["Customer Id", "Name", "Country"]);
					customers.push([1, "John Hammond", "United States"]);
					customers.push([2, "Mudassar Khan", "India"]);
					customers.push([3, "Suzanne Mathews", "France"]);
					customers.push([4, "Robert Schidner", "Russia"]);
				 
					//Create a HTML Table element.
					var table = document.createElement("TABLE");
					table.border = "1";
				 
					//Get the count of columns.
					var columnCount = customers[0].length;
				 
					//Add the header row.
					var row = table.insertRow(-1);
					for (var i = 0; i < columnCount; i++) {
						var headerCell = document.createElement("TH");
						headerCell.innerHTML = customers[0][i];
						row.appendChild(headerCell);
					}
				 
					//Add the data rows.
					for (var i = 1; i < customers.length; i++) {
						row = table.insertRow(-1);
						for (var j = 0; j < columnCount; j++) {
							var cell = row.insertCell(-1);
							cell.innerHTML = customers[i][j];
						}
					}
				 
					var dvTable = document.getElementById("dvTable");
					dvTable.innerHTML = "";
					dvTable.appendChild(table);
				}
				