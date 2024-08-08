/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CommunityService } from "../community.service";
import { CommunityCreateInput } from "./CommunityCreateInput";
import { Community } from "./Community";
import { CommunityFindManyArgs } from "./CommunityFindManyArgs";
import { CommunityWhereUniqueInput } from "./CommunityWhereUniqueInput";
import { CommunityUpdateInput } from "./CommunityUpdateInput";

export class CommunityControllerBase {
  constructor(protected readonly service: CommunityService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Community })
  async createCommunity(
    @common.Body() data: CommunityCreateInput
  ): Promise<Community> {
    return await this.service.createCommunity({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Community] })
  @ApiNestedQuery(CommunityFindManyArgs)
  async communities(@common.Req() request: Request): Promise<Community[]> {
    const args = plainToClass(CommunityFindManyArgs, request.query);
    return this.service.communities({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Community })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async community(
    @common.Param() params: CommunityWhereUniqueInput
  ): Promise<Community | null> {
    const result = await this.service.community({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        owner: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Community })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCommunity(
    @common.Param() params: CommunityWhereUniqueInput,
    @common.Body() data: CommunityUpdateInput
  ): Promise<Community | null> {
    try {
      return await this.service.updateCommunity({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          owner: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Community })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCommunity(
    @common.Param() params: CommunityWhereUniqueInput
  ): Promise<Community | null> {
    try {
      return await this.service.deleteCommunity({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          owner: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
