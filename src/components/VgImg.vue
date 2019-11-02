<template lang='pug'>
v-img
    g-image(:src='src')
    p coucou
</template>

<script lang='coffee'>
export default
    props: ['src']
</script>