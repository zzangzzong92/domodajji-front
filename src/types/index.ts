export interface User {
  id: number;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface GroupInfo {
  groups: any;
  id: number;
  name: string;
  member_acount: number;
  host: string;
  created_at: string;
}
