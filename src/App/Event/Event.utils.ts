export const getDays = (
  date: Date
): number =>
  Math.floor(
    1 +
      (date.getTime() - Date.now()) /
        1000 /
        60 /
        60 /
        24
  );

const pad = (a: unknown): string => {
  return `${('0' + a).slice(-2)}`;
};

export const stringifyDate = (
  date: Date
): string => {
  return `${date.getFullYear()}-${pad(
    date.getMonth()
  )}-${pad(date.getDate())}`;
};
