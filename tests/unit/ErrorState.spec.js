import { mount } from '@vue/test-utils'
import ErrorState from '../../src/components/ErrorState.vue'

describe('ErrorState.vue', () => {
  it('muestra el mensaje de error recibido por props', () => {
    const wrapper = mount(ErrorState, {
      props: {
        message: 'No se pudieron cargar los productos.'
      },
      global: {
        stubs: {
          'v-alert': true
        }
      }
    })

    expect(wrapper.text()).toContain('No se pudieron cargar los productos.')
  })
})