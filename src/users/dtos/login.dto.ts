import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class LoginInput{
    @Expose()
    @ApiProperty()
    username: string;

    @ApiProperty()
    @Expose()
    password:string
}