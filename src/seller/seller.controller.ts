import { Controller, Get, Query, Post, Body, Put, Param, Delete, Patch } from '@nestjs/common';
import { SellerDto } from 'src/dto/User.dto'; 
import { SellerService } from './seller.service';

@Controller('seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService){}

    @Get('/:userId')
    // async findAll(): Promise<any[]> {
    //     return [];}

    async Findone(@Query('userId') userId:string){
        return await this.sellerService.FindOne(userId);
    }

    @Post('Create')
    async Create(@Body() sellerDto: SellerDto){
        await this.sellerService.Create(sellerDto);
    }

    // @Put('/:id')
    // async Updateall(@Param('id') id: string, @Body() updatesellerDto: SellerDto){}

    @Patch('/:userId')
    async Update(@Body() updatesellerDto: SellerDto){
        return this.sellerService.Update(updatesellerDto);
    }

    @Delete('/:userId')
    async Delete(@Param('userId') userId:string){
        return this.sellerService.Delete(userId);
    }
}
