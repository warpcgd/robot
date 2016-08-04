var slider; //全局切换插件
var userAnswerlist = []; //用户的答题表，里面存放已经答题的listid
var basedata = {
	cardId: '', //用户考号
	allTime: 120, //总时间
	qslistNum: 24, //题目总数
	hasAnswerNum: '', //已答题目数
	noneAnswerNum: '', //未答题目数
	user_progress: '', //答题进度
	hasUseTime: '', //已用时间
	lastTime: '', //剩余时间

	hassubmit: false, //是否交卷
	userScore: 0, //用户得分
}
$('docment').ready(function() {

});
//各类初始化
function init() {
	dominit();
	//绑定事件
	bindevent();
	//初始化slide
	slider = $('#learn').slide();
	//做题绑定
	bindtimu()
		//倒计时
	var Countdowntime = CountDownTime(basedata.allTime);
	Countdowntime();
}
//dom初始化
function dominit() {

	$('#mainalltime').html(basedata.allTime)
	$('#questionNum').html('总题数' + basedata.qslistNum + '题 已答0题 剩余19题')
	$('#userinfo').html('姓名:测试考生' + basedata.cardId + ' 性别:男 准考证号:' + basedata.cardId + '')
}
//绑定事件
function bindevent() {
	//切换事件
	var hasansweredQs = 0; //起始已做题数
	var allQsnum = basedata.qslistNum;
	var $slideWrapper = $('.slider-wrapper');
	var $card = $('#card');
	$('#learn').on('slide', function(e, $this, id, oldid) {
		//题干显示
		var material = $this.find('.material-title').html();
		$('#material').html(material);
		//答题卡同步
		var $options = $('#card .card-option');
		$options.find('li').removeClass('answering-color').end().find('[data-anslistid=' + (id + 1) + ']').addClass('answering-color');
		//进度
		var slideitemNum = $('#learn').find('.slideItem').length;
		var $lastitem = $slideWrapper.find('[data-listid=' + oldid + ']');
		console.log(!$this.find('.answer-counted').length);
		if(!$lastitem.find('.answer-counted').length && ($lastitem.find('.answer .anserlab.on').length || $lastitem.find('.jianda').length)) {

			//添加已答
			$lastitem.find('.answer').removeClass('answer').addClass('answer-counted');
			$card.find('[data-anslistid=' + (oldid + 1) + ']').addClass('answered-color');
			hasansweredQs++;
			var pecent = (hasansweredQs / allQsnum) * 100;
			basedata.user_progress = parseInt(pecent);
			basedata.hasAnswerNum = hasansweredQs;
			basedata.noneAnswerNum = (allQsnum - hasansweredQs);
			$('#questionNum').html('总题数' + allQsnum + '题 已答' + hasansweredQs + '题 剩余' + (allQsnum - hasansweredQs) + '题')
			$('#progress .my-progress-percent').css({
				width: pecent + '%',
			});
			$('#percentNum').text(' ' + parseInt(pecent) + '%');
		}
		//最后一题个例
		if(id == slideitemNum - 1 && !$this.find('.answer-counted').length) {
			$this.find('.answer').removeClass('answer').addClass('answer-counted');
			$card.find('[data-anslistid=' + (id + 1) + ']').addClass('answered-color');
			hasansweredQs++;
			var pecent = (hasansweredQs / allQsnum) * 100;
			basedata.user_progress = parseInt(pecent);
			basedata.hasAnswerNum = hasansweredQs;
			basedata.noneAnswerNum = (allQsnum - hasansweredQs);
			$('#questionNum').html('总题数' + allQsnum + '题 已答' + hasansweredQs + '题 剩余' + (allQsnum - hasansweredQs) + '题')
			$('#progress .my-progress-percent').css({
				width: pecent + '%',
			});
			$('#percentNum').text(' ' + parseInt(pecent) + '%');
		};
	});

	$('#card').on('click', '.card-option li', function() {
		var $this = $(this);
		var thisid = $this.data('anslistid') - 1;
		slider.slide(thisid, thisid)
	});
	// 按键绑定
	$(document).on('keydown', function(event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode == 38 || e && e.keyCode == 37) { //上,左
			slider.prev()
		}
		if(e && e.keyCode == 40 || e && e.keyCode == 39) { //下,右
			slider.next()
		}
	})

}

//做题绑定
function bindtimu(fun) {
	//单选:ratio,判断:judgment
	$('#learn').on('click.timu', '.radio  label,.judgment  label,.material  label,.peiwu  label', function() {
		var $this = $(this);
		$this.addClass('on').parent().siblings().children('label').removeClass('on');
	});
	//多选:multiple
	$('#learn').on('click.timu', '.multiple label', function() {
		var $this = $(this);
		$this.hasClass('on') ? $this.removeClass('on') : $this.addClass('on');
	});
	//简答
	//$('#learn').on('click.timu', '.jianda .loop-btn', function() {
	//var $this = $(this);
	//var $parent = $this.parents('.loop-questions');
	//$this.hide();
	//$this.siblings('.analysis').fadeIn();
	//			});
};
//取消做题绑定
function offtimu() {
	$('#learn').off('click.timu', '.radio  label,.judgment  label,.material  label,.peiwu  label')
	$('#learn').off('click.timu', '.multiple label');
}
//倒计时
function CountDownTime(time) {
	var isStop = false;
	var maxtime = time * 60;
	var timer;
	var surplusTime = 0; //剩余时间
	/*倒计时*/
	function CountDown() {
		if(maxtime >= 0) {
			minutes = Math.floor(maxtime / 60);
			//					seconds = Math.floor(maxtime % 60);
			msg = minutes;
			document.getElementById("mainlasttime").innerHTML = msg;
			basedata.lastTime = msg;
			basedata.hasUseTime = time - msg;
			//循环递减
			if(!isStop) {
				--maxtime;
				timer = setTimeout(CountDown, 1000);
			}
		} else {
			clearTimeout(timer);
			isStop = true;
		}
	}
	return CountDown;
}
//交卷绑定
function submitPaper() {

	if(!basedata.hassubmit) {
		var $itemloop = $('#learn').find('.slideItem');
		userAnswerlist = [];
		$.each($itemloop, function() {
			var $this = $(this);
			var $question = $this.find('.loop-questions')
			var $option = $question.find('ul>li')
			var obj = {};
			var useranswerArr = [];
			var isjianda = $this.find('.jianda').length
			obj.questionId = $question.data('question-id');
			obj.questionanswerId = $question.data('answer-id');
			//带选项的题
			$.each($option, function() {
				var $this = $(this);
				if($this.find('.anserlab').hasClass('on')) {
					var useranswer = $this.find('.anserlab').data('answer-id');
					useranswerArr.push(useranswer);
				}
			});
			//简答题
			if(isjianda) {
				useranswerArr.push($itemloop.find('.usertextarea').val())
			}
			obj.useranswerId = useranswerArr.toString();
			var template = '<div class="answers"><div class="correct"><p class="title">' + obj.questionanswerId + '</p><p>正确答案</p></div><div class="myAnswer"><p class="title">' + obj.useranswerId + '</p><p>我的答案</p></div></div>'
			var correct = obj.questionanswerId == obj.useranswerId ? true : false;
			//默认简答为正确
			if(isjianda) {
				var correct = true;
			}
			obj.correct = correct;
			if(correct) {
				var text = jQuery(template).addClass('dui-msg');
				var perMask = parseInt($question.data('mark') || 0);

			} else {
				var text = jQuery(template).addClass('error-msg');
				var perMask = 0;
			}
			//添加得分统计
			basedata.userScore = basedata.userScore + perMask;
			//添加对错判断
			$this.find('.my-analysis').html('').html(text[0]);
			userAnswerlist.push(obj);
		});
		console.log(basedata);
		console.log(userAnswerlist);
		//更新信息
		$('#userId').html('测试考生' + basedata.cardId);
		$('#cardId').html(basedata.cardId);
		$('#allTime').html(basedata.allTime);
		$('#user_progress').html(basedata.user_progress + '%');
		$('#hasUseTime').html(basedata.hasUseTime);
		$('#hasAnswerNum').html(basedata.hasAnswerNum);
		$('#lastTime').html(basedata.lastTime);
		$('#noneAnswerNum').html(basedata.noneAnswerNum);
		$('#userscore').html(basedata.userScore);
		openAction.openEndpage();
		basedata.hassubmit = true;
	} else {
		openAction.openEndpage();
	}
}
//交卷后返回
function gobackMain() {
	//所有题目取消绑定
	offtimu();
	//显示所有答案
	$('.slider-wrapper').addClass('submit');
	//答题卡显示正确与错误
	$('#card').find('.card-tips').html('<li><span class="answered answer-right"></span>正确</li><li><span class="answering answer-wrong"></span>错误</li><li><span class="none-answer none-answer-color"></span>未答</li>')
	$.each(userAnswerlist, function(i, item) {
		if(item.correct) {
			$('#card').find('[data-anslistid=' + (i + 1) + ']').addClass('answer-right');
		} else {
			$('#card').find('[data-anslistid=' + (i + 1) + ']').addClass('answer-wrong');
		}
	});
	$('#submitPaper').html('<i style="margin-right: 6px;" class="submit-icon iconimg"></i>查看结果');
}
//各类窗口弹出
var openAction = {
	Mainindex: '',
	Endpageindex: '',
	tipsindex: '',
	openMain: function() {
		this.Mainindex = layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			content: $('#main'),
			success: function() {
				//弹出后进行初始化,ajax可以提前进行
				//跳转成功后，记录用户数据
				basedata.cardId = $('#inputTicket').val().toString();
				init();
			}
		});
		layer.full(this.Mainindex);

	},
	openCalculator: function() {
		layer.open({
			type: 1,
			shade: false,
			scrollbar: false,
			area: '354px',
			skin: 'layui-layer-demo', //样式类名
			title: false, //不显示标题
			content: $('#calculator'), //捕获的元素

		});
	},
	openEndpage: function() {
		this.Endpageindex = layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			content: $('#endpage'),
		});
		layer.full(this.Endpageindex);
	},
	closeEndpage: function(index) {
		var targetindex = this.Endpageindex;
		gobackMain();
		layer.close(targetindex);
	},
	opentips: function() {
		this.tipsindex = layer.open({
			type: 1,
			shade: false,
			scrollbar: false,
			area: '530px',
			title: false, //不显示标题
			content: $('#qs_tips'), //捕获的元素
		});
	},
	closeTips: function() {
		var targetindex = this.tipsindex;
		layer.close(targetindex);
	}
}