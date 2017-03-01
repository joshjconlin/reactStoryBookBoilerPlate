import { StyleSheet } from 'react-native';

export default function getStyles(props, theme) {
  const shadow = props.zDepth && theme.getIn(['shadows', `zDepth${props.zDepth}`]).toJS();

  let borderRadius = 0;

  if (props.rounded) {
    switch (props.rounded) {
      case 'large':
        borderRadius = theme.getIn(['spacing', 'borderRadiusLarge']);
        break;
      case 'medium':
        borderRadius = theme.getIn(['spacing', 'borderRadiusMedium']);
        break;
      case 'small':
        borderRadius = theme.getIn(['spacing', 'borderRadiusSmall']);
        break;
      default:
        borderRadius = theme.getIn(['spacing', 'borderRadiusBase']);
        break;
    }
  }

  return StyleSheet.create({
    root: {
      backgroundColor: props.canvas ? theme.getIn(['palette', 'canvasColor']) : undefined,
      borderRadius,
      ...shadow,
    },
  });
}
