
export interface MenuItem {
  name: string;
  id: number;
  parentId: number;
  children?: MenuItem[];
}
