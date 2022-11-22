import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateNewsDto {
  // @ApiProperty()
  @IsString()
  title: string;

  // @ApiProperty()
  @IsString({
    message: 'Поле description должно быть сторокой',
  })
  description: string;

  @ApiProperty({
    description: 'Description news',
  })
  @IsString({
    message: 'Поле author должно быть сторокой',
  })
  author: string;

  // @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  countView?: string;
}
