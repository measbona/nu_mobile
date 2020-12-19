import React from 'react';
import styled from 'styled-components/native';
import Header from '../../lib/NavigationBack';

import utils from '../../utils';

const Container = styled.View`
  flex: 1;
`;

const BodyWrapper = styled.View`
  flex: 1;
`;

const ImageWrapper = styled.View``;

const Image = styled.Image`
  width: ${utils.device.screenWidth}px;
  height: ${utils.device.screenWidth / 2}px;
`;

const ScrollView = styled.ScrollView``;

const DescriptionWrapper = styled.View`
  align-items: center;
  margin-vertical: 10px;
  margin-horizontal: 10px;
`;

const Text = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export default class Events extends React.PureComponent {
  render() {
    const {componentId} = this.props;

    return (
      <Container>
        <Header name="About us" componentId={componentId} />
        <BodyWrapper>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageWrapper>
              <Image
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/norton-university.jpg?alt=media&token=c1e96e52-5c9a-4f6b-af03-1a959561aeea',
                }}
              />
            </ImageWrapper>
            <DescriptionWrapper>
              <Text>
                Norton University is the first private university in Cambodia,
                established on December 2, 1996 by Professor Chan Sok Khieng. It
                started to offer classes in December 1996 and was recognized as
                a university by sub-decree on September 18, 1997.
              </Text>
            </DescriptionWrapper>
            <ImageWrapper>
              <Image
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/commencement-exercises.jpeg?alt=media&token=808edfd1-521f-4135-8848-d552ce8ef833',
                }}
              />
            </ImageWrapper>
            <DescriptionWrapper>
              <Text>
                The institution was formally inaugurated in a ceremony on
                February 28, 1997 attended by Samdech Hun Sen, Prime Minister of
                the Royal Kingdom of Cambodia A further sub-decree, No. 47 by
                the Royal Government of Cambodia, dated of July 25, 2000
                approved its reformation, giving it the “rights and privileges”
                to “open faculties, departments, and conduct postgraduate degree
                courses or any professional courses as required for the society
                and the country”.
              </Text>
            </DescriptionWrapper>
            <ImageWrapper>
              <Image
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/nu-mobile-16b3c.appspot.com/o/norton-university-banner.jpg?alt=media&token=c6fc52bd-d405-49ab-96ab-80439316ad07',
                }}
              />
            </ImageWrapper>
            <DescriptionWrapper>
              <Text>
                The Graduate School started in 2001 in affiliation with the
                Ateneo de Zamboanga University of the Philippines. The diplomas
                for the first two MBA classes were signed by the President of
                Norton University and the Ateneo de Zamboanga University
                respectively. In 2001 NU awarded its first Bachelor's Degrees to
                453 graduates of Business, Economics, Law and Computer Science.
              </Text>
            </DescriptionWrapper>
          </ScrollView>
        </BodyWrapper>
      </Container>
    );
  }
}
