import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from '../../models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent {
  hotel: Hotel = new Hotel();

  constructor(private hotelService: HotelService) { }

  addHotel(hotelForm: NgForm) {
    this.hotelService.createHotel(this.hotel).subscribe({
      next: () => {
        alert('Hotel added successfully!');
        this.clearForm(hotelForm);
      },
      error: (err) => {
        console.error('Error adding hotel', err);
      }
    });
  }

  clearForm(form: NgForm) {
    this.hotel = new Hotel();  // Reset the hotel object
    form.resetForm();          // Clear the form fields
  }
}
