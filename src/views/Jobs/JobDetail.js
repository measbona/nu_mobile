import React from 'react';
import styled from 'styled-components/native';
import Header from '../../lib/NavigationBack';
import Pdf from 'react-native-pdf';

import utils from '../../utils';

const Container = styled.View`
  flex: 1;
`;

const BodyWrapper = styled.View`
  flex: 1;
`;

const PdfViewer = styled(Pdf)`
  flex: 1;
  width: ${utils.device.screenWidth}px;
  height: ${utils.device.screenHeight}px;
`;

const ViewJobDetail = ({componentId, job}) => {
  const source = {
    uri: `${job.file}`,
    cache: true,
    expiration: 5000,
  };

  return (
    <Container>
      <Header
        name="Job Detail"
        componentId={componentId}
        printPdf
        onPrintPress={() => alert('hello')}
      />
      <BodyWrapper>
        <PdfViewer source={source} />
      </BodyWrapper>
    </Container>
  );
};

export default ViewJobDetail;
