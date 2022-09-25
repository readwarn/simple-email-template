<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap");

.icon {
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}

.icon-menu::before {
  content: "\e5d2";
}

.icon-close::before {
  content: "\e5cd";
}

* {
  font-family: "Source Sans Pro", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.btn {
  outline: 0;
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  color: #000;
  background: #fff;
  font-size: 0.95rem;
  text-align: start;
  display: block;
  cursor: pointer;
}

.input-check {
  height: 17px;
  width: 17px;
  cursor: pointer;
}

.email-items-container,
.email-content-body {
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  max-height: 100%;
  padding-bottom: 50px;
  overflow-y: auto;
}

.email-items-container::-webkit-scrollbar {
  width: 5px;
}

.email-items-container::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 6px;
}

.email-items-container::-webkit-scrollbar-track {
  background: gray;
  border-radius: 6px;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity ease-in-out 0.3s;
}

.fade-slide-enter-from .email-layout__body,
.fade-slide-leave-to .email-layout__body {
  transform: translateX(100%);
}

.fade-slide-enter-active .email-layout__body,
.fade-slide-leave-active .email-layout__body {
  transition: transform ease-in-out 0.3s;
}
</style>
