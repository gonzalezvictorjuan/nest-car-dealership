import { ApiProperty } from "@nestjs/swagger";

export class Brand {
  @ApiProperty({
    example: "uuid",
    description: "Brand ID",
    uniqueItems: true,
  })
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  createdAt: number;
  @ApiProperty()
  updatedAt?: number;
}
