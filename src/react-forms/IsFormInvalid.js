//Checks if the form is valid or not

export const IsFormInvalid = (err) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};
