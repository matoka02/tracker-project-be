import { CustomHelpers } from 'joi';

import { convertTimeToMinutes } from './convertTimeToMinutes';

export const validateJoiStartEndTime = (
  obj: { start: string; end: string },
  helpers: CustomHelpers,
) => {
  const { start, end } = obj;

  if (convertTimeToMinutes(start) >= convertTimeToMinutes(end)) {
    return helpers.error('any.invalid');
  }

  return obj;
};
