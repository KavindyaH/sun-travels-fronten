export interface ContractInterface {
    hotel: { id: number };  // Nested object for hotel
    startDate: Date;
    endDate: Date;
    roomTypes: RoomTypeInterface[];
  }
  
  export interface RoomTypeInterface {
    type: string;
    price: number;
    numRooms: number;
    maxAdults: number;
  }
  