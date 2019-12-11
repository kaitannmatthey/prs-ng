import { User } from '../model/user.class';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: "root"
})

export class SystemService {
    loggedInUser: User = null;
    
    private loggedInStatus = JSON.parse(localStorage.getItem("loggedIn") || "false")

    constructor(private router: Router) { }

    isAdmin(): boolean {
        return (this.loggedInUser == null) ? false : this.loggedInUser.admin;
    }
    isReviewer(): boolean {
        return (this.loggedInUser == null) ? false : this.loggedInUser.reviewer;
    }
    setLoggedIn(value: boolean) {
        this.loggedInStatus = value;
        localStorage.setItem("loggedIn", "true");
    }

    get isLoggedIn() {
        return JSON.parse(localStorage.getItem("loggedIn") || this.loggedInStatus.toString());
    }

    checkLogin(): void {
        // if user is not logged in, send to login page
        // commenting out for testing purposes
        if(this.loggedInUser == null) {
          this.router.navigateByUrl("/users/login");
        }
    }
}
