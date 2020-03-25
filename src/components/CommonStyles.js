/* eslint-disable linebreak-style */
import { StyleSheet, Dimensions } from 'react-native';

const { height: DEVICE_HEIGHT } = Dimensions.get('window');
const BACKGROUND_COLOR = '#faf7f7';

export const CommonStyles = StyleSheet.create({
  emptyContainer: {
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: BACKGROUND_COLOR,
    minHeight: DEVICE_HEIGHT,
    maxHeight: DEVICE_HEIGHT,
  },
  recCircle: {
    flex: 1,
    position: 'absolute',
    top: 15,
    right: 15,
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  noPermissionsText: {
    textAlign: 'center',
  },
  player: {
    position: 'absolute',
    height: 80,
    display: 'flex',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'rgba(0, 0, 0, .1)',
    shadowOffset: { height: 0, width: 0 },
    marginTop: 30,
  },
  clipper: {
    flex: 1,
    position: 'absolute',
  },
  oneThirdScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: DEVICE_HEIGHT / 3,
    maxHeight: DEVICE_HEIGHT / 3,
  },
  twoThirdScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: (2 * DEVICE_HEIGHT) / 3,
    maxHeight: (2 * DEVICE_HEIGHT) / 3,
  },
  recordingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: 100,
    maxHeight: 100,
  },
  recordingDataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 100,
    maxHeight: 100,
    minWidth: DEVICE_HEIGHT / 2,
    maxWidth: DEVICE_HEIGHT / 2,
    marginBottom: 100,
  },
  recordingDataRowContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playbackContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    minHeight: 50,
    maxHeight: 50,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 50,
    paddingTop: 0,
  },
  playbackSlider: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 4,
    alignSelf: 'stretch',
  },
  trimButton: {
    top: 100,
    left: 5,
    position: 'absolute',
  },
  trimConfirmButton: {
    top: 140,
    left: 5,
    position: 'absolute',
  },
  recordingTimestamp: {
    fontSize: 20,
    height: 25,
    color: '#e76477',
  },
  playbackTimestamp: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 20,
    color: '#e76477',
  },
  buttonsContainerBase: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonsContainerTopRow: {
    maxHeight: 60,
    alignSelf: 'stretch',
    paddingRight: 20,
  },
  buttonsContainerBottomRow: {
    maxHeight: 20,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 5,
    position: 'absolute',
    top: 160,
  },
  buttonsContainerBottomText: {
    paddingLeft: 20,
  },
  playStopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 70,
    maxWidth: 70,
  },
  backWardContainer: {
    position: 'absolute',
    left: 2,
    bottom: 2,
  },
  volumeContainer: {
    position: 'absolute',
    right: 2,
    bottom: 2,
  },
});
