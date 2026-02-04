<template>
  <div class="mx-auto max-w-173 px-6 py-16">
    <header class="mb-32 flex flex-col gap-5">
      <div>
        <p class="text-[#EEEEEC] -mb-1 font-medium">Rafael Morais</p>
        <span class="font-medium">Engenheiro de Software</span>
      </div>

      <nav class="flex gap-2 mx-auto">
        <NuxtLink
          to="/"
          class="rounded px-2 py-1 transition hover:text-[#EEEEEC]"
          exact-active-class="bg-[#1f1f1f] text-[#EEEEEC]"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/contato"
          class="rounded px-2 py-1 transition hover:text-[#EEEEEC]"
          exact-active-class="bg-[#1f1f1f] text-[#EEEEEC]"
        >
          Contato
        </NuxtLink>
        <NuxtLink
          to="/politica-privacidade"
          class="rounded px-2 py-1 transition hover:text-[#EEEEEC]"
          exact-active-class="bg-[#1f1f1f] text-[#EEEEEC]"
        >
          Política de Privacidade
        </NuxtLink>
      </nav>
    </header>
    
    <slot />
  
  </div>
</template>
