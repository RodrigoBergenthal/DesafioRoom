import { css } from '@emotion/react';

export const containerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  padding: 20px;
background: linear-gradient(0deg, #afa1a1 1%,rgb(87, 81, 81) 30%, #ffffff 100%);
  border-right: 1px solid #ddd;
  box-shadow: 15px -6px 10px 20px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const sectionStyle = css`
  width: 100%;
  margin-bottom: 20px;
`;

export const titleStyle = css`
  padding: 40px;
  border-radius: 7px;
box-shadow: -7px -6px 0px 1px #000000;
  text-align: center;
  border-radius: 73px;
  font-size: 1.4em;
  font-weight: bold;
  width: 100%;
`;