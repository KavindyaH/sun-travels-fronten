import { Component, OnInit } from '@angular/core';
import { Contract } from '../../models/contract.model';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-all-contracts',
  templateUrl: './all-contracts.component.html',
  styleUrls: ['./all-contracts.component.scss']
})
export class AllContractsComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit() {
    this.contractService.getContracts().subscribe(data => {
      console.log(data);
      this.contracts = data;
    });
  }

  deleteContract(id: number) {
    this.contractService.deleteContract(id).subscribe(() => {
      this.contracts = this.contracts.filter(c => c.id !== id);
      alert('Contract deleted successfully!');
    });
  }
}
