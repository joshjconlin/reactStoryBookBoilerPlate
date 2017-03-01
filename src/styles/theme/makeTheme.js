import { fromJS } from 'immutable';

export default function makeTheme(props) {
  return fromJS({
    themeName: 'Reader Zone',
    ...props,
  });
}
