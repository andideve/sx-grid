import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { GridProps } from './types';

const config: SystemConfig<GridProps> = {
  gridGap: {
    property: 'gridGap',
    scale: ThemeKey.space,
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: ThemeKey.space,
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: ThemeKey.space,
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
};

export const grid = system(config);

export { GridProps };
export default grid;
