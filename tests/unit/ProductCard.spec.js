import { mount } from '@vue/test-utils'
import ProductCard from '../../src/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renderiza correctamente la información del producto', () => {
    const product = {
      id: 1,
      title: 'Producto de prueba',
      category: 'electronics',
      description: 'Descripción del producto',
      price: 199.99,
      image: 'https://via.placeholder.com/150'
    }

    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        mocks: {
          $store: {
            getters: {
              'favorites/isFavorite': () => false
            },
            commit: jest.fn()
          }
        },
        stubs: {
          'v-card': true,
          'v-img': true,
          'v-card-title': true,
          'v-card-subtitle': true,
          'v-card-text': true,
          'v-card-actions': true,
          'v-btn': true,
          'v-icon': true,
          'v-spacer': true
        }
      }
    })

    expect(wrapper.text()).toContain('Producto de prueba')
    expect(wrapper.text()).toContain('electronics')
    expect(wrapper.text()).toContain('199.99')
  })
})