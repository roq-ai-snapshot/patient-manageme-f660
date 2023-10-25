import { AppointmentInterface } from 'interfaces/appointment';
import { DoctorInterface } from 'interfaces/doctor';
import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HospitalInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  doctor?: DoctorInterface[];
  patient?: PatientInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    doctor?: number;
    patient?: number;
  };
}

export interface HospitalGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
