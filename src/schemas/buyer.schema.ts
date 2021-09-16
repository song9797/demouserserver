import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BuyerDocument = Buyer & Document;

@Schema()
export class Buyer {
  @Prop()
  userId: string;
  @Prop()
  name: string;
  @Prop()
  address: string;
  @Prop()
  password: string;
  @Prop()
  phonenumber: string;
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);