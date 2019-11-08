<template lang='pug'>
Layout
    w-img(src='/uploads/foret.jpg')
</template>

<script lang='coffee'>
export default
    mounted: ->
        {data} = await @$axios.get '/f/hello'
        console.log data
</script>