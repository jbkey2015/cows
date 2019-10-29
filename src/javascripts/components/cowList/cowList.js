import cowData from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      console.error('cow array from cowList', cows);
    })
    .catch((error) => {
      console.error('things broke', error);
    });
};

export default { buildCows };
