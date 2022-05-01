
async function getapiEpisodeAll() {
    const response = await fetch(enponint + apiEpisodeAll);
    var data = await response.json();    
    if (response) {
        hideloaderEpisode();
    }

    var ws = XLSX.utils.json_to_sheet(data.results);    
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Episodios");
    XLSX.writeFile(wb, "Episodios.xlsx");
    
}

