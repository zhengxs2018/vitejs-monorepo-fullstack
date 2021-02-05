import { defineComponent, renderSlot, PropType, inject } from 'vue'

import { defaultConfigProvider } from '../config-provider'

import { withInstall } from '../util/ui'
import { classNames } from '../types'

export type UiButtonTypes = 'primary' | 'success' | 'warning' | 'danger'

export type UiButtonNativeTypes = 'button' | 'submit' | 'reset'

const UiButton = defineComponent({
  name: 'UiButton',
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<UiButtonTypes>,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    loadingText: {
      type: String,
      required: false,
    },
    className: {
      type: [String, Array, Object] as PropType<classNames>,
      required: false,
    },
    nativeType: {
      type: String as PropType<UiButtonNativeTypes>,
      required: false,
    },
  },
  setup(props, { attrs, slots }) {
    const { getPrefixCls } = inject('configProvider', defaultConfigProvider)
    const prefixCls = getPrefixCls('button')

    return () => {
      const classList: classNames = [
        prefixCls,
        {
          [`${prefixCls}--${props.type || 'default'}`]: true,
        },
      ]
      if (props.className) {
        classList.push(props.className as string)
      }

      const children = [
        <span class={`${prefixCls}__text`}>
          {renderSlot(slots, 'default', {}, () => [props.text])}
        </span>,
      ]

      if (attrs.to) {
        return (
          <router-link {...attrs} class={classList}>
            {children}
          </router-link>
        )
      }

      return (
        <button {...attrs} class={classList} type={props.nativeType}>
          {children}
        </button>
      )
    }
  },
})

export default withInstall(UiButton)
