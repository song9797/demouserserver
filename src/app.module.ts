import { Module } from '@nestjs/common';
import { BuyerController } from './buyer/buyer.controller';
import { BuyerService } from './buyer/buyer.service';
import { SellerController } from './seller/seller.controller';
import { SellerService } from './seller/seller.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Buyer, BuyerSchema, } from './schemas/buyer.schema';
import { Seller, SellerSchema } from './schemas/seller.schema';


@Module({
  imports: [
  ConfigModule.forRoot({
    isGlobal:true,
    envFilePath: '.env',
  }),
  MongooseModule.forRootAsync({
    imports:[ConfigModule],
    useFactory: async (config: ConfigService) => ({
      uri: config.get('DB_URL'),
      useNewUrlParser:true,
      useUnifiedTopology:true,
    }),
    inject:[ConfigService]
  }),
  MongooseModule.forFeature([{name:Buyer.name, schema: BuyerSchema},{name: Seller.name, schema: SellerSchema}])
],
  controllers: [ BuyerController, SellerController, AuthController],
  providers: [ BuyerService, SellerService, AuthService],
})
export class AppModule {}