(function($) {
	var pluginName = "slide",
		startPos, endPos, //初始和结束位置
		//默认设置的模式
		defaults = {
			animationCss: 'animation-ease',
		};

	function Plugin($content, option) {
		this.settings = $.extend(true, defaults, option);
		this.$content = $content; //被调用的jq对象
		this.$wrapper = $content.children('.slider-wrapper'); //slider-wrapper对象
		this.currentIndex = 0; //当前序列
		this.$slideItem = this.$wrapper.children('.slideItem'); //滑动子元素
		this.$slidedetail = null; //当前滑动子元素
		this.contentWidth = this.$content.width(); //第一个滚动的宽度,默认所有滚动的距离都是一样的
		this.slideItemLength = this.$slideItem.length; //滑动子元素的数量
		this.touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch; // 判断设备是否支持touch事件	
		this.currentState = 'play'; //当前状态
		//this.windowWidth = $(window).width(); //屏幕宽
		//this.windowHeight = $(window).height(); //屏幕高
		this.init(); //初始化
	}
	Plugin.prototype = {
		init: function() {
			var self = this;
			self.domCss(); //dom样式初始化
			self.events(); //绑定事件
			self.slide(self.currentIndex);
		},
		//上一页
		prev: function() {
			var self = this;
			if(self.currentIndex !== 0) {
				self.currentIndex -= 1;
				self.slide(self.currentIndex);
				//触发上一页事件
				self.$content.trigger('slidePrev');
			} else {
//				self.slide(self.currentIndex);
				//触发前到头事件
				self.$content.trigger('slideFront');
			}
		},
		//下一页
		next: function() {
			var self = this;
			if(self.currentIndex !== self.slideItemLength - 1) {
				self.currentIndex += 1;
				self.slide(self.currentIndex);
				//触发下一页事件
				self.$content.trigger('slideNext');
			} else {
				//触发后到头事件
				self.$content.trigger('slideLast',self.currentIndex);
//				self.slide(self.currentIndex);
			}
			if(self.currentIndex == self.slideItemLength - 2) {
				//触发倒数第二页事件
				self.$content.trigger('slidelastButone',self.currentIndex);
			}
		},
		//暂停
		pause: function() {
			var self = this;
			self.currentState = 'pause';
		},
		//开启
		play: function() {
			var self = this;
			self.currentState = 'play';
		},
		//滑动show/hide操作
		slide: function(index, targetid) {
			var self = this;
			
			if(!(targetid >= 0)) {
				var id = self.currentIndex;
				var oldid = self.currentIndex-1;
			} else {
				var id = targetid;
				var oldid = self.currentIndex;
				self.currentIndex = targetid;
				
			}
			var $selfitem = self.$wrapper.find('[data-listid=' + index + ']')
//			$selfitem.addClass(self.settings.animationCss) //添加动画效果
			$selfitem.show().siblings().hide();
			self.$content.trigger('slide', [$selfitem,id,oldid]);
		},
		//事件绑定
		events: function() {

		},
		//domcss初始化
		domCss: function() {
			var self = this;
			var i = 0;
			self.$slideItem = self.$wrapper.children('.slideItem'); //滑动子元素
			self.slideItemLength = self.$slideItem.length; //滑动子元素的数量

			self.$slideItem.each(function() {
				$(this).attr('data-listid', i);
				i++;
			});
		},
	}
	$.fn[pluginName] = function(options) {
		return new Plugin($(this), options);
	}
})(jQuery)