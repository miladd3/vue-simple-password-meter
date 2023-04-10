import { shallowMount } from '@vue/test-utils'
import passwordMeter from '@/password-meter.vue'
import { risky, guessable, weak, safe, secure, common } from '../password-examples'

describe('password-meter.vue', () => {
  /**
   * Test risky
   */
  it('renders and detects: risky', () => {
    const wrapper = shallowMount(passwordMeter, {
      propsData: {
        password: risky
      }
    })

    expect(wrapper.classes()).toContain('risky')
  })

  /**
   * Test guessable
   */
  it('renders and detects : guessable', () => {
    const wrapper = shallowMount(passwordMeter, {
      propsData: {
        password: guessable
      }
    })

    expect(wrapper.classes()).toContain('guessable')
  })

  /**
   * Test weak
   */
  it('renders and detects : weak', () => {
    const wrapper = shallowMount(passwordMeter, {
      propsData: {
        password: weak
      }
    })

    expect(wrapper.classes()).toContain('weak')
  })

  /**
   * Test safe
   */
  it('renders and detects : safe', () => {
    const wrapper = shallowMount(passwordMeter, {
      propsData: {
        password: safe
      }
    })

    expect(wrapper.classes()).toContain('safe')
  })

  /**
   * Test secure
   */
  it('renders and detects : secure', () => {
    const wrapper = shallowMount(passwordMeter, {
      propsData: {
        password: secure
      }
    })

    expect(wrapper.classes()).toContain('secure')
  })

  /**
   * Test common
   */
  it('renders and detects : common', () => {
    const wrapper = shallowMount(passwordMeter, {
      propsData: {
        password: common
      }
    })

    expect(wrapper.classes()).toContain('risky')
  });

})
