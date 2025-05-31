export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
//for User
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

//for address
export interface Geo {
  lat: string;
  lng: string;
}

//for User
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface GeoData {
  lat: string;
  lng: string;
}

export interface AddressData {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
}

export interface CompanyData {
  name: string;
  catchPhrase: string;
  bs: string;
}

//export interface UserData {
//  id: number;
//  name: string;
//  username: string;
//  email: string;
//  address?: AddressData;
//  phone?: string;
//  website?: string;
//  company?: CompanyData;
//}

export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
  address: AddressData;
  phone: string;
  website: string;
  company: CompanyData;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
  //onSubmit: (post: UserProps) => void;
}
