import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SellerDocument = Seller & Document;

@Schema()
export class Seller {
  @Prop()
  userId: string;
  @Prop()
  name: string;
  @Prop()
  password: string;
  @Prop()
  phonenumber: string;
  @Prop()
  business_number: string;
  @Prop()
  account_number: number;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);