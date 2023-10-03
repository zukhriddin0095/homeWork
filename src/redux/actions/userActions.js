import request from "../../server/data";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "getUsers",
        payload: {
          loading: true,
        },
      });
      let { data } = await request.get("user");
      dispatch({
        type: "getUsers",
        payload: { users: data },
      });
    } catch (err) {
      dispatch({
        type: "getUsers",
        payload: { error: err },
      });
    } finally {
      dispatch({
        type: "getUsers",
        payload: { loading: false },
      });
    }
  };
};
