<template>
  <h4 class="o-booking-title">Get in Contact</h4>
  <form>
    <div class="form-group">
      <input v-model="contactForm.name" type="text" class="form-control" id="name" placeholder="Your Name" required/>
    </div>
    <div class="form-group">
      <input v-model="contactForm.email" type="text" class="form-control" id="email" placeholder="Your E-mail"
             required/>
    </div>
    <div class="form-group">
      <textarea v-model="contactForm.message" type="text" class="form-control" id="message"
                placeholder="Your Message"></textarea>
    </div>
    <button type="submit"
            class="btn btn-primary a-btn"
            v-on:click.prevent="getContactFormValues"
    >Send
    </button>
  </form>
</template>

<script>
  export default {

    data() {

      return {
        contactForm: {
          name: '',
          email: '',
          message: ''
        }
      }
    },

    methods: {

      getContactFormValues: function (e) {
        e.preventDefault()

        console.log('get values from contact form', this.contactForm)
      }
    }
  }
</script>
