import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import Users from "../components/Users";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = ({ users, getUsers }) => {
  // 컴포넌트가 마운트된 후 호출
  useEffect(() => {
    if (users) return; //users가 이미 유효하면 호출x
    getUsers();
  }, [getUsers, users]);
  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  }
)(UsersContainer);
