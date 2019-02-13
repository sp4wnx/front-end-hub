<template>
  <b-container id="message-component">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="To:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="supportTypes"
                      required
                      v-model="form.supportType">
        </b-form-select>
        <b-form-textarea id="message"
                     v-model="form.message"
                     placeholder="Enter your message!"
                     :rows="3"
                     :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-form-group 
        id="exampleGroup4"
        label="How do you want us to contact you?">
        <b-form-checkbox-group 
            v-model="form.checked" 
            id="exampleChecks">
          <b-form-checkbox value="chat">Support Chat</b-form-checkbox>
          <b-form-checkbox value="email">Email</b-form-checkbox>
          <b-form-checkbox value="phone">Phone</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        supportType: '',
        message: null,
      },
      supportTypes: [
        { text: 'Select One', value: null },
        'Club Support', 
        'MyClubHub Support'
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style scoped>
#message-component {
    text-align: left;
}
</style>
