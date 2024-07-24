//Importing createSlice from the Redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Async thunk for fetching products from the API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const simulatedResponse = [
      {
        id: 1,
        name: "Callaway Golf Solaire Pink Golf Balls - Prior Mode",
        decription:
          "Callaway Solaire Golf Balls - The Callaway Solaire Golf Balls are the low compression, soft feel golf ball that you are looking for! This low compression, ladies golf ball with patented HEX Aerodynamics will maximize your distance while still giving you the soft feel you require around the greens. The Solaire golf ball utilizes a luminous finish for some added flare.",
        price: 199.99,
        image: "./Images/Prior Model - Golfballs_com.jpg",
      },
      {
        id: 2,
        name: "Cobra King F6 Ladies Driver",
        decription:
          "The F6 Driver is Cobra’s longest and most forgiving adjustable driver featuring simple front or back CG adjustability to maximize distance through optimized launch and spin. No other Cobra, all titanium, adjustable CG driver delivers you this combination of distance with forgiveness in every shot.",
        price: 899.99,
        image: "./Images/CobraKing.jpg",
      },
      {
        id: 3,
        name: "Wilson Tennis Burn 25 Starting Set",
        decription:
          "A great choice for the beginner to intermediate junior player • AirLite alloy for lightweight durability",
        price: 699.99,
        image: "./Images/WilsonSet.jpg",
      },
      {
        id: 4,
        name: "Loma XL | Toasted Almond Carry Bag",
        decription:
          "Product Details: The premium Loma XL has arrived! The big brother of our signature Loma Bag. Weighing in at only 3.4 pounds, you'll never pack up at a cart path only sign again. We expanded the Loma design to accommodate a couple more clubs and add a padded double strap. With a frosty pocket for your beverage and a velour-lined pocket for your valuables, the XL is the minimalist golfer's dream carry bag",
        price: 169.99,
        image: "./Images/SundayGolf.jpg",
      },
      {
        id: 5,
        name: "Penn Pink Championship Extra Duty Felt Tennis Ball Single Can",
        decription:
          "Penn has joined the fight against breast cancer. This optic pink felt, championship quality tennis ball is designed to promote awareness of breast cancer and help provide funds to research a cure. Penn donates a portion of sales from each can of pink tennis balls to breast cancer research. Penn’s Recreational Tennis Balls are great for tennis players that want to go out and play for fun or use a ball with a little more “personality”.",
        price: 390.99,
        image: "./Images/tennisBalls.jpg",
      },
      {
        id: 6,
        name: "Warrior Mat - Powder Pink",
        decription:
          "Your mat supports you literally and figuratively — in the studio, during sweaty sequences and healing nidras, and in the world, where the grounding effects of yoga help you to live a life of purpose. Our rigorously tested Warrior Mat is where the magic happens — it’s roomy, perfectly cushioned for joint support, anti-odor, dry-wicking and slip-free, wet or dry. It’s also 100% formaldehyde-free, non-toxic and PVC-free, perfect for a clean practice and a peaceful savasana.",
        price: 250.99,
        image: "./Images/YogaMat.jpg",
      },
      {
        id: 7,
        name: "Blogilates Iron Kettlebell - Coral Pink 15lbs",
        decription:
          "Add intensity to your workouts with these stylish kettlebells by Blogilates. These versitile weights will help you achieve your strength training goals. Add lunges, swings, squats and more to your workouts to build strength and stability. Developed by leading fitness personality, Pilates instructor, and designer, Cassey Ho, these Blogilates kettlebells will help you find the joy in fitness. Only at Target!",
        price: 1300.0,
        image: "./Images/BlogilatesWeight.jpg",
      },
      {
        id: 8,
        name: "DEMARINI VOODOO ONE PINK LIMITED EDITION BBCOR BAT 2024 (-3)",
        decription:
          "Stay hot with the Neon Pink Voodoo® One, the elite one-piece alloy BBCOR baseball bat with a shocking new paint job. Engineered to help all types of high school and college hitters maximize bat speed and deliver electric results, the Neon Pink Voodoo One (-3) BBCOR Baseball Bat features a classic X14 Alloy Barrel for control of the plate. The fortified metal compound knob at the base of the handle uses metal and composite materials for lasting durability and performance.",
        price: 6997.99,
        image: "./Images/Bat.jpg",
      },
      {
        id: 9,
        name: "Champro Rise Pro Girls Softball Batting Helmet with Face Guard, Pink",
        decription:
          "SOFTBALL EQUIPMENT FOR GIRLS: These Champro Rise Pro Junior and Senior Fastpitch Softball Batting Helmets will keep you safe, cool, and composed at home plate. Champro is a leader in adult and youth softball gear because all its products, such as these adult and youth softball helmets for girls, offer quality at a great price.",
        price: 331.99,
        image: "./Images/helmet.jpg",
      },
      {
        id: 10,
        name: "'Rawlings 10.5' Youth Sure Catch SCSB105P Fastpitch Glove",
        decription:
          "The Rawlings Sure Catch™ Softball 10.5-Inch youth outfield glove is constructed with a soft, all-leather shell for enhanced durability and pocket shape retention. Its Sure Catch heel cut out design allows for a quick and easy close while the Basket web creates a flexible, ball-snagging pocket making it perfect for young athletes who need a glove that's game-ready off the shelf. Additionally, the cushioned finger linings offers added comfort and features a Velcro wrist strap for a custom fit. Get yours today!",
        price: 450.0,
        image: "./Images/glove.jpg",
      },
    ];
    return simulatedResponse;
  }
);

//Creating the product slice
const productSlice = createSlice({
  name: "products", //The name of the slice
  initialState: {
    items: [],
    status: "idle",
    error: null,
  }, //The initial state
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },

    updateProduct: (state, action) => {
      const { id, updates } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        Object.assign(product, updates);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//Exporting the reducer
export const { addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;

//References
//"Callaway Golf Solaire Pink Golf Balls - Prior Mode" product and all its related information was sourced from https://www.golfballs.com/Golf-Balls/Callaway-Golf-Solaire-Pink-Golf-Balls.htm
//"Cobra King F6 Ladies driver" product and all related information was sourced from https://onegolf.co.za/cobra-king-f6-ladies-driver/?utm_source=Google+Shopping&utm_medium=cpc&utm_campaign=One+Golf+Google+Shopping+Feed&gad_source=1&gclid=CjwKCAjwzIK1BhAuEiwAHQmU3qTvIswuHeR5vm3nc76kB0ZYelUKnkCL2HCkXlkc1UEYu4-qqg94-hoCKEUQAvD_BwE
//"Loma XL | Toasted Almond Carry Bag" product and all related information was sourced from https://sundaygolf.com/products/loma-xl-toasted-almond-carry-bag
//"Wilson Tennis Burn 25 Starting Set" product and all related information was sourced from https://www.tradeinn.com/smashinn/it/wilson-set-partenza-tennis-burn-25/136994968/p
//"Penn Pink Championship Extra Duty Felt Tennis Ball Single Can" product and all related information was sourced from https://www.oletennis.com/products/penn-pink-championship-extra-duty-felt-tennis-ball-single-can?variant=41340204613817
//"Warrior Mat - Powder Pink" product and all related information was sourced from https://www.aloyoga.com/products/w7192r-warrior-mat-powder-pink?variant=32094343233654&disableCurrencyEstimate=&gad_source=1&gbraid=0AAAAADkcv-N0iI8XbFXhYQMc4Kq2dfb6X&gclid=CjwKCAiA8YyuBhBSEiwA5R3-E_p_QCCyWJQLwlod2B03w5Pp9eY0alLOftHkADiXWY3xeBaBXOD3KRoCebAQAvD_BwE&epik=dj0yJnU9WFJWazR6bjY2WVhYMS0wcFBaRFhXNFlCN0kwNENndE8mcD0wJm49eWlYOFRpTGhTSm81aDZaNnVWeUhWdyZ0PUFBQUFBR2FnN01F
//"Blogilates Iron Kettlebell - Coral Pink 15lbs" product and all related information was sourced from https://www.target.com/p/blogilates-iron-kettlebell-coral-pink-15lbs/-/A-83686804?epik=dj0yJnU9WHNnZ3dEQmV1WFR6TGpwMXBBM0Nna1c1d2pEek1pdzYmcD0wJm49U0pGZ3hlVTVLRGhKWnIxRC1ZN3o5USZ0PUFBQUFBR2FnN1g0#lnk=sametab
//"DEMARINI VOODOO ONE PINK LIMITED EDITION BBCOR BAT 2024 (-3)" product and all related information was sourced from https://midwaysports.com/products/2024-neon-pink-demarini-voodoo%C2%AE-one-3-bbcor-bat?variant=41139084034153
//"Champro Rise Pro Girls Softball Batting Helmet with Face Guard, Pink" product and all related information was sourced from https://www.walmart.com/ip/Champro-Rise-Pro-Girls-Softball-Batting-Helmet-with-Face-Guard-Pink-Junior/1946435092?wmlspartner=wlpa&selectedSellerId=101023733&sourceid=dsn_pin_d6001c7e-3f9d-4d5a-b2b7-00f0525f9407&veh=dsn&wmlspartner=dsn_pin_d6001c7e-3f9d-4d5a-b2b7-00f0525f9407&cn=FY24-ENTP-Misc-Search-1P_cnv_dps_dsn_dis_pin_entp_e_n&wl12=1946435092&wl15=2680077951001&pp=1
//"Rawlings 10.5" Youth Sure Catch SCSB105P Fastpitch Glove" product and all related information sourced from https://unitedsport.ca/products/shop-rawlings-10-5-youth-sure-catch-scsb105p-kids-fastpitch-softball-glove-edmonton-canada?variant=31895350968451
