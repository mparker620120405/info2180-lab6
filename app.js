document.addEventListener("click", function(event)) {
		var httpRequest = new XMLHttpRequest();
		var url = "http://localhost:8080/superheroes.php";
		httpRequest.onreadystatechange = function search() {
			if(httpRequest.readyState === XMLHttpRequest.DONE) {
				console.log(httpRequest.status);
				if (httpRequest.status == 200) {
					var response = httpRequest.responseText;
					alert(response);
				} else {
					alert('There was a problem with the request.');
				}
			}
		}
		httpRequest.open('GET', url);
		httpRequest.send();
}

