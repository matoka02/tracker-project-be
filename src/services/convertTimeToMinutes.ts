export const convertTimeToMinutes = (time: string): number => {
  const arrTime = time.split(':');
  return Number(arrTime[0]) * 60 + Number(arrTime[1]);
};
