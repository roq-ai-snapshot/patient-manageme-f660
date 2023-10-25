interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Administrator', 'Doctor'],
  tenantName: 'Hospital',
  applicationName: 'Patient Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read appointment details',
    'Manage personal user information',
    'Read prescription details',
    'Read doctor information',
  ],
  ownerAbilities: [
    'Manage user',
    'Manage hospital',
    'Manage patient',
    'Manage doctor',
    'Manage appointment',
    'Manage prescription',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/0a454370-e267-40ef-bf51-84b68f1c95de',
};
