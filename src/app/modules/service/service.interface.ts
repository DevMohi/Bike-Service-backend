import { ServiceStatus } from "./service.constant";

export type IServiceRecord = {
  bikeId: string;
  serviceDate: string; // ISO Date string (can be Date if you're using Date objects)
  description: string;
  status: ServiceStatus;
};
