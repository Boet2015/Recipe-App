import { Ng2BootstrapModule } from 'ngx-bootstrap/ng2-bootstrap';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

 // tslint:disable-next-line:no-inferrable-types
 isCollapsed: boolean = true;

toggleCollapse(): void {
  this.isCollapsed = !this.isCollapsed;
}
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
