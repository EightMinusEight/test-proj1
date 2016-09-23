/**
 * Created by Christopher on 3/27/2016.
 */
"use strict";







const data = {
    "notes" : 			["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],

    "notesFlats": ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    "notesSharps": ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
};

function fromMidi(midiNum) {
    if (!Number.isInteger(midiNum) || midiNum < 0 || midiNum > 127){
        throw new TypeError('Integer Between 0-127 Required');
    }
    let pitch = data.notes[midiNum % 12];
    let octave = Math.floor(midiNum / 12) - 1;
    return pitch + octave;
}

function toMidi(note) {
    if (!Number.isInteger(midiNum) || midiNum < 0 || midiNum > 127){
        throw new TypeError('Integer Between 0-127 Required');
    }
    let pitch = this.data.notesSharps.indexOf(this.note);
    let pitch = data.notes[midiNum % 12];
    let octave = Math.floor(midiNum / 12) - 1;
    return pitch + octave;
}








