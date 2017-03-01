import { StyleSheet } from 'react-native';

export default function getStyles(props, theme) {
  return StyleSheet.create({
    root: {
      color: props.color || theme.getIn(['palette', 'textColor']),
      fontSize: props.size || theme.getIn(['typography', 'sizes', 'paragraph']),
      textAlign: props.align || undefined,
    },
    bold: {
      fontWeight: '900',
    },
  });
}
