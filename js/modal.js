function onClick(element) {
    if (window.innerWidth > 996){
        document.getElementById("img01").src = element.id;
        document.getElementById("modal01").style.display = "block";
        document.getElementById("modal-text").textContent = element.text
    }
}