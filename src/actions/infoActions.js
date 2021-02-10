import {ADD_INFO} from "../constants";

export function addInfo(info) {
    console.log("ACTION: " + info);
    return {
      type: ADD_INFO,
      info: info,
    };
  }
  