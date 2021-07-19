import React, { useEffect } from "react";
import "./styles/index.css";
import "./styles/reset.css";
import Root from "./components/Root";
import useStore from "./store";

export default function App() {
  const fetchUsers = useStore((store) => store.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return <Root />;
}
