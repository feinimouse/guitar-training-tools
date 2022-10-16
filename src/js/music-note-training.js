

function buildStandardNoteTable() {
    const noteInfos = NOTES.filter(note => note.standard).map(note => ({ flag: note.upFlag }));
    
}

function refreshMain(element) {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(element);
}