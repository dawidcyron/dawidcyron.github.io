<template>
  <section class="is-white hello">
    <div class="container">
      <form @submit.prevent="submit">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="field">
              <label for class="label has-text-left has-text-weight-light">Name</label>
              <div class="control is-expanded">
                <input type="text" class="input is-large has-text-weight-light is-primary" required>
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
                >
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <div class="field">
              <label class="label has-text-left has-text-weight-light">Message</label>
              <div class="contorl is-expanded">
                <textarea
                  class="textarea is-large has-text-weight-light is-primary"
                  rows="5"
                  required
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
                  class="button is-primary is-outlined is-medium is-rounded is-fullwidth
                   is-vcentered"
                  :class="{'is-loading' : is-loading}">
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
