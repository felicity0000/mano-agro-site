import cabbage1 from "../assets/cabbage1.jpg";
import coffee1 from "../assets/coffee1.jpg";
import maize1 from "../assets/maize1.jpg";
import tomatoes1 from "../assets/tomatoes1.jpg";
import greenPaper1 from "../assets/greenPaper1.jpg";
import walkingTractor from "../assets/walkingTractor.jpg";
import twoWheeled from  "../assets/twoWheeled.png"
import ploughing from "../assets/ploughing.jpg";
import field from "../assets/field.jpg";
// About's section content
const LeftAboutContent = [
  {
    title: "MISSION",
    content:
      "To source high quality implements and increase agricultural production.",
  },
  {
    title: "VISION",
    content:
      "To source high quality implements and increase agricultural production.",
  },
];

const RightAboutContent = [
  {
    title: "MORE ABOUT US",
    content:
      "Mano agro inputs is a company registered in Uganda involved importation and distribution of agricultural implements i.e. fertilisers, pesticides, insecticides, agro machinery, fungicides.",
  },
  {
    title: "OUR SOCIAL IMPACT",
    content: [
      "Mano agro inputs distributes quality products to all its clients around the world. Mano agro inputs envisions a time when every farmer acquires the right skills and implements to use in his garden to attain huge harvest. Mano skills farmers with the right agronomic practices. With its slogan bridging agro technologies, mano agro inputs seeks to build and enhance cost effective practices among farmers that lead to high yields especially in resource constrained areas."
    ],
  },
];

// Products section content
const productsItems= [
    {
      pdtName: "Cabbage",
      pdtImage: [cabbage1],
      content:
        "Cabbage is a versatile and nutritious choice for your garden and kitchen! It’s packed with vitamins, minerals, and antioxidants, promoting optimal health. Its crisp texture and mild flavor make it a fantastic addition to various dishes, from crunchy slaws to savory stews. Easy to grow and care for, cabbage is a rewarding choice for both novice and experienced gardeners.",
    },
    {
      pdtName: "Coffee",
      pdtImage: [coffee1],
      content:
        "Coffee is a popular beverage that is consumed worldwide. It is made from the berries harvested from species of plants. The coffee industry is responsible for more than 2.2 million jobs in the United States alone and generates more than $100 billion in wages. Coffee is also known to have health benefits such as reducing the risk of heart disease and stroke, boosting short-term memory, and being good for liver health.",
    },
    {
      pdtName: "Maize",
      pdtImage: [maize1],
      content: "Maize, also known as corn, is a healthy grain that is rich in fiber, vitamins, minerals, and antioxidants 1.It is a versatile ingredient that can be used in a variety of dishes, ranging from soups and salads to casseroles and desserts. Here are some reasons why you should consider incorporating maize into your diet"
    },
    {
      pdtName: "Tomatoes",
      pdtImage: [tomatoes1],
      content: "Tomatoes are a popular fruit that is consumed worldwide. They are rich in vitamins, minerals, and antioxidants, making them a healthy addition to your diet. Tomatoes are also versatile and can be used in a variety of dishes, from salads and soups to sauces and stews. Here are some reasons why you should consider incorporating tomatoes into your diet."
    },
    {
      pdtName: "Green Paper",
      pdtImage: [greenPaper1],
      content: "Green paper is a type of paper that is made from recycled materials. It is an environmentally friendly alternative to traditional paper, which is made from virgin wood pulp. Green paper is produced using less energy and water than traditional paper, and it generates less waste. It is also biodegradable and can be recycled multiple times. Green paper is available in a variety of colors and textures, making it suitable for a wide range of applications, from printing and packaging to arts and crafts."
    },
    {
      pdtName: "Crop Field",
      pdtImage: [field],
      content: "A field is an area of land that is used for agricultural purposes, such as growing crops or raising livestock. Fields are typically large, open spaces that are divided into smaller plots for planting different crops. They are an essential part of the agricultural landscape and play a crucial role in feeding the world's population. Fields can be found in rural and urban areas, and they are cultivated using a variety of farming techniques and equipment."
    }
  ];

  const EquipmentItems = [
    {
      eName: "Mano-Agro Walking Tractor",
      eImage: [walkingTractor],
      Description:"This is a walking tractor, a manually operated piece of machinery used for agricultural purposes. The tractor is predominantly red and blue in color, with large, rugged wheels designed for traction on different terrains. The engine housing is red and appears to be robust and well-built. There are two long blue handles extending backward from the machine to allow manual operation."
    },
    {
      eName: "Mano-Agro Walking Ploughing Tractor",
      eImage: [ploughing],
      Description:"This is a walking tractor, a manually operated piece of machinery used for agricultural purposes. The tractor is predominantly blue with red and green components. It has a red engine mounted on top, with visible exhaust and air filter. The machine is equipped with large black tires that have deep treads for enhanced grip on various terrains"
    },
    {
      eName: " Mano-Agro Two-Wheeled Tractor",
      eImage: [twoWheeled],
      Description: "This is a two-wheeled tractor, also known as a walk-behind tractor or hand tractor. The tractor is predominantly red and black, with touches of orange and grey. It has two large, rugged wheels designed for traction on various terrains. The engine is prominently displayed at the center-top of the machine. There are handles extending backward from the machine to allow an operator to control it while walking behind"
    }
  ]


export { LeftAboutContent, RightAboutContent, productsItems, EquipmentItems};
