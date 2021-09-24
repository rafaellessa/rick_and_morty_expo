import { factoryPersons } from "./factory";
import Api from "../../datasource/api";
import action from "./action";
import { RequestGetAllPersonsParams } from "../../../redux/types/types.person";

const PersonService = {
  async getPersons(data: RequestGetAllPersonsParams) {
    const instance = Api.getApiInstance(
      data?.offset
        ? action.getPersons + `?page=${data.offset}`
        : action.getPersons
    );
    const response = await instance.request({
      method: "GET",
    });

    return factoryPersons(response.data.results);
  },
};

export default PersonService;
