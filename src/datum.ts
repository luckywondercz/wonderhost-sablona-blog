// Datum česky, například 13. listopadu 2026.
export const formatDatum = (d: Date) =>
  d.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long', year: 'numeric' });
