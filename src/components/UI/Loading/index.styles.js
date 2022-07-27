import styled from "styled-components";
import { Spin } from "antd";

export const Loader = styled(Spin)`
  position: absolute;
  left: 50%;
  top: 35%;
  z-index: 1000;
  height: 31px;
  width: 31px;
`;
