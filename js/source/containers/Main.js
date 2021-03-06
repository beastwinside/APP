import React from 'react';
import Show_box_last from './Show_box_last'
import Mainshow from  './Mainshow';
import Show_box from  './Show_box';

class 	Main extends React.Component{
	render(){
		return <div  id="main">
		<Mainshow />
		<Show_box  topvalue="生鲜水果"  bgcolor="#8dd514" boxid="1"
		itemvalue1="鱼" itemvalue2="牛排" itemvalue3="虾"
		itemvalue4="柠檬"itemvalue5="梨" itemvalue6="葡萄/提子"
		itemvalue7="鸡肉" itemvalue8="鱼雷制品" itemvalue9="牛肉"
		mainitem1_price="18￥" mainitem2_price="39.9￥"mainitem3_price="13.8￥"mainitem4_price="38.8￥"
		mainitem5_price="9.9￥"mainitem6_price="65￥"mainitem7_price="58￥"mainitem8_price="26.8￥"
		toprightvalue1="进口火龙果" toprightvalue2="冰鲜猪肉上新" toprightvalue3="三文鱼刺身"
		toprightvalue4="" toprightvalue5=""
		mainitem1_value="精品牛肉" mainitem2_value="新鲜大虾"mainitem3_value="美味芒果"
		mainitem4_value="可口鳕鱼"mainitem5_value="美味鸡腿"mainitem6_value="冰鲜猪肉"
		mainitem7_value="新鲜水果"mainitem8_value="进口提子"


		/>

		<Show_box  topvalue="进口零食速食" bgcolor="#ff9228" boxid="2"
		itemvalue1="饼干" itemvalue2="糕点" itemvalue3="巧克力" 
		itemvalue4="方便面"itemvalue5="蜜饯果干" itemvalue6="意面" 
		itemvalue7="海产品" itemvalue8="枣类" itemvalue9="薯片膨化"
		mainitem1_price="16.9￥" mainitem2_price="10.8￥"mainitem3_price="39.9￥"mainitem4_price="14.9￥"
		mainitem5_price="16.9￥"mainitem6_price="49.9￥"mainitem7_price="39.0￥"mainitem8_price="15.5￥"
		toprightvalue1="6.5元起" toprightvalue2="张君雅小妹妹3.9元起" toprightvalue3="Loacker/莱家威化饼"
		toprightvalue4="皇冠4.9元起" toprightvalue5=""
		mainitem1_value="台湾进口77松塔" mainitem2_value="choco"mainitem3_value="越南进口菠萝蜜干"
		mainitem4_value="日清风丽芝士威化"mainitem5_value="tipo面包干"mainitem6_value="韩国三养火鸡面"
		mainitem7_value="台湾进口刀松塔"mainitem8_value="德国进口Krooper"
		/>

		<Show_box  topvalue="进口酒饮粮油" bgcolor="#a95ffa" boxid="3"
		itemvalue1="调味汁" itemvalue2="橄榄油" itemvalue3="调味料"
		itemvalue4="调味酱"itemvalue5="烘焙原料" itemvalue6="大米" 
		itemvalue7="谷物冲印" itemvalue8="茶饮料" itemvalue9="水"
		mainitem1_price="19.9￥" mainitem2_price="69.9￥"mainitem3_price="8.8￥"mainitem4_price="119.0￥"
		mainitem5_price="29.9￥"mainitem6_price="129.0￥"mainitem7_price="38.9￥"mainitem8_price="109.0￥"
		toprightvalue1="美味鲜" toprightvalue2="海天" toprightvalue3=""
		toprightvalue4="" toprightvalue5=""
		mainitem1_value="neinz" mainitem2_value="rizone"mainitem3_value="咖喱块"
		mainitem4_value="燕麦片"mainitem5_value="速溶咖啡"mainitem6_value="啤酒"
		mainitem7_value="橄榄油"mainitem8_value="依云矿泉水"
		/>

		<Show_box  topvalue="奶制品" bgcolor="#2abff6"boxid="4"
		itemvalue1="进口酸奶" itemvalue2="进口纯牛奶" itemvalue3="进口含乳饮料" 
		itemvalue4="常温奶"itemvalue5="酸奶" itemvalue6="含乳饮料" 
		itemvalue7="蒙牛" itemvalue8="伊利" itemvalue9="三元"
		mainitem1_price="27.9￥" mainitem2_price="54.9￥"mainitem3_price="74.8￥"mainitem4_price="52.9￥"
		mainitem5_price="79.8￥"mainitem6_price="65.0￥"mainitem7_price="89.0￥"mainitem8_price="49.9￥"
		toprightvalue1="进口橄榄油" toprightvalue2="进口厨房调料" toprightvalue3="进口果汁"
		toprightvalue4="进口啤酒" toprightvalue5="马玉山"
		mainitem1_value="三元纯牛奶" mainitem2_value="蒙牛纯牛奶"mainitem3_value="香蕉牛奶"
		mainitem4_value="现代牧场纯牛奶"mainitem5_value="伊利纯牛奶"mainitem6_value="光明纯牛奶"
		mainitem7_value="安倍纯牛奶"mainitem8_value="安慕希酸奶"
		/>

		<Show_box  topvalue="休闲零食" bgcolor="#67cd7d"boxid="5"
		itemvalue1="芒果/蔬菜干" itemvalue2="猪肉类" itemvalue3="山楂" 
		itemvalue4="腰果"itemvalue5="牛肉类" itemvalue6="海味零食" 
		itemvalue7="瓜子" itemvalue8="鸡鸭" itemvalue9="好吃的坚果"
		mainitem1_price="9.9￥" mainitem2_price="15.9￥"mainitem3_price="8.9￥"mainitem4_price="19.9￥"
		mainitem5_price="13.9￥"mainitem6_price="13.99￥"mainitem7_price="8.8￥"mainitem8_price="12.8￥"
		toprightvalue1="
		奶制品

		安慕希酸奶 " toprightvalue2="三元" toprightvalue3="有机牛奶"
		toprightvalue4="儿童牛奶专区" toprightvalue5="香蕉牛奶"
		mainitem1_value="傻孩子" mainitem2_value="百草味"mainitem3_value="良品铺子"
		mainitem4_value="山楂片"mainitem5_value="芒果干"mainitem6_value="香瓜子"
		mainitem7_value="鱿鱼丝"mainitem8_value="蜀道香兔肉"
		/>

		<Show_box  topvalue="饼干糖巧"bgcolor="#ff7a64"boxid="6"
		itemvalue1="饼干" itemvalue2="糖果" itemvalue3="巧克力" 
		itemvalue4="西式糕点"itemvalue5="薯片/膨化" itemvalue6="传统糕点" 
		itemvalue7="果冻/布丁" itemvalue8="口香糖" itemvalue9="小吃糕点"
		mainitem1_price="7.9￥" mainitem2_price="49.9￥"mainitem3_price="39.8￥"mainitem4_price="13.8￥"
		mainitem5_price="35.8￥"mainitem6_price="26.8￥"mainitem7_price="9.9￥"mainitem8_price="12.5￥"
		toprightvalue1="百草味" toprightvalue2="良品铺子" toprightvalue3="新农哥"
		toprightvalue4="西域良品" toprightvalue5="来伊份"
		mainitem1_value="蒸蛋糕" mainitem2_value="纤麸饼干"mainitem3_value="棉花糖"
		mainitem4_value="惊奇脆片"mainitem5_value="曲奇"mainitem6_value="星球杯"
		mainitem7_value="牛扎糖"mainitem8_value="星球杯"
		/>

		<Show_box  topvalue="酒水饮料" bgcolor="#83cfff"boxid="7"
		itemvalue1="白酒" itemvalue2="保健酒" itemvalue3="啤酒" 
		itemvalue4="酸梅汤"itemvalue5="其它饮料" itemvalue6="茶饮料"
		itemvalue7="水" itemvalue8="果蔬饮料" itemvalue9="农夫果园"
		mainitem1_price="99.0￥" mainitem2_price="139.0￥"mainitem3_price="408.0￥"mainitem4_price="106.9￥"
		mainitem5_price="153.0￥"mainitem6_price="60.8￥"mainitem7_price="56.0￥"mainitem8_price="60.0￥"
		toprightvalue1="大牌直降" toprightvalue2="好丽友不止50%off" toprightvalue3="乐事享不停"
		toprightvalue4="德芙不止50%off" toprightvalue5="趣园1元起"
		mainitem1_value="烧酒" mainitem2_value="茅台酒"mainitem3_value="六个核桃"
		mainitem4_value="红星二锅头"mainitem5_value="古越龙山"mainitem6_value="百城次日达"
		mainitem7_value="高乐高"mainitem8_value="阿华田"
		/>

		<Show_box  topvalue="冲印保健"bgcolor="#c6a868"boxid="8"
		itemvalue1="蜂蜜" itemvalue2="膳食营养剂" itemvalue3="枸杞"
		itemvalue4="阿胶"itemvalue5="维生素" itemvalue6="燕窝" 
		itemvalue7="植物精华" itemvalue8="速溶咖啡" itemvalue9="麦片谷物冲饮"
		mainitem1_price="29.9￥" mainitem2_price="19.9￥"mainitem3_price="12.8￥"mainitem4_price="39.9￥"
		mainitem5_price="99.0￥"mainitem6_price="23.9￥"mainitem7_price="22.9￥"mainitem8_price="16.8￥"
		toprightvalue1="百威" toprightvalue2="农夫山泉有点甜" toprightvalue3="燕京啤酒 清爽感动世界"
		toprightvalue4="健康水生活" toprightvalue5="泸州老窖"
		mainitem1_value="枸杞" mainitem2_value="瑞贝恩"mainitem3_value="即使燕麦片"
		mainitem4_value="雀巢咖啡"mainitem5_value="阿胶糕"mainitem6_value="南方黑芝麻糊"
		mainitem7_value="蜂蜜柚子茶"mainitem8_value="冠生园蜂蜜"
		/>

		<Show_box  topvalue="米面杂粮"bgcolor="#ffbb00"boxid="9"
		itemvalue1="大米" itemvalue2="银耳" itemvalue3="粗粮" 
		itemvalue4="桂圆干"itemvalue5="食用菌" itemvalue6="莲子" 
		itemvalue7="豆类" itemvalue8="百合" itemvalue9="木耳"
		mainitem1_price="21.5￥" mainitem2_price="8.09￥"mainitem3_price="16.8￥"mainitem4_price="15.8￥"
		mainitem5_price="29.9￥"mainitem6_price="55.0￥"mainitem7_price="27.9￥"mainitem8_price="32.8￥"
		toprightvalue1="五芳斋" toprightvalue2="真真老老" toprightvalue3="荣庆和"
		toprightvalue4="米粮调味" toprightvalue5=""
		mainitem1_value="汤达人" mainitem2_value="十月稻田小米"mainitem3_value="十月稻田红枣"
		mainitem4_value="泰金香"mainitem5_value="苏软香"mainitem6_value="金龙鱼"
		mainitem7_value="双汇王中王"mainitem8_value="金唐生姜糖"
		/>

		<Show_box  topvalue="油品调味" bgcolor="#f4935f"boxid="10"
		itemvalue1="调和油" itemvalue2="花生油" itemvalue3="玉米油" 
		itemvalue4="葵花籽油"itemvalue5="橄榄油" itemvalue6="腌制品" 
		itemvalue7="调味料" itemvalue8="辣椒调料" itemvalue9="酱油"
		mainitem1_price="39.9￥" mainitem2_price="69.9￥"mainitem3_price="74.9￥"mainitem4_price="139.9￥"
		mainitem5_price="129.9￥"mainitem6_price="39.9￥"mainitem7_price="8.9￥"mainitem8_price="25.9￥"
		toprightvalue1="花生油聚“惠”" toprightvalue2="开胃菜热卖" toprightvalue3="清凉杂粮季"
		toprightvalue4="" toprightvalue5=""
		mainitem1_value="海天酱油" mainitem2_value="葵花籽油"mainitem3_value="金龙鱼调和油"
		mainitem4_value="葵花油"mainitem5_value="老干妈豆瓣酱"mainitem6_value="龙天"
		mainitem7_value="橄榄油"mainitem8_value="长寿花玉米油"
		/>

		<Show_box  topvalue="个人清洁"bgcolor="#6290f6"boxid="11"
		itemvalue1="洗发水" itemvalue2="护发素" itemvalue3="沐浴露"
		itemvalue4="洗手液"itemvalue5="香皂" itemvalue6="牙膏" 
		itemvalue7="牙刷" itemvalue8="黑人" itemvalue9="舒客"
		mainitem1_price="109.9￥" mainitem2_price="49.9￥"mainitem3_price="49.9￥"mainitem4_price="21.0￥"
		mainitem5_price="56.0￥"mainitem6_price="13.9￥"mainitem7_price="39.9￥"mainitem8_price="16.9￥"
		toprightvalue1="黑人牙膏" toprightvalue2="沙宣" toprightvalue3="潘婷"
		toprightvalue4="" toprightvalue5=""
		mainitem1_value="黑人牙膏" mainitem2_value="清扬去屑洗发液"mainitem3_value="舒克牙膏"
		mainitem4_value="潘婷"mainitem5_value="沙宣护发系列"mainitem6_value="潘婷沐浴露"
		mainitem7_value="小苏打"mainitem8_value="云南白药"
		/>

		<Show_box  topvalue="美容护肤" bgcolor="#ff909f"boxid="12"
		itemvalue1="进口卸妆用品" itemvalue2="止汗香体" itemvalue3="男士控油"
		itemvalue4="防晒"itemvalue5="护手霜" itemvalue6="男士爽肤水"
		itemvalue7="进口面霜" itemvalue8="进口乳液" itemvalue9="男士乳液"
		mainitem1_price="165.0￥" mainitem2_price="31.9￥"mainitem3_price="18.9￥"mainitem4_price="9.9￥"
		mainitem5_price="19.9￥"mainitem6_price="39.0￥"mainitem7_price="30.6￥"mainitem8_price="69.0￥"
		toprightvalue1="百雀羚" toprightvalue2="膜法世家" toprightvalue3="欧莱雅男士"
		toprightvalue4="妮维雅" toprightvalue5="曼秀雷敦"
		mainitem1_value="法国贝德玛" mainitem2_value="NATURE REPUBLIC"mainitem3_value="BeeeY"
		mainitem4_value="大宝"mainitem5_value="相宜本草"mainitem6_value="千纤草"
		mainitem7_value="妮维雅"mainitem8_value="百雀羚"
		/>

		
		<Show_box_last/>
		
		</div>;
	}


}

export default Main;