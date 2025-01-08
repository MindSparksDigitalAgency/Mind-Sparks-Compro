<template>
    <header class="bg-gray-800 shadow-md">
      <nav class="container mx-auto px-4 py-5 flex items-center justify-between">
        <!-- Logo -->
        <div class="text-white text-2xl font-bold">
          <a href="#"><img src="@/assets/img/logo.png" alt="" class="w-10 h-10 rounded-full"></a>
        </div>
  
        <!-- Menu Toggle Button for Mobile -->
        <button class="lg:hidden text-white focus:outline-none" id="menu-toggle">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
  
        <!-- Menu Links -->
        <div class="hidden lg:flex space-x-6">
          <a href="#home" class="text-white hover:text-gray-400">Home</a>
          <a href="#services" class="text-white hover:text-gray-400">Services</a>
          <a href="#about" class="text-white hover:text-gray-400">About Us</a>
          <a href="#contact" class="text-white hover:text-gray-400">Contact</a>
        </div>
      </nav>
  
      <!-- Mobile Menu -->
      <div class="lg:hidden hidden" id="mobile-menu">
        <div class="bg-gray-800 space-y-4 p-4">
          <a href="#home" class="text-white block hover:text-gray-400">Home</a>
          <a href="#services" class="text-white block hover:text-gray-400">Services</a>
          <a href="#about" class="text-white block hover:text-gray-400">About Us</a>
          <a href="#contact" class="text-white block hover:text-gray-400">Contact</a>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });
  </script>
  