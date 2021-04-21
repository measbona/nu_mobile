import React from 'react';
import styled from 'styled-components/native';
import utils from '../../../utils';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  min-height: ${utils.device.isNotch}px;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const Label = styled.Text`
  font-size: 25px;
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
