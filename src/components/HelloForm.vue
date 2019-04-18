<template>
  <section class="is-white hello">
    <div class="container">
      <form @submit.prevent="sendForm">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="field">
              <label for class="label has-text-left has-text-weight-light">Name</label>
              <div class="control is-expanded">
                <input type="text" class="input is-large
                  has-text-weight-light is-primary" required v-model="name">
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="field">
              <label class="label has-text-left has-text-weight-light">Email</label>
              <div class="control is-expanded">
                <input
                  type="email"
                  class="input is-large has-text-weight-light is-primary"
                  required
                  v-model="email"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <div class="field">
              <label class="label has-text-left has-text-weight-light">Message</label>
              <div class="control is-expanded">
                <textarea
                  class="textarea is-large has-text-weight-light is-primary"
                  rows="5"
                  required
                  v-model="message"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-one-third">
            <div class="field">
              <div class="control">
                <button
                  class="button is-primary is-medium
                  is-rounded is-fullwidth is-vcentered"
                  :class="{'is-loading' : isLoading}">
                  <p class="submit-text">Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/styles.scss";
.hello {
  .input {
    font-size: 1.4rem;
    color: #293347;
    border-color: $form-border-color;
    box-shadow: none;
  }
  .textarea {
    border-color: $form-border-color;
    font-size: 1.4rem;
    box-shadow: none;
  }
  .label {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
  }
  .submit-text {
    position: absolute;
  }

}
</style>

<script>
import axios from 'axios';

const url = 'https://xdjtmiomh1.execute-api.eu-west-1.amazonaws.com/dev/email/send';

export default {
  name: 'hello-form',
  data() {
    return {
      isLoading: false,
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendForm() {
      this.isLoading = true;
      axios.post(url, {
        name: this.name,
        email: this.email,
        message: this.message,
      }).then(() => {
        this.isLoading = false;
        this.$toast.open({
          message: 'Thanks for reaching out! I\'ll get in touch with you ASAP',
          type: 'is-success',
          position: 'is-bottom',
        });
      }).catch((err) => {
        this.isLoading = false;
        this.$toast.open({
          duration: 2000,
          message: err,
          type: 'is-danger',
          position: 'is-bottom',
        });
      });
    },
  },
};
</script>
