import React from 'react';
import styled from 'styled-components/native';
import utils from '../../../utils';

const Wrapper = styled.View`
  height: 120px;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const Label = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-left: 25px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Label>Notification</Label>
    </Wrapper>
  );
};

export default Header;
