import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguageDto } from './create-language.dto';
import { IsBoolean } from 'class-validator';

export class UpdateLanguageDto extends PartialType(CreateLanguageDto) {

  @IsBoolean()
  active : boolean
}
