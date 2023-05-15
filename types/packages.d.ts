import type { MenuOption, SelectOption, SelectGroupOption } from 'naive-ui';
import type { IconifyIcon } from '@iconify/vue';
interface AeaConfig {
  /** 二级菜单 */
  secondMenu: boolean;
  /** 搜索表单 */
  searchForm: boolean;
  /** 材料区域 */
  materialBody: boolean;
}
declare interface FormSchema {
  name: string;
  label: string;
  type: 'input' | 'select';
  options?: Array<SelectOption | SelectGroupOption>;
}
declare interface ListSchema {
  width?: number;
  height?: number;
  gutter?: number;
  pageSize?: number;
}
declare interface SecondMenuOptions {
  label: string;
  key?: string;
  icon?: string | IconifyIcon;
  [key: string]: unknown;
}
declare type ExtendMenuOptions = {
  /** 二级菜单 */
  secondMenuOptions?: SecondMenuOptions[];
  /** 区域配置 */
  areaConfig: AeaConfig;
  /** 是否缓存 */
  keepAlive?: boolean;
  /** 查询条件 */
  searchModel?: Record<string, unknown>;
  /** 列表配置 */
  listSchema?: ListSchema;
  /** 是否为本地配置 */
  isLocal?: boolean;
  /** 列表查询规则 */
  // formSchema?: FormSchema[];
} & MenuOption;
