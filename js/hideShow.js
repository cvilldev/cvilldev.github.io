				
				function ShowOnlyOne(addr) {
					var alldiv = document.getElementsByTagName("div");
					for(var x=0; x<alldiv.length; x++) {
						name = alldiv[x].getAttribute("class");
						if (name == 'category') {
							if (alldiv[x].id == addr) {
								alldiv[x].style.display = 'block';
							}
							else {
								alldiv[x].style.display = 'none';
							}
						}
					}
				}
				
				function ShowOnlyOneDiv(divclass, divid) {
					document.getElementById("includeone").style.visibility = "hidden";
					document.getElementById("mytemplate").style.display = "block";
					document.getElementById('myIFrameElemId').style.display = 'block';
					var somediv = document.getElementsByClassName(divclass);
					for(var x=0; x<somediv.length; x++) {
					if (somediv[x].id == divid) {
                        somediv[x].style.display = 'block';
						}
					else {
                        somediv[x].style.display = 'none';
						}
					}				
				}
	
				function HideDivClass(divclass) {
					var somediv = document.getElementsByClassName(divclass);
					for(var x=0; x<somediv.length; x++) {
					            somediv[x].style.display = 'none';
						}					
				}	
				
				function HideDivId(divid) {
					document.getElementsById(divid).style.display = 'none';						
				}	
				
				function changeTemplate(t){
					HideDivClass("category");
					var mytemplate = document.getElementById("mytemplate");
					mytemplate.innerHTML = '<object type="text/html" width="90%" height="90%" data=' + t + '></object>';
					
					var mybreadcrumb = document.getElementById("breadcrumb");
					var value = splitString(t, '/');
					mybreadcrumb.innerHTML = value;
					
					}
					
				function splitString(stringToSplit, separator) {
					var arrayOfStrings = stringToSplit.split(separator);
					//console.log('La chaine d\'origine est : "' + stringToSplit + '"');
					//console.log('Le délimiteur est : "' + separator + '"');
					//console.log("Le tableau comporte " + arrayOfStrings.length + " elements : ");
					var breadcrumb = "";
					for (var i=0; i < arrayOfStrings.length; i++)
						if (i == arrayOfStrings.length-1) {
							breadcrumb = breadcrumb + arrayOfStrings[i];
						} else {						
						   breadcrumb = breadcrumb + arrayOfStrings[i] + " / ";
							}
					var res = breadcrumb.replace("-", " ");
					//res = res.replace(".html", "");
					return res;
				}	
					
							
				function clientSideInclude(id, url) {
					document.getElementById("includeone").style.visibility = "visible";
					HideDivClass("category");
					document.getElementById('myIFrameElemId').style.display = 'none';
					var req = false;
					// For Safari, Firefox, and other non-MS browsers
					if (window.XMLHttpRequest) {
						try {
							req = new XMLHttpRequest();
							} catch (e) {
							req = false;
							}
					} else if (window.ActiveXObject) {
					// For Internet Explorer on Windows
					try {
						req = new ActiveXObject("Msxml2.XMLHTTP");
						} catch (e) {
							try {
								req = new ActiveXObject("Microsoft.XMLHTTP");
								} catch (e) {
								req = false;
								}
							}
						}
					var element = document.getElementById(id);
					if (!element) {
						alert("Bad id " + id +
						"passed to clientSideInclude." +
						"You need a div or span element " +
						"with this id in your page.");
					return;
					}
					if (req) {
					// Synchronous request, wait till we have it all
					req.open('GET', url, false);
					req.send(null);
					element.innerHTML = req.responseText;
					} else {
					element.innerHTML =
					"Sorry, your browser does not support " +
					"XMLHTTPRequest objects. This page requires " +
					"Internet Explorer 5 or better for Windows, " +
					"or Firefox for any system, or Safari. Other " +
					"compatible browsers may also exist.";
					}
				}		