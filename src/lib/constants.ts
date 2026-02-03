export const COLORS = {
  primary: "#BE968E",
  background: "#FBFBFB",
  surface: "#FFFFFF",
  muted: "#F6F6F6",
  text: "#020202",
  textMuted: "#64748B",
} as const;

export const LAYOUT = {
  headerHeight: 91,
  maxContainerWidth: 1440,
  containerPadding: "px-4 md:px-[60px]",
} as const;

export const PRODUCT_DETAILS = {
  UNIT_PRICE: 300,
  PRICE_ORIGINAL: 360,
  CURRENCY: "$",
} as const;

export const ACCENT_COLOR = COLORS.primary;

export const GALLERY = {
  BORDER_RADIUS_PX: 40,
  SHADOW: "0 4px 24px rgba(0,0,0,0.08)",
  ARROW_WIDTH_PX: 48,
  ARROW_HEIGHT_PX: 48,
  ARROW_RADIUS_PX: 38,
} as const;

export const REVIEWS_SPEC = {
  TOTAL_REVIEWS: "3.0K",
  ADD_COMMENT_WIDTH_PX: 186,
  ADD_COMMENT_HEIGHT_PX: 56,
} as const;

export const BREADCRUMB_SPEC = {
  CONTAINER_BG: "rgba(236, 236, 236, 0.4)",
} as const;
