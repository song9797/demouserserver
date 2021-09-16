import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { SellerDto } from 'src/dto/User.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Seller, SellerDocument } from 'src/schemas/seller.schema';
import { Model } from 'mongoose';
@Injectable()
export class SellerService {
    constructor( @InjectModel(Seller.name) private sellerModel: Model<SellerDocument>){}
    // async FindAll(): Promise<Seller[]> {
    //     return this.sellerModel.find();
    // }
    
    async FindOne(Id: string): Promise<Seller> {
        return await this.sellerModel.findOne({userId:Id}).exec();
    }

    async Create(seller:SellerDto){
        const info= new this.sellerModel(seller)
        info.save();
    }
    async Update(seller:SellerDto): Promise<SellerDto>{
        let info;
        try {
            info = await this.sellerModel.updateOne({ userId: seller.userId }, seller);
        }
        catch (error) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        if (!info) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        return info;
    }
    async Delete(Id:string) {
        let info;
        try {
            info = await this.sellerModel.deleteOne({userId:Id});
        }
        catch (error) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        if (!info) {
            throw new NotFoundException('Could not find Seller_ID Info');
        }
        return info;
    }
}
