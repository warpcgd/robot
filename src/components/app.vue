<template>
	<div class="response">
			<!-- 头部组件 -->
			<response-header :userdata='userdata'></response-header>
			<!-- 答题组件 -->
			<response-area :testdata='testdata' :userdata='userdata'></response-area>
			<!-- 快捷操作组件 -->
			<response-button></response-button>
			<!-- 进度条组件 -->
			<response-progress></response-progress>
	</div>
	<!-- 答题卡组件 -->
	<card></card>
</template>
<script>
	import responseHeader from './responseHeader';
  import responseArea from './responseArea';
  import responseButton from './responseButton';
  import responseProgress from './responseProgress';
	import card from './card';
	import testdata from '../store'
	let userdata = {
			username:'lxc',
			cardNum:'123124124',
			currenttest:0,
	}
	 export default {
        el: '#app',
        data:function(){
        	return {
        		userdata,
        		testdata,
        	}
        },
        components: {
            responseHeader, responseArea, responseButton, responseProgress,card
        }
	 }
</script>