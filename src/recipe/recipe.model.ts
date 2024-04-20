import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Recipe extends Document {
  @Prop()
  name: string;

  @Prop()
  ingredients: string[];

  @Prop()
  instructions: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
