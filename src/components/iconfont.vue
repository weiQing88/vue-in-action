<template>
   <svg class="icon" aria-hidden="true">
	  <use :xlink:href="className"></use>
	</svg>
</template>


<script>
  export default {
  	     data(){  
  	     	return { }
  	      },
  	   props : {
  	   	  iconClass : {
  	   	  	   type : String,
  	   	  	   required : true  
  	   	     }
  	   },
  	computed : {
          className(){
          	  return `#icon-${this.iconClass}`
          }
  	}
  }
</script>

<style scoped></style>