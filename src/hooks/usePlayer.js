import { useState } from 'react';

import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {
    const [player, setPLayer] = useState({
pos: { x: 0, y: 0 },
tetromino: randomTetromino().shape,
collided: false,
});

return [player];
}