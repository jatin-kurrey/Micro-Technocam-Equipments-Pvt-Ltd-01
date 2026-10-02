export type ProductCategory = 
  | 'all'
  | 'sms-equipment'
  | 'eot-cranes'
  | 'conveyor-systems'
  | 'hydro-mechanical';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'sms-equipment' | 'eot-cranes' | 'conveyor-systems' | 'hydro-mechanical';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  capacity: string;
  standards: string[];
  keyFeatures: string[];
  specifications: ProductSpec[];
  applications: string[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  equipmentCategory: string;
  productModel?: string;
  requiredCapacity: string;
  customRequirements: string;
  location: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  sla: string;
  features: string[];
  badge: string;
}

export interface InfrastructurePillar {
  id: string;
  title: string;
  summary: string;
  capacityDetail: string;
  machinery: string[];
  standards: string;
}
