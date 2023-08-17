<template>
    <div class="position-absolute top-50 start-50
    translate-middle border p-5 rounded">
        <h1 class="text-center">Calcular Raiz Cúbica</h1>
        <form @submit.prevent="calcularRaiz()">
            <div class="col">
                <label for="n1">1º Número</label>
                <input type="number" name="n1" :disabled="campoDesabilitado" id="n1" class="form-control" v-model="n1" />
            </div>
            <div class="col text-center mt-3 d-grid gap-2">
                <button type="submit" class="btn btn-success">Calcular</button>
                <button type="button" @click="limparReferencias()" class="btn btn-secondary">Limpar</button>
                <router-link to="/" class="btn btn-warning">Voltar</router-link>
            </div>
        </form>
        <h3 v-if="raizcubica != null" class="mt-3 text-center">O cálculo da raíz cúbica de {{ n1 }} é {{ raizcubica }}</h3>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const n1 = ref(0)
    const n2 = ref(0)
    const raizcubica = ref(null)
    const campoDesabilitado = ref(false)

    function calcularRaiz() {
        campoDesabilitado.value = true
        raizcubica.value = Math.cbrt(n1.value) + Math.cbrt(n2.value);
    }

    function limparReferencias() {
        campoDesabilitado.value = false
        n1.value = n2.value = 0
        raizcubica.value = null
    }
</script>