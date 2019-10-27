import cows from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cows.getCows()
    .then((response) => {
      console.error('it worked', response.data);
    })
    .catch((error) => {
      console.error('things broke', error);
    });
};

export default { buildCows };
