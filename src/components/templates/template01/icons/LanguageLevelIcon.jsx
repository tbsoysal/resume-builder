import { Svg, Circle } from '@react-pdf/renderer';

export const LanguageLevelIcon = ({ filled }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
    <Circle cx="5" cy="5" r="4.5" fill={filled ? 'white' : 'none'} stroke="white" />
  </Svg>
)
