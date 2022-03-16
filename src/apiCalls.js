import axios from "axios";

export const loginCall = async (user, dispatch) => {
  dispatch({
    type: "LOGIN_START",
  });

  try {
    const response = await axios({
      method: "POST",
      url: "http://127.0.0.1:8080/v1/api/login",
      data: user,
    });
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error,
    });
  }
};
