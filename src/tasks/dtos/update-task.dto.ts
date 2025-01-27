import { IsBoolean, IsOptional, IsString } from "class-validator";

export class updateTaskInput {


    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}