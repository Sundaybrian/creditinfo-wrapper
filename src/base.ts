import { IConfig, ICreditInfo } from "./interfaces";
import soap from "soap";


export abstract class Base {
    private username: string;
    private password: string;
    private url: string;
    // private client: Promise<ICreditInfo>;


    constructor(config: IConfig) {

        this.url = config.endpoint ?? "https://ws.creditinfo.co.tz/WsReport/v5.39/service.svc?singleWSDL";
        this.username = config.username;
        this.password = config.password;

    }


    protected invoke<T>(): Promise<ICreditInfo> {
        // can set default headers here
        const security = new soap.BasicAuthSecurity(this.username, this.password);
        const wsdl_headers = {
            connection: "keep-alive",
        };
        security.addHeaders(wsdl_headers)

        return soap.createClientAsync(this.url, { wsdl_headers }).then((client: ICreditInfo) => {
            client.setSecurity(security);
            return client;
        }).catch((err) => {
            throw new Error(err)
        });

    }
}