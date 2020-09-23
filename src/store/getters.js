//***********************/
//*** GLOBAL GETTERS ***/
//*********************/
import { getField } from 'vuex-map-fields';

const getters = {
  getField,
  isLoggedIn: state => state.token,
  user: state => state.user,
  statusMessage: state => state.statusMessage
};

export default getters;
