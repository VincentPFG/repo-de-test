<template lang='pug'>
v-img(:src='src').primary
    template(#placeholder)
        v-overlay(absolute)
            v-progress-circular(indeterminate)
</template>

<script lang='coffee'>
export default
    props: ['src']
	
</script>