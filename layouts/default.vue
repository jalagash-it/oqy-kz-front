<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand to="/">ОҚЫ</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/project/about">Жоба жайлы</b-nav-item>
          <b-nav-item to="/courses/html-css" class="html-course-nav-item">html, css негіздері</b-nav-item>
          <b-nav-item to="/project/public-offer" v-if="false">Ашық оферта</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Іздеу"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="button"
              >Іздеу</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Тіл" right>
            <b-dropdown-item href="#">KK</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-if="user != null">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ user.username }}</em>
            </template>
            <b-dropdown-item href="#">Профиль</b-dropdown-item>
            <b-dropdown-item @click="logout">Шығу</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-else>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Қонақ</em>
            </template>
            <b-dropdown-item to="/auth/login">Кіру</b-dropdown-item>
            <b-dropdown-item to="/auth/register">Тіркелу</b-dropdown-item>
            <b-dropdown-item to="/auth/reset">
              Құпиясөзді жаңарту
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      user:null
    }
  },
  asyncData({ $axios }) {
    $axios.$get("/").then((res) => {
      console.log(res);
    });
  },
};
</script>
<style scoped>
  .html-course-nav-item{
    border: 1px solid rgb(60, 159, 184);
    border-radius: 5px;
  }
</style>