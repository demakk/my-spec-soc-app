import Backendless from 'backendless';

const APP_ID = 'A896BE88-30ED-457A-A8EE-C37463862D2E';
const API_KEY = '7963374F-28B2-4AF5-A7D7-FF7EEE35CD21';

Backendless.initApp(APP_ID, API_KEY);

export const registerUser = async (data) => {
  try {
    const response = await Backendless.UserService.register(data);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log(email, password);
    const response = await Backendless.UserService.login(email, password, true);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const recoverPassword = async (email) => {
  try {
    const response = await Backendless.UserService.restorePassword(email);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Example function to save an object in the database
export const saveTestObject = async () => {
  try {
    const response = await Backendless.Data.of("TestTable").save({ foo: "bar" });
    console.log("object saved. objectId " + response.objectId);
    return response;
  } catch (error) {
    console.log("got error - " + error);
  }
};
