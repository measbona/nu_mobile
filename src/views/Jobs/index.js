import React from 'react';
import styled from 'styled-components/native';
import Header from '../../lib/NavigationBack';

import Job from './components/Job';

const Container = styled.View`
  flex: 1;
`;

const BodyWrapper = styled.View`
  align-items: center;
  flex: 1;
`;

const ScrollView = styled.ScrollView``;

export default class Jobs extends React.PureComponent {
  render() {
    const {componentId} = this.props;
    const jobs = [
      {
        title: 'Officer, Customer Relation',
        location: 'Chip Mong Group',
        time: 'Full Time',
        salary: 'Negotiable',
        logo:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/chipmong%20logo.jpg?alt=media&token=7a402b1a-aa87-44cf-9c53-3388c38ed793',
        file: '',
      },
      {
        title: 'Senior Officer Recruitment',
        location: 'Chip Mong Group',
        time: 'Full Time',
        salary: 'Negotiable',
        logo:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/chipmong%20logo.jpg?alt=media&token=7a402b1a-aa87-44cf-9c53-3388c38ed793',
        file: '',
      },
      {
        title: 'Trade Marketing Coordinator',
        location: 'Cellcard',
        time: 'Full Time',
        salary: 'Negotiable',
        logo:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/cellcard%20logo.jpg?alt=media&token=354c0fe7-392a-4c0f-9d97-61b09aecadfe',
        file: '',
      },
      {
        title: 'Internal Audit Supervisory',
        location: 'Borey Penh Houth',
        time: 'Full Time',
        salary: 'Negotiable',
        logo:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/penghouth%20logo.png?alt=media&token=60217bf5-817f-4043-8d71-e9b6d291c227',
        file: '',
      },
      {
        title: 'Planning and Analysis Manager',
        location: 'Orkide Villa',
        time: 'Full Time',
        salary: 'Negotiable',
        logo:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/orkide%20logo.jpg?alt=media&token=feb63b5b-e159-4267-8f0a-3a5b5e4c05fd',
        file: '',
      },
      {
        title: 'IT Application Manager',
        location: 'AIA (Cambodia) Life Insurance Plc',
        time: 'Full Time',
        salary: 'Negotiable',
        logo:
          'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/aia%20logo.jpg?alt=media&token=13655260-a2ea-4a53-acc9-5a08aef71a75',
        file: '',
      },
    ];
    return (
      <Container>
        <Header name="Jobs Hiring" componentId={componentId} />
        <BodyWrapper>
          <ScrollView showsVerticalScrollIndicator={false}>
            {jobs.map((job, key) => (
              <Job key={key} job={job} componentId={componentId} />
            ))}
          </ScrollView>
        </BodyWrapper>
      </Container>
    );
  }
}
