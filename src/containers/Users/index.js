import React from "react";
import { Row, Col, Alert } from "antd";

import { UserCard } from "../../components/UI/Card";
import Loading from "../../components/UI/Loading";
import useGetUsers from "../../Hooks/useGetUsers";

const Users = () => {
  const { loading, userData, error } = useGetUsers();

  return (
    <>
      {loading && <Loading />}
      <div>
        <h3>Users</h3>
        {error && <Alert message={error} type="error" />}
        <Row gutter={16}>
          {userData.map((user) => (
            <Col span={6} key={user?.id}>
              <UserCard
                name={user?.fields?.Name}
                avtar={user?.fields?.avtar}
                description={user?.fields?.occupation}
                impressions={user?.impressions}
                conversions={user?.conversions}
                revenue={user?.revenue}
                conversionPerDay={user?.conversionPerDay}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Users;
