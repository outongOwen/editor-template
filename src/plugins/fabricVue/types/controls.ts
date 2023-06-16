import type { Control } from 'fabric';
import type { TProps } from '@fabric/shapes/Object/types';
import type { ControlProps } from '@fabric/shapes/Object/types/ControlProps';
export type ControlsPointEnum = 'ml' | 'mr' | 'mb' | 'mt' | 'tl' | 'tr' | 'bl' | 'br' | 'mtr';
export type FControlProps = TProps<ControlProps>;
export type TControlSet = {
  [key in ControlsPointEnum]?: Control;
};
export type ControlsVisibility = {
  [key in ControlsPointEnum]?: boolean;
};
// export interface ControlsConfigProps {
//   controlsVisibility: ControlsVisibility,
//   controlProps: FControlProps,

// }
