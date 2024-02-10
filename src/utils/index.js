export const convertHeight = (height) => {
  return height / 100;
};

export const convertWeight = (weight) => {
  return weight / 1000;
};

export const getTotalPlayed = (matchs) => {
  let totalDuration = 0;

  matchs.forEach((match) => {
    const startTime = new Date(match.startTime);
    const endTime = new Date(match.endTime);

    const millsecondsDifference = endTime - startTime;
    const minutesDifference = millsecondsDifference / (1000 * 60);

    totalDuration += minutesDifference;
  });
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;
  return `${hours}h ${minutes}min`;
};

export const getTotalWinLoss = (matchs, playerId) => {
   const winMatchs = matchs.filter(match => match.winner && match.winner.id === playerId);
   const lossMatch = matchs.filter(match => match.winner && match.winner.id !== playerId);
 
   return {
     totalWin: winMatchs.length,
     totalLoss: lossMatch.length,
   };
};

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date))
  return formattedDate
}