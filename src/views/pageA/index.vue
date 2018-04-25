<template>
   <div class="pageA">
   	  你好啊！！
   	  <chart-bar :className="'text_chart'" :id="'text_chart_id'" :height="'auto'" :width="'90%'"></chart-bar>
   </div>
</template>

<script>
 /* eslint-disable */ 

import chartBar from '@/components/echart_bar'

export default {
		 data(){
		 	 return {
		 	 	 name : '2312'
		 	 }
		 },
	  components : { chartBar }
	}
</script>

<style>
	.pageA{
		width: 100%;
		background-color: teal;
	}
</style>