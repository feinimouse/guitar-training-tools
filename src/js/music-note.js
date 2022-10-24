const MUSIC_NOTES = [
    {downFlag: 'C', upFlag: 'C', downVoice: '1', upVoice: '1', downLevel: 'I', uplevel: 'I', upSing:'do', downSing:'do', standard: true},
    {downFlag: 'D♭', upFlag: 'C♯', downVoice: '2♭', upVoice: '1♯', downLevel: 'II♭', uplevel: 'I♯',upSing:'di', downSing:'ra', standard: false},
    {downFlag: 'D', upFlag: 'D', downVoice: '2', upVoice: '2', downLevel: 'II', uplevel: 'II',upSing:'re', downSing:'re', standard: true},
    {downFlag: 'E♭', upFlag: 'D♯', downVoice: '3♭', upVoice: '2♯', downLevel: 'III♭', uplevel: 'II♯',upSing:'ri', downSing:'me', standard: false},
    {downFlag: 'E', upFlag: 'E', downVoice: '3', upVoice: '3', downLevel: 'III', uplevel: 'III',upSing:'mi', downSing:'mi', standard: true},
    {downFlag: 'F', upFlag: 'F', downVoice: '4', upVoice: '4', downLevel: 'IV', uplevel: 'IV',upSing:'fa', downSing:'fa', standard: true},
    {downFlag: 'G♭', upFlag: 'F♯', downVoice: '5♭', upVoice: '4♯', downLevel: 'V♭', uplevel: 'IV♯',upSing:'fi', downSing:'se', standard: false},
    {downFlag: 'G', upFlag: 'G', downVoice: '5', upVoice: '5', downLevel: 'V', uplevel: 'V',upSing:'so', downSing:'so', standard: true},
    {downFlag: 'A♭', upFlag: 'G♯', downVoice: '6♭', upVoice: '5♯', downLevel: 'VI♭', uplevel: 'V♯',upSing:'si', downSing:'le', standard: false},
    {downFlag: 'A', upFlag: 'A', downVoice: '6', upVoice: '6', downLevel: 'VI', uplevel: 'VI',upSing:'la', downSing:'la', standard: true},
    {downFlag: 'B♭', upFlag: 'A♯', downVoice: '7♭', upVoice: '6♯', downLevel: 'VII♭', uplevel: 'VI♯',upSing:'li', downSing:'te', standard: false},
    {downFlag: 'B', upFlag: 'B', downVoice: '7', upVoice: '7', downLevel: 'VII', uplevel: 'VII',upSing:'ti', downSing:'ti', standard: true},
];

const VOLUME_LIST = MUSIC_NOTES.map(note => ({...note, low: true}))
    .concat(MUSIC_NOTES.map(note => ({...note})))
    .concat(MUSIC_NOTES.map(note=> ({...note, high: true})));
