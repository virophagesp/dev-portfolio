// Bento, dark-first palette: a neutral page/surface ramp + a single indigo
// accent (with a violet partner used only for gradients). Existing keys are
// preserved so every component keeps working; values are retuned for the look.

export const darkTheme = {
  background: '#09090b',
  color: '#f4f4f5',
  textMuted: '#a1a1aa',
  accentColor: '#818cf8',
  accentColor2: '#c084fc',
  accentSoft: 'rgba(129, 140, 248, 0.14)',
  glow1: 'rgba(99, 102, 241, 0.18)',
  glow2: 'rgba(168, 85, 247, 0.12)',
  chronoTheme: {
    cardBgColor: '#141417',
    cardForeColor: '#f4f4f5',
    titleColor: 'black',
  },
  timelineLineColor: '#27272a',
  cardBackground: '#141417',
  cardFooterBackground: '#1b1b1f',
  cardBorderColor: 'rgba(255, 255, 255, 0.08)',
  navbarBackground: 'rgba(9, 9, 11, 0.62)',
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.40), 0 4px 16px rgba(0, 0, 0, 0.40)',
  shadowMd: '0 8px 24px rgba(0, 0, 0, 0.55), 0 16px 48px rgba(0, 0, 0, 0.60)',
  navbarTheme: {
    linkColor: '#a1a1aa',
    linkHoverColor: '#fafafa',
    linkActiveColor: '#fafafa',
  },
  bsPrimaryVariant: 'dark',
  bsSecondaryVariant: 'light',
  socialIconBgColor: '#f4f4f5',
};
