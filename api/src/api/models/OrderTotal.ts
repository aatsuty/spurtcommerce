/*
 * spurtcommerce community API
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */

import { IsNotEmpty } from 'class-validator';
import {BeforeInsert, Column, Entity, BeforeUpdate, PrimaryGeneratedColumn} from 'typeorm';
import {BaseModel} from './BaseModel';
import moment from 'moment';

@Entity('order_total')
export class OrderTotal extends BaseModel {
    @PrimaryGeneratedColumn()
    public order_total_id: number;

    @IsNotEmpty()
    @Column({ name: 'order_id' })
    public orderId: number;

    @IsNotEmpty()
    @Column({ name: 'value' })
    public value: number;

    @BeforeInsert()
    public async createDetails(): Promise<void> {
        this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }

    @BeforeUpdate()
    public async updateDetails(): Promise<void> {
        this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    }
}
