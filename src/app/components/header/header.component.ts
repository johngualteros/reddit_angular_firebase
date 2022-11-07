import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  constructor(private modalService: ModalService, private authService: AuthService) { }
  
  ngOnInit(): void {
    // get user to localStorage
    const userJson = localStorage.getItem('user');
    this.currentUser = userJson !== null ? JSON.parse(userJson) : {};
  }

  openModal() {
    this.modalService.$modal.emit(true);
  }

}
