import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {StorageUtil} from "../util/storage.util";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private storageUtil: StorageUtil) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log(this.storageUtil.get("auth"))
        if (this.storageUtil.get("auth") == null) {
            this.router.navigateByUrl("/user/login");
        }
        return true;
    }

}
