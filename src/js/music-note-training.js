function buildStandardNoteTable() {
    const noteInfoList = MUSIC_NOTES.filter(note => note.standard).map(note => ({ flag: note.upFlag }));
    refreshTable(noteInfoList);
}

function refreshTable(noteInfoList) {
    const rowNum = UTILS.getValue('row-num');
    const colNum = UTILS.getValue('col-num');
    const table = MUSIC_NOTE_TABLE.createNoteTable(noteInfoList, rowNum, colNum);
    UTILS.replaceMain(table);
}
