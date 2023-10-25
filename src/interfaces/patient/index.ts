import { AppointmentInterface } from 'interfaces/appointment';
import { PrescriptionInterface } from 'interfaces/prescription';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  first_name: string;
  last_name: string;
  date_of_birth: any;
  gender: string;
  address: string;
  phone_number: string;
  hospital_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  prescription?: PrescriptionInterface[];
  hospital?: HospitalInterface;
  _count?: {
    appointment?: number;
    prescription?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  address?: string;
  phone_number?: string;
  hospital_id?: string;
}
