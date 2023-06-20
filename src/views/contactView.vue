<template>
<div class="contact">
    <h1>Formular de contact</h1>
  <form ref="form" @submit.prevent="sendEmail">
      <label for="nume_prenume">Nume si prenume</label>
      <br>
      <input type="text" id="nume_prenume" name="nume_prenume">
      <br>
      <label for="email">Adresa E-mail</label>
      <br>
      <input type="email" id="email" name="email">
      <br>
      <textarea id="mesaj" name="mesaj" cols="40" rows="8"></textarea>
      <br>
      <br>
      <input type="submit" id="submit" value="Trimite Mesaj">
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'contactView',
  methods: {
    sendEmail() {
      emailjs.sendForm('service_wwz92vj', 'template_inxplbp', this.$refs.form, 'Ljte_1JhwLZ1k8esk')
          .then((result) => {
            console.log('SUCCESS!', result.text);
            alert('Mesajul a fost trimis cu succes!')
          }, (error) => {
            console.log('FAILED...', error.text);
            alert('Mesajul nu s-a trimis. Mai incercati odata.')
          });
      this.$refs.form.reset();
    },
  }
}


</script>

<style scoped>

input {
  margin-bottom: 50px;
}

form {
  display: inline-block;
  justify-content: center;
}


</style>