import React from 'react';
import styled from 'styled-components/native';
import Header from './components/Header';
import Notify from './components/Notify';

const Container = styled.View`
  flex: 1;
`;

const BodyWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

const ScrollView = styled.ScrollView``;

export default class Notification extends React.Component {
  render() {
    const notifications = [
      {
        title: '1 For Final Year Student',
        subTitle: 'Please come to register directly at student affair office',
        createdAt: 1602461700000,
        readed: false,
      },
      {
        title: '2 Please come to student affiar',
        subTitle: 'Please come to register directly at student affair office',
        createdAt: 1602733500000,
        readed: true,
      },
      {
        title: '3 Please come to student affiar',
        subTitle: 'Please come to register directly at student affair office',
        createdAt: 1603182000000,
        readed: false,
      },
    ];

    return (
      <Container>
        <Header />
        <BodyWrapper>
          <ScrollView showsVerticalScrollIndicator={false}>
            {notifications.map((value, key) => (
              <Notify key={key} notify={value} />
            ))}
          </ScrollView>
        </BodyWrapper>
      </Container>
    );
  }
}
