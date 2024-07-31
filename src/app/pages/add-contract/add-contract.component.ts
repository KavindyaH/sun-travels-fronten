import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hotel } from '../../models/hotel.model';
import { ContractService } from '../../services/contract.service';
import { ContractInterface } from './interfaces';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {
  contract: ContractInterface = {
    hotel: { id: 0 },
    startDate: new Date(),
    endDate: new Date(),
    roomTypes: [{ type: '', price: 0, numRooms: 0, maxAdults: 0 }]
  };
  hotels: Hotel[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.fetchHotels();
  }

  fetchHotels(): void {
    this.contractService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }

  addRoomType(): void {
    this.contract.roomTypes.push({ type: '', price: 0, numRooms: 0, maxAdults: 0 });
  }

  removeRoomType(index: number): void {
    this.contract.roomTypes.splice(index, 1);
  }

  addContract(contractForm: NgForm): void {
    console.log('Contract data:', this.contract); // Check data before sending
    if (this.contract.roomTypes.length === 0) {
      alert('Please add at least one room type.');
      return;
    }

    const formattedContract = this.contract;

    this.contractService.createContract(formattedContract).subscribe({
      next: () => {
        alert('Contract added successfully!');
        // this.clearForm(contractForm);
      },
      error: (err) => {
        console.error('Error adding contract:', err);
        alert('There was an error adding the contract: ' + (err.error?.message || err.message));
      }
    });
  }

  // clearForm(form: NgForm) {
  //   this.contract = {
  //     hotel: { id: 0 },
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     roomTypes: [{ type: '', price: 0, numRooms: 0, maxAdults: 0 }]
  //   };
  //   form.resetForm();                // Clear the form fields
  // }
}
