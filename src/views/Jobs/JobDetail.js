import React from 'react';
import styled from 'styled-components/native';
import Header from '../../lib/NavigationBack';

const Container = styled.View`
  flex: 1;
`;

const ViewJobDetail = ({componentId, job}) => {
  return (
    <Container>
      <Header dismissTheModal name="View PDF" componentId={componentId} />
    </Container>
  );
};

export default ViewJobDetail;
