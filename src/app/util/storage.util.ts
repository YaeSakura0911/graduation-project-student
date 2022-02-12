import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class StorageUtil {

    public set(key: string, value: Object): void {
        let currentTime = new Date().getTime();
        localStorage.setItem(key, JSON.stringify({data: value, time: currentTime}));
    }

    public get(key: string): any {
        let data: string | null = localStorage.getItem(key);
        if (data != null) {
            let jsonData = JSON.parse(data);
            // 超过保存时间1小时
            if (new Date().getTime() - jsonData.time > 1000*60*60) {
                this.remove(key);
                return null;
            }
            else {
                return jsonData.data;
            }
        }
    }

    public remove(key: string): void {
        localStorage.removeItem(key);
    }
}
