import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
})
export class ContentPageComponent implements OnInit {

  currentUser: any = null;

  constructor(private authService: AuthService, private modalService: ModalService) {}

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    this.currentUser = userJson !== null ? JSON.parse(userJson) : null;
  }

  trends: any = [
    {
      title: 'Twitter Advertirses',
      description:'Elon musk needs to stop tweeting',
      image: 'https://media.wired.com/photos/5a55b72db1cfb87f3206aa5b/master/pass/Twitter-Hole-featured.jpg',
      date: '12/12/2020',
      user: [
        {
          name: 'Elon Musk',
          image: 'https://external-preview.redd.it/1mF2BkbuRUyI5Od8V7aTZDVS_Y8-GMWeT4zvv7e_IrI.jpg?auto=webp&s=6dd561c5c1c1d69de69a56c8afaf4d5e3269d537',
        }
      ]
    },
    {
      title: 'Twitter Advertirses',
      description:'Elon musk needs to stop tweeting',
      image: 'https://media.wired.com/photos/5a55b72db1cfb87f3206aa5b/master/pass/Twitter-Hole-featured.jpg',
      date: '12/12/2020',
      user: [
        {
          name: 'Elon Musk',
          image: 'https://external-preview.redd.it/1mF2BkbuRUyI5Od8V7aTZDVS_Y8-GMWeT4zvv7e_IrI.jpg?auto=webp&s=6dd561c5c1c1d69de69a56c8afaf4d5e3269d537',
        }
      ]
    },
    {
      title: 'Twitter Advertirses',
      description:'Elon musk needs to stop tweeting',
      image: 'https://media.wired.com/photos/5a55b72db1cfb87f3206aa5b/master/pass/Twitter-Hole-featured.jpg',
      date: '12/12/2020',
      user: [
        {
          name: 'Elon Musk',
          image: 'https://external-preview.redd.it/1mF2BkbuRUyI5Od8V7aTZDVS_Y8-GMWeT4zvv7e_IrI.jpg?auto=webp&s=6dd561c5c1c1d69de69a56c8afaf4d5e3269d537',
        }
      ]
    },
    {
      title: 'Twitter Advertirses',
      description:'Elon musk needs to stop tweeting',
      image: 'https://media.wired.com/photos/5a55b72db1cfb87f3206aa5b/master/pass/Twitter-Hole-featured.jpg',
      date: '12/12/2020',
      user: [
        {
          name: 'Elon Musk',
          image: 'https://external-preview.redd.it/1mF2BkbuRUyI5Od8V7aTZDVS_Y8-GMWeT4zvv7e_IrI.jpg?auto=webp&s=6dd561c5c1c1d69de69a56c8afaf4d5e3269d537',
        }
      ]
    },
  ];

  logout(){
    this.authService.logout();
    window.location.reload();
  }
  openForm(){
    this.modalService.$formPost.emit(true);
  }
}
