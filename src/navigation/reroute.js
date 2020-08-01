import { started } from "../start";

export function reroute() {

  if (started) {
    console.log(2);
  } else {
    // 用户第一次调用
    console.log(1);

  }

}
