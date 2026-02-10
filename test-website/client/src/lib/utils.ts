import { describe, expect, it } from 'vitest';
import { cn } from './utils';

describe('cn utility function', () => {
  it('should merge basic class names', () => {
    expect(cn('px-2', 'py-4')).toBe('px-2 py-4');
    expect(cn('flex', 'items-center')).toBe('flex items-center');
  });

  it('should handle tailwind class conflicts', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
    expect(cn('inset-0', 'inset-x-1')).toBe('inset-x-1');
  });

  it('should handle conditional classes', () => {
    expect(cn('a', true && 'b', false && 'c')).toBe('a b');
    expect(cn({ 'bg-red-500': false, 'bg-blue-500': true })).toBe('bg-blue-500');
  });

  it('should handle empty/null/undefined values', () => {
    expect(cn(null, undefined, '', 'a')).toBe('a');
    expect(cn(undefined, '')).toBe('');
  });

  it('should handle complex combinations', () => {
    expect(
      cn(
        'font-medium', 
        ['hover:text-white', 'focus:ring-2'],
        { 'text-red-500': true, 'text-blue-500': false },
        'transition-colors'
      )
    ).toBe('font-medium hover:text-white focus:ring-2 text-red-500 transition-colors');
  });

  it('should normalize whitespace', () => {
    expect(cn('  a  ', '  b  ')).toBe('a b');
    expect(cn('\ta\n', '\tb\t')).toBe('a b');
  });
});