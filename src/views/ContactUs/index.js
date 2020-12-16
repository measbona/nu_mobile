import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';
import utils from '../../utils';

import Header from './components/Header';

const Container = styled.View`
  flex: 1;
`;

const ImageWrapper = styled.View`
  align-items: center;
`;

const Logo = styled.Image`
  width: 80px;
  height: 127px;
`;

const TitleWrapper = styled.View`
  margin-top: 10px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  ${(props) => props.textDecoration && `text-decoration: underline`};
`;

const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}px;`};
  ${(props) =>
    props.marginVertical && `margin-vertical: ${props.marginVertical}px;`};
  ${(props) => props.alignItem && `align-items: center`};
  ${(props) => props.color && `color: ${props.color}`};
`;

const InfoWrapper = styled.View`
  margin-top: 45px;
  margin-horizontal: 22px;
`;

const Link = styled.TouchableOpacity`
  margin-left: 4px;
`;

const SubtitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default class ContactUs extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <ImageWrapper>
          <Logo source={require('../../assets/icons/nu-logo.png')} />
          <TitleWrapper>
            <Title size={18}>Norton University</Title>
            <Label>Always Leading</Label>
          </TitleWrapper>
        </ImageWrapper>
        <InfoWrapper>
          <Title textDecoration>Register Office</Title>
          <SubtitleWrapper>
            <Label alignItem marginLeft={10} marginVertical={10}>
              Email :
            </Label>
            <Link
              activeOpacity={0.8}
              onPress={() => {
                Linking.openURL('http://www.norton-u.com');
              }}>
              <Label color={utils.colors.navy}>
                studentcenter@norton-u.com
              </Label>
            </Link>
          </SubtitleWrapper>
          <Title textDecoration>General Information</Title>
          <Label marginLeft={10} marginVertical={10}>
            Mobile : 093 888 569 / 093 888 359
          </Label>
          <Label marginLeft={10} marginVertical={10}>
            Tel : 023 982 177
          </Label>
          <Label marginLeft={10} marginVertical={10}>
            Email : info@norton-u.com
          </Label>
          <Label marginLeft={10} marginVertical={10}>
            Website : www.norton-u.com
          </Label>
          <Title textDecoration>Admin and Personnel</Title>
          <Label marginLeft={10} marginVertical={10}>
            Tel : 010 633 086
          </Label>
          <Label marginLeft={10} marginVertical={10}>
            Email : admin@norton-u.com
          </Label>
          <Title textDecoration>Address</Title>
          <Label marginLeft={10} marginVertical={10}>
            St. Keo Chanda, Sangkat Chroy Changvar, Khan Chroy Chagvar, Phnom
            Penh, Cambodia
          </Label>
        </InfoWrapper>
      </Container>
    );
  }
}
