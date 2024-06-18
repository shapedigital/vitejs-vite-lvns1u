import { UnoConfig } from '@yagro/config-unocss';

const config = {
  ...UnoConfig,
  theme: {
    ...UnoConfig.theme,
    colors: {
      ...UnoConfig.theme.colors,
      customColor: '#123456',
    },
  },
};

export default config;
