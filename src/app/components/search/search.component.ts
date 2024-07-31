import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchCriteria = {
    checkInDate: '',
    checkOutDate: '',
    numNights: '',
    rooms: []
  };

  rooms = [{ adults: 1, numRooms: 1 }];

  constructor(private searchService: SearchService) { }

//   onSearch() {
//     this.searchCriteria.rooms = this.rooms;
//     this.searchService.searchRooms(this.searchCriteria).subscribe(response => {
//       console.log(response);
//       // Handle the response as needed
//     });
//   }

//   addRoom() {
//     this.rooms.push({ adults: 1, numRooms: 1 });
//   }

//   removeRoom(index: number) {
//     this.rooms.splice(index, 1);
//   }
}
