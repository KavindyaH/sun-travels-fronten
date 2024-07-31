import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contract } from '../../models/contract.model';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss']
})
export class ViewContractComponent implements OnInit {
  contract: Contract = new Contract();

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService
  ) { }

  ngOnInit(): void {
    const contractId = Number(this.route.snapshot.paramMap.get('id'));
    if (contractId) {
      this.contractService.getContractById(contractId).subscribe(data => {
        this.contract = data;
      });
    } else {
      console.error('Invalid contract ID');
    }
  }
}
