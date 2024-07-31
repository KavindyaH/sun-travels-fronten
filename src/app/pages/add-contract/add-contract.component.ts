import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contract, RoomType } from '../../models/contract.model';
import { Hotel } from '../../models/hotel.model';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {
  contract: Contract = new Contract();
  hotels: Hotel[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.fetchHotels();
    this.initializeContract();
  }

  fetchHotels(): void {
    this.contractService.getHotels().subscribe((data: Hotel[]) => {
      this.hotels = data;
    });
  }

  initializeContract(): void {
    this.contract.hotel = { id: 0 }; // Initialize hotel object with a default id
    this.contract.roomTypes.push(new RoomType());
  }

  addRoomType(): void {
    this.contract.roomTypes.push(new RoomType());
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
    this.contractService.createContract(this.contract).subscribe({
      next: () => {
        alert('Contract added successfully!');
        this.clearForm(contractForm);
      },
      error: (err) => {
        console.error('Error adding contract:', err);
        alert('There was an error adding the contract: ' + (err.error?.message || err.message));
      }
    });
  }

  clearForm(form: NgForm) {
    this.contract = new Contract();  // Reset the contract object
    form.resetForm();                // Clear the form fields
    this.initializeContract();       // Re-initialize the contract with a new room type
  }
}
