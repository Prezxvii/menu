const menu = [
  {
    id: 1,
    title: "Buttermilk pancakes",
    category: "breakfast",
    price: 13.99,
    img: "images/Buttermilk.jpg",
    desc: `A drizzle of maple syrup, a dusting of powdered sugar, or a scattering of fresh berries – the choice of accompaniments is a personal journey, enhancing the experience to suit your unique palate. Each bite is an invitation to savor the moment, a perfect blend of simplicity and sophistication that captures the essence of a leisurely breakfast or brunch.`,
  },
  {
    id: 2,
    title: "Strawberry pancakes",
    category: "breakfast",
    price: 17.99,
    img: "images/strawberry.jpg",
    desc: `Indulge in the vibrant and luscious world of strawberry pancakes, where the natural sweetness of ripe, succulent strawberries meets the comfort of fluffy pancake perfection. These delightful treats weave together the freshness of sun-ripened berries with the comforting embrace of soft, pillowy pancakes, creating a symphony of flavors that beckon to both your inner child and your refined palate.

    ` ,
  },
  {
    id: 3,
    title: "Blueberry pancakes",
    category: "breakfast",
    price: 17.99,
    img: "images/blueberry.jpg",
    desc: `Embark on a journey of delightful contrasts with blueberry pancakes – a timeless breakfast creation that marries the gentle sweetness of plump, juicy blueberries with the comforting embrace of fluffy pancakes. These enchanting treats offer a symphony of flavors and textures, blending the earthy richness of blueberries with the ethereal lightness of perfectly crafted pancakes.` ,
  },
  {
    id: 4,
    title: "The Cheese Burger Deluxe",
    category: "lunch",
    price: 15.99,
    img: "./images/item-2.jpeg",
    desc: `The Cheese Burger Deluxe paired with its irresistible fries is more than a meal – it's an invitation to indulge in a sensory journey, where every bite transports you to a realm of comfort, sophistication, and unadulterated pleasure.`,
  },
  {
    id: 5,
    title: "Godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Experience a whimsical symphony of flavors with the Strawberry Milkshake adorned with playful sprinkles and accompanied by a decadent donut – a delightful ensemble that takes your taste buds on a joyful escapade. This indulgent treat is a celebration of sweet nostalgia and modern culinary craftsmanship, promising a delightful fusion of textures, colors, and tastes that's sure to brighten your day.`,
  },
  {
    id: 6,
    title: "Country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Together, Eggs, Toast, and Hash Browns compose a breakfast symphony that transcends time and trends, delivering a sense of comfort and fulfillment with every bite. Whether savored as a solo indulgence or shared with loved ones around the breakfast table, this classic trio offers a timeless experience that honors the art of a well-balanced and delicious morning meal., `,
  },
  {
    id: 5,
    title: "Egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Elevate your burger experience to new heights with the Deluxe Burger featuring a tantalizing surprise: a perfectly cooked egg nestled within its savory embrace. This burger is a culinary masterpiece that marries the classic comfort of a deluxe burger with the luxurious addition of a rich, velvety egg yolk, creating a symphony of flavors and textures that is both indulgent and unforgettable.`,
  },
  {
    id: 6,
    title: "Oreo dream",
    category: "shakes",
    price: 10.99,
    img: "./images/item-6.jpeg",
    desc: `With your first sip, you're transported into a world of pure indulgence. The Oreo Milkshake enchants your senses with its luxurious creaminess, enveloping you in a comforting embrace of flavor. Infused throughout are generous fragments of Oreo cookies, each one contributing a delightful burst of cocoa richness and sweetness that perfectly complements the shake's velvety base.

    `,
  },
  {
    id: 7,
    title: "Bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `As you relish this delightful creation, you experience the artful interplay of flavors and textures that defines a memorable meal. The biscuit with bacon, eggs, cheese, and lettuce is more than just a dish – it's a celebration of culinary craftsmanship that leaves you both satisfied and yearning for another remarkable bite. Whether enjoyed as a satisfying breakfast, a comforting brunch, or a satisfying lunch, this ensemble promises an exquisite journey that delights your palate and nourishes your soul. `,
  },
  {
    id: 8,
    title: "American classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Transport your taste buds to a realm of timeless comfort and savory satisfaction with the Classic American Cheeseburger – a culinary masterpiece that pays homage to the heart and soul of American cuisine. This iconic creation embodies the essence of indulgence, capturing the essence of tradition, simplicity, and pure culinary delight. `,
  },
];
// get parent element
const sectionCenter =  document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
    ${item.desc}
    </p>
    </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  //console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (vaule, item) {
      if (!values.inclues(item.category)) {
        values.push(item.category)
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
  .map(function (category) {
  return `<buttons type="button" class="filter-btn" data-id=${category}>
  ${category}
  </buttons>`;
  })
  .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
     const category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function (menuItem) {
     // console.log(menuItem.category);
     if (menuItem.category === category) {
      return menuItem;
    }
  });
  if (category === "all") {
    diplayMenuItems(menu);
  } else {
    diplayMenuItems(menuCategory);
  }
});
});
}