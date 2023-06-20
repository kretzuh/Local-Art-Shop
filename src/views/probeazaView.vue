<template>
  <div class="probeaza">

    <div class="container_for_show_selection">

      <div class="show_selection">
        //selected_product_image si selected_logo_image sunt puse in computed si returneaza
        numele fisierului corect pt a fi redat in div. Exista si o variabila curent_color care
        are valoarea white si ajuta la returnarea imaginilor corecte de alb si negru pt produs.

        <img class="selected_product_image" :src="require(`../assets/${selected_product_image}`)">
        <div class="show_logo">
          <img class="selected_logo_image" :src="require(`../assets/${selected_logo_image}`)">
        </div>
      </div>

      <div class="product_bar">
        <img class="imagine_produs"
             v-for="(imagine, index) in product"
             :key="imagine"
             :src="require(`../assets/${imagine.imageW}`)"
             @click="show_product(index)"
             :class="{ selected_image_margin: selected_product_index === index }">
        //adaugam o clasa selected_image_margin care se aplica cand conditia este adevarata.
        <br>
        <button class="change_color" @click="changeColor">Alb/Negru</button>
      </div>
    </div>

    <div class="logo_bar">

      <button @click="previousImage">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
        </svg>
      </button>
      <img class="imagine_logo"
           v-for="(imagine, index) in logo"
           :key="imagine"
           :src="require(`../assets/${imagine.image}`)"
           @click="show_logo(index)"
           :class="{ selected_image_margin: selected_logo_index === index }">
      <button @click="nextImage">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
      </button>

    </div>
    <button @click="addToCart">ADAUGA IN COS</button>
    {{ cart_data.length }}
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
      <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
    </svg>
  </div>
</template>

<script>

export default {
  name: "probeazaView",
  data() {
    return {
      current_color: 'white',
      cart_data: [],
      selected_product_index: 0,
      selected_logo_index: 0,
      product: [
        {
          name: "Hoodie",
          price: 100,
          imageW: "hoodie_white.png",
          imageB: "hoodie_black.png",
          quantity: 1
        },
        {
          name: "T-Shirt",
          price: 50,
          imageW: "tshirt_white.png",
          imageB: "tshirt_black.png",
          quantity: 1
        },
        {
          name: "Mug",
          price: 30,
          imageW: "mug_white.png",
          imageB: "mug_black.png",
          quantity: 1
        }],

      logo: [
        {
          name: "Logo Gorilla 1",
          image: "logo_gorilla1.png",
        },
        {
          name: "Logo Gorilla 2",
          image: "logo_gorilla2.png"
        },
        {
          name: "Logo Bear 1",
          image: "logo_bear1.png"
        },
        {
          name: "Logo Bear 2",
          image: "logo_bear2.png"
        },
        {
          name: "Logo Shark",
          image: "logo_shark.png"
        },
        {
          name: "Logo Tiger",
          image: "logo_tiger.png"
        },
        {
          name: "Logo Skull",
          image: "logo_skull.png"
        }],
    }
  },

  methods: {
    //am declarat o variabila current_color care are valoarea "white" si verific cu un conditional if care este
    //valoarea. daca e "white", schimb valoarea variabilei la "black" si zic sa incarce imaginile varianta alba.
    //daca nu, imaginile varianta pe negru.
    changeColor() {
      if (this.current_color === 'white') {
        this.current_color = 'black';
        this.selected_product_image = this.product[this.selected_product_index].imageB;
      } else {
        this.current_color = 'white';
        this.selected_product_image = this.product[this.selected_product_index].imageW;
      }
    },
    //s
    show_product(index) {
      this.selected_product_index = index
      //actualizeaza indexul ca sa afisieze imaginea curenta
    },
    show_logo(index) {
      this.selected_logo_index = index
    },
    previousImage() {
      this.selected_logo_index = (this.selected_logo_index - 1 + this.logo.length) % this.logo.length;
    },
    //scadem sau adaugam 1 la indexul curent si adaugam lungimea array-ului. apoi folosind modulo, ne asiguram
    //ca indexul va ajunge la ultimul element sau la primul element din array, daca se afla pe prima pozitie
    //sau pe ultima pozitie din array.
    nextImage() {
      this.selected_logo_index = (this.selected_logo_index + 1) % this.logo.length;
    },
    addToCart() {
      const savedProduct = {
        pName: this.product[this.selected_product_index].name,
        pPrice: this.product[this.selected_product_index].price,
        pColor: (this.current_color === 'white') ? 'White' : 'Black',
        pQuantity: this.product[this.selected_product_index].quantity,
        lName: this.logo[this.selected_logo_index].name
      };
      this.cart_data.push(savedProduct);
      localStorage.setItem('Produse', JSON.stringify(this.cart_data));
    },
  },
  mounted() {

  },

  computed: {
    selected_product_image() {
      if (this.current_color === 'white') {
        return this.product[this.selected_product_index].imageW;
      } else {
        return this.product[this.selected_product_index].imageB;
      }
    },
    selected_logo_image() {
      return this.logo[this.selected_logo_index].image
    },
  }
}

</script>

<style scoped>

.show_logo {
  display: flex;
  position: absolute;
  width: 18%;
  height: 18%;
  justify-content: center;

}

.logo_bar {
  margin: 1% 40.25%;
  display: flex;
  width: 20%;
  height: 60px;
  justify-content: center;

}

.selected_image_margin {
  border-color: green;
  border-style: solid;
}

.container_for_show_selection {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
}

.product_bar {
  width: 10%;
  height: 50%;
  display: inline-block;
  justify-content: center;
  align-items: center;
}

.show_selection {
  height: 400px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.imagine_produs {
  width: 55%;
  padding: 5%;

}

.imagine_produs:hover {
  border-color: black;
  border-style: solid;
}

.selected_product_image {
  max-height: 100%;
  max-width: 100%;
}

.imagine_logo {
  padding: 0px 10px;
}

</style>