import React from 'react';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {showNotify} from '../../../navigation/screen';

import utils from '../../../utils';

const Wrapper = styled.View`
  height: 80px;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: ${utils.colors.gold};
  width: ${utils.device.screenWidth - 32}px;
`;

const IconWrapper = styled.View`
  margin-left: 15px;
  justify-content: center;
`;

const Divider = styled.View`
  margin-left: 10px;
  border-width: 1px;
  border-radius: 50px;
  margin-vertical: 10px;
  border-color: ${utils.colors.white};
`;

const LabelWrapper = styled.View`
  flex: 0.75;
  margin-left: 15px;
  margin-vertical: 10px;
  justify-content: space-between;
`;

const Label = styled.Text`
  color: ${utils.colors.white};
  font-size: ${(props) => props.size}px;
`;

const Button = styled.TouchableOpacity`
  right: 0px;
  width: 75px;
  height: 30px;
  bottom: 0px;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${utils.colors.navy};
`;

const Notify = ({notify}) => {
  const isReaded = notify.readed ? 'bookmark-border' : 'bookmark';

  return (
    <Wrapper>
      <IconWrapper>
        <MDIcon name={isReaded} size={40} color={utils.colors.white} />
      </IconWrapper>
      <Divider />
      <LabelWrapper>
        <Label size={15} numberOfLines={1}>
          {notify.title}
        </Label>
        <Label size={11} numberOfLines={2}>
          {notify.subTitle}
        </Label>
      </LabelWrapper>
      <Button activeOpacity={0.8} onPress={() => showNotify({notify})}>
        <Label size={11}>View</Label>
      </Button>
    </Wrapper>
  );
};

export default Notify;
