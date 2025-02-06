import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class RegistrationInput{
    @ApiProperty()
    @Expose()
    @IsNotEmpty()
    @IsString()
    name:string

    @ApiProperty()
    @Expose()
    @IsNotEmpty()
    @IsString()
    email:string

    @ApiProperty()
    @Expose()
    @IsNotEmpty()
    @IsString()
    password:string
}