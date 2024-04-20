import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  preferences: {
    cuisine: string[];
    dietaryRestrictions: string[];
    // Add more preferences as needed
  };
}

export const UserSchema = SchemaFactory.createForClass(User);
