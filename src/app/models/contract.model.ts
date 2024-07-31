
// src/app/models/contract.model.ts
export class Contract {
    id?: number;
    hotelId!: number;
    name?: string;
    startDate!: Date;
    endDate!: Date;
    roomTypes: RoomType[] = [];
    noOfRooms!: number;
    maxAdults!: number;
    hotelierPrice!: string;
    hotel: any

    constructor(init?: Partial<Contract>) {
      Object.assign(this, init);
    }
  }
  
  export class RoomType {
    id?: number;
    type!: string;
    price!: number;
    numRooms!: number;
    maxAdults!: number;
    contractId?: number;

    constructor(init?: Partial<RoomType>) {
      Object.assign(this, init);
    }
  }
  