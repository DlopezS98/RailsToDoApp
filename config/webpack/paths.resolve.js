const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@Shared': path.resolve(__dirname, '..', '..', 'app/javascript/shared/'),
      '@Components': path.resolve(
        __dirname,
        '..',
        '..',
        'app/javascript/components/'
      ),
    },
  },
};
