document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('btn').click();
    }
});