import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BuyerDto, SellerDto } from 'src/dto/User.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('seller')
    async sellerAuth(@Body() data:any){
        console.log("seller login")
        return await this.authService.authseller(data.userId,data.password);
    }

    @Post('/buyer')
    async buyerAuth(@Body() data:any){
        console.log("buyer login")
        return await this.authService.authbuyer(data.userId,data.password);
    }
}
