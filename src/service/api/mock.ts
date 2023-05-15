import { mockRequest } from '@/service/request';

enum Api {
  GET_MENU_LIST = '/media-editor/menu/list',
  GET_CATALOG_MEDIUM_LIST = '/media-editor/catalogMedium/list'
}
export const getMenuList = () => {
  return mockRequest.get({
    url: Api.GET_MENU_LIST
  });
};
export const getCatalogMediumList = (params: { page: number; pageSize: number }) => {
  return mockRequest.get<Record<string, any>>(
    {
      url: Api.GET_CATALOG_MEDIUM_LIST,
      params
    },
    {
      ignoreCancelToken: false
    }
  );
};
