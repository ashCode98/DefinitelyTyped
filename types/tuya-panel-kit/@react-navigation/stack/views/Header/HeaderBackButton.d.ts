import type { StackHeaderLeftButtonProps } from "../../types";
import { JSX } from "react";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props = StackHeaderLeftButtonProps;
export default function HeaderBackButton(
    {
        disabled,
        allowFontScaling,
        backImage,
        label,
        labelStyle,
        labelVisible,
        onLabelLayout,
        onPress,
        pressColorAndroid: customPressColorAndroid,
        screenLayout,
        tintColor: customTintColor,
        titleLayout,
        truncatedLabel,
        accessibilityLabel,
        style,
    }: Props,
): JSX.Element;
export {};
