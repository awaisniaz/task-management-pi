import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

export class TaskOutput {
    @ApiProperty()
    @Exclude()
    id: number;

    @ApiProperty()
    @Expose()
    title: string;
    
    @ApiProperty()
    @Expose()
    description: string;
    
    @ApiProperty()
    @Expose()
    completed: boolean;
}