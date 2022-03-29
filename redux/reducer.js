import { Switch } from "react-native-gesture-handler";
import { Getcities ,getlat,getlong} from "./action";

const initialstate={
    places:[],
    lat:51.509865,
   long:-0.118092,
}
function reducer(state=initialstate,action){

switch(action.type){
  case Getcities: return{...state,places:action.payload};
  case getlat:return{...state,lat:action.payload};
  case getlong:return{...state,long:action.payload};
  default: return state;
}


}
export default reducer;