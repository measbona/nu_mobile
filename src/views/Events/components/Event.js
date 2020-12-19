import React from 'react';
import moment from 'moment';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {showEventDetail} from '../../../navigation/screen';

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
  flex: 0.7;
  margin-left: 15px;
  margin-vertical: 10px;
  justify-content: space-between;
`;

const Label = styled.Text`
  color: ${utils.colors.white};
  font-size: ${(props) => props.size}px;
  ${(props) => props.marginLeft && `margin-left: 5px`};
`;

const Button = styled.TouchableOpacity`
  right: 0px;
  bottom: 0px;
  height: 30px;
  width: 100px;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${utils.colors.navy};
`;

const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Event = ({event, componentId}) => {
  const isAvailable =
    moment(event.createdAt).format('YYYY MM DD') ===
    moment().format('YYYY MM DD');
  const availableEvent = isAvailable ? 'calendar-check' : 'calendar-remove';
  const eventDate = moment(event.createdAt).format('ddd, MMM D YYYY - HH:mma');

  return (
    <Wrapper>
      <IconWrapper>
        <MCIcon name={availableEvent} size={40} color={utils.colors.white} />
      </IconWrapper>
      <Divider />
      <LabelWrapper>
        <Label size={15} numberOfLines={1}>
          {event.title}
        </Label>
        <IconRow>
          <Ionicon name="location-sharp" size={10} color={utils.colors.white} />
          <Label marginLeft size={11} numberOfLines={2}>
            {event.location}
          </Label>
        </IconRow>
        <IconRow>
          <MCIcon name="clock-outline" size={10} color={utils.colors.white} />
          <Label marginLeft size={11} numberOfLines={2}>
            {eventDate}
          </Label>
        </IconRow>
      </LabelWrapper>
      <Button
        activeOpacity={0.8}
        onPress={() => showEventDetail(componentId, {event})}>
        <Label size={10}>View Detail</Label>
      </Button>
    </Wrapper>
  );
};

export default Event;
