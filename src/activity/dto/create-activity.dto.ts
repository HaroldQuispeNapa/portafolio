import { IsString , IsOptional, IsBoolean } from "class-validator"

export class CreateActivityDto {

   @IsString()
  name: string;

  @IsString()
  content: string;

  @IsString()
  icon: string;
}
