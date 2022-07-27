import { Layout } from "antd";
import styled from "styled-components";
const { Header, Content } = Layout;

export const AppHeader = styled(Header)`
  padding-left: 16px;
`;

export const AppContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
  position: relative;
`;
