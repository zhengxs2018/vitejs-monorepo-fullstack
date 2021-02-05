import {
  reactive,
  provide,
  VNodeTypes,
  PropType,
  defineComponent,
  watch,
  renderSlot,
} from 'vue'

import { withInstall } from '../util/ui'

export const DEFAULT_PREFIX_CLS = 'ui'

export type SizeType = 'small' | 'middle' | 'large' | undefined


export interface ConfigProviderProps {
  getTargetContainer?: () => HTMLElement
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  prefixCls?: string
  children?: VNodeTypes
  componentSize?: SizeType
  space?: {
    size?: SizeType | number
  }
}

export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  prefixCls?: string
  getPrefixCls: (suffixCls?: string) => string
  space?: {
    size?: SizeType | number
  },
  size?: SizeType
}

const mergePrefixCls = (prefixCls: string = DEFAULT_PREFIX_CLS, suffixCls?: string) => {
  return suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls
}

const ConfigProvider = defineComponent({
  name: 'UiConfigProvider',
  props: {
    getTargetContainer: {
      type: Function as PropType<() => HTMLElement>,
      required: false,
    },
    getPopupContainer: {
      type: Function as PropType<(triggerNode: HTMLElement) => HTMLElement>,
      required: false,
    },
    prefixCls: String,
    size: {
      type: String as PropType<SizeType>,
      required: false,
    },
    getPrefixCls: {
      type: Function as PropType<(suffixCls?: string, customizePrefixCls?: string) => string>,
      required: false,
    },
    componentSize: {
      type: Object as PropType<SizeType>,
      required: false,
    },
    space: {
      type: [String, Number] as PropType<SizeType | number>,
      required: false,
    },
  },
  setup(props, { slots }) {
    const configProvider = reactive({
      ...props,
      getPrefixCls(suffixCls?: string) {
        return mergePrefixCls(props.prefixCls, suffixCls)
      },
    })

    watch(props, () => {
      Object.assign(configProvider, props)
    })

    provide('configProvider', configProvider)

    return () => renderSlot(slots, 'default')
  },
})

export const defaultConfigProvider: ConfigConsumerProps = {
  getPrefixCls(suffixCls?: string): string {
    return mergePrefixCls(undefined, suffixCls)
  },
}

export default withInstall(ConfigProvider)
