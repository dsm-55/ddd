angular.module('starter.services', [])


//悦读
.factory('reads',function(){

//	轮播图数据
	var bannerImg=[
		{src:'img/5787000399067895131.jpg',id:0},
		{src:'img/2833209320578595411.jpg',id:1},
		{src:'img/6501802685762242681.jpg',id:2}
	]
//	内容导航
	var navTitle=[
		[
			{src:'img/book_books_48px_558952_easyicon.net.ico',text:'名家'},
			{src:'img/file_folder_48px_1165476_easyicon.net.ico',text:'情感'},
			{src:'img/heart_48px_1206691_easyicon.net.ico',text:'心灵'},
			{src:'img/clock_48px_1187023_easyicon.net.ico',text:'生活'}	
		],		
		[
			{src:'img/coffee_cup_food_48px_3832_easyicon.net.ico',text:'心情'},
			{src:'img/good_48px_1143821_easyicon.net.ico',text:'励志'},
			{src:'img/people_48px_1165505_easyicon.net.ico',text:'美句'},
			{src:'img/thermometer_48px_1206563_easyicon.net.ico',text:'24h热点'}
		]
		
	]
//	最新推荐
	var newRecommend=[
		{src:'img/1443495616023400910.jpg',des:'初秋的那个凉',time:'1小时前',seen:'332'},
		{src:'img/2527654966322561621.jpg',des:'吃苦的年纪,别选择安逸',time:'5小时前',seen:'553'},
		{src:'img/484105669457820331.jpg',des:'后来,故乡只有寒暑,再无春秋',time:'15小时前',seen:'432'},
		{src:'img/484105669457820332.jpg',des:'别让舒适圈,温柔地杀死你',time:'21小时前',seen:'654'},
		{src:'img/484105669457820333.jpg',des:'想太多会毁了你',time:'1天前',seen:'734'},
		{src:'img/484105669457820334.jpg',des:'最艰难的日子,也要好好过',time:'2天前',seen:'342'},
		{src:'img/484105669457820335.jpg',des:'你要逼自己优秀,然后骄傲地生活',time:'3天前',seen:'847'},
	]
	
	//底部图片
	var footerImg={
		src:'img/144349561602340091.jpg'
	}
	
	
//	返回数据
	return {
		reTabName:function(){
			return tabName
		},
		reBanImg:function(){
			return bannerImg
		},
		reNav:function(){
			return navTitle
		},
		reRecommend:function(){
			return newRecommend
		},
		reFooter:function(){
			return footerImg
		}
		
	}
})

//社区
.factory('charts',function(){
//	大图片
	var conImg={
		src:'img/2371957973560793191.jpg'
	}
	
//  写文
	var artical=[
		[
			{src:'img/2371957973560793192.jpg',text:'散文'},
			{src:'img/2371957973560793193.jpg',text:'随笔'},
			{src:'img/2371957973560793194.jpg',text:'诗歌'}		
		],		
		[
			{src:'img/8163278670687650442.jpg',text:'小说'},
			{src:'img/2371957973560793196.jpg',text:'杂文'},
			{src:'img/2371957973560793197.jpg',text:'其他'}			
		]
	]
	
	
//	兴趣
	var intrest=[
		[
			{src:'img/816327867068765044.jpg',text:'旅行'},
			{src:'img/8163278670687650441.jpg',text:'摄影'},
			{src:'img/1727671139563345142.jpg',text:'读书'}		
		],		
		[
			{src:'img/1727671139563345143.jpg',text:'电影'},
			{src:'img/1727671139563345144.jpg',text:'动漫'},
			{src:'img/1727671139563345145.jpg',text:'插画'}			
		],
		[
			{src:'img/1727671139563345146.jpg',text:'游戏'},
			{src:'img/1727671139563345147.jpg',text:'English'},
			{src:'img/1727671139563345148.jpg',text:'心里学'}
		],		
		[
			{src:'img/17276711395633451400.jpg',text:'星座'},
			{src:'img/1727671139563345140.jpg',text:'美食'},
			{src:'img/1727671139563345149.jpg',text:'敬请期待'}
		]
		
	]
	
	
	return {
		reConimg:function(){
			return conImg
		},
		reIntrest:function(){
			return intrest
		},
		reArtical:function(){
			return artical
		}
		
	}
	
})

//书屋
.factory('bookhomes',function(){
	var navTitleTwo=[
		[
			{src:'img/3452780265176377742.jpg',text:'畅销'},
			{src:'img/3452780265176377743.jpg',text:'文艺'},
			{src:'img/3452780265176377744.jpg',text:'青春'},
			{src:'img/3452780265176377745.jpg',text:'励志'}	
		],		
		[
			{src:'img/3452780265176377746.jpg',text:'小说'},
			{src:'img/3452780265176377747.jpg',text:'生活'},
			{src:'img/3452780265176377748.jpg',text:'知识'},
			{src:'img/3452780265176377749.jpg',text:'其他'}
		]
		
	]
	
	return {
		reNavTwo:function(){
			return navTitleTwo
		}
		
		
	}
	
})
