export const validateDate = (date: string): boolean => {
  const arrD = date.split('-');
  arrD[1] = (Number(arrD[1]) - 1).toString();
  const d = new Date(Number(arrD[0]), Number(arrD[1]), Number(arrD[2]));

  return (
    d.getFullYear() === Number(arrD[0]) &&
    d.getMonth() === Number(arrD[1]) &&
    d.getDate() === Number(arrD[2])
  );
};
