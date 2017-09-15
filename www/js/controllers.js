angular.module('starter.controllers', [])
//悦读
.controller('ReadCtrl', function($scope,$rootScope,$ionicSlideBoxDelegate,reads) {
	var mySwiperOne = new Swiper('.swiper-container1', {
//			autoplay: 5000,//可选选项，自动滑动
//			initialSlide:2
            onSlideChangeEnd:function(swiper){
            	var nums=swiper.activeIndex;
            	$('ul li').eq(nums).addClass('active').siblings().removeClass('active');
            }
		})
		
		$('ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
			var num1=$(this).index();
			mySwiperOne.slideTo(num1,1000,function(){
				
			})
			
		})
	//加载轮播图
	$scope.bannerImgs=reads.reBanImg();
	console.log($scope.bannerImgs)
	
	//加载 内容nav
	$scope.conNav=reads.reNav();
	console.log($scope.conNav)
	
//	加载最新推荐
	$scope.newRecommends=reads.reRecommend();
	console.log($scope.newRecommends);
	
	//加载底部图片
	$scope.fooImg=reads.reFooter();
	console.log($scope.fooImg)
	
	$rootScope.tzLogin=function(){
		alert(1)
		window.location='#/tab/mine'
	}
	
	
})


//书屋
.controller('bookHomeCtrl', function($scope,bookhomes) {
	
//	内容导航
	$scope.conNavTwo=bookhomes.reNavTwo();
	console.log($scope.conNavTwo)
	
	var app=new Vue({
		el:'#hover',
		data:{
			tips:'随笔“十月出书”作品,73位作者带你重拾青春'
		}
		
	})
	
	
})

//圈子
.controller('CircleCtrl', function($scope,$rootScope) {
	var mySwiperThree = new Swiper('.swiper-container', {
			 onSlideChangeEnd:function(swipers){
            	var nums=swipers.activeIndex;
            	
            	$('ul li').eq(nums).addClass('active').siblings().removeClass('active');
            }
			
		})
  	
		$('ul li').click(function(){
			var num=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			mySwiperThree.slideTo(num,1000,function(){
				
			})
			
		})
	
	$rootScope.tzLogin=function(){
		alert(1)
		window.location='#/tab/mine'
	}
})
//社区
.controller('ChatsCtrl', function($scope,charts) {

  	var mySwiperTwo = new Swiper('.swiper-container2', {
			 onSlideChangeEnd:function(swipers){
            	var numss=swipers.activeIndex;
            	
            	$('ul li').eq(numss).addClass('active').siblings().removeClass('active');
            }
			
		})
  	
		$('ul li').click(function(){
			var num2=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			mySwiperTwo.slideTo(num2,1000,function(){
				
			})
			
		})
//		大图片
		$scope.bigImg=charts.reConimg();
		console.log($scope.bigImg);
		
//		写文
		$scope.articals=charts.reArtical();
		console.log($scope.articals)
		
//		兴趣
		$scope.intrests=charts.reIntrest();
		console.log($scope.intrests)
  
})

//我的
.controller('MineCtrl',function($scope){
	
})

//登录
.controller('LoginCtrl',function($scope){
	
})

//扫一扫
.controller('saoCtrl',function($scope){
	
	
	
})