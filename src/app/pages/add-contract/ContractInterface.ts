import { RoomTypeInterface } from "./add-contract.component";

export interface ContractInterface {
  hotel: { id: number; }; // Nested object for hotel
  startDate: Date;
  endDate: Date;
  roomTypes: RoomTypeInterface[];
}
