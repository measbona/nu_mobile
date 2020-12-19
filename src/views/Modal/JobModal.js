import React from 'react';
import styled from 'styled-components/native';
import utils from '../../utils';
import {dismissOverLay, showJobDetail} from '../../navigation/screen';

const Wrapper = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.View`
  height: 280px;
  border-width: 1px;
  border-radius: 10px;
  justify-content: space-between;
  border-color: ${utils.colors.black};
  width: ${utils.device.screenWidth - 32}px;
  background-color: ${utils.colors.lightWhite};
`;

const Label = styled.Text`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`;

const MainWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  padding-horizontal: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  justify-content: space-between;
  background-color: ${utils.colors.gold};
`;

const ImageWrapper = styled.View`
  justify-content: center;
`;

const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

const ButtonWrapper = styled.View`
  margin-vertical: 45px;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  width: 170px;
  height: 45px;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? 'rgba(51, 60, 138, 0.5)' : props.background};
`;

const CloseButton = styled.TouchableOpacity`
  height: 42px;
  border-width: 1px;
  align-items: center;
  border-radius: 10px;
  margin-vertical: 18px;
  margin-horizontal: 18px;
  justify-content: center;
  border-color: ${utils.colors.black};
`;

const JobModal = ({componentId, job}) => {
  return (
    <Wrapper activeOpacity={0.8} onPress={() => dismissOverLay()}>
      <Modal>
        <MainWrapper>
          <ImageWrapper>
            <Image source={{uri: `${job.logo}`}} />
          </ImageWrapper>
          <ButtonWrapper>
            <Button
              activeOpacity={0.8}
              background={utils.colors.green}
              onPress={() => {
                showJobDetail(componentId, {job});
              }}>
              <Label size={16} color={utils.colors.white}>
                View PDF
              </Label>
            </Button>
            <Button
              disabled
              activeOpacity={0.8}
              background={utils.colors.navy}
              onPress={() => console.warn(`DownloadPDF`)}>
              <Label size={16} color={utils.colors.white}>
                Download PDF
              </Label>
            </Button>
          </ButtonWrapper>
        </MainWrapper>
        <CloseButton activeOpacity={0.8} onPress={() => dismissOverLay()}>
          <Label size={18} color={utils.colors.black}>
            Close
          </Label>
        </CloseButton>
      </Modal>
    </Wrapper>
  );
};

export default JobModal;
