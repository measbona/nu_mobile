import React from 'react';
import moment from 'moment';
import styled from 'styled-components/native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import NavigationBack from '../../lib/NavigationBack';

import utils from '../../utils';

const Container = styled.View`
  flex: 1;
`;

const ImageWrapper = styled.View``;

const Image = styled.Image`
  height: ${utils.device.screenWidth / 2 - 32}px;
  width: ${utils.device.screenWidth}px;
`;

const ScheduleWrapper = styled.View`
  height: 120px;
  padding-left: 20px;
  padding-vertical: 17px;
  justify-content: space-between;
  background-color: ${utils.colors.gold};
`;

const ScheduleInfoWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

const IconWrapper = styled.View``;

const Divider = styled.View`
  margin-left: 10px;
  border-width: 1px;
  border-radius: 50px;
  padding-vertical: 18px;
  border-color: ${utils.colors.white};
`;

const DatetimeWrapper = styled.View`
  height: 42px;
  margin-left: 15px;
  justify-content: space-between;
`;

const Label = styled.Text`
  font-weight: bold;
  color: ${utils.colors.white};
  font-size: ${(props) => props.size}px;
  ${(props) => props.marginLeft && `margin-left: 5px`};
`;

const LabelIconWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

const EventDetailWrapper = styled.View`
  margin-vertical: 10px;
  margin-horizontal: 20px;
`;

const DetailLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 12px;
  text-decoration: underline;
`;

const DetailText = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;

const EventDetail = ({componentId, event}) => {
  const isAvailable =
    moment(event.createdAt).format('YYYY MM DD') ===
    moment().format('YYYY MM DD');
  const availableEvent = isAvailable ? 'calendar-check' : 'calendar-remove';
  const eventDate = moment(event.createdAt).format('ddd, MMM D YYYY - HH:mma');

  return (
    <Container>
      <NavigationBack name="Event Detail" componentId={componentId} />
      <ImageWrapper>
        <Image source={{uri: `${event.imageUrl}`}} />
      </ImageWrapper>
      <ScheduleWrapper>
        <ScheduleInfoWrapper>
          <IconWrapper>
            <MCIcon
              name={availableEvent}
              size={50}
              color={utils.colors.white}
            />
          </IconWrapper>
          <Divider />
          <DatetimeWrapper>
            <LabelIconWrapper>
              <MCIcon
                name="clock-outline"
                size={16}
                color={utils.colors.white}
              />
              <Label marginLeft size={15} numberOfLines={2}>
                {eventDate}
              </Label>
            </LabelIconWrapper>
            <LabelIconWrapper>
              <Ionicon
                name="location-sharp"
                size={16}
                color={utils.colors.white}
              />
              <Label marginLeft size={15} numberOfLines={2}>
                {event.location}
              </Label>
            </LabelIconWrapper>
          </DatetimeWrapper>
        </ScheduleInfoWrapper>
        <Label marginLeft size={20} numberOfLines={1}>
          {event.title}
        </Label>
      </ScheduleWrapper>
      <EventDetailWrapper>
        <DetailLabel>Details : </DetailLabel>
        <DetailText>{event.subTitle}</DetailText>
      </EventDetailWrapper>
    </Container>
  );
};

export default EventDetail;
