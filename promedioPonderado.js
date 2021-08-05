var notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

var notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

var sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

var credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

var sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal
    }
);

var promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;