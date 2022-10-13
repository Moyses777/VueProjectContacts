import store from "@/store";
import AWN from "awesome-notifications";
import { AwnOptions } from "awesome-notifications";

export class Notifications {
  notification;
  globalOptions;
  nextCallOptions;

  constructor() {
    let optionsGlobal: AwnOptions;
    this.nextCallOptions = {};
    this.globalOptions = optionsGlobal = {
      Icons: { enabled: true, success: "check-circle" },
    };
    this.notification = new AWN(this.globalOptions);
  }

  ShowMessageSuccess(TextNotification: string) {
    this.notification.success(TextNotification, this.nextCallOptions);
  }

  ShowMessageError(TextNotification: string) {
    this.notification.alert(TextNotification, this.nextCallOptions);
  }

  async ShowSessionLoadingMessage(option: string) {
    if (option == "register") {
      await this.notification.asyncBlock(
        new Promise((Resolve, Reject) => {
          setTimeout(() => {
            Resolve("");
          }, 3000);
        }),
        "Registro Exitoso!"
      );
    }
    if (option == "login") {
      await this.notification.asyncBlock(
        new Promise((Resolve, Reject) => {
          setTimeout(() => {
            if (store.state.user.Email != "") Resolve("");
            else Reject("Usuario o Contraseña incorrectos!!!");
          }, 3000);
        }),
        "Proceso Exitoso!"
      );
    }
    return "opened";
  }
}
