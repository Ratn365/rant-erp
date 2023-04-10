import type { PageData } from '@/interface';
import type { BuniesssUser } from '@/app/Interfaces/business';

import { request } from '../../api/request';

export const getBusinessUserList = (params: any) => request<PageData<BuniesssUser>>('get', '/business/list', params);
