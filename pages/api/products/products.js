export default function handler(req, res) {
  res.status(200).json([
    {
      id: 'oil',
      name: "Kenchi Hairoil",
      type: "Hair Oil",
      about: "Hair oil based on 3 essential oils and herbs will make your hair silky, smooth and strong till the roots.",
      img: '/images/product-pics/kenchiHairoil.jpg',
      price: 1000
    },
    {
      id: 'Wcream',
      name: "Whitening Cream",
      type: "Night Cream",
      about: " Kenchi Whitening Cream is used as a night cream made up of special nutrient rich herbs which will even out your tone and prevent acne.",
      img: '/images/product-pics/whiteningCream.jpg',
      price: 1000
    },
    {
      id: 'Ncream',
      name: "No-Makeup Cream",
      type: "Day Cream",
      about: "No-Makeup cream which is an alternate of foundation ,which will even out the tone of your skin and is also used as a sunblock.",
      img: '/images/product-pics/nomakeupCream.jpg',
      price: 1000
    },
    {
      id: 'tint',
      name: "Cherry Beryy",
      type: "Tint",
      about: "The Liptint which gives you such a perfect natural pink plumping lip colour.",
      img: '/images/product-pics/liptint.jpg',
      price: 800
    },
    {
      id: 'moisturizer',
      name: "Hydrate ME",
      type: "Moisturizer",
      about: "The Hydrating Moisturizer improves the appearance of wrinkles with intense hydration and reduces the chance of developing extreme dryness or oiliness.",
      img: '/images/product-pics/moisturizer.png',
      price: 1500
    }
  ]
  )
}
