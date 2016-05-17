/**
 * jQuery :  城市联动插件
 * @author   zhangwang <zhangwang@jingoal.com>
 *			 http://www.cssrain.cn
 * @example  $("#test").ProvinceCity();
 * @params   暂无
 */
$.fn.ProvinceCity = function(options){
	var setting = $.extend({
		language :'zh_CN',	//语言：zh_CN、zh_TW
		showLev : 2 		//显示级联等级1-省份,2-市,3-县
	},options||{});
	
	var citySelect_lang = citySelectLanguage[setting.language];
	var GT = citySelect_lang.GT;
	var GC = citySelect_lang.GC;
	var GP = citySelect_lang.GP;
	var tip = citySelect_lang.tip;
	var _self = this;
	
	//定义3个默认值
	_self.data("province",["--" + tip + "--", ""]);
	_self.data("city1",["--" + tip + "--", ""]);
	_self.data("city2",["--" + tip + "--", ""]);
	//插入3个空的下拉框
	_self.append("<select></select>");
	_self.append("<select></select>");
	_self.append("<select></select>");
	//分别获取3个下拉框
	var $sel1 = _self.find("select").eq(0);
	var $sel2 = _self.find("select").eq(1);
	var $sel3 = _self.find("select").eq(2);
	if(setting.showLev < 2){
		$sel2.hide();
	}
	if(setting.showLev < 3){
		$sel3.hide();
	}
	//默认省级下拉
	if(_self.data("province")){
		$sel1.append("<option value='"+_self.data("province")[1]+"'>"+_self.data("province")[0]+"</option>");
	}
	$.each( GP , function(index,data){
		$sel1.append("<option value='"+data+"'>"+data+"</option>");
	});
	//默认的1级城市下拉
	if(_self.data("city1")){
		$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
	}
	//默认的2级城市下拉
	if(_self.data("city2")){
		$sel3.append("<option value='"+_self.data("city2")[1]+"'>"+_self.data("city2")[0]+"</option>");
	}
	//省级联动 控制
	var index1 = "" ;
	$sel1.change(function(){
		//清空其它2个下拉框
		$sel2[0].options.length=0;
		$sel3[0].options.length=0;
		index1 = this.selectedIndex;
		if(index1==0){	//当选择的为 “请选择” 时
			if(_self.data("city1")){
				$sel2.append("<option value='"+_self.data("city1")[1]+"'>"+_self.data("city1")[0]+"</option>");
			}
			if(_self.data("city2")){
				$sel3.append("<option value='"+_self.data("city2")[1]+"'>"+_self.data("city2")[0]+"</option>");
			}
			if(setting.showLev < 2){
				$sel2.hide();
			}
			if(setting.showLev < 3){
				$sel3.hide();
			}	
		}else{
			$.each( GT[index1-1] , function(index,data){
				$sel2.append("<option value='"+data+"'>"+data+"</option>");
			});
			$.each( GC[index1-1][0] , function(index,data){
				$sel3.append("<option value='"+data+"'>"+data+"</option>");
			})
			if(setting.showLev < 2){
				$sel2.hide();
			}
			if(setting.showLev < 3){
				$sel3.hide();
			}	
		}
	}).change();
	//1级城市联动 控制
	var index2 = "" ;
	$sel2.change(function(){
		$sel3[0].options.length=0;
		index2 = this.selectedIndex;
		$.each( GC[index1-1][index2] , function(index,data){
			$sel3.append("<option value='"+data+"'>"+data+"</option>");
		});
		if(setting.showLev < 3){
			$sel3.hide();
		}	
	});
	return _self;
};