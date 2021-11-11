const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Intro",
      selectedVariant: 0,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 006,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 112,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: [
        { id: 016, size: "L" },
        { id: 025, size: "XL" },
        { id: 036, size: "XXL" },
        { id: 056, size: "XXXL" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
      // console.log(index);
    },
  },
  computed: {
    // a computed getter
    title: function () {
      // `this` points to the vm instance
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      console.log(this.variants[this.selectedVariant].quantity);
      return this.variants[this.selectedVariant].quantity;
    },
    displaySale() {
      if (this.onSale) {
        return this.brand + " " + this.product + " is on sale";
      }
    },
  },
});
