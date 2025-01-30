import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class updateTaskInput {
  @ApiProperty()
  @IsOptional()
  @IsString()
  title?: string;
  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
export class UpdateTaskQuery {
  @ApiProperty()
  @Expose()
  @IsString()
  id: string;
}
