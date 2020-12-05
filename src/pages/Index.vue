<template>
  <q-page class="flex flex-center">
    {{ message }}
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$axios
      .get('http://localhost:8888/api/admin')
      .then(res => {
        console.log('res', res)
        this.message = res.data
      })
      .catch(err => {
        console.log('err', err)
      })
  }
}
</script>
