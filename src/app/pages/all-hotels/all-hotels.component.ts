import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.scss']
})
export class AllHotelsComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(data => {
      this.hotels = data;
    });
  }

  deleteHotel(id: number) {
    this.hotelService.deleteHotel(id).subscribe(() => {
      this.hotels = this.hotels.filter(h => h.id !== id);
      alert('Hotel deleted successfully!');
    });
  }
}
