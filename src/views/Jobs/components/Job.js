import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import {showJobDetail} from '../../../navigation/screen';

import utils from '../../../utils';

const Wrapper = styled.View`
  height: 80px;
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  background-color: ${utils.colors.blue};
  width: ${utils.device.screenWidth - 32}px;
`;

const ImageWrapper = styled.View`
  margin-left: 15px;
  justify-content: center;
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

const Divider = styled.View`
  margin-left: 10px;
  border-width: 1px;
  border-radius: 50px;
  margin-vertical: 10px;
  border-color: ${utils.colors.white};
`;

const InfoWrapper = styled.View`
  margin-left: 10px;
  margin-vertical: 9px;
  justify-content: space-between;
`;

const Label = styled.Text`
  color: ${utils.colors.white};
  font-size: ${(props) => props.size}px;
  ${(props) => props.marginLeft && `margin-left: 5px`};
`;

const IconRow = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  right: 0px;
  bottom: 0px;
  height: 30px;
  width: 75px;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${utils.colors.navy};
`;

const Skeleton = styled.View`
  margin-horizontal: 5px;
`;

const Job = ({componentId, job}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          source={{
            uri: `${job.logo}`,
          }}
        />
      </ImageWrapper>
      <Divider />
      <InfoWrapper>
        <Label size={15}>{job.title}</Label>
        <IconRow>
          <Ionicon name="location-sharp" size={14} color={utils.colors.white} />
          <Label marginLeft size={10}>
            {job.location}
          </Label>
        </IconRow>
        <IconRow>
          <MCIcon name="clock-outline" size={14} color={utils.colors.white} />
          <Label marginLeft size={10}>
            {job.time}
          </Label>
          <Skeleton />
          <FAIcon name="money" size={14} color={utils.colors.white} />
          <Label marginLeft size={10}>
            {job.salary}
          </Label>
        </IconRow>
      </InfoWrapper>
      <Button
        activeOpacity={0.8}
        onPress={() => showJobDetail(componentId, {job})}>
        <Label size={10}>View</Label>
      </Button>
    </Wrapper>
  );
};

export default Job;
