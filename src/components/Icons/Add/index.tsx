import { FC } from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "..";

const AddIcon: FC<IconProps> = ({ ...props }) => (
  <Svg viewBox="0 0 24 24" fill="white" width={30} height={30} {...props}>
    <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </Svg>
);

export default AddIcon;
