import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { RecipeController } from './recipe/recipe.controller';
import { UserSchema } from './user/user.model';
import { RecipeSchema } from './recipe/recipe.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/recipe_recommendation_db'),
    // MongooseModule.forRoot(mongoUrl),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Recipe', schema: RecipeSchema }]),
  ],
  controllers: [UserController, RecipeController],
})
export class MongodbModule {}
