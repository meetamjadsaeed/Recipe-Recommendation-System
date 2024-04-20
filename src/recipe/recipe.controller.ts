import { Controller, Get, Post, Body } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './create-recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getAllRecipes() {
    return await this.recipeService.getAllRecipes();
  }

  @Post()
  async createRecipe(@Body() createRecipeDto: CreateRecipeDto) {
    return await this.recipeService.createRecipe(createRecipeDto);
  }
}
