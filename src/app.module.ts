import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RecipeModule } from './recipe/recipe.module';
import { RecommendationModule } from './recommendation/recommendation.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [
    UserModule,
    RecipeModule,
    RecommendationModule,
    IngredientModule,
    CacheModule,
  ],
})
export class AppModule {}
