export const validateInput = (value) => {
  if (!value || !value.trim()) {
    return "Input cannot be empty";
  }
  return null;
};

// export const validateRide = (ride) => {
//   const errors = {};

//   if (!ride.origin?.trim()) errors.origin = "Origin is required";
//   if (!ride.destination?.trim()) errors.destination = "Destination is required";

//   return errors;
// };
