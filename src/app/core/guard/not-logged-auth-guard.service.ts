import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from "@angular/router";

import { TokenStorageService } from "../services/token-storage.service";

@Injectable({ providedIn: 'root' })
class NotLoggedAuthGuardService {
  constructor(private router: Router, private tokenStorage: TokenStorageService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!this.tokenStorage.exists()){
      return true;
    }

    this.router.navigate(['']);

    return false;
  }
}

export const NotLoggedAuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(NotLoggedAuthGuardService).canActivate(next, state);
}