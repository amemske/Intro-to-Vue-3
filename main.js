const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Intro",
      productDescription: "Amazing!!",
      image: "./assets/images/socks_green.jpg",
      url: "https://google.com",
      inventory: 8,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 006, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 112, color: "blue", image: "./assets/images/socks_blue.jpg" },
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
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
  computed: {
    // a computed getter
    title: function () {
      // `this` points to the vm instance
      return this.brand + " " + this.product;
    },
  },
});
