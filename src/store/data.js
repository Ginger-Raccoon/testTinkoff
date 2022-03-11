import { makeAutoObservable } from "mobx"
import { data_theme, data_test, data_result } from "../utills/data"


class data {
  theme = data_theme
  test = data_test
  result = data_result

  constructor(){
    makeAutoObservable(this)
  }

}



export default new data()