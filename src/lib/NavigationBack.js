import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import {popBack, dismissModal} from '../navigation/screen';
import utils from '../utils';

const Wrapper = styled.View`
  height: 120px;
  align-items: center;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const Button = styled.TouchableOpacity`
  left: 0;
  position: absolute;
  justify-content: flex-start;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const Label = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

const handlePopBack = (componentId, dismissTheModal) => {
  if (dismissTheModal) dismissModal();

  popBack(componentId);
};

const NavigationBack = ({name, componentId, dismissTheModal = false}) => {
  return (
    <Wrapper>
      <Button
        activeOpacity={0.8}
        onPress={() => {
          handlePopBack(componentId, dismissTheModal);
        }}>
        <AntIcon
          name="arrowleft"
          size={30}
          color={utils.colors.black}
          style={{marginLeft: 25}}
        />
      </Button>
      <Label>{name}</Label>
    </Wrapper>
  );
};

export default NavigationBack;
