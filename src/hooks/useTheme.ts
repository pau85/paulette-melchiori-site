import { useState } from 'react';
import { Theme } from '../types';

export const themes: Record<string, Theme> = {
  light: {
    name: 'Light Mode',
    primary: '#2c3e50',
    secondary: '#3498db',
    accent: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#2c3e50',
    textSecondary: '#5a6c7d',
    border: '#e1e8ed',
    sidebarBg: '#2c3e50',
    sidebarText: '#ffffff',
  },
  dark: {
    name: 'Dark Mode',
    primary: '#3498db',
    secondary: '#2c3e50',
    accent: '#e74c3c',
    success: '#27ae60',
    warning: '#f39c12',
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: '#f8f9fa',
    textSecondary: '#b8b8b8',
    border: '#404040',
    sidebarBg: '#1a1a1a',
    sidebarText: '#ffffff',
  },
  ocean: {
    name: 'Ocean Blue',
    primary: '#006064',
    secondary: '#00acc1',
    accent: '#ff7043',
    success: '#00695c',
    warning: '#ffb300',
    background: '#e0f2f1',
    surface: '#ffffff',
    text: '#004d40',
    textSecondary: '#00695c',
    border: '#b2dfdb',
    sidebarBg: '#006064',
    sidebarText: '#ffffff',
  },
  sunset: {
    name: 'Sunset Orange',
    primary: '#d84315',
    secondary: '#ff8a65',
    accent: '#ffa726',
    success: '#689f38',
    warning: '#ffa000',
    background: '#fff3e0',
    surface: '#ffffff',
    text: '#bf360c',
    textSecondary: '#d84315',
    border: '#ffccbc',
    sidebarBg: '#d84315',
    sidebarText: '#ffffff',
  },
  forest: {
    name: 'Forest Green',
    primary: '#2e7d32',
    secondary: '#66bb6a',
    accent: '#ff8f00',
    success: '#388e3c',
    warning: '#f57c00',
    background: '#f1f8e9',
    surface: '#ffffff',
    text: '#1b5e20',
    textSecondary: '#2e7d32',
    border: '#c8e6c9',
    sidebarBg: '#2e7d32',
    sidebarText: '#ffffff',
  },
  purple: {
    name: 'Royal Purple',
    primary: '#6a1b9a',
    secondary: '#ab47bc',
    accent: '#ff7043',
    success: '#388e3c',
    warning: '#ffa000',
    background: '#f3e5f5',
    surface: '#ffffff',
    text: '#4a148c',
    textSecondary: '#6a1b9a',
    border: '#e1bee7',
    sidebarBg: '#6a1b9a',
    sidebarText: '#ffffff',
  },
};

export const useTheme = (initialTheme: string = 'light') => {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);

  const changeTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return {
    currentTheme,
    theme: themes[currentTheme],
    changeTheme,
    availableThemes: Object.keys(themes),
  };
};