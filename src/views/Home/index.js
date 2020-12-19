import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import utils from '../../utils';

import {goToEvents, goToJobs, goToAbout} from '../../navigation/screen';

import Header from './components/Header';
import Card from './components/Card';

const Container = styled.View`
  flex: 1;
`;

const BannerWrapper = styled.View`
  align-items: center;
`;

const Banner = styled.Image`
  border-radius: 10px;
  width: ${utils.device.screenWidth - 32}px;
  height: ${utils.device.screenWidth / 2 - 10}px;
`;

const CardWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export default class Home extends React.PureComponent {
  render() {
    const {componentId} = this.props;

    return (
      <Container>
        <Header />
        <BannerWrapper>
          <Banner source={require('../../assets/images/testing.jpg')} />
        </BannerWrapper>
        <CardWrapper>
          <Card
            name="Events"
            icon={MDIcon}
            iconName="calendar"
            size={40}
            color={utils.colors.green}
            isUnread
            onPress={() => goToEvents(componentId)}
          />
          <Card
            name="Jobs Hiring"
            icon={FeatherIcon}
            iconName="search"
            size={40}
            color={utils.colors.navy}
            isUnread
            onPress={() => goToJobs(componentId)}
          />
          <Card
            name="About Us"
            icon={MIcon}
            iconName="group"
            size={40}
            color={utils.colors.purple}
            onPress={() => goToAbout(componentId)}
          />
        </CardWrapper>
      </Container>
    );
  }
}
