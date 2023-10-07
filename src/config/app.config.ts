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
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative', 'Game Developer', 'End User'],
  tenantName: 'Team',
  applicationName: 'Medan Apps',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Manage tenant data',
    'Manage user-team relations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/37b67a2b-c69f-418d-84e0-adbb6c06d188',
};
