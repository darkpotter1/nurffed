document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('btn').click();
    }
});

        function searchXML() {
            var input = document.getElementById("searchInput").value;
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = ""; // Clear previous results

            // New XML http request
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "data.xml", true);  
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var xmlDoc = xhr.responseXML;
                    var players = xmlDoc.getElementsByTagName("PLAYER");
                    var found = false;
                    for (var i = 0; i < players.length; i++) {
                        var name = players[i].getAttribute("name");
                        if (name.toLowerCase()===(input.toLowerCase())) {
                            found = true;
                            resultDiv.innerHTML += "<p>Намерено съвпадение: " + name + "</br> (настоящо: " + players[i].getAttribute("net") + ", общо: " + players[i].getAttribute("total") + ")</p>";
                        }
                    }
                    if (!found) {
                        resultDiv.innerHTML = "<p>Няма намерени съвпадения.</p>";
                    }
                }
            };
            xhr.send();
        }
    