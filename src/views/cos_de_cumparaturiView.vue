<template>
  <div class="cos_de_cumparaturi">
    <h1 v-if="produse_cos.length === 0">Nu aveti produse in cosul de cumparaturi</h1>
    <div v-else class="card_produs">
      <div v-for="(produs, index) in produse_cos" :key="index" class="element_cos">
        <div>
          {{ produs.pName }} | {{produs.lName}} | {{produs.pColor}}
          <button @click="decrement(index)" class="decrementeaza">-</button>
          {{ produs.pQuantity }}
          <button @click="increment(index)" class="incrementeaza">+</button>
          <p>{{ pret_produs(produs) }} RON</p>
          <button class="sterge_produs" @click="sterge_produs(index)"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
        </div>
        <br>
      </div>
      <p>TOTAL: {{ pret_total }} RON</p>
      <br>
      <button class="plateste">PLATESTE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cos_de_cumparaturiView",
  data() {
    return {
      produse_cos: [],
      pret_total: 0
    }
  },
  methods: {
    getCartItems() {
      this.produse_cos = JSON.parse(localStorage.getItem("Produse"));
      this.update_pret();
    },
    increment(index) {
      this.produse_cos[index].pQuantity++;
      this.update_pret();
    },
    decrement(index) {
      if (this.produse_cos[index].pQuantity > 1) {
        this.produse_cos[index].pQuantity--;
        this.update_pret();
      } else {
        if (confirm('Sunteti sigur ca doriti sa stergeti produsul din cos?')) {
          this.produse_cos.splice(index, 1);
          this.update_pret();
        }
      }
    },
    sterge_produs(index) {
      this.produse_cos.splice(index, 1);
      this.update_pret();
    },
    update_pret() {
      let total = 0;
      for (let produs of this.produse_cos) {
        total += produs.pPrice * produs.pQuantity;
      }
      this.pret_total = total;
    },
    pret_produs(produs) {
      return produs.pPrice * produs.pQuantity;
    }
  },
  mounted() {
    this.getCartItems();
  }
}
</script>

<style scoped>

.sterge_produs {
  background-color: white;
  font-size: larger;
  margin-left: 3%;
}

.sterge_produs:hover {
  background-color: red;
  transition: background-color 0.5s;
}
.element_cos {
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: space-between;
}

.decrementeaza {
  margin-left: 2%
}

.incrementeaza {
  margin-right: 2%;
}

p {
  display: inline-flex;
}

h1 {
  margin-top: 20%;
}

.plateste {
  border: none;
  background-color: #2b76ad;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.plateste:hover {
  background-color: #0498fd;
  transition: background-color 0.5s;
}

</style>