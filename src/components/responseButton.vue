<template>
	<ul class="response-button">
					<li><button @click = 'lasttest'>上一题(<-)</button></li>
					<li><button @click = 'nexttest'>下一题(->)</button></li>
					<li><button>计算器(2)</button></li>
					<li><button>帮助(3)</button></li>
					<li><button>交卷(4)</button></li>
				</ul>
</template>
<script>
    export default {
    		 props: ['testdata','userdata'],

    		 methods: {
    		 		nexttest:function(){
    		 			if(this.userdata.currenttest+1<this.testdata.length) {
    		 				this.userdata.currenttest++
    		 			}
    		 		},
    		 		lasttest:function(){
    		 			if(this.userdata.currenttest-1>=0){
    		 				this.userdata.currenttest--
    		 			}
    		 		},
    		 },
    };
</script>