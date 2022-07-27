import React, { useMemo } from "react";
import { Card, Avatar, Statistic, Col, Row } from "antd";

import { LineChart } from "../Chart";
import { getInitials, truncate } from "../../../utils";
import { CardWrap, ChartWrap, Content, RangeWrap, StartDate, EndDate } from "./index.styles";

const { Meta } = Card;

export const UserCard = (props) => {
  const { name, avatar, description, impressions, conversions, revenue, conversionPerDay } = props;

  const chartData = useMemo(() => {
    return {
      labels: Object.keys(conversionPerDay || {}),
      datasets: [
        {
          data: Object.values(conversionPerDay || {}),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };
  }, [conversionPerDay]);

  const startDate = chartData && chartData.labels && chartData.labels[0];
  const endDate = chartData && chartData.labels && chartData.labels[chartData.labels.length - 1];

  return (
    <CardWrap>
      <Card>
        <Meta
          avatar={
            <Avatar size={44} src={avatar}>
              {name && getInitials(name)}
            </Avatar>
          }
          title={name}
          description={truncate(description, 25)}
        />
        <ChartWrap>
          <LineChart height={100} data={chartData} />
          <RangeWrap>
            <StartDate>{startDate}</StartDate>
            <span>Conversions/Day</span>
            <EndDate>{endDate}</EndDate>
          </RangeWrap>
        </ChartWrap>
        <Content>
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Conversions" value={conversions} />
            </Col>
            <Col span={8}>
              <Statistic title="Impressions" value={impressions} />
            </Col>
            <Col span={8}>
              <Statistic title="Revenue" value={revenue} />
            </Col>
          </Row>
        </Content>
      </Card>
    </CardWrap>
  );
};
