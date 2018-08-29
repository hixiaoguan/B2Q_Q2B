/**
 * 全角符号与半角符号互相转换 - JavaScript B2Q & Q2B
 * @link    https://github.com/hixiaoguan/B2Q_Q2B
 * @author  Jony Guan
 * @version 1.0.1
 * 演示地址   http://www.xiaoguan.net/posts/show/71
 * 全角空格为12288，半角空格为32 
 * 其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
 * 不处理空格，！到～区间外的字符
 */

/*全角转换为半角函数*/
function Q2B(str){
	var tmp = "";
	for(var i=0;i<str.length;i++){
		if(str.charCodeAt(i) >= 65281 && str.charCodeAt(i) <= 65374){
		// 如果位于全角！到全角～区间内 (65281-65374) 全角空格 12288 与半角符号都均相差65248
			tmp += String.fromCharCode(str.charCodeAt(i)-65248)
		}else if(str.charCodeAt(i) == 12288){
		// 全角空格的值，它没有遵从与ASCII的相对偏移，必须单独处理
			tmp += ' ';
		}else{
		// 不处理全角空格，全角！到全角～区间外的字符
			tmp += str[i];
		}
	}
	return tmp;
}
/*半角转换为全角函数*/
function B2Q(str){
	var tmp = "";
	for(var i=0;i<str.length;i++){
		if(str.charCodeAt(i) >= 33 && str.charCodeAt(i) <= 126){
		// 如果位于半角!到半角~区间内 (33-126) 半角空格 是 32 与半角符号都均相差65248
			tmp += String.fromCharCode(str.charCodeAt(i)+65248)
		}else if(str.charCodeAt(i) == 32){
		// 半角空格的值，它没有遵从与ASCII的相对偏移，必须单独处理
			tmp += ' ';
		}else{
		// 不处理半角空格，半角!到半角~区间外的字符
			tmp += str[i];
		}
	}
	return tmp;
}

