import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';
import utils from '../../utils';

import {dismissOverLay} from '../../navigation/screen';

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

const HeaderWrapper = styled.View`
  height: 68px;
  padding-left: 22px;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${utils.colors.gold};
`;

const Label = styled.Text`
  font-size: ${(props) => props.size}px;
  ${(props) => props.color && `color: ${props.color}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}px`};
`;

const CreatedAt = styled.Text`
  font-size: 11px;
  color: ${utils.colors.white};
`;

const BodyWrapper = styled.View`
  flex: 1;
  margin-top: 10px;
  margin-horizontal: 10px;
`;

const FooterWrapper = styled.TouchableOpacity`
  height: 42px;
  border-width: 1px;
  border-radius: 10px;
  margin-bottom: 18px;
  align-items: center;
  justify-content: center;
  margin-horizontal: 18px;
  border-color: ${utils.colors.black};
`;

const NotifyModal = ({notify}) => {
  const notifyCreatedAt = moment(notify.createdAt).format('MMM D YYYY HH:mma');
  return (
    <Wrapper activeOpacity={0.8} onPress={() => dismissOverLay()}>
      <Modal>
        <HeaderWrapper>
          <Label size={16} color={utils.colors.white} marginBottom={3}>
            {notify.title}
          </Label>
          <CreatedAt>{notifyCreatedAt}</CreatedAt>
        </HeaderWrapper>
        <BodyWrapper>
          <Label size={16} color={utils.colors.black} numberOfLines={10}>
            {notify.subTitle}
          </Label>
        </BodyWrapper>
        <FooterWrapper activeOpacity={0.8} onPress={() => dismissOverLay()}>
          <Label size={18}>Close</Label>
        </FooterWrapper>
      </Modal>
    </Wrapper>
  );
};

export default NotifyModal;
