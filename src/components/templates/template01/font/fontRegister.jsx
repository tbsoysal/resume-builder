import { Font } from '@react-pdf/renderer';
import ZillaSlabRegular from './ZillaSlab/ZillaSlab-Regular.woff2';
import ZillaSlabLight from './ZillaSlab/ZillaSlab-Light.woff2';
import ZillaSlabMedium from './ZillaSlab/ZillaSlab-Medium.woff2';
import ZillaSlabSemiBold from './ZillaSlab/ZillaSlab-SemiBold.woff2';
import ZillaSlabBold from './ZillaSlab/ZillaSlab-Bold.woff2';

export const registerFont = () => {
  Font.register({
    family: 'ZillaSlab',
    fonts: [
      { src: ZillaSlabLight, fontWeight: 300 },
      { src: ZillaSlabRegular, fontWeight: 400 },
      { src: ZillaSlabMedium, fontWeight: 500 },
      { src: ZillaSlabSemiBold, fontWeight: 600 },
      { src: ZillaSlabBold, fontWeight: 700 },
    ],
    format: 'truetype',
  })
};
