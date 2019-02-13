<template>
  <div id="mcb-theme">

    <main-navigation-component></main-navigation-component>
    <div class="container-fluid">
      <div class="row">
        <leftside-navigation-component></leftside-navigation-component>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 mt-5">
          <transition name="fade">
            <router-view/>
          </transition>
        </main>
      </div>
    </div>

  </div>
</template>