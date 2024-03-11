import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import MyAccordion from './MyAccordion';

describe('Accordion test', () => {
  test('Snapshot', () => {
    render(
      <MyAccordion title="Testing">
        <h4>Content</h4>
      </MyAccordion>
    );

    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
