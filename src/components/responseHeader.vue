<template>
	<div class="response-header">
					<p>当前试室:第1试室 当前场次:第00场</p>
					<p>姓名:{{userdata.username}} 性别:男 准考证号:{{userdata.cardNum}}</p>
					<p class="seats">座位号:1</p>
				</div>
</template>
<script>
  export default {
  	 props: ['userdata']
    };
</script>