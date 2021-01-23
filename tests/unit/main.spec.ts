import { shallowMount } from '@vue/test-utils'
import PasswordMeter from '@/password-meter.vue'
import { risky, guessable, weak, safe, secure } from '../password-examples'

describe('password-meter.vue', () => {
  /**
   * Test risky
   */
  it('renders and detects: risky', () => {
    const wrapper = shallowMount(PasswordMeter, {
      props: {
        password: risky
      }
    })

    expect(wrapper.classes()).toContain('risky')
  })

  /**
   * Test guessable
   */
  it('renders and detects : guessable', () => {
    const wrapper = shallowMount(PasswordMeter, {
      props: {
        password: guessable
      }
    })

    expect(wrapper.classes()).toContain('guessable')
  })

  /**
   * Test weak
   */
  it('renders and detects : weak', () => {
    const wrapper = shallowMount(PasswordMeter, {
      props: {
        password: weak
      }
    })

    expect(wrapper.classes()).toContain('weak')
  })

  /**
   * Test safe
   */
  it('renders and detects : safe', () => {
    const wrapper = shallowMount(PasswordMeter, {
      props: {
        password: safe
      }
    })

    expect(wrapper.classes()).toContain('safe')
  })

  /**
   * Test secure
   */
  it('renders and detects : secure', () => {
    const wrapper = shallowMount(PasswordMeter, {
      props: {
        password: secure
      }
    })

    expect(wrapper.classes()).toContain('secure')
  })
})
