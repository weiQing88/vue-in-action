<template>
	<div :class="className" :id="idName" :style="{height:height,width:width}"></div>
</template>
<script>
/*  eslint-disable */

import echarts from 'echarts'

export default {
	  data(){ 
	  	  return { 
	      		 chart : null
	         } 
	  },
	  props : {
	  	  className : {
	  	  	 type : String,
	  	  	 required : true,
	  	  	 default : 'chart'
	  	  },
	  	 idName :{
	  	 	 type:String,
	  	 	 default : 'chartId-' + Math.ceil(Math.random() * 12345)
	  	 },
         height : {
         	 type : String,
         	 default : '200px'
         },
         width : {
         	 type : String,
         	 default : '200px'
         },
        customOption  : {    // 自定义 ecahrt 配置
           type : Object,
           default : {}
        }
	  },
	mounted(){
     // 由于 echart 需要获取 真是的DOM节点，必须在此初始化
		this.initChart()
	},
    beforeDestroy(){
    	 if(!this.chart) return false;
    	  this.chart.dispose(); // 销毁 echart 实例，释放内存.
          this.chart = null
    },
   methods : {
   	   initChart(){
   	   	   this.chart = echarts.init(document.getElementById(this.idName));

   	   	   // 配置 echart   this.chart.setOption({});
   	   	  
   	   }  
   }
}
</script>
