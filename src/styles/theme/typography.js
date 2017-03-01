import { fromJS } from 'immutable';

export default fromJS({
  fontFamily: 'Roboto, sans-serif',
  secondaryFontFamily: 'Varela Round, sans-serif',
  sizes: {
    paragraph: 16,
    title: 22,
    subtitle: 18,
  },

  headings: {
    h1: {
      fontSize: 24,
      fontWeight: '600',
    },
    h2: {
      fontSize: 22,
      fontWeight: '600',
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
    },
    h4: {
      fontSize: 18,
      fontWeight: '600',
    },
    h5: {
      fontSize: 16,
      fontWeight: '600',
    },
    h6: {
      fontSize: 14,
      fontWeight: '600',
    },
  },

  subheader: {
    fontSize: 14,
  },
});
