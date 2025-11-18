import { IsNumber, IsString } from "class-validator";

export class CreateLanguageDto {

  @IsString()
  name: string;

  @IsNumber()
  level: number;
}
