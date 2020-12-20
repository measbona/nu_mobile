import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {popBack} from '../navigation/screen';
import utils from '../utils';

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  min-height: ${utils.device.isNotch}px;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const LeftButton = styled.TouchableOpacity`
  left: 0;
  position: absolute;
  justify-content: flex-start;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const RightButton = styled.TouchableOpacity`
  right: 0;
  position: absolute;
  justify-content: flex-end;
  padding-top: ${utils.device.devicePaddingTop}px;
`;

const Label = styled.Text`
  font-size: 20px;
`;

const handlePopBack = (componentId) => {
  popBack(componentId);
};

const NavigationBack = ({name, componentId, printPdf, onPrintPress}) => {
  return (
    <Wrapper>
      <LeftButton
        activeOpacity={0.8}
        onPress={() => {
          handlePopBack(componentId);
        }}>
        <AntIcon
          name="arrowleft"
          size={28}
          color={utils.colors.black}
          style={{marginLeft: 25}}
        />
      </LeftButton>
      <Label>{name}</Label>
      {printPdf && (
        <RightButton activeOpacity={0.8} onPress={onPrintPress}>
          <MaterialIcon
            name="print"
            size={28}
            color={utils.colors.black}
            style={{marginRight: 25}}
          />
        </RightButton>
      )}
    </Wrapper>
  );
};

export default NavigationBack;
