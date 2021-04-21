import React from 'react';
import moment from 'moment';
import styled from 'styled-components/native';
import Header from '../../lib/NavigationBack';
import Event from './components/Event';

const Container = styled.View`
  flex: 1;
`;

const BodyWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

const ScrollView = styled.ScrollView``;

export default class Events extends React.PureComponent {
  render() {
    const {componentId} = this.props;
    const events = [
      {
        title: 'NU SemBreak Party 2010',
        subTitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Norton University',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/NU%20SemBreak%20Party.jpg?alt=media&token=c3e3960b-77a2-464e-89fa-849d52f9d86e',
        createdAt: 1292141520000,
      },
      {
        title: 'NU SemBreak Party 2012',
        subTitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Norton University',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/NU%20SemBreak%20Party.jpg?alt=media&token=c3e3960b-77a2-464e-89fa-849d52f9d86e',
        createdAt: 1355292720000,
      },
      {
        title: 'NU SemBreak Party 2020',
        subTitle:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Norton University',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/NU%20SemBreak%20Party.jpg?alt=media&token=c3e3960b-77a2-464e-89fa-849d52f9d86e',
        createdAt: Number(moment().format('x')),
      },
    ];

    return (
      <Container>
        <Header name="Events" componentId={componentId} />
        <BodyWrapper>
          <ScrollView showsVerticalScrollIndicator={false}>
            {events.map((event, key) => (
              <Event key={key} event={event} componentId={componentId} />
            ))}
          </ScrollView>
        </BodyWrapper>
      </Container>
    );
  }
}
