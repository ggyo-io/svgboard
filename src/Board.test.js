import { render } from '@testing-library/react';
import Board from './Board';
import { start } from './Utils';

test('renders board / pieces', () => {
  const position = start();
  const renderResult = render(<Board orientation={1} position={position} width={600} />);

  const svg = renderResult.container.querySelector('svg');
  expect(svg).toBeInTheDocument();
  expect(svg).toBeValid();

  [ 
    'wP', 'wR', 'wN', 'wB', 'wQ', 'wK' ,
    'bP', 'bR', 'bN', 'bB', 'bQ', 'bK'
  ].forEach( (p) => {
    const el = svg.querySelector('#' + p);
    expect(el).toBeVisible();
  });

});
