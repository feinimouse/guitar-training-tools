const MUSIC_NOTE_TABLE = {
    createNoteTable(noteInfoList, rowCount, colCount) {
        const noteTable = document.createElement('div');
        noteTable.classList.add('note-table');
        for (let rowNum = 0; rowNum < rowCount; rowNum++) {
            const row = document.createElement('div');
            row.classList.add('table-row');
            for (let colNum = 0; colNum < colCount; colNum++) {
                const noteInfo = noteInfoList.randomItem();
                const cell = MUSIC_NOTE_TABLE.createTableNote(noteInfo);
                row.appendChild(cell);
            }
            noteTable.appendChild(row);
        }
        return noteTable;
    },

    createTableNote(noteInfo) {
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
        highFlag.classList.add('note-flag');
        if (noteInfo.high) {
            highFlag.innerText = '·'
        }
        noteBox.appendChild(highFlag);

        const noteFlag = document.createElement('div');
        highFlag.classList.add('note-flag');
        noteFlag.innerText = noteInfo.flag;
        noteBox.appendChild(noteFlag);

        const lowFlag = document.createElement('div');
        highFlag.classList.add('note-flag');
        if (noteInfo.low) {
            highFlag.innerText = '·'
        }
        noteBox.appendChild(lowFlag);

        noteCell.appendChild(noteBox);

        return noteCell;
    },
}
