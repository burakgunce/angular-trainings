import { ResponseModel } from "./responseModel";
import { Todo } from "./todo";

export interface TodoResponceModel extends ResponseModel{
    data:Todo[]
}