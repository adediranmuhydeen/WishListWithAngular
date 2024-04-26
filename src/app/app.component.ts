import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WhishItem[] = [
    // new WhishItem('To Learn Angular'),
    // new WhishItem('Get a coffe", true'),
    // new WhishItem('Find grass that cuts itself')
  ];
  title = 'wishlist';
}
