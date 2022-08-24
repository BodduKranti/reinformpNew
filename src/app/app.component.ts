import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function () {
      $('.mobileIcon').on('click', function () {
        $('.mainCotainer').addClass('active');
      });

      $('.closeIcon').on('click', function () {
        $('.mainCotainer').removeClass('active');
      })

      //demo

    })
  }
}
