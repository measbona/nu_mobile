import React from 'react';
import styled from 'styled-components/native';

import utils from '../../../utils';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  min-height: ${utils.device.isNotch}px;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const Image = styled.Image`
  width: 40px;
  height: 57px;
  margin-left: 25px;
`;

const LabelWrapper = styled.View`
  margin-left: 10px;
`;

const LabelText = styled.Text`
  font-size: ${(props) => props.size}px;
`;

const Space = styled.View`
  margin-vertical: 2px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Image source={require('../../../assets/icons/nu-logo.png')} />
      <LabelWrapper>
        <LabelText size={18}>Norton University</LabelText>
        <Space />
        <LabelText size={16}>Always Leading</LabelText>
      </LabelWrapper>
    </Wrapper>
  );
};

export default Header;
