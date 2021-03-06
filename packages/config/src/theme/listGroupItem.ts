const listGroupItem = {
  colors: {
    primary: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'primaryDarkest'),
      backgroundColor: (get) => get('colorScheme', 'primaryLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'primaryLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'primaryDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'primaryDarkest'),
      borderColorActive: (get) => get('colorScheme', 'primaryDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    secondary: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'secondaryDarkest'),
      backgroundColor: (get) => get('colorScheme', 'secondaryLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'secondaryLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'secondaryDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'secondaryDarkest'),
      borderColorActive: (get) => get('colorScheme', 'secondaryDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    success: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'successDarkest'),
      backgroundColor: (get) => get('colorScheme', 'successLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'successLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'successDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'successDarkest'),
      borderColorActive: (get) => get('colorScheme', 'successDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    info: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'infoDarkest'),
      backgroundColor: (get) => get('colorScheme', 'infoLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'infoLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'infoDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'infoDarkest'),
      borderColorActive: (get) => get('colorScheme', 'infoDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    warning: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'warningDarkest'),
      backgroundColor: (get) => get('colorScheme', 'warningLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'warningLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'warningDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'warningDarkest'),
      borderColorActive: (get) => get('colorScheme', 'warningDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    danger: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'dangerDarkest'),
      backgroundColor: (get) => get('colorScheme', 'dangerLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'dangerLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'dangerDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'dangerDarkest'),
      borderColorActive: (get) => get('colorScheme', 'dangerDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    light: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'lightDarkest'),
      backgroundColor: (get) => get('colorScheme', 'lightDark'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'lightLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'lightDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'lightDarkest'),
      borderColorActive: (get) => get('colorScheme', 'lightDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    dark: {
      colorDisabled: (get) => get('colorScheme', 'lightDarker'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      colorActive: (get) => get('colorScheme', 'white'),
      color: (get) => get('colorScheme', 'darkDarkest'),
      backgroundColor: (get) => get('colorScheme', 'darkLighter'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'darkLighter'),
      backgroundColorActive: (get) => get('colorScheme', 'darkDarkest'),
      backgroundColorHoverFocusActive: (get) => get('colorScheme', 'darkDarkest'),
      borderColorActive: (get) => get('colorScheme', 'darkDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
    },
    default: {
      colorDisabled: (get) => get('colorScheme', 'lightDark'),
      backgroundColor: (get) => get('colorScheme', 'white'),
      backgroundColorDisabled: (get) => get('colorScheme', 'white'),
      backgroundColorAction: (get) => get('colorScheme', 'light'),
      backgroundColorHoverFocusAction: (get) => get('colorScheme', 'light'),
      color: (get) => get('colorScheme', 'lightDarkest'),
      colorActive: (get) => get('colorScheme', 'white'),
      colorAction: (get) => get('colorScheme', 'lightDarkest'),
      borderColor: (get) => get('colorScheme', 'weakBorder'),
      borderColorActive: (get) => get('colorScheme', 'primary'),
      backgroundColorActive: (get) => get('colorScheme', 'primary'),
    },
  },
  padding: {
    default: '0.75rem 1.25rem',
  },
  border: (get) => get('globals', 'border'),
  borderRadius: (get) => get('globals', 'borderRadius'),
};

export { listGroupItem };
