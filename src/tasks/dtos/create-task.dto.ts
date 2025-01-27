import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createTaskInput {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsBoolean()
    completed: boolean;
}