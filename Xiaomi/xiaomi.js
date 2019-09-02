$(function(){
	$('.second-3-bot-jiadian .second-3-bottom:first').toggle(true).siblings().toggle(false);
	$('.second-3-bot-zhineng .second-3-bottom:first').toggle(true).siblings().toggle(false);
	$('.second-3-bot-dapei .second-3-bottom:first').toggle(true).siblings().toggle(false);
	$('.second-3-bot-peijian .second-3-bottom:first').toggle(true).siblings().toggle(false);
	$('.second-3-bot-zhoubian .second-3-bottom:first').toggle(true).siblings().toggle(false);
	var index=0;
   $('.second-3-top div ul li').mouseover(function(){
   	// console.log($('.second-3-top li').css('color'));
      index=$(this).index();
      console.log(index);
      moveJiadian();
   });
   function moveJiadian(){
      $('.second-3-bot-jiadian .second-3-bottom').eq(index).toggle(true).
      siblings().toggle(false);
   }
   $('.second-3-top div ul li').mouseover(function(){
      // console.log($('.second-3-top li').css('color'));
      index=$(this).index();
      console.log(index);
      moveZhineng();
   });
   function moveZhineng(){
      $('.second-3-bot-zhineng .second-3-bottom').eq(index).toggle(true).
      siblings().toggle(false);
   }
   $('.second-3-top div ul li').mouseover(function(){
      // console.log($('.second-3-top li').css('color'));
      index=$(this).index();
      console.log(index);
      moveDapei();
   });
   function moveDapei(){
      $('.second-3-bot-dapei .second-3-bottom').eq(index).toggle(true).
      siblings().toggle(false);
   }
   $('.second-3-top div ul li').mouseover(function(){
      // console.log($('.second-3-top li').css('color'));
      index=$(this).index();
      console.log(index);
      movePeijian();
   });
   function movePeijian(){
      $('.second-3-bot-peijian .second-3-bottom').eq(index).toggle(true).
      siblings().toggle(false);
   }
   $('.second-3-top div ul li').mouseover(function(){
      // console.log($('.second-3-top li').css('color'));
      index=$(this).index();
      console.log(index);
      moveZhoubian();
   });
   function moveZhoubian(){
      $('.second-3-bot-zhoubian .second-3-bottom').eq(index).toggle(true).
      siblings().toggle(false);
   }
   // $('.xiala-1').toggle(false);
   // $('.first-2-li').mouseover(function(){
   // 	  i=$(this).index()-1;
   // 	  xiala();
   // });
   // $('.first-2-li,.xiala').mouseout(function(){
   // 	  $('.xiala-1').toggle(false);
   // });
   // function xiala(){
   // 	  $('.xiala-1').eq(i).toggle(true).siblings().toggle(false);
   // }

});