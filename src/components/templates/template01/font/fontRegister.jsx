import { Font } from '@react-pdf/renderer';
import ZillaSlabRegular from './ZillaSlab/ZillaSlab-Regular.ttf';
import ZillaSlabLight from './ZillaSlab/ZillaSlab-Light.ttf';
import ZillaSlabMedium from './ZillaSlab/ZillaSlab-Medium.ttf';
import ZillaSlabSemiBold from './ZillaSlab/ZillaSlab-SemiBold.ttf';
import ZillaSlabBold from './ZillaSlab/ZillaSlab-Bold.ttf';

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
