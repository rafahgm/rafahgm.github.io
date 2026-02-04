<script setup lang="ts">
useHead({
  title: 'Contato - Rafael Morais'
})

const whatsappNumber = "5514991786798";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitToWhatsapp = () => {
  const subject = form.subject || `Contato de ${form.name}`;
  const text = [
    `*${subject}*`,
    "",
    `Nome: ${form.name}`,
    `E-mail: ${form.email}`,
    "",
    form.message,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.location.href = whatsappUrl;
};
</script>

<template>
  <main class="mb-16 sm:mb-32">
    <section class="mx-auto max-w-3xl">
      <header class="mb-8 space-y-2">
        <h1 class="text-[#EEEEEC] text-3xl font-medium">Contato</h1>
        <p class="font-light">
          Preencha o formulário para iniciar uma conversa comigo no WhatsApp.
        </p>
      </header>

      <form class="space-y-4" @submit.prevent="submitToWhatsapp">
        <div>
          <label class="mb-1 block text-sm font-medium text-[#EEEEEC]" for="name">Nome</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="w-full rounded-md border border-[#2A2A2A] bg-[#151515] px-3 py-2 outline-none focus:border-[#EEEEEC]"
          >
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-[#EEEEEC]" for="email">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="w-full rounded-md border border-[#2A2A2A] bg-[#151515] px-3 py-2 outline-none focus:border-[#EEEEEC]"
          >
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-[#EEEEEC]" for="subject">Assunto</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            class="w-full rounded-md border border-[#2A2A2A] bg-[#151515] px-3 py-2 outline-none focus:border-[#EEEEEC]"
          >
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-[#EEEEEC]" for="message">Mensagem</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            required
            class="w-full rounded-md border border-[#2A2A2A] bg-[#151515] px-3 py-2 outline-none focus:border-[#EEEEEC]"
          />
        </div>

        <div class="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            class="rounded-md bg-[#EEEEEC] px-4 py-2 font-medium text-[#111111] transition hover:opacity-90"
          >
            Enviar no WhatsApp
          </button>
        </div>

        <p class="pt-2 text-sm font-light">
          Ao enviar, você concorda com nossa
          <NuxtLink to="/politica-privacidade" class="text-[#EEEEEC] underline decoration-[#b5b3ad]">
            Política de Privacidade
          </NuxtLink>.
        </p>
      </form>
    </section>
  </main>
</template>