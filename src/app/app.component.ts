import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AuthService } from './service/auth.service';
import { ModalService } from './service/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reddit_angular_firebase';
  network: boolean;
  private notifier: NotifierService;
  modal: boolean;
  form: boolean;
  user: any;

  public constructor( notifier: NotifierService , private modalService: ModalService, private authService: AuthService) {
		this.notifier = notifier;
	}

  ngOnInit() {
    this.network = navigator.onLine;
    window.addEventListener('online', () => {
      this.network = true;
      this.showNetworkStatus('success', 'You are online');
    });
    window.addEventListener('offline', () => {
      this.network = false;
      this.showNetworkStatus('error', 'You are offline');
    });

    //remove loading class from all tags
    setTimeout(() => {
      this.removeLoadingClass();
    }, 2000)

    // modal
    this.modalService.$modal.subscribe((data) => {
      this.modal = data;
    });

    // form
    this.modalService.$formPost.subscribe((data) => {
      this.form = data;
    });
    // user
    // this.authService.$User.subscribe((data) => {
    //   this.user = data;
    //   console.log(this.user);
    // });
  }

  showNetworkStatus(type: string, text: string) {
    this.notifier.notify(type, text);
  }

  //remove loading class from all tags
  removeLoadingClass() {
    const loadingElements = document.getElementsByClassName('loading');
    const containerLoadingElements = document.getElementsByClassName('container-loading');
    while (loadingElements.length > 0 || containerLoadingElements.length > 0) {
      loadingElements[0].classList.remove('loading');
      containerLoadingElements[0].classList.remove('container-loading');
    }
  }
}
