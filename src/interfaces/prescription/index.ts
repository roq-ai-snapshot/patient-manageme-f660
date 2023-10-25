import { PatientInterface } from 'interfaces/patient';
import { DoctorInterface } from 'interfaces/doctor';
import { GetQueryInterface } from 'interfaces';

export interface PrescriptionInterface {
  id?: string;
  medicine_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  patient_id: string;
  doctor_id: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  doctor?: DoctorInterface;
  _count?: {};
}

export interface PrescriptionGetQueryInterface extends GetQueryInterface {
  id?: string;
  medicine_name?: string;
  dosage?: string;
  frequency?: string;
  duration?: string;
  patient_id?: string;
  doctor_id?: string;
}
