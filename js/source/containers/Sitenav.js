import React from 'react';
import Sitenav_ul from '../components/Sitenav_ul';


class Sitenav extends React.Component{
	render(){

		return <div id="sitenav" name="top">
		<p> <img src="./source/image/sitenav_logo/主页.png" /><a>天猫首页 </a>喵，欢迎来天猫 <a>请登录</a>
		<a> 免费注册</a></p>
		<Sitenav_ul/>
		

		
		</div>
	}



}


export default Sitenav;