import React from 'react';
import {Modal} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import type {LatLng} from 'react-native-maps';

import {RoundButton} from 'components/RoundButton';
import {useDestinationModal} from 'components/DestinationModal/useDestinationModal';
import {PlaceItem} from 'components/PlaceItem';
import type {TextSearchItem} from 'models/places/types/TextSearchItem';
import {Spacer} from 'components/common/Spacer';

import {StyledFlatlist, useStyles} from './DestinationModal.styles';
import {FlatlistHeader} from './components/FlatlistHeader';

interface DestinationModalProps {
  visible: boolean;
  closeModal: () => void;
  onPlaceItemPress: (coords: LatLng) => void;
}

const ItemSeparatorComponent = () => <Spacer height={scale(17)} />;

export const DestinationModal = ({
  visible,
  closeModal,
  onPlaceItemPress,
}: DestinationModalProps) => {
  const {models, operations} = useDestinationModal({
    onPlaceItemPress,
    closeModal,
  });
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets);

  const renderFlatListItem = ({item}: {item: TextSearchItem}) => {
    return (
      <PlaceItem
        key={item.place_id}
        name={item.name}
        iconUrl={item.icon}
        address={item.formatted_address}
        onPress={operations.handlePlaceItemPress(item)}
      />
    );
  };

  return (
    <Modal
      onDismiss={operations.handleModalDismiss}
      onRequestClose={closeModal}
      visible={visible}
      animationType="fade">
      <StyledFlatlist
        stickyHeaderIndices={[0]}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="interactive"
        data={models.textSearchQueryResponseData}
        renderItem={renderFlatListItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
        contentContainerStyle={styles.flatlistContainer}
        ListHeaderComponent={
          <FlatlistHeader
            destinationValue={models.destinationInputValue}
            onDestinationTextChange={
              operations.handleDestinationInputTextChange
            }
          />
        }
      />
      <RoundButton
        icon="arrow-back-outline"
        onPress={operations.handleRoundButtonPress}
      />
    </Modal>
  );
};
