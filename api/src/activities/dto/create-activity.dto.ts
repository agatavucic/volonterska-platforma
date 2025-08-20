import { IsISO8601, IsOptional, IsString, Length, IsUUID } from 'class-validator';

export class CreateActivityDto {
  @IsString() @Length(3, 120)
  title: string;

  @IsString()
  description: string;

  @IsString()
  city: string;

  @IsISO8601()
  startAt: string;

  @IsISO8601()
  endAt: string;

  @IsOptional() @IsString()
  category?: string;

  @IsUUID()
  organizationId: string;
}
