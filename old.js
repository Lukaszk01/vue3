var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    decription: 'A pair of warm, fuzzy socks',
    image: 'https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2F1578366170160_4.png?alt=media&token=e0829829-627b-44e1-9d96-fa22eaca1ac9',
    inStock: true,
    onSale: true,
    details: ["80% Connton", "20% Polyester", "Gender Natural"],
    variants: [
    {
      variantId: 2234,
      variantColor: "green",
      variantImage: 'https://firebasestorage.googleapis.com/v0/b/vue-mastery.appspot.com/o/flamelink%2Fmedia%2F1578366170160_4.png?alt=media&token=e0829829-627b-44e1-9d96-fa22eaca1ac9'
    },
    {
      variantId: 2235,
      variantColor: "red",
      variantImage: ''
    }
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
  },
    reduceFromCart() {
      this.cart -= 1
    },

  updateProduct(variantImage) {
    this.image = variantImage
  }
}
})
