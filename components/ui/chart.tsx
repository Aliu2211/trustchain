import {
  LineChart as RechartsLineChart,
  Line as RechartsLine,
  XAxis as RechartsXAxis,
  YAxis as RechartsYAxis,
  CartesianGrid as RechartsCartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer as RechartsResponsiveContainer,
  type TooltipProps as RechartsTooltipProps,
} from "recharts"

export const LineChart = RechartsLineChart
export const Line = RechartsLine
export const XAxis = RechartsXAxis
export const YAxis = RechartsYAxis
export const CartesianGrid = RechartsCartesianGrid
export const Tooltip = RechartsTooltip
export const ResponsiveContainer = RechartsResponsiveContainer
export type TooltipProps<T, U> = RechartsTooltipProps<T, U>

