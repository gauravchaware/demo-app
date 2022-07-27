import { useEffect, useState, useMemo, useCallback } from "react";

import { getUsers } from "../services/users";
import { combineUsersLog } from "../utils";
import Logs from "../local-json/logs.json";

const useGetUsers = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [metaData, setMetaData] = useState({
    pageNumber: 1,
    pageSize: 8,
    total: 0,
    sorter: null,
    search: null,
  });

  useEffect(() => {
    getAllUsers(metaData);
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log("in");
      const userDataWithLogs = combineUsersLog(userData, Logs);
      setUserData(userDataWithLogs);
    }
  }, [loading]);

  const getAllUsers = useCallback(({ pageNumber, pageSize, sorter, search }) => {
    setLoading(true);
    const queryString = `maxRecords=${pageSize}`;
    getUsers(queryString)
      .then((res) => {
        setUserData(res.data?.records || []);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError("Something went wrong.");
      });
  }, []);

  return useMemo(() => {
    return {
      loading,
      userData,
      error,
      metaData,
      setMetaData,
    };
  }, [loading, userData, error, metaData, setMetaData]);
};

export default useGetUsers;
