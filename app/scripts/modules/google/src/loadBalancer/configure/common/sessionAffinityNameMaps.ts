import * as _ from 'lodash';

export interface IStringMap {
  [key: string]: string;
}

export const sessionAffinityViewToModelMap: IStringMap = {
  None: 'NONE',
  'Client IP': 'CLIENT_IP',
  'Generated Cookie': 'GENERATED_COOKIE',
  'Client IP and protocol': 'CLIENT_IP_PROTO',
  'Client IP, port and protocol': 'CLIENT_IP_PORT_PROTO',
};

export const sessionAffinityModelToViewMap = _.invert<IStringMap, IStringMap>(sessionAffinityViewToModelMap);
