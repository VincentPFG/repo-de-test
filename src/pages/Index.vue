<template lang='pug'>
Layout
    v-img(src='/uploads/foret.jpg').primary
        template(#placeholder)
            v-overlay(absolute)
                v-progress-circular(indeterminate)
    v-img
        g-image(src='~/assets/uploads/foret.jpg')
    v-img(src='/uploads/foret.jpg')
    g-image(src='~/assets/uploads/foret.jpg')
    //- vg-img(src='/uploads/foret.jpg' aspect-ratio='1.33')

</template>

<script lang='coffee'>

</script>

<style lang="sass">

</style>