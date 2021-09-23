import {factoryPersons} from './factory';
import Api from '../../datasource/api';
import action from './action';

const PersonService = {
  async getPersons() {
    const instance = Api.getApiInstance(action.getPersons);
    const response = await instance.request({
      method: 'GET',
    });

    return factoryPersons(response.data.results);
  },
};

export default PersonService;
