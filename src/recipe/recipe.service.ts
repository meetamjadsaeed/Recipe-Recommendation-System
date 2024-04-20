import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipe } from './recipe.model';
import { CreateRecipeDto } from './create-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel('Recipe') private readonly recipeModel: Model<Recipe>,
  ) {}

  async getAllRecipes(): Promise<Recipe[]> {
    return await this.recipeModel.find().exec();
  }

  async createRecipe(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const createdRecipe = new this.recipeModel(createRecipeDto);
    return await createdRecipe.save();
  }
}
