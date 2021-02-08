import styled from "styled-components";
export const Tabs = styled.div`
  width: 99%;
  overflow: hidden;
  border-bottom: 0px solid #333333;
`;

export const Tab = styled.button`
  margin: 0;
  padding: 0;
  padding-left: 0px;
  font: bold 12px Verdana;
  background-color: #cccccc;
  list-style-type: none;
  float: left;
  display: block;
  text-decoration: none;
  padding: 7px 22px;
  border-right: 1px solid #ffffff;
  border-left: none;
  border-top: none;
  cursor: pointer;
  position: relative;
  border-bottom: none;
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "#cc0000" : "#cccccc")};
  color: ${(props) => (props.active ? "#ffffff" : "#666")};
  :hover {
    background-color: #cc0000;
    color: #ffffff;
  }
`;
export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;
