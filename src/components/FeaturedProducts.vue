<template>
    <b-container>
        <b-row>
            <b-col v-for="product in products" :key="product.id" col xs="12" md="6" lg="4" class="mb-4">
                <b-card :title="product.name"
                        :img-src="product.imageUrl"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2">
                    <p class="card-text">
                        {{ product.description }}
                    </p>
                    <b-button href="#" variant="primary">GET it now!</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'products'
  ]),
    created() {
      this.$store.dispatch('loadProducts')
    }
};
</script>

<style lang="scss" scoped>
  .image {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    font-weight: bold;
  }

  /*.container:hover .image {*/
  /*opacity: 0.3;*/
  /*}*/

  /*.container:hover .middle {*/
  /*opacity: 1;*/
  /*}*/

  .text {
    background-color: #4caf50;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }

  .container-hover-text {
    position: relative;
    width: 50%;

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 100%;
      right: 0;
      background-color: #008cba9c;
      overflow: hidden;
      width: 0;
      height: 100%;
      transition: 0.3s ease;
    }
    .text {
      width: 100%;
      color: white;
      color: white;
      font-size: 20px;
      position: absolute;
      overflow: hidden;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  }

  .container-hover-text:hover .overlay {
    width: 100%;
    left: 0;
  }
</style>
