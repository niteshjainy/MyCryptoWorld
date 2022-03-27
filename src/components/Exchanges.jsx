import React from "react";
import { Table } from "antd";
import { useGetExchangesQuery } from "../services/cryptoApi";
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  if (isFetching) console.log(data);
  const columns = [
    {
      title: "Exchanges",
      dataIndex: "name",
    },
    {
      title: "24h Trade Volume",
      dataIndex: "24hVolume",
    },
    {
      title: "Markets",
      dataIndex: "numberOfMarkets",
    },
    {
      title: "Change",
      dataIndex: "marketShare",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Exchanges;
