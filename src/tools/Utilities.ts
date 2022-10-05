import AWN from "awesome-notifications";

export class Notifications {
  notification;
  globalOptions;
  nextCallOptions;

  constructor() {
    this.nextCallOptions = {};
    this.globalOptions = {};
    this.notification = new AWN(this.globalOptions);
  }

  ShowMessage() {
    this.notification.success("Hola mundo", this.nextCallOptions);
  }
}
