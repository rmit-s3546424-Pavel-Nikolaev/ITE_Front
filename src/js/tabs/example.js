import Vex from 'vexflow';

let VF = Vex.Flow;

export const notes = [
  // A single note
  new VF.TabNote({
    positions: [{str: 3, fret: 7}],
    duration: "q"}),

  // A chord with the note on the 3rd string bent
  new VF.TabNote({
    positions: [{str: 2, fret: 10},
                {str: 3, fret: 9}],
    duration: "q"})
      .addModifier(new VF.Bend("Full"), 1),

  // A single note with a harsh vibrato
  new VF.TabNote({
    positions: [{str: 2, fret: 5}],
    duration: "h"})
      .addModifier(new VF.Vibrato().setHarsh(true).setVibratoWidth(70), 0),

  new VF.TabNote({
    positions: [{str: 3, fret: 7}],
    duration: "q"}),
];

export default notes;
