import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  user: any = null;
  constructor(private modalService: ModalService, private authService: AuthService) { }
  ngOnInit(): void {
  }

  closeModal() {
    this.modalService.$modal.emit(false);
  }

  loginWithGoogle(){
    try{
      this.authService.loginWithGoogleProvider().then(res=>{
        this.user = this.authService.getCurrentUser();
        this.authService.$User.emit(this.user);
        localStorage.setItem('user', JSON.stringify(this.user));
        window.location.reload();
        this.closeModal();
      });
    }catch(err){
      console.log(err);
    }
  }

}
