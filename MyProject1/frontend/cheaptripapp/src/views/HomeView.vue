<template>
  <div>
    <h2>HomeView</h2>
    <h3>Đây là lời chào từ backend: {{hello}}</h3>
  </div>
</template>

<script>
export default {
    name: 'HomeView',
    data(){
      return{
        hello: null
      };
    },

    methods: {
      async SayHellofromBE(){
          try {
            const response = await fetch('http://localhost:3001/api/sayhello');
            const data = await response.json();
            this.hello = data.message;
          } catch (error) {
            console.error('Có lỗi xảy ra',error);
          }
      },
     
    },
     mounted() {
        this.SayHellofromBE(); // Gọi hàm khi component mount
      }
    //Hàm kết nối tới api để lấy dữ liệu tài khoản người dùng từ db
    
}
</script>

<style>

</style>