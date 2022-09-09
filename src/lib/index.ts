import { Base } from "./base";
import { CreditInfoService } from "./creditInfoService"
import { applyMixins } from "./utils";

class Creditinfo extends Base { }
interface Creditinfo extends CreditInfoService { }

applyMixins(Creditinfo, [CreditInfoService]);

export default Creditinfo


