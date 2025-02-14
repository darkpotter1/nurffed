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
                    const date = xmlDoc.documentElement.getAttribute('time');
                    var players = xmlDoc.getElementsByTagName("PLAYER");
                    var found = false;
                    for (var i = 0; i < players.length; i++) {
                        var name = players[i].getAttribute("name");
                        if (name.toLowerCase()===(input.toLowerCase())) {
                            found = true;
                            resultDiv.innerHTML += "<span>Намерено съвпадение: " + name + "</br><b>(настоящо: " + players[i].getAttribute("net") + ", общо: " + players[i].getAttribute("total") + ")</b></br></br><i>обновено на "+ date +"</i></span>";
                        }
                    }
                    if (!found) {
                        resultDiv.innerHTML = "<span>Няма намерени съвпадения.</span>";
                    }
                }
            };
            xhr.send();
        }
    