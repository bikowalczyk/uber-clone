import React from 'react';
import {Modal} from 'react-native';

import {RoundButton} from 'components/RoundButton';

import {StyledFlatlist} from './DestinationModal.styles';
import {FlatlistHeader} from './components/FlatlistHeader';

interface DestinationModalProps {
  visible: boolean;
  closeModal: () => void;
}

export const DestinationModal = ({
  visible,
  closeModal,
}: DestinationModalProps) => {
  const handleRoundButtonPress = () => {
    closeModal();
  };

  const renderFlatListItem = () => {
    return null;
  };

  return (
    <Modal onRequestClose={closeModal} visible={visible} animationType="fade">
      <StyledFlatlist
        data={[]}
        renderItem={renderFlatListItem}
        ListHeaderComponent={FlatlistHeader}
      />
      <RoundButton icon="arrow-back-outline" onPress={handleRoundButtonPress} />
    </Modal>
  );
};
