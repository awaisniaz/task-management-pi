import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createTaskInput {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    description: string;
    
    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty()
    completed: boolean;
}