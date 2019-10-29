import './farmerList.scss';

import farmerData from '../../helpers/data/farmerData';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      console.error('farmerArray from farmer list', farmers);
    })
    .catch((error) => console.error('things broke', error));
};

export default { buildFarmers };
