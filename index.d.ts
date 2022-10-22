declare module 'rn-segmented-control' {
  // import {  ViewStyle, TextStyle } from "react-native"
  import { ViewStyle, StyleProp, TextStyle } from "react-native";
  import React from 'react'
  export interface ShadowOffsetProps {
    width: number,
    height: number,
  }

  export interface ShadowStyleProps {
    shadowColor: string,
    shadowOffset: ShadowOffsetProps,
    shadowOpacity: number,
    shadowRadius: number,
    elevation: number,
  }

  export interface SegmentedControlProps {
    tabs: Array<string>;
    onChange(index: number) :void;
    currentIndex: number;
    segmentedControlBackgroundColor?: string;
    activeSegmentBackgroundColor?: string;
    textColor?: string;
    activeTextColor?: string;
    activeTextWeight?: string;
    paddingVertical?: number;
    width?: number;
    containerStyle?: StyleProp<ViewStyle>;
    tileStyle?: StyleProp<ViewStyle>;
    textStyle?: TextStyle;
    isRTL?: boolean;
    theme?: "LIGHT" | "DARK";
    shadowStyle?: ShadowStyleProps;
  } 

  const SegmentedControl: React.FC<SegmentedControlProps>;
  
  export default SegmentedControl;
}