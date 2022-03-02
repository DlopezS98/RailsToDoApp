export default class Notes {
  public id: number;
  public title: string;
  public description: string;
  public created_at: Date;
  public updated_at?: Date;
  public deleted: boolean;
}
