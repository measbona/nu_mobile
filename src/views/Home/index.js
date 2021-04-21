import React from 'react';
import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import utils from '../../utils';

import {goToEvents, goToJobs, goToAbout} from '../../navigation/screen';

import Header from './components/Header';
import Card from './components/Card';

const imageWidth = utils.device.screenWidth - 42;
const imageHeight = imageWidth * 0.5625;

const Container = styled.View`
  flex: 1;
`;

const SliderWrapper = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const PaginationWrapper = styled.View``;

const BannerWrapper = styled.View`
  align-items: center;
`;

const Banner = styled.Image`
  border-radius: 10px;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
`;

const CardWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export default class Home extends React.PureComponent {
  state = {
    activeSlide: 0,
  };

  renderBanner = ({item, index}) => {
    return (
      <BannerWrapper>
        <Banner source={{uri: item.imageUrl}} />
      </BannerWrapper>
    );
  };

  render() {
    const {activeSlide} = this.state;
    const {componentId} = this.props;
    const DATA = [
      {
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/NU%20SemBreak%20Party.jpg?alt=media&token=c3e3960b-77a2-464e-89fa-849d52f9d86e',
      },
      {
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/commencement-exercises.jpeg?alt=media&token=808edfd1-521f-4135-8848-d552ce8ef833',
      },
      {
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/testing.jpg?alt=media&token=a1b7050f-2f2c-4c03-9cc0-335506eae9e2',
      },
      {
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/norton-university.jpg?alt=media&token=c1e96e52-5c9a-4f6b-af03-1a959561aeea',
      },
    ];

    return (
      <Container>
        <Header />
        <SliderWrapper>
          <Carousel
            loop
            autoplay
            data={DATA}
            layout={'default'}
            autoplayInterval={5000}
            renderItem={this.renderBanner}
            sliderWidth={utils.device.screenWidth}
            itemWidth={utils.device.screenWidth - 52}
            onSnapToItem={(index) => this.setState({activeSlide: index})}
          />
        </SliderWrapper>
        <PaginationWrapper>
          <Pagination
            dotsLength={DATA.length}
            activeDotIndex={activeSlide}
            dotContainerStyle={{marginHorizontal: 4}}
            dotStyle={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: utils.colors.blue || 'white',
            }}
            containerStyle={{paddingVertical: 15}}
            inactiveDotOpacity={0.5}
            inactiveDotScale={1}
          />
        </PaginationWrapper>
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
            icon={MDIcon}
            iconName="briefcase-search"
            size={40}
            color={utils.colors.navy}
            isUnread
            onPress={() => goToJobs(componentId)}
          />
          <Card
            name="About Us"
            icon={MIcon}
            iconName="groups"
            size={40}
            color={utils.colors.purple}
            onPress={() => goToAbout(componentId)}
          />
        </CardWrapper>
      </Container>
    );
  }
}
