import type { v_heading, v_subheading, text } from './types';

export default <Record<v_heading | v_subheading | text, { size: number; height: number }>>{
  'heading-1': {
    size: 62,
    height: 75,
  },
  'heading-2': {
    size: 56,
    height: 68,
  },
  'heading-3': {
    size: 48,
    height: 58,
  },
  'heading-4': {
    size: 40,
    height: 48,
  },
  'heading-5': {
    size: 36,
    height: 44,
  },
  'heading-6': {
    size: 32,
    height: 39,
  },
  'subheading-1': {
    size: 24,
    height: 29,
  },
  'subheading-2': {
    size: 20,
    height: 24,
  },
  'subheading-3': {
    size: 18,
    height: 22,
  },
  'text-1': {
    size: 16,
    height: 19,
  },
  'text-2': {
    size: 14,
    height: 17,
  },
  'text-3': {
    size: 12,
    height: 15,
  },
  'text-4': {
    size: 10,
    height: 12,
  },
};

export const borderRadius: Record<string, number> = {
  '100': 100,
  '12': 12,
};
