$(function(){
	$('.right-content').load('./shouye.html');
	$('.left li').click(function(){
		var title=$(this).text().trim();
		switch(title){
			case '首页':$('.right-content').load('./shouye.html');
			break;
			case '栏目管理':$('.right-content').load('./lanmuguanli.html');
			break;
			case '资讯管理':$('.right-content').load('./zixunguanli.html');
			break;
			case '用户管理':$('.right-content').load('./yonghuguanli.html');
			break;
			default:
				break;
		}
	});

    //右尖括号
    $('.left ul li:first-child').animate({
    		marginRight:'-8px',
    		background: '#eee'
    	})
    $('.left ul li').click(function(){
    	var i=$(this).index();
    	$('.left ul li').eq(i).animate({
    		marginRight:'-8px',
    		background: '#eee'
    	},300).siblings().animate({
    		marginRight:'0px',
    		background: '#fff'
    	},300);	
    })

    //全选按钮
    $('.right-content').on('mousedown','.checkAll',function(){
    	$('table :checkbox').each(function(){
    		this.checked = !this.checked;
    	})
    })


});
