/**
 * calculate the z-score of each score by normalizing with mean and standard deviation
 */
const zscore = (scores: Array<number>) => {
  const size = scores.length;
  const total = scores.reduce((acc, score) => acc + score, 0);
  const mean = total / size;

  const standardDeviation = Math.sqrt(
    scores.reduce((acc, score) => acc + Math.pow(score - mean, 2), 0) / size
  );

  // might need to add by lowest value to start at zero for colors or smthn? idk
  const zscores = scores.map((score) => (score - mean) / standardDeviation);

  return zscores;
}

export default zscore;
