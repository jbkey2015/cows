import smash from '../../helpers/data/smash';

import './cowList.scss';

const buildCows = () => {
  smash.getCompleteCows()
    .then((cows) => {
      console.error('cow array from cowList', cows);
    })
    .catch((error) => {
      console.error('things broke', error);
    });
};

export default { buildCows };
