export const validateInput = (value) => {
  if (!value || !value.trim()) {
    return "Input cannot be empty";
  }
  return null;
};
