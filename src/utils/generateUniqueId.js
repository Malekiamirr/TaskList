const generateUniqueId = () => {
  // Get the current timestamp in milliseconds
  const timestamp = new Date().getTime();

  // Generate a random number (between 0 and 1) and convert it to a string
  const randomString = Math.random().toString(36).substring(2);

  // Combine the timestamp and random string to create a unique ID
  const uniqueId = `${timestamp}-${randomString}`;

  return uniqueId;
};

export default generateUniqueId;
