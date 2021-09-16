import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BuyerService } from 'src/buyer/buyer.service';
import { Buyer, BuyerDocument } from 'src/schemas/buyer.schema';
import { Seller, SellerDocument } from 'src/schemas/seller.schema';
import { SellerService } from 'src/seller/seller.service';



@Injectable()
export class AuthService {
    constructor(
        // @InjectModel(Seller.name)
        // private sellerModel: Model<SellerDocument>,
        // @InjectModel(Buyer.name)
        // private buyerModel: Model<BuyerDocument>,
        private readonly sellerService: SellerService,
        private readonly buyerSerivce:BuyerService
    ){}
    async authseller(userId:string,password:string){
        const info =await this.sellerService.FindOne(userId)
        if(info){
            if(info.password==password){
                return{info}
            }else{
                throw new NotFoundException('비밀번호가 틀렸습니다.');    
            }
        }else{
            throw new NotFoundException('Could not find Seller_ID Info');
        }
    }
    
    async authbuyer(userId:string,password:string){
        const info= await this.buyerSerivce.FindOne(userId)
        if(info){
            if(info.password==password){
                return{info}
            }else{
                throw new NotFoundException('비밀번호가 틀렸습니다.');    
            }
        }else{
            throw new NotFoundException('Could not find Buyer_ID Info');
        }
    }
     
}
