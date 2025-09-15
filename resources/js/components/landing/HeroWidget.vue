<template>
    <div
        id="hero"
        class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
        style="background: #296c9e"
    >
        <div class="mx-6 md:mx-20 mt-0 md:mt-6">
            <h1 class="text-6xl font-bold text-white leading-tight"><span class="font-light block">Aprender nunca foi tão dinâmico! </span></h1>
            <p class="font-normal text-2xl leading-normal md:mt-4 text-white">Com professores dedicados, metodologia interativa, aulas VIP com o Teacher Barzilay e opções ao domicílio para empresas, temos tudo para elevar o seu nível de inglês.</p>
            <Button class="p-button-text p-button-rounded border-none font-light line-height-2 text-white" label="Iniciar" as="router-link" to="/" ></Button>
        </div>
        <div class="flex justify-center md:justify-end">
            <img src="/logo.png" alt="Hero Image" class="w-25 h-20" />
        </div>
    </div>
</template>
