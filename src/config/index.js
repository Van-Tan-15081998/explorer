import { EventConst } from "./EventConst";
import { ApiConst } from "./ApiConst";

class AppSetting {
    constructor() {
        this.event = EventConst;
        this.api = ApiConst;
    }
}

export default {
    setting: new AppSetting()
}