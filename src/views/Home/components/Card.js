import React from 'react';
import styled from 'styled-components/native';
import utils from '../../../utils';

const Wrapper = styled.View``;

const CardWrapper = styled.TouchableOpacity`
  height: 90px;
  align-items: center;
  margin-bottom: 15px;
  border-radius: 10px;
  flex-direction: row;
  width: ${utils.device.screenWidth - 32}px;
  background-color: ${(props) => props.color};
`;

const Divider = styled.View`
  margin-left: 15px;
  border-width: 1px;
  border-radius: 50px;
  padding-vertical: 30px;
  border-color: ${utils.colors.white};
`;

const NameWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const Name = styled.Text`
  font-size: 18px;
  color: ${utils.colors.white};
`;

const BadgeDot = styled.View`
  right: 0px;
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50px;
  background-color: red;
`;

const Card = ({name, icon, iconName, size, color, isUnread, onPress}) => {
  const Icon = icon;
  return (
    <Wrapper>
      <CardWrapper activeOpacity={0.8} onPress={onPress} color={color}>
        <Icon
          name={iconName}
          color={utils.colors.white}
          size={size}
          style={{marginLeft: 19}}
        />
        <Divider />
        <NameWrapper>
          <Name>{name}</Name>
        </NameWrapper>
      </CardWrapper>
      {isUnread && <BadgeDot />}
    </Wrapper>
  );
};

export default Card;
