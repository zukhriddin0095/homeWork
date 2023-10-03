import { useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions/userActions";
import { useEffect } from "react";
import useSelection from "antd/es/table/hooks/useSelection";

import "./style.scss";
const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelection((state) => state.user);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(loading);
  return (
    <section className="users">
      {loading ? "loading ... " : JSON.stringify(users)}
    </section>
  );
};

export default UsersPage;
