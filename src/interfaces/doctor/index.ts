import { AppointmentInterface } from 'interfaces/appointment';
import { PrescriptionInterface } from 'interfaces/prescription';
import { HospitalInterface } from 'interfaces/hospital';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DoctorInterface {
  id?: string;
  first_name: string;
  last_name: string;
  specialization: string;
  hospital_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  prescription?: PrescriptionInterface[];
  hospital?: HospitalInterface;
  user?: UserInterface;
  _count?: {
    appointment?: number;
    prescription?: number;
  };
}

export interface DoctorGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  specialization?: string;
  hospital_id?: string;
  user_id?: string;
}
