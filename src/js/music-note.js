const NOTES = [
    { downFlag: 'C', upFlag: 'C', downVoice: '1', upVoice: '1', downLevel: 'I', uplevel: 'I', standard: true },
    { downFlag: 'D♭', upFlag: 'C♯', downVoice: '2♭', upVoice: '1♯', downLevel: 'II♭', uplevel: 'I♯', standard: false },
    { downFlag: 'D', upFlag: 'D', downVoice: '2', upVoice: '2', downLevel: 'II', uplevel: 'II', standard: true },
    { downFlag: 'E♭', upFlag: 'D♯', downVoice: '3♭', upVoice: '2♯', downLevel: 'III♭', uplevel: 'II♯', standard: false },
    { downFlag: 'E', upFlag: 'E', downVoice: '3', upVoice: '3', downLevel: 'III', uplevel: 'III', standard: true },
    { downFlag: 'F', upFlag: 'F', downVoice: '4', upVoice: '4', downLevel: 'IV', uplevel: 'IV', standard: true },
    { downFlag: 'G♭', upFlag: 'F♯', downVoice: '5♭', upVoice: '4♯', downLevel: 'V♭', uplevel: 'IV♯', standard: false },
    { downFlag: 'G', upFlag: 'G', downVoice: '5', upVoice: '5', downLevel: 'V', uplevel: 'V', standard: true },
    { downFlag: 'A♭', upFlag: 'G♯', downVoice: '6♭', upVoice: '5♯', downLevel: 'VI♭', uplevel: 'V♯', standard: false },
    { downFlag: 'A', upFlag: 'A', downVoice: '6', upVoice: '6', downLevel: 'VI', uplevel: 'VI', standard: true },
    { downFlag: 'B♭', upFlag: 'A♯', downVoice: '7♭', upVoice: '6♯', downLevel: 'VII♭', uplevel: 'VI♯', standard: false },
    { downFlag: 'B', upFlag: 'B', downVoice: '7', upVoice: '7', downLevel: 'VII', uplevel: 'VII', standard: true },
];

function createNoteTable(noteInfoBuilder, rowCount, colCount) {
    const noteTable = document.createElement('div');
    noteTable.classList.add('note-table');
    for (let rowNum = 0; rowNum < rowCount; rowNum++) {
        const row = document.createElement('div');
        row.classList.add('table-row');
        for (let colNum = 0; colNum < colCount; colNum ++) {
            const noteInfo = noteInfoBuilder();
            const cell = createTableNote(noteInfo)
            row.appendChild(cell);
        }
        noteTable.appendChild(row);
    }
    return noteTable;

    function createTableNote(noteInfo) {
        const noteCell = document.createElement('div');
        noteCell.classList.add('table-cell');
    
        const stringBox = document.createElement('div');
        stringBox.classList.add('string-box');
        if (noteInfo.string) {
            stringBox.innerText = noteInfo.string;
        }
        noteCell.appendChild(stringBox);
    
        const noteBox = document.createElement('div');
        noteBox.classList.add('note-box');
    
        const highFlag = document.createElement('div');
        highFlag.add('note-flag');
        if (noteInfo.high) {
            highFlag.innerText = '·'
        }
        noteBox.appendChild(highFlag);
    
        const noteFlag = document.createElement('div');
        highFlag.add('note-flag');
        noteFlag.innerText = noteInfo.flag;
        noteBox.appendChild(noteFlag);
    
        const lowFlag = document.createElement('div');
        highFlag.add('note-flag');
        if (noteInfo.low) {
            highFlag.innerText = '·'
        }
        noteBox.appendChild(lowFlag);
    
        noteCell.appendChild(noteBox);
    
        return noteCell;
    }
}

