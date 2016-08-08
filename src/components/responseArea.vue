<template>
	<div class="response-area">
			<div class="sliderTop" id="material" v-if="testdata[userdata.currenttest].testtopic">{{testdata[userdata.currenttest].testtopic}}</div>
			<ul class="slider-wrapper">
						<li class="slideItem">
							<div class="content-loop">
								<div class="test">
									<div class="loop-questions" :class='type.classname' data-mark="5" data-answer-id="B" data-question-id="2145475">
										<p><span class="loop-num">第{{userdata.currenttest+1}}题</span>{{testdata[userdata.currenttest].testtitle}}<span class="qustion-type">({{type.name}})</span></p>
										<template v-if='testdata[userdata.currenttest].testType != 4'>
											<ul class="answer">
												<template v-if="testdata[userdata.currenttest].testoptions[0].optionContent.length>0">
													<li v-for="option in testdata[userdata.currenttest].testoptions" @click.self="radioclick(userdata.currenttest,option.optionName,$index,$event)" :class="$index == radioclicknum?'on':''"><i>{{option.optionName}}</i> <span class="dot"></span>{{option.optionContent}}</li>
												</template>
												<template v-else>
													<li style="display:inline-block" v-for="option in testdata[userdata.currenttest].testoptions"><i>{{option.optionName}}</i> <span class="dot"></span>{{option.optionContent}}</li>
												</template>
											</ul>
										</template>
										<template v-else>
											<ul class="answer">
												<textarea class="usertextarea" placeholder="请输入正确答案"></textarea>
											</ul>
										</template>
									<div class="my-analysis">
											<div class="answers error-msg">
												<div class="correct">
													<p class="title">testdata[userdata.currenttest].testtitle</p>
													<p>正确答案</p>
												</div>
												<div class="myAnswer">
													<p class="title"></p>
													<p>我的答案</p>
												</div>
											</div>
										</div>
										<div class="analysis"><i class="triangle-up"></i>
											<p class="resolution">testdata[userdata.currenttest].testAnalysis</p>
										</div>
									</div>
								</div>
							</div>
						</li>

			</ul>
	</div>
</template>
<script>
    export default {
    	 props: ['testdata', 'userdata','usertestdata'],
    	 data:function(){
    		 	return{
    		 		radioclicknum:null,
    		 	}
    	},
    	 methods: {
    	 	radioclick:function(testnum,testoption,optionnum,event){
    	 			console.log('testnum:'+testnum);
    	 			console.log('testoption:'+testoption);
    	 			if(this.radioclicknum == optionnum){
    	 				this.radioclicknum=null;
    	 			}else{
    	 			this.radioclicknum = optionnum;
    	 			}
    	 	},
    	 },
    	 computed: {
   		 // 一个计算属性的 getter
    	 type: function () {
    	 	 // `this` 指向 vm 实例
      	 var teststyle = this.testdata[this.userdata.currenttest].testType;
       	 switch (teststyle) {
       	 	case 1:
       	 		return {
       	 			'name':'单选题',
       	 			'classname':{
       	 				'radio':true,
       	 			},
       	 		}
       	 		break;
       	 	case 2:
       	 		return {
       	 			'name':'多选题',
       	 			'classname':{
       	 				'multiple':true,
       	 			},
       	 		}
       	 		break;
       	 	case 3:
       	 		return {
       	 			'name':'判断题',
       	 			'classname':{
       	 				'radio':true,
       	 			},
       	 		}
       	 		break;
       	 	case 4:
       	 		return {
       	 			'name':'简答题',
       	 			'classname':{
       	 				'jianda':true,
       	 			},
       	 		}
       	 		break;
       	 }
       }
 		 }
    };
</script>