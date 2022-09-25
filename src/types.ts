import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

export interface GridProps {
  gridGap?: ResponsiveValue<CSSProperties['gridGap']>;
  gridColumnGap?: ResponsiveValue<CSSProperties['gridColumnGap']>;
  gridRowGap?: ResponsiveValue<CSSProperties['gridRowGap']>;
  gridColumn?: ResponsiveValue<CSSProperties['gridColumn']>;
  gridRow?: ResponsiveValue<CSSProperties['gridRow']>;
  gridAutoFlow?: ResponsiveValue<CSSProperties['gridAutoFlow']>;
  gridAutoColumns?: ResponsiveValue<CSSProperties['gridAutoColumns']>;
  gridAutoRows?: ResponsiveValue<CSSProperties['gridAutoRows']>;
  gridTemplateColumns?: ResponsiveValue<CSSProperties['gridTemplateColumns']>;
  gridTemplateRows?: ResponsiveValue<CSSProperties['gridTemplateRows']>;
  gridTemplateAreas?: ResponsiveValue<CSSProperties['gridTemplateAreas']>;
  gridArea?: ResponsiveValue<CSSProperties['gridArea']>;
}
