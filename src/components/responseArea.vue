<template>
	<div class="response-area">
			<div class="sliderTop" id="material" v-if="testdata[userdata.currenttest].testtopic">{{testdata[userdata.currenttest].testtopic}}</div>
			<ul class="slider-wrapper">
					<template v-if='testdata[userdata.currenttest].testType == 1'>
						<li class="slideItem">
							<div class="content-loop">
								<div class="test">
									<div class="loop-questions radio" data-mark="5" data-answer-id="B" data-question-id="2145475">
										<p><span class="loop-num">第{{userdata.currenttest+1}}题</span>{{testdata[userdata.currenttest].testtitle}}<span class="qustion-type">(单选)</span></p>
										<ul class="answer">
											<li v-for="option in testdata[userdata.currenttest].testoptions"><label class="anserlab"><i>{{option.optionName}}</i> <span class="dot"></span>{{option.optionContent}}</label></li>
										</ul>
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
					</template>
			</ul>
	</div>
</template>
<script>
    export default {
    	 props: ['testdata', 'userdata']
    };
</script>