/*
 * spurtcommerce
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2022 Piccosoft Software Labs Pvt Ltd
 * Author Piccosoft Software Labs Pvt Ltd <support@spurtcommerce.com>
 * Licensed under the MIT license.
 */
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Api } from '../../providers/api/api';

@Injectable()
export class LayoutService extends Api {
  params: any = {};
  // private URL = this.configService.get('api').baseUrl;
  private URL = this.getBaseUrl();

  /* get product list count api*/
  public getCustomerListCount(filterParam: any): Observable<any> {
    const reqOpts: any = {};
    const params = Object.getOwnPropertyNames(filterParam).reduce(
      (p, key) => p.set(key, filterParam[key]),
      new HttpParams()
    );
    reqOpts.params = params;
    return this.http.get(this.URL + '/customer/customerlist', reqOpts);
  }
}
