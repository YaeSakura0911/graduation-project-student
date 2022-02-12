import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, Observable} from "rxjs";
import {StorageUtil} from "./util/storage.util";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    navbarVisible: boolean = true;
    studentName: string = "";

    constructor(private router:Router, private storageUtil: StorageUtil) {
        // 监听路由变化
        (this.router.events.pipe(filter(event => event instanceof NavigationEnd)) as Observable<NavigationEnd>).subscribe(router => {
            console.log(router);
            if(router.url == "/user/login") {
                this.navbarVisible = false;
            }
            else {
                this.navbarVisible = true;
                this.studentName = storageUtil.get("auth").studentName;
            }
        })
    }

    // 学生登出
    logoutStudent(): void {
        this.storageUtil.remove("auth");
        this.router.navigateByUrl("/user/login");
    }
}
