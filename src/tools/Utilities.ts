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

  async ShowSessionLoadingMessage() {
    await this.notification.asyncBlock(
      new Promise((Resolve, Reject) => {
        setTimeout(() => {
          Resolve("Hola mundo");
        }, 3000);
      })
    );
    return "opened";
  }
}
