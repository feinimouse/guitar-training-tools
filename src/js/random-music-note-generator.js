initVolumeSelect();

function onStandardNote() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList()
        .filter(note => note.standard)
        .map(note => ({...note, flag: note.upFlag}));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(noteInfoList);
}

function onStandardVoice() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList()
        .filter(note => note.standard)
        .map(note => ({...note, flag: note.upVoice}));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(noteInfoList);
}

function onStandardLevel() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList()
        .filter(note => note.standard)
        .map(note => ({...note, flag: note.uplevel}));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(noteInfoList);
}

function onAllNote() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList();
    const targetList = noteInfoList
        .map(note => ({...note, flag: note.upFlag}))
        .concat(noteInfoList.map(note => ({...note, flag: note.downFlag})));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(targetList);
}

function onAllVoice() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList();
    const targetList = noteInfoList
        .map(note => ({...note, flag: note.upVoice}))
        .concat(noteInfoList.map(note => ({...note, flag: note.downVoice})));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(targetList);
}

function onAllLevel() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList();
    const targetList = noteInfoList
        .map(note => ({...note, flag: note.uplevel}))
        .concat(noteInfoList.map(note => ({...note, flag: note.downLevel})));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(targetList);
}

function onAllSing() {
    const noteInfoList = RANDOM_MUSIC_NOTE_GENERATOR.getUserSelectedNoteList();
    const targetList = noteInfoList
        .map(note => ({...note, flag: note.upSing}))
        .concat(noteInfoList.map(note => ({...note, flag: note.downSing})));
    RANDOM_MUSIC_NOTE_GENERATOR.refreshMusicTable(targetList);
}

function onIsSpecialString() {
    if (document.getElementById('is-special-string').checked) {
        document.getElementById('from-string').disabled = false;
        document.getElementById('to-string').disabled = false;
    } else {
        document.getElementById('from-string').disabled = true;
        document.getElementById('to-string').disabled = true;
    }
}

function onIsAddVolume() {
    if (document.getElementById('is-add-volume').checked) {
        document.getElementById('from-volume').disabled = false;
        document.getElementById('to-volume').disabled = false;
    } else {
        document.getElementById('from-volume').disabled = true;
        document.getElementById('to-volume').disabled = true;
    }
}

function initVolumeSelect(){
    const fromVolume = document.getElementById('from-volume');
    const toVolume = document.getElementById('to-volume');
    VOLUME_LIST.forEach((volume, index) => {
        fromVolume.appendChild(buildOption());
        toVolume.appendChild(buildOption());

        function buildOption() {
            const opt = document.createElement('option');
            opt.value = '' + index;
            let text = volume.upVoice;
            if (volume.low) {
                text = '低音' + text;
            } else if (volume.high) {
                text = '高音' + text;
            } else {
                text = '中音' + text;
            }
            opt.innerText = text;
            return opt;
        }
    });
}

const RANDOM_MUSIC_NOTE_GENERATOR = {
    getUserSelectedNoteList() {
        const oriList = getOriNoteList();
        if (!document.getElementById('is-special-string').checked) {
            return oriList;
        }

        let fromString = UTILS.getIntValue('from-string');
        let toString = UTILS.getIntValue('to-string');
        if (toString < fromString) {
            [fromString, toString] = [toString, fromString];
        }

        const targetList = [];
        for (let string = fromString; string <= toString; string++) {
            oriList.forEach(note => targetList.push({...note, string}));
        }

        return targetList;

        function getOriNoteList() {
            if (!document.getElementById('is-add-volume').checked) {
                return MUSIC_NOTES;
            }

            let fromVolume = UTILS.getIntValue('from-volume');
            let toVolume = UTILS.getIntValue('to-volume');
            if (toVolume < fromVolume) {
                [fromVolume, toVolume] = [toVolume, fromVolume];
            }
            toVolume = toVolume + 1;

            return VOLUME_LIST.slice(fromVolume, toVolume);
        }
    },

    refreshMusicTable(noteInfoList) {
        const rowNum = UTILS.getIntValue('row-num');
        const colNum = UTILS.getIntValue('col-num');
        const table = createMusicNoteTable(noteInfoList, rowNum, colNum);
        UTILS.replaceMain(table);

        function createMusicNoteTable(noteInfoList, rowCount, colCount) {
            const noteTable = document.createElement('div');
            noteTable.classList.add('note-table');
            for (let rowNum = 0; rowNum < rowCount; rowNum++) {
                const row = document.createElement('div');
                row.classList.add('table-row');
                for (let colNum = 0; colNum < colCount; colNum++) {
                    const noteInfo = UTILS.getRandomItem(noteInfoList);
                    const cell = createMusicNote(noteInfo);
                    row.appendChild(cell);
                }
                noteTable.appendChild(row);
            }
            return noteTable;

            function createMusicNote(noteInfo) {
                const noteCell = document.createElement('div');
                noteCell.classList.add('table-cell');

                if (noteInfo.string) {
                    const stringBox = document.createElement('div');
                    stringBox.classList.add('string-box');
                    stringBox.innerText = noteInfo.string + '弦';
                    noteCell.appendChild(stringBox);
                }

                const noteBox = document.createElement('div');
                noteBox.classList.add('note-box');

                const highFlag = document.createElement('div');
                highFlag.classList.add('note-flag');
                if (noteInfo.high) {
                    highFlag.innerText = '·';
                }
                noteBox.appendChild(highFlag);

                const noteFlag = document.createElement('div');
                highFlag.classList.add('note-flag');
                noteFlag.innerText = noteInfo.flag;
                noteBox.appendChild(noteFlag);

                const lowFlag = document.createElement('div');
                lowFlag.classList.add('note-flag');
                if (noteInfo.low) {
                    lowFlag.innerText = '·';
                }
                noteBox.appendChild(lowFlag);

                noteCell.appendChild(noteBox);

                return noteCell;
            }
        }
    }
};
