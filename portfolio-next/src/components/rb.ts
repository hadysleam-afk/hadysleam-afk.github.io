import type { ComponentType } from "react";
// @ts-ignore vendored React Bits (JS) components
import _DotGrid from "./reactbits/DotGrid";
// @ts-ignore
import _Magnet from "./reactbits/Magnet";
// @ts-ignore
import _DecryptedText from "./reactbits/DecryptedText";
export const DotGrid = _DotGrid as unknown as ComponentType<Record<string, unknown>>;
export const Magnet = _Magnet as unknown as ComponentType<Record<string, unknown>>;
export const DecryptedText = _DecryptedText as unknown as ComponentType<Record<string, unknown>>;
