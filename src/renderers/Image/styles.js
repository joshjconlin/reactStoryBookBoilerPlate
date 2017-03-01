import { StyleSheet } from 'react-native';

export default function getStyles(props) {
  return StyleSheet.create({
    root: {
      width: props.width,
      height: props.height,
    },
  });
}
