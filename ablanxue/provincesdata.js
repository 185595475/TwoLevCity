var citySelectLanguage = {
	zh_CN:{
		tip: '请选择',
		/********** 省级数据 **********/
		GP : ['安徽','澳门','北京','福建','甘肃','广东','广西','贵州','海南','河北','河南','黑龙江','湖北','湖南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','台湾','天津','西藏','香港','新疆','云南','浙江','重庆','海外'],
		/********** 市级数据 **********/
		GT : [
		['合肥','安庆','蚌埠','亳州','巢湖','池州','滁州','阜阳','淮北','淮南','黄山','六安','马鞍山','宿州','铜陵','芜湖','宣城'],
		['澳门'],
		['昌平','朝阳','崇文','大兴','东城','房山','丰台','海淀','怀柔','门头沟','密云','平谷','石景山','顺义','通州','西城','宣武','延庆'],
		['福州','龙岩','南平','宁德','莆田','泉州','三明','厦门','漳州'],
		['兰州','白银','定西','甘南','嘉峪关','金昌','酒泉','临夏','陇南','平凉','庆阳','天水','武威','张掖'],
		['广州','潮州','东莞','佛山','河源','惠州','江门','揭阳','茂名','梅州','清远','汕头','汕尾','韶关','深圳','阳江','云浮','湛江','肇庆','中山','珠海'],
		['桂林','百色','北海','崇左','防城港','贵港','河池','贺州','来宾','柳州','南宁','钦州','梧州','玉林'],
		['贵阳','安顺','毕节','六盘水','黔东南','黔南','黔西南','铜仁','遵义'],
		['海口','白沙','保亭','昌江','澄迈','儋州','定安','东方','乐东','临高','陵水','南沙群岛','琼海','琼中','三亚','屯昌','万宁','文昌','五指山','西沙群岛','中沙群岛'],
		['石家庄','保定','沧州','承德','邯郸','衡水','廊坊','秦皇岛','唐山','邢台','张家口'],
		['郑州','安阳','鹤壁','焦作','开封','洛阳','漯河','南阳','平顶山','濮阳','三门峡','商丘','新乡','信阳','许昌','周口','驻马店'],
		['哈尔滨','大庆','大兴安岭','鹤岗','黑河','鸡西','佳木斯','牡丹江','七台河','齐齐哈尔','双鸭山','绥化','伊春'],
		['武汉','鄂州','恩施','黄冈','黄石','荆门','荆州','潜江','神农架','十堰','随州','天门','仙桃','咸宁','襄樊','孝感','宜昌'],
		['长沙','常德','郴州','衡阳','怀化','娄底','邵阳','湘潭','湘西','益阳','永州','岳阳','张家界','株洲'],
		['长春','白城','白山','吉林','辽源','四平','松原','通化','延边'],
		['南京','常州','淮安','连云港','南通','苏州','宿迁','泰州','无锡','徐州','盐城','扬州','镇江'],
		['南昌','抚州','赣州','吉安','景德镇','九江','萍乡','上饶','新余','宜春','鹰潭'],
		['沈阳','鞍山','本溪','朝阳','大连','丹东','抚顺','阜新','葫芦岛','锦州','辽阳','盘锦','铁岭','营口'],
		['呼和浩特','阿拉善','巴彦淖尔','包头','赤峰','鄂尔多斯','呼伦贝尔','通辽','乌海','乌兰察布','锡林郭勒','兴安'],
		['银川','固原','石嘴山','吴忠','中卫'],
		['西宁','果洛','海北','海东','海南','海西','黄南','玉树'],
		['济南','滨州','德州','东营','菏泽','济宁','莱芜','聊城','临沂','青岛','日照','泰安','威海','潍坊','烟台','枣庄','淄博'],
		['太原','长治','大同','晋城','晋中','临汾','吕梁','朔州','忻州','阳泉','运城'],
		['西安','安康','宝鸡','汉中','商洛','铜川','渭南','咸阳','延安','榆林'],
		['宝山','长宁','崇明','奉贤','虹口','黄浦','嘉定','金山','静安','卢湾','闵行','南汇','浦东','普陀','青浦','松江','徐汇','杨浦','闸北'],
		['成都','阿坝','巴中','达州','德阳','甘孜','广安','广元','乐山','凉山','泸州','眉山','绵阳','内江','南充','攀枝花','遂宁','雅安','宜宾','资阳','自贡'],
		['台北','阿莲','安定','安平','八德','八里','白河','白沙','板桥','褒忠','宝山','卑南','北斗','北港','北门','北埔','北投','补子','布袋','草屯','长宾','长治','潮州','车城','成功','城中区','池上','春日','刺桐','高雄','花莲','基隆','嘉义','苗栗','南投','屏东','台东','台南','台中','桃园','新竹','宜兰','彰化'],
		['宝坻','北辰','大港','东丽','汉沽','和平','河北','河东','河西','红桥','蓟县','津南','静海','南开','宁河','塘沽','武清','西青'],
		['拉萨','阿里','昌都','林芝','那曲','日喀则','山南'],
		['北区','大埔区','东区','观塘区','黄大仙区','九龙','葵青区','离岛区','南区','荃湾区','沙田区','深水埗区','屯门区','湾仔区','西贡区','香港','新界','油尖旺区','元朗区','中西区'],
		['乌鲁木齐','阿克苏','阿拉尔','阿勒泰','巴音郭楞','博尔塔拉','昌吉','哈密','和田','喀什','克拉玛依','克孜勒苏柯尔克孜','石河子','塔城','图木舒克','吐鲁番','五家渠','伊犁'],
		['昆明','保山','楚雄','大理','德宏','迪庆','红河','丽江','临沧','怒江','曲靖','思茅','文山','西双版纳','玉溪','昭通'],
		['杭州','湖州','嘉兴','金华','丽水','宁波','衢州','绍兴','台州','温州','舟山'],
		['巴南','北碚','璧山','长寿','城口','大渡口','大足','垫江','丰都','奉节','涪陵','合川','江北','江津','九龙坡','开县','梁平','南岸','南川','彭水','綦江','黔江','荣昌','沙坪坝','石柱','双桥','铜梁','潼南','万盛','万州','巫山','巫溪','武隆','秀山','永川','酉阳','渝北','渝中','云阳','忠县'],
		['阿根廷','埃及','爱尔兰','奥地利','奥克兰','澳大利亚','巴基斯坦','巴西','保加利亚','比利时','冰岛','朝鲜','丹麦','德国','俄罗斯','法国','菲律宾','芬兰','哥伦比亚','韩国','荷兰','加拿大','柬埔寨','喀麦隆','老挝','卢森堡','罗马尼亚','马达加斯加','马来西亚','毛里求斯','美国','秘鲁','缅甸','墨西哥','南非','尼泊尔','挪威','葡萄牙','其它地区','日本','瑞典','瑞士','斯里兰卡','泰国','土耳其','委内瑞拉','文莱','乌克兰','西班牙','希腊','新加坡','新西兰','匈牙利','以色列','意大利','印度','印度尼西亚','英国','越南','智利']
		],
		/********** 市二级数据 **********/
		GC :
		[
		[
		['长丰','肥东','肥西','合肥市'],
		['安庆市','枞阳','怀宁','潜山','宿松','太湖','桐城','望江','岳西'],
		['蚌埠市','固镇','怀远','五河'],
		['亳州市','利辛','蒙城','涡阳'],
		['巢湖市','含山','和县','庐江','无为'],
		['池州市','东至','青阳','石台'],
		['滁州市','定远','凤阳','来安','明光','全椒','天长'],
		['阜南','阜阳市','界首','临泉','太和','颍上'],
		['淮北市','濉溪'],
		['凤台','淮南市'],
		['黄山市','祁门','歙县','休宁','黟县'],
		['霍邱','霍山','金寨','六安市','寿县','舒城'],
		['当涂','马鞍山市'],
		['砀山','灵璧','泗县','宿州市','萧县'],
		['铜陵市','铜陵县'],
		['繁昌','南陵','芜湖市','芜湖县'],
		['广德','绩溪','泾县','旌德','郎溪','宁国','宣城市']
		],
		[
		['澳门']
		],
		[
		['昌平'],
		['朝阳'],
		['崇文'],
		['大兴'],
		['东城'],
		['房山'],
		['丰台'],
		['海淀'],
		['怀柔'],
		['门头沟'],
		['密云'],
		['平谷'],
		['石景山'],
		['顺义'],
		['通州'],
		['西城'],
		['宣武'],
		['延庆']
		],
		[
		['长乐','福清','福州市','连江','罗源','闽侯','闽清','平潭','永泰'],
		['长汀','连城','龙岩市','上杭','武平','永定','漳平'],
		['光泽','建瓯','建阳','南平市','浦城','邵武','顺昌','松溪','武夷山','政和'],
		['福安','福鼎','古田','宁德市','屏南','寿宁','霞浦','柘荣','周宁'],
		['莆田市','仙游'],
		['安溪','德化','惠安','金门','晋江','南安','泉州市','石狮','永春'],
		['大田','建宁','将乐','明溪','宁化','清流','三明市','沙县','泰宁','永安','尤溪'],
		['厦门市'],
		['长泰','东山','华安','龙海','南靖','平和','云霄','漳浦','漳州市','诏安']
		],
		[
		['皋兰','兰州市','永登','榆中'],
		['白银市','会宁','景泰','靖远'],
		['定西市','临洮','陇西','岷县','通渭','渭源','漳县'],
		['迭部','合作','临潭','碌曲','玛曲','夏河','舟曲','卓尼'],
		['嘉峪关市'],
		['金昌市','永昌'],
		['阿克塞','敦煌','瓜州','金塔','酒泉市','肃北','玉门'],
		['东乡族','广河','和政','积石山','康乐','临夏市','临夏县','永靖'],
		['成县','宕昌','徽县','康县','礼县','两当','陇南市','文县','西和'],
		['崇信','华亭','泾川','静宁','灵台','平凉市','庄浪'],
		['合水','华池','环县','宁县','庆城','庆阳市','镇原','正宁'],
		['甘谷','秦安','清水','天水市','武山','张家川'],
		['古浪','民勤','天祝','武威市'],
		['高台','临泽','民乐','山丹','肃南','张掖市']
		],
		[
		['从化','广州市','增城'],
		['潮安','潮州市','饶平'],
		['东莞'],
		['佛山市'],
		['东源','和平','河源市','连平','龙川','紫金'],
		['博罗','惠东','惠州市','龙门'],
		['恩平','鹤山','江门市','开平','台山'],
		['惠来','揭东','揭西','揭阳市','普宁'],
		['电白','高州','化州','茂名市','信宜'],
		['大埔','丰顺','蕉岭','梅县','梅州市','平远','五华','兴宁'],
		['佛冈','连南','连山','连州','清新','清远市','阳山','英德'],
		['南澳','汕头市'],
		['海丰','陆丰','陆河','汕尾市'],
		['乐昌','南雄','仁化','乳源','韶关市','始兴','翁源','新丰'],
		['深圳市'],
		['阳春','阳东','阳江市','阳西'],
		['罗定','新兴','郁南','云安','云浮市'],
		['雷州','廉江','遂溪','吴川','徐闻','湛江市'],
		['德庆','封开','高要','广宁','怀集','四会','肇庆市'],
		['中山市'],
		['珠海市']
		],
		[
		['恭城','灌阳','桂林市','荔蒲','临桂','灵川','龙胜','平乐','全州','兴安','阳朔','永福','资源'],
		['百色市','德保','靖西','乐业','凌云','隆林','那坡','平果','田东','田林','田阳','西林'],
		['北海市','合浦'],
		['崇左市','大新','扶绥','龙州','宁明','凭祥','天等'],
		['东兴','防城港市','上思'],
		['贵港市','桂平','平南'],
		['巴马','大化','东兰','都安','凤山','河池市','环江','罗城','南丹','天峨','宜州'],
		['富川','贺州市','昭平','钟山'],
		['合山','金秀','来宾市','武宣','象州','忻城'],
		['柳城','柳江','柳州市','鹿寨','融安','融水','三江'],
		['宾阳','横县','隆安','马山','南宁市','上林','武鸣'],
		['灵山','浦北','钦州市'],
		['苍梧','岑溪','蒙山','藤县','梧州市'],
		['北流','博白','陆川','容县','兴业','玉林市']
		],
		[
		['贵阳市','开阳','清镇','息烽','修文'],
		['安顺市','关岭','平坝','普定','镇宁','紫云'],
		['毕节市','大方','赫章','金沙','纳雍','黔西','威宁','织金'],
		['六盘水市','六枝','盘县','水城'],
		['岑巩','从江','丹寨','黄平','剑河','锦屏','凯里','雷山','黎平','麻江','榕江','三穗','施秉','台江','天柱','镇远'],
		['长顺','都匀','独山','福泉','贵定','惠水','荔波','龙里','罗甸','平塘','三都','瓮安'],
		['安龙','册亨','普安','晴隆','望谟','兴仁','兴义','贞丰'],
		['德江','江口','石阡','思南','松桃','铜仁市','万山','沿河','印江','玉屏'],
		['赤水','道真','凤冈','湄潭','仁怀','绥阳','桐梓','务川','习水','余庆','正安','遵义市','遵义县']
		],
		[
		['海口'],
		['白沙'],
		['保亭'],
		['昌江'],
		['澄迈'],
		['儋州'],
		['定安'],
		['东方'],
		['乐东'],
		['临高'],
		['陵水'],
		['南沙群岛'],
		['琼海'],
		['琼中'],
		['三亚'],
		['屯昌'],
		['万宁'],
		['文昌'],
		['五指山'],
		['西沙群岛'],
		['中沙群岛']
		],
		[
		['藁城','晋州','井陉','灵寿','鹿泉','栾城','平山','深泽','石家庄市','无极','辛集','新乐','行唐','元氏','赞皇','赵县','正定','高邑'],
		['安国','安新','保定市','博野','定兴','定州','阜平','高碑店','高阳','涞水','涞源','蠡县','满城','清苑','曲阳','容城','顺平','唐县','望都','雄县','徐水','易县','涿州'],
		['泊头','沧县','沧州市','东光','海兴','河间','黄骅','孟村','南皮','青县','任丘','肃宁','吴桥','献县','盐山'],
		['承德市','承德县','丰宁','宽城','隆化','滦平','平泉','围场','兴隆'],
		['成安','磁县','大名','肥乡','馆陶','广平','邯郸市','邯郸县','鸡泽','临漳','邱县','曲周','涉县','魏县','武安','永年'],
		['安平','阜城','故城','衡水市','冀州','景县','饶阳','深州','武强','武邑','枣强'],
		['霸州','大厂','大城','固安','廊坊市','三河','文安','香河','永清'],
		['昌黎','抚宁','卢龙','秦皇岛市','青龙'],
		['乐亭','滦南','滦县','迁安','迁西','唐海','唐山市','玉田','遵化'],
		['柏乡','广宗','巨鹿','临城','临西','隆尧','内丘','南宫','南和','宁晋','平乡','清河','任县','沙河','威县','新河','邢台市','邢台县'],
		['赤城','崇礼','沽源','怀安','怀来','康保','尚义','万全','蔚县','宣化','阳原','张北','张家口市','涿鹿']
		],
		[
		['登封','巩义','新密','新郑','荥阳','郑州市','中牟'],
		['安阳市','安阳县','滑县','林州','内黄','汤阴'],
		['鹤壁市','浚县','淇县'],
		['博爱','济源','焦作市','孟州','沁阳','温县','武陟','修武'],
		['开封市','开封县','兰考','杞县','通许','尉氏'],
		['栾川','洛宁','洛阳市','孟津','汝阳','嵩县','新安','偃师','伊川','宜阳'],
		['临颍','漯河市','舞阳'],
		['邓州','方城','内乡','南阳市','南召','社旗','唐河','桐柏','西峡','淅川','新野','镇平'],
		['宝丰','郏县','鲁山','平顶山市','汝州','舞钢','叶县'],
		['范县','南乐','濮阳市','濮阳县','清丰','台前'],
		['灵宝','卢氏','三门峡市','陕县','渑池','义马'],
		['民权','宁陵','商丘市','睢县','夏邑','永城','虞城','柘城'],
		['长垣','封丘','辉县','获嘉','卫辉','新乡市','新乡县','延津','原阳'],
		['固始','光山','淮滨','潢川','罗山','商城','息县','新县','信阳市'],
		['长葛','襄城','许昌市','许昌县','鄢陵','禹州'],
		['郸城','扶沟','淮阳','鹿邑','商水','沈丘','太康','西华','项城','周口市'],
		['泌阳','平舆','确山','汝南','上蔡','遂平','西平','新蔡','正阳','驻马店市']
		],
		[
		['巴彦','宾县','方正','哈尔滨市','木兰','尚志','双城','通河','五常','延寿','依兰'],
		['大庆市','杜尔伯特','林甸','肇源','肇州'],
		['呼玛','呼中','加格达奇','漠河','松岭','塔河','新林'],
		['鹤岗市','萝北','绥滨'],
		['北安','黑河市','嫩江','孙吴','五大连池','逊克'],
		['虎林','鸡东','鸡西市','密山'],
		['抚远','富锦','桦川','桦南','佳木斯市','汤原','同江'],
		['东宁','海林','林口','牡丹江市','穆棱','宁安','绥芬河'],
		['勃利','七台河'],
		['拜泉','富裕','甘南','克东','克山','龙江','讷河','齐齐哈尔市','泰来','依安'],
		['宝清','集贤','饶河','双鸭山市','友谊'],
		['安达','海伦','兰西','明水','青冈','庆安','绥化市','绥棱','望奎','肇东'],
		['嘉荫','铁力','伊春市']
		],
		[
		['武汉市'],
		['鄂州市'],
		['巴东','恩施市','鹤峰','建始','来凤','利川','咸丰','宣恩'],
		['红安','黄冈市','黄梅','罗田','麻城','蕲春','团风','武穴','浠水','英山'],
		['大冶','黄石','阳新'],
		['京山','荆门市','沙洋','钟祥'],
		['公安','洪湖','监利','江陵','荆州市','石首','松滋'],
		['潜江'],
		['神农架'],
		['丹江口','房县','十堰市','郧西','郧县','竹山','竹溪'],
		['广水','随州市'],
		['天门市'],
		['仙桃市'],
		['赤壁','崇阳','嘉鱼','通城','通山','咸宁市'],
		['保康','谷城','老河口','南漳','襄樊市','宜城','枣阳'],
		['安陆','大悟','汉川','孝昌','孝感市','应城','云梦'],
		['长阳','当阳','五峰','兴山','宜昌市','宜都','远安','枝江','秭归']
		],
		[
		['长沙市','长沙县','浏阳','宁乡','望城'],
		['安乡','常德市','汉寿','津市','澧县','临澧','石门','桃源'],
		['安仁','郴州市','桂东','桂阳','嘉禾','临武','汝城','宜章','永兴','资兴'],
		['常宁','衡东','衡南','衡山','衡阳市','衡阳县','耒阳','祁东'],
		['辰溪','洪江','怀化市','会同','靖州','麻阳','通道','新晃','溆浦','沅陵','芷江','中方'],
		['冷水江','涟源','娄底市','双峰','新化'],
		['城步','洞口','隆回','邵东','邵阳市','邵阳县','绥宁','武冈','新宁','新邵'],
		['韶山','湘潭市','湘潭县','湘乡'],
		['保靖','凤凰','古丈','花垣','吉首','龙山','泸溪','永顺'],
		['安化','南县','桃江','益阳市','沅江'],
		['道县','东安','江华','江永','蓝山','宁远','祁阳','双牌','新田','永州市'],
		['华容','临湘','汨罗','平江','湘阴','岳阳市','岳阳县'],
		['慈利','桑植','张家界市'],
		['茶陵','醴陵','炎陵','攸县','株洲市','株洲县']
		],
		[
		['长春市','德惠','九台','农安','榆树'],
		['白城市','大安','洮南','通榆','镇赉'],
		['白山','长白','抚松','靖宇','临江'],
		['桦甸','吉林市','蛟河','磐石','舒兰','永吉'],
		['东丰','东辽','辽源市'],
		['公主岭','梨树','双辽','四平市','伊通'],
		['长岭','扶余','前郭尔罗斯','乾安','松原市'],
		['辉南','集安','柳河','梅河口','通化市','通化县'],
		['延吉市','敦化','和龙','珲春','龙井','图们','汪清','安图']
		],
		[
		['高淳','溧水','南京市'],
		['常州市','金坛','溧阳'],
		['洪泽','淮安市','金湖','涟水','盱眙'],
		['东海','赣榆','灌南','灌云','连云港市'],
		['海安','海门','南通市','启东','如东','如皋','通州'],
		['常熟','昆山','苏州市','太仓','吴江','张家港'],
		['沭阳','泗洪','泗阳','宿迁市'],
		['姜堰','靖江','泰兴','泰州市','兴化'],
		['江阴','无锡市','宜兴'],
		['丰县','沛县','邳州','睢宁','铜山','新沂','徐州市'],
		['滨海','大丰','东台','阜宁','建湖','射阳','响水','盐城市'],
		['宝应','高邮','江都','扬州市','仪征'],
		['丹阳','句容','扬中','镇江市']
		],
		[
		['安义','进贤','南昌市','南昌县','新建'],
		['崇仁','东乡','抚州市','广昌','金溪','乐安','黎川','南城','南丰','宜黄','资溪'],
		['安远','崇义','大余','定南','赣县','赣州市','会昌','龙南','南康','宁都','全南','瑞金','上犹','石城','信丰','兴国','寻乌','于都'],
		['安福','吉安市','吉安县','吉水','井冈山','遂川','泰和','万安','峡江','新干','永丰','永新'],
		['浮梁','景德镇市','乐平'],
		['德安','都昌','湖口','九江市','九江县','彭泽','瑞昌','武宁','星子','修水','永修'],
		['莲花','芦溪','萍乡市','上栗'],
		['德兴','广丰','横峰','鄱阳','铅山','上饶市','上饶县','万年','婺源','弋阳','余干','玉山'],
		['分宜','新余市'],
		['丰城','奉新','高安','靖安','上高','铜鼓','万载','宜春市','宜丰','樟树'],
		['贵溪','鹰潭市','余江']
		],
		[
		['法库','康平','辽中','沈阳市','新民'],
		['鞍山市','海城','台安','岫岩'],
		['本溪市','本溪县','桓仁'],
		['北票','朝阳市','朝阳县','建平','喀喇沁左翼','凌源'],
		['长海','大连市','普兰店','瓦房店','庄河'],
		['丹东市','东港','凤城','宽甸'],
		['抚顺市','抚顺县','清原','新宾'],
		['阜新市','阜新县','彰武'],
		['葫芦岛市','建昌','绥中','兴城'],
		['北镇','黑山','锦州市','凌海','义县'],
		['灯塔','辽阳市','辽阳县'],
		['大洼','盘锦市','盘山'],
		['昌图','调兵山','开原','铁岭市','铁岭县','西丰'],
		['大石桥','盖州','营口市']
		],
		[
		['和林格尔','呼和浩特市','清水河','土默特左旗','托克托','武川'],
		['阿拉善右旗','阿拉善左旗','额济纳旗'],
		['巴彦淖尔市','磴口','杭锦后旗','乌拉特后旗','乌拉特前旗','乌拉特中旗','五原'],
		['包头市','达尔罕茂明安联合旗','固阳','土默特右旗'],
		['阿鲁科尔沁旗','敖汉旗','巴林右旗','巴林左旗','赤峰市','喀喇沁旗','克什克腾旗','林西','宁城','翁牛特旗'],
		['达拉特旗','鄂尔多斯市','鄂托克旗','鄂托克前旗','杭锦旗','乌审旗','伊金霍洛旗','准格尔旗'],
		['阿荣旗','陈巴尔虎旗','额尔古纳','鄂伦春旗','鄂温克族旗','根河','呼伦贝尔市','满洲里','莫力达瓦旗','新巴尔虎右旗','新巴尔虎左旗','牙克石','扎兰屯'],
		['霍林郭勒','开鲁','科尔沁左翼后旗','科尔沁左翼中旗','库伦旗','奈曼旗','通辽市','扎鲁特旗'],
		['乌海'],
		['察哈尔右翼后旗','察哈尔右翼前旗','察哈尔右翼中旗','丰镇','化德','凉城','商都','四子王旗','乌兰察布市','兴和','卓资'],
		['阿巴嘎旗','东乌珠穆沁旗','多伦','二连浩特','苏尼特右旗','苏尼特左旗','太仆寺旗','西乌珠穆沁旗','锡林郭勒市','镶黄旗','正蓝旗','正镶白旗'],
		['阿尔山','科尔沁右翼前旗','科尔沁右翼中旗','突泉','乌兰浩特','扎赉特旗']
		],
		[
		['贺兰','灵武','银川市','永宁'],
		['固原市','泾源','隆德','彭阳','西吉'],
		['平罗','石嘴山市'],
		['青铜峡','同心','吴忠市','盐池'],
		['海原','中宁','中卫市']
		],
		[
		['大通','湟源','湟中','西宁市'],
		['班玛','达日','甘德','久治','玛多','玛沁'],
		['刚察','海晏','门源','祁连'],
		['互助','化隆','乐都','民和','平安','循化'],
		['共和','贵德','贵南','同德','兴海'],
		['大柴旦','德令哈','都兰','格尔木','冷湖','茫崖','天峻','乌兰'],
		['河南','尖扎','同仁','泽库'],
		['称多','囊谦','曲麻莱','玉树','杂多','治多']
		],
		[
		['济南市','济阳','平阴','商河','章丘'],
		['滨州市','博兴','惠民','无棣','阳信','沾化','邹平'],
		['德州市','乐陵','临邑','陵县','宁津','平原','齐河','庆云','武城','夏津','禹城'],
		['东营市','广饶','垦利','利津'],
		['曹县','成武','单县','定陶','东明','菏泽市','巨野','鄄城','郓城'],
		['济宁市','嘉祥','金乡','梁山','曲阜','泗水','微山','汶上','兖州','鱼台','邹城'],
		['莱芜市'],
		['茌平','东阿','高唐','冠县','聊城市','临清','莘县','阳谷'],
		['苍山','费县','莒南','临沭','临沂市','蒙阴','平邑','郯城','沂南','沂水'],
		['即墨','胶南','胶州','莱西','平度','青岛市'],
		['莒县','日照市','五莲'],
		['东平','肥城','宁阳','泰安市','新泰'],
		['荣成','乳山','威海市','文登'],
		['安丘','昌乐','昌邑','高密','临朐','青州','寿光','潍坊市','诸城'],
		['长岛','海阳','莱阳','莱州','龙口','蓬莱','栖霞','烟台市','招远'],
		['滕州','枣庄市'],
		['高青','桓台','沂源','淄博市']
		],
		[
		['古交','娄烦','清徐','太原市','阳曲'],
		['长治市','长治县','长子','壶关','黎城','潞城','平顺','沁县','沁源','屯留','武乡','襄垣'],
		['大同市','大同县','广灵','浑源','灵丘','天镇','阳高','左云'],
		['高平','晋城市','陵川','沁水','阳城','泽州'],
		['和顺','介休','晋中市','灵石','平遥','祁县','寿阳','太谷','昔阳','榆社','左权'],
		['安泽','大宁','汾西','浮山','古县','洪洞','侯马','霍州','吉县','临汾市','蒲县','曲沃','隰县','乡宁','襄汾','翼城','永和'],
		['方山','汾阳','交城','交口','岚县','临县','柳林','吕梁市','石楼','文水','孝义','兴县','中阳'],
		['怀仁','山阴','朔州市','应县','右玉'],
		['保德','代县','定襄','繁峙','河曲','静乐','岢岚','宁武','偏关','神池','五台','五寨','忻州市','原平'],
		['平定','阳泉市','盂县'],
		['河津','稷山','绛县','临猗','平陆','芮城','万荣','闻喜','夏县','新绛','永济','垣曲','运城市']
		],
		[
		['高陵','户县','蓝田','西安市','周至'],
		['安康市','白河','汉阴','岚皋','宁陕','平利','石泉','旬阳','镇坪','紫阳'],
		['宝鸡市','凤县','凤翔','扶风','麟游','陇县','眉县','岐山','千阳','太白'],
		['城固','佛坪','汉中市','留坝','略阳','勉县','南郑','宁强','西乡','洋县','镇巴'],
		['丹凤','洛南','山阳','商洛市','商南','镇安','柞水'],
		['铜川市','宜君'],
		['白水','澄城','大荔','富平','韩城','合阳','华县','华阴','蒲城','潼关','渭南市'],
		['彬县','长武','淳化','泾阳','礼泉','乾县','三原','武功','咸阳市','兴平','旬邑','永寿'],
		['安塞','富县','甘泉','黄陵','黄龙','洛川','吴起','延安市','延长','延川','宜川','志丹','子长'],
		['定边','府谷','横山','佳县','靖边','米脂','清涧','神木','绥德','吴堡','榆林市','子洲']
		],
		[
		['宝山'],
		['长宁'],
		['崇明'],
		['奉贤'],
		['虹口'],
		['黄浦'],
		['嘉定'],
		['金山'],
		['静安'],
		['卢湾'],
		['闵行'],
		['南汇'],
		['浦东'],
		['普陀'],
		['青浦'],
		['松江'],
		['徐汇'],
		['杨浦'],
		['闸北']
		],
		[
		['成都市','崇州','大邑','都江堰','金堂','彭州','郫县','蒲江','邛崃','双流','新津'],
		['阿坝','黑水','红原','金川','九寨沟','理县','马尔康','茂县','壤塘','若尔盖','松潘','汶川','小金'],
		['巴中市','南江','平昌','通江'],
		['达县','达州市','大竹','开江','渠县','万源','宣汉'],
		['德阳市','广汉','罗江','绵竹','什邡','中江'],
		['巴塘','白玉','丹巴','道孚','稻城','得荣','德格','甘孜','九龙','康定','理塘','泸定','炉霍','色达','石渠','乡城','新龙','雅江'],
		['广安市','华蓥','邻水','武胜','岳池'],
		['苍溪','广元市','剑阁','青川','旺苍'],
		['峨边','峨眉山','夹江','犍为','井研','乐山市','马边','沐川'],
		['布拖','德昌','甘洛','会东','会理','金阳','雷波','美姑','冕宁','木里','宁南','普格','西昌','喜德','盐源','越西','昭觉'],
		['古蔺','合江','泸县','泸州市','叙永'],
		['丹棱','洪雅','眉山市','彭山','青神','仁寿'],
		['安县','北川','江油','绵阳市','平武','三台','盐亭','梓潼'],
		['隆昌','内江市','威远','资中'],
		['阆中','南部','南充市','蓬安','西充','仪陇','营山'],
		['米易','攀枝花市','盐边'],
		['大英','蓬溪','射洪','遂宁市'],
		['宝兴','汉源','芦山','名山','石棉','天全','雅安市','荥经'],
		['长宁','高县','珙县','江安','筠连','南溪','屏山','兴文','宜宾市','宜宾县'],
		['安岳','简阳','乐至','资阳市'],
		['富顺','荣县','自贡市']
		],
		[
		['台北'],
		['阿莲'],
		['安定'],
		['安平'],
		['八德'],
		['八里'],
		['白河'],
		['白沙'],
		['板桥'],
		['褒忠'],
		['宝山'],
		['卑南'],
		['北斗'],
		['北港'],
		['北门'],
		['北埔'],
		['北投'],
		['补子'],
		['布袋'],
		['草屯'],
		['长宾'],
		['长治'],
		['潮州'],
		['车城'],
		['成功'],
		['城中区'],
		['池上'],
		['春日'],
		['刺桐'],
		['高雄'],
		['花莲'],
		['基隆'],
		['嘉义'],
		['苗栗'],
		['南投'],
		['屏东'],
		['台东'],
		['台南'],
		['台中'],
		['桃园'],
		['新竹'],
		['宜兰'],
		['彰化']
		],
		[
		['宝坻'],
		['北辰'],
		['大港'],
		['东丽'],
		['汉沽'],
		['和平'],
		['河北'],
		['河东'],
		['河西'],
		['红桥'],
		['蓟县'],
		['津南'],
		['静海'],
		['南开'],
		['宁河'],
		['塘沽'],
		['武清'],
		['西青']
		],
		[
		['达孜','当雄','堆龙德庆','拉萨市','林周','墨竹工卡','尼木','曲水'],
		['措勤','噶尔','改则','革吉','普兰','日土','札达'],
		['八宿','边坝','察雅','昌都','丁青','贡觉','江达','类乌齐','洛隆','芒康','左贡'],
		['波密','察隅','工布江达','朗县','林芝','米林','墨脱'],
		['安多','巴青','班戈','比如','嘉黎','那曲','尼玛','聂荣','申扎','索县'],
		['昂仁','白朗','定结','定日','岗巴','吉隆','江孜','康马','拉孜','南木林','聂拉木','仁布','日喀则市','萨嘎','萨迦','谢通门','亚东','仲巴'],
		['措美','错那','贡嘎','加查','浪卡子','隆子','洛扎','乃东','琼结','曲松','桑日','扎囊']
		],
		[
		['北区'],
		['大埔区'],
		['东区'],
		['观塘区'],
		['黄大仙区'],
		['九龙'],
		['葵青区'],
		['离岛区'],
		['南区'],
		['荃湾区'],
		['沙田区'],
		['深水埗区'],
		['屯门区'],
		['湾仔区'],
		['西贡区'],
		['香港'],
		['新界'],
		['油尖旺区'],
		['元朗区'],
		['中西区']
		],
		[
		['乌鲁木齐市','乌鲁木齐县'],
		['阿克苏市','阿瓦提','拜城','柯坪','库车','沙雅','温宿','乌什','新和'],
		['阿拉尔'],
		['阿勒泰','布尔津','福海','富蕴','哈巴河','吉木乃','青河'],
		['博湖','和静','和硕','库尔勒','轮台','且末','若羌','尉犁','焉耆'],
		['博乐','精河','温泉'],
		['昌吉市','阜康','呼图壁','吉木萨尔','玛纳斯','米泉','木垒','奇台'],
		['巴里坤','哈密市','伊吾'],
		['策勒','和田市','和田县','洛浦','民丰','墨玉','皮山','于田'],
		['巴楚','伽师','喀什市','麦盖提','莎车','疏附','疏勒','塔什库尔干塔吉克','叶城','英吉沙','岳普湖','泽普'],
		['克拉玛依'],
		['阿合奇','阿克陶','阿图什','乌恰'],
		['石河子'],
		['额敏','和布克赛尔','沙湾','塔城市','托里','乌苏','裕民'],
		['图木舒克'],
		['鄯善','吐鲁番市','托克逊'],
		['五家渠'],
		['察布查尔锡伯','巩留','霍城','奎屯','尼勒克','特克斯','新源','伊宁市','伊宁县','昭苏']
		],
		[
		['安宁','呈贡','富民','晋宁','昆明市','禄劝','石林','嵩明','寻甸','宜良'],
		['保山市','昌宁','龙陵','施甸','腾冲'],
		['楚雄市','大姚','禄丰','牟定','南华','双柏','武定','姚安','永仁','元谋'],
		['宾川','大理市','洱源','鹤庆','剑川','弥渡','南涧','巍山','祥云','漾濞','永平','云龙'],
		['梁河','陇川','潞西','瑞丽','盈江'],
		['德钦','维西','香格里拉'],
		['个旧','河口','红河','建水','金平','开远','泸西','绿春','蒙自','弥勒','屏边','石屏','元阳'],
		['华坪','丽江市','宁蒗','永胜','玉龙'],
		['沧源','凤庆','耿马','临沧市','双江','永德','云县','镇康'],
		['福贡','贡山','兰坪','泸水'],
		['富源','会泽','陆良','罗平','马龙','曲靖市','师宗','宣威','沾益'],
		['江城','景东','景谷','澜沧','孟连','墨江','普洱','思茅市','西盟','镇沅'],
		['富宁','广南','麻栗坡','马关','丘北','文山','西畴','砚山'],
		['景洪','勐海','勐腊'],
		['澄江','峨山','华宁','江川','通海','新平','易门','玉溪市','元江'],
		['大关','鲁甸','巧家','水富','绥江','威信','盐津','彝良','永善','昭通市','镇雄']
		],
		[
		['淳安','富阳','杭州市','建德','临安','桐庐'],
		['安吉','长兴','德清','湖州市'],
		['海宁','海盐','嘉善','嘉兴市','平湖','桐乡'],
		['东阳','金华市','兰溪','磐安','浦江','武义','义乌','永康'],
		['缙云','景宁','丽水市','龙泉','青田','庆元','松阳','遂昌','云和'],
		['慈溪','奉化','宁波市','宁海','象山','余姚'],
		['常山','江山','开化','龙游','衢州市'],
		['上虞','绍兴市','绍兴县','嵊州','新昌','诸暨'],
		['临海','三门','台州市','天台','温岭','仙居','玉环'],
		['苍南','洞头','乐清','平阳','瑞安','泰顺','温州市','文成','永嘉'],
		['岱山','嵊泗','舟山市']
		],
		[
		['巴南'],
		['北碚'],
		['璧山'],
		['长寿'],
		['城口'],
		['大渡口'],
		['大足'],
		['垫江'],
		['丰都'],
		['奉节'],
		['涪陵'],
		['合川'],
		['江北'],
		['江津'],
		['九龙坡'],
		['开县'],
		['梁平'],
		['南岸'],
		['南川'],
		['彭水'],
		['綦江'],
		['黔江'],
		['荣昌'],
		['沙坪坝'],
		['石柱'],
		['双桥'],
		['铜梁'],
		['潼南'],
		['万盛'],
		['万州'],
		['巫山'],
		['巫溪'],
		['武隆'],
		['秀山'],
		['永川'],
		['酉阳'],
		['渝北'],
		['渝中'],
		['云阳'],
		['忠县']
		],
		[
		['阿根廷'],
		['埃及'],
		['爱尔兰'],
		['奥地利'],
		['奥克兰'],
		['澳大利亚'],
		['巴基斯坦'],
		['巴西'],
		['保加利亚'],
		['比利时'],
		['冰岛'],
		['朝鲜'],
		['丹麦'],
		['德国'],
		['俄罗斯'],
		['法国'],
		['菲律宾'],
		['芬兰'],
		['哥伦比亚'],
		['韩国'],
		['荷兰'],
		['加拿大'],
		['柬埔寨'],
		['喀麦隆'],
		['老挝'],
		['卢森堡'],
		['罗马尼亚'],
		['马达加斯加'],
		['马来西亚'],
		['毛里求斯'],
		['美国'],
		['秘鲁'],
		['缅甸'],
		['墨西哥'],
		['南非'],
		['尼泊尔'],
		['挪威'],
		['葡萄牙'],
		['其它地区'],
		['日本'],
		['瑞典'],
		['瑞士'],
		['斯里兰卡'],
		['泰国'],
		['土耳其'],
		['委内瑞拉'],
		['文莱'],
		['乌克兰'],
		['西班牙'],
		['希腊'],
		['新加坡'],
		['新西兰'],
		['匈牙利'],
		['以色列'],
		['意大利'],
		['印度'],
		['印度尼西亚'],
		['英国'],
		['越南'],
		['智利']
		]
		]
	},
	zh_TW:{
		tip: '請選擇',
		/********** 省級數據 **********/
		GP : ['安徽','澳門','北京','福建','甘肅','廣東','廣西','貴州','海南','河北','河南','黑龍江','湖北','湖南','吉林','江蘇','江西','遼寧','內蒙古','寧夏','青海','山東','山西','陜西','上海','四川','臺灣','天津','西藏','香港','新疆','雲南','浙江','重慶','海外'],
		/********** 市級數據 **********/
		GT : [
		['合肥','安慶','蚌埠','亳州','巢湖','池州','滁州','阜陽','淮北','淮南','黃山','六安','馬鞍山','宿州','銅陵','蕪湖','宣城'],
		['澳門'],
		['昌平','朝陽','崇文','大興','東城','房山','豐臺','海澱','懷柔','門頭溝','密雲','平谷','石景山','順義','通州','西城','宣武','延慶'],
		['福州','龍巖','南平','寧德','莆田','泉州','三明','廈門','漳州'],
		['蘭州','白銀','定西','甘南','嘉峪關','金昌','酒泉','臨夏','隴南','平涼','慶陽','天水','武威','張掖'],
		['廣州','潮州','東莞','佛山','河源','惠州','江門','揭陽','茂名','梅州','清遠','汕頭','汕尾','韶關','深圳','陽江','雲浮','湛江','肇慶','中山','珠海'],
		['桂林','百色','北海','崇左','防城港','貴港','河池','賀州','來賓','柳州','南寧','欽州','梧州','玉林'],
		['貴陽','安順','畢節','六盤水','黔東南','黔南','黔西南','銅仁','遵義'],
		['海口','白沙','保亭','昌江','澄邁','儋州','定安','東方','樂東','臨高','陵水','南沙群島','瓊海','瓊中','三亞','屯昌','萬寧','文昌','五指山','西沙群島','中沙群島'],
		['石家莊','保定','滄州','承德','邯鄲','衡水','廊坊','秦皇島','唐山','邢臺','張家口'],
		['鄭州','安陽','鶴壁','焦作','開封','洛陽','漯河','南陽','平頂山','濮陽','三門峽','商丘','新鄉','信陽','許昌','周口','駐馬店'],
		['哈爾濱','大慶','大興安嶺','鶴崗','黑河','雞西','佳木斯','牡丹江','七臺河','齊齊哈爾','雙鴨山','綏化','伊春'],
		['武漢','鄂州','恩施','黃岡','黃石','荊門','荊州','潛江','神農架','十堰','隨州','天門','仙桃','鹹寧','襄樊','孝感','宜昌'],
		['長沙','常德','郴州','衡陽','懷化','婁底','邵陽','湘潭','湘西','益陽','永州','嶽陽','張家界','株洲'],
		['長春','白城','白山','吉林','遼源','四平','松原','通化','延邊'],
		['南京','常州','淮安','連雲港','南通','蘇州','宿遷','泰州','無錫','徐州','鹽城','揚州','鎮江'],
		['南昌','撫州','贛州','吉安','景德鎮','九江','萍鄉','上饒','新余','宜春','鷹潭'],
		['沈陽','鞍山','本溪','朝陽','大連','丹東','撫順','阜新','葫蘆島','錦州','遼陽','盤錦','鐵嶺','營口'],
		['呼和浩特','阿拉善','巴彥淖爾','包頭','赤峰','鄂爾多斯','呼倫貝爾','通遼','烏海','烏蘭察布','錫林郭勒','興安'],
		['銀川','固原','石嘴山','吳忠','中衛'],
		['西寧','果洛','海北','海東','海南','海西','黃南','玉樹'],
		['濟南','濱州','德州','東營','菏澤','濟寧','萊蕪','聊城','臨沂','青島','日照','泰安','威海','濰坊','煙臺','棗莊','淄博'],
		['太原','長治','大同','晉城','晉中','臨汾','呂梁','朔州','忻州','陽泉','運城'],
		['西安','安康','寶雞','漢中','商洛','銅川','渭南','鹹陽','延安','榆林'],
		['寶山','長寧','崇明','奉賢','虹口','黃浦','嘉定','金山','靜安','盧灣','閔行','南匯','浦東','普陀','青浦','松江','徐匯','楊浦','閘北'],
		['成都','阿壩','巴中','達州','德陽','甘孜','廣安','廣元','樂山','涼山','瀘州','眉山','綿陽','內江','南充','攀枝花','遂寧','雅安','宜賓','資陽','自貢'],
		['臺北','阿蓮','安定','安平','八德','八裏','白河','白沙','板橋','褒忠','寶山','卑南','北鬥','北港','北門','北埔','北投','補子','布袋','草屯','長賓','長治','潮州','車城','成功','城中區','池上','春日','刺桐','高雄','花蓮','基隆','嘉義','苗栗','南投','屏東','臺東','臺南','臺中','桃園','新竹','宜蘭','彰化'],
		['寶坻','北辰','大港','東麗','漢沽','和平','河北','河東','河西','紅橋','薊縣','津南','靜海','南開','寧河','塘沽','武清','西青'],
		['拉薩','阿裏','昌都','林芝','那曲','日喀則','山南'],
		['北區','大埔區','東區','觀塘區','黃大仙區','九龍','葵青區','離島區','南區','荃灣區','沙田區','深水埗區','屯門區','灣仔區','西貢區','香港','新界','油尖旺區','元朗區','中西區'],
		['烏魯木齊','阿克蘇','阿拉爾','阿勒泰','巴音郭楞','博爾塔拉','昌吉','哈密','和田','喀什','克拉瑪依','克孜勒蘇柯爾克孜','石河子','塔城','圖木舒克','吐魯番','五家渠','伊犁'],
		['昆明','保山','楚雄','大理','德宏','迪慶','紅河','麗江','臨滄','怒江','曲靖','思茅','文山','西雙版納','玉溪','昭通'],
		['杭州','湖州','嘉興','金華','麗水','寧波','衢州','紹興','臺州','溫州','舟山'],
		['巴南','北碚','璧山','長壽','城口','大渡口','大足','墊江','豐都','奉節','涪陵','合川','江北','江津','九龍坡','開縣','梁平','南岸','南川','彭水','綦江','黔江','榮昌','沙坪壩','石柱','雙橋','銅梁','潼南','萬盛','萬州','巫山','巫溪','武隆','秀山','永川','酉陽','渝北','渝中','雲陽','忠縣'],
		['阿根廷','埃及','愛爾蘭','奧地利','奧克蘭','澳大利亞','巴基斯坦','巴西','保加利亞','比利時','冰島','朝鮮','丹麥','德國','俄羅斯','法國','菲律賓','芬蘭','哥倫比亞','韓國','荷蘭','加拿大','柬埔寨','喀麥隆','老撾','盧森堡','羅馬尼亞','馬達加斯加','馬來西亞','毛裏求斯','美國','秘魯','緬甸','墨西哥','南非','尼泊爾','挪威','葡萄牙','其它地區','日本','瑞典','瑞士','斯裏蘭卡','泰國','土耳其','委內瑞拉','文萊','烏克蘭','西班牙','希臘','新加坡','新西蘭','匈牙利','以色列','意大利','印度','印度尼西亞','英國','越南','智利']
		],
		/********** 市二級數據 **********/
		GC :
		[
		[
		['長豐','肥東','肥西','合肥市'],
		['安慶市','樅陽','懷寧','潛山','宿松','太湖','桐城','望江','嶽西'],
		['蚌埠市','固鎮','懷遠','五河'],
		['亳州市','利辛','蒙城','渦陽'],
		['巢湖市','含山','和縣','廬江','無為'],
		['池州市','東至','青陽','石臺'],
		['滁州市','定遠','鳳陽','來安','明光','全椒','天長'],
		['阜南','阜陽市','界首','臨泉','太和','潁上'],
		['淮北市','濉溪'],
		['鳳臺','淮南市'],
		['黃山市','祁門','歙縣','休寧','黟縣'],
		['霍邱','霍山','金寨','六安市','壽縣','舒城'],
		['當塗','馬鞍山市'],
		['碭山','靈璧','泗縣','宿州市','蕭縣'],
		['銅陵市','銅陵縣'],
		['繁昌','南陵','蕪湖市','蕪湖縣'],
		['廣德','績溪','涇縣','旌德','郎溪','寧國','宣城市']
		],
		[
		['澳門']
		],
		[
		['昌平'],
		['朝陽'],
		['崇文'],
		['大興'],
		['東城'],
		['房山'],
		['豐臺'],
		['海澱'],
		['懷柔'],
		['門頭溝'],
		['密雲'],
		['平谷'],
		['石景山'],
		['順義'],
		['通州'],
		['西城'],
		['宣武'],
		['延慶']
		],
		[
		['長樂','福清','福州市','連江','羅源','閩侯','閩清','平潭','永泰'],
		['長汀','連城','龍巖市','上杭','武平','永定','漳平'],
		['光澤','建甌','建陽','南平市','浦城','邵武','順昌','松溪','武夷山','政和'],
		['福安','福鼎','古田','寧德市','屏南','壽寧','霞浦','柘榮','周寧'],
		['莆田市','仙遊'],
		['安溪','德化','惠安','金門','晉江','南安','泉州市','石獅','永春'],
		['大田','建寧','將樂','明溪','寧化','清流','三明市','沙縣','泰寧','永安','尤溪'],
		['廈門市'],
		['長泰','東山','華安','龍海','南靖','平和','雲霄','漳浦','漳州市','詔安']
		],
		[
		['臯蘭','蘭州市','永登','榆中'],
		['白銀市','會寧','景泰','靖遠'],
		['定西市','臨桃','隴西','岷縣','通渭','渭源','漳縣'],
		['叠部','合作','臨潭','碌曲','瑪曲','夏河','舟曲','卓尼'],
		['嘉峪關市'],
		['金昌市','永昌'],
		['阿克塞','敦煌','瓜州','金塔','酒泉市','肅北','玉門'],
		['東鄉族','廣河','和政','積石山','康樂','臨夏市','臨夏縣','永靖'],
		['成縣','宕昌','徽縣','康縣','禮縣','兩當','隴南市','文縣','西和'],
		['崇信','華亭','涇川','靜寧','靈臺','平涼市','莊浪'],
		['合水','華池','環縣','寧縣','慶城','慶陽市','鎮原','正寧'],
		['甘谷','秦安','清水','天水市','武山','張家川'],
		['古浪','民勤','天祝','武威市'],
		['高臺','臨澤','民樂','山丹','肅南','張掖市']
		],
		[
		['從化','廣州市','增城'],
		['潮安','潮州市','饒平'],
		['東莞'],
		['佛山市'],
		['東源','和平','河源市','連平','龍川','紫金'],
		['博羅','惠東','惠州市','龍門'],
		['恩平','鶴山','江門市','開平','臺山'],
		['惠來','揭東','揭西','揭陽市','普寧'],
		['電白','高州','化州','茂名市','信宜'],
		['大埔','豐順','蕉嶺','梅縣','梅州市','平遠','五華','興寧'],
		['佛岡','連南','連山','連州','清新','清遠市','陽山','英德'],
		['南澳','汕頭市'],
		['海豐','陸豐','陸河','汕尾市'],
		['樂昌','南雄','仁化','乳源','韶關市','始興','翁源','新豐'],
		['深圳市'],
		['陽春','陽東','陽江市','陽西'],
		['羅定','新興','郁南','雲安','雲浮市'],
		['雷州','廉江','遂溪','吳川','徐聞','湛江市'],
		['德慶','封開','高要','廣寧','懷集','四會','肇慶市'],
		['中山市'],
		['珠海市']
		],
		[
		['恭城','灌陽','桂林市','荔蒲','臨桂','靈川','龍勝','平樂','全州','興安','陽朔','永福','資源'],
		['百色市','德保','靖西','樂業','淩雲','隆林','那坡','平果','田東','田林','田陽','西林'],
		['北海市','合浦'],
		['崇左市','大新','扶綏','龍州','寧明','憑祥','天等'],
		['東興','防城港市','上思'],
		['貴港市','桂平','平南'],
		['巴馬','大化','東蘭','都安','鳳山','河池市','環江','羅城','南丹','天峨','宜州'],
		['富川','賀州市','昭平','鐘山'],
		['合山','金秀','來賓市','武宣','象州','忻城'],
		['柳城','柳江','柳州市','鹿寨','融安','融水','三江'],
		['賓陽','橫縣','隆安','馬山','南寧市','上林','武鳴'],
		['靈山','浦北','欽州市'],
		['蒼梧','岑溪','蒙山','藤縣','梧州市'],
		['北流','博白','陸川','容縣','興業','玉林市']
		],
		[
		['貴陽市','開陽','清鎮','息烽','修文'],
		['安順市','關嶺','平壩','普定','鎮寧','紫雲'],
		['畢節市','大方','赫章','金沙','納雍','黔西','威寧','織金'],
		['六盤水市','六枝','盤縣','水城'],
		['岑鞏','從江','丹寨','黃平','劍河','錦屏','凱裏','雷山','黎平','麻江','榕江','三穗','施秉','臺江','天柱','鎮遠'],
		['長順','都勻','獨山','福泉','貴定','惠水','荔波','龍裏','羅甸','平塘','三都','甕安'],
		['安龍','冊亨','普安','晴隆','望謨','興仁','興義','貞豐'],
		['德江','江口','石阡','思南','松桃','銅仁市','萬山','沿河','印江','玉屏'],
		['赤水','道真','鳳岡','湄潭','仁懷','綏陽','桐梓','務川','習水','余慶','正安','遵義市','遵義縣']
		],
		[
		['海口'],
		['白沙'],
		['保亭'],
		['昌江'],
		['澄邁'],
		['儋州'],
		['定安'],
		['東方'],
		['樂東'],
		['臨高'],
		['陵水'],
		['南沙群島'],
		['瓊海'],
		['瓊中'],
		['三亞'],
		['屯昌'],
		['萬寧'],
		['文昌'],
		['五指山'],
		['西沙群島'],
		['中沙群島']
		],
		[
		['槁城','晉州','井陘','靈壽','鹿泉','欒城','平山','深澤','石家莊市','無極','辛集','新樂','行唐','元氏','贊皇','趙縣','正定','高邑'],
		['安國','安新','保定市','博野','定興','定州','阜平','高碑店','高陽','淶水','淶源','蠡縣','滿城','清苑','曲陽','容城','順平','唐縣','望都','雄縣','徐水','易縣','涿州'],
		['泊頭','滄縣','滄州市','東光','海興','河間','黃驊','孟村','南皮','青縣','任丘','肅寧','吳橋','獻縣','鹽山'],
		['承德市','承德縣','豐寧','寬城','隆化','灤平','平泉','圍場','興隆'],
		['成安','磁縣','大名','肥鄉','館陶','廣平','邯鄲市','邯鄲縣','雞澤','臨漳','邱縣','曲周','涉縣','魏縣','武安','永年'],
		['安平','阜城','故城','衡水市','冀州','景縣','饒陽','深州','武強','武邑','棗強'],
		['霸州','大廠','大城','固安','廊坊市','三河','文安','香河','永清'],
		['昌黎','撫寧','盧龍','秦皇島市','青龍'],
		['樂亭','灤南','灤縣','遷安','遷西','唐海','唐山市','玉田','遵化'],
		['柏鄉','廣宗','巨鹿','臨城','臨西','隆堯','內丘','南宮','南和','寧晉','平鄉','清河','任縣','沙河','威縣','新河','邢臺市','邢臺縣'],
		['赤城','崇禮','沽源','懷安','懷來','康保','尚義','萬全','蔚縣','宣化','陽原','張北','張家口市','涿鹿']
		],
		[
		['登封','鞏義','新密','新鄭','滎陽','鄭州市','中牟'],
		['安陽市','安陽縣','滑縣','林州','內黃','湯陰'],
		['鶴壁市','浚縣','泣縣'],
		['博愛','濟源','焦作市','孟州','沁陽','溫縣','武陟','修武'],
		['開封市','開封縣','蘭考','杞縣','通許','尉氏'],
		['欒川','洛寧','洛陽市','孟津','汝陽','嵩縣','新安','偃師','伊川','宜陽'],
		['臨潁','漯河市','舞陽'],
		['鄧州','方城','內鄉','南陽市','南召','社旗','唐河','桐柏','西峽','浙川','新野','鎮平'],
		['寶豐','郟縣','魯山','平頂山市','汝州','舞鋼','葉縣'],
		['範縣','南樂','濮陽市','濮陽縣','清豐','臺前'],
		['靈寶','盧氏','三門峽市','陜縣','澠池','義馬'],
		['民權','寧陵','商丘市','睢縣','夏邑','永城','虞城','柘城'],
		['長垣','封丘','輝縣','獲嘉','衛輝','新鄉市','新鄉縣','延津','原陽'],
		['固始','光山','淮濱','潢川','羅山','商城','息縣','新縣','信陽市'],
		['長葛','襄城','許昌市','許昌縣','鄢陵','禹州'],
		['鄲城','扶溝','淮陽','鹿邑','商水','沈丘','太康','西華','項城','周口市'],
		['泌陽','平輿','確山','汝南','上蔡','遂平','西平','新蔡','正陽','駐馬店市']
		],
		[
		['巴彥','賓縣','方正','哈爾濱市','木蘭','尚誌','雙城','通河','五常','延壽','依蘭'],
		['大慶市','杜爾伯特','林甸','肇源','肇州'],
		['呼瑪','呼中','加格達奇','漠河','松嶺','塔河','新林'],
		['鶴崗市','蘿北','綏濱'],
		['北安','黑河市','嫩江','孫吳','五大連池','遜克'],
		['虎林','雞東','雞西市','密山'],
		['撫遠','富錦','樺川','樺南','佳木斯市','湯原','同江'],
		['東寧','海林','林口','牡丹江市','穆棱','寧安','綏芬河'],
		['勃利','七臺河'],
		['拜泉','富裕','甘南','克東','克山','龍江','訥河','齊齊哈爾市','泰來','依安'],
		['寶清','集賢','饒河','雙鴨山市','友誼'],
		['安達','海倫','蘭西','明水','青岡','慶安','綏化市','綏棱','望奎','肇東'],
		['嘉蔭','鐵力','伊春市']
		],
		[
		['武漢市'],
		['鄂州市'],
		['巴東','恩施市','鶴峰','建始','來鳳','利川','鹹豐','宣恩'],
		['紅安','黃岡市','黃梅','羅田','麻城','蘄春','團風','武穴','稀水','英山'],
		['大冶','黃石','陽新'],
		['京山','荊門市','沙洋','鐘祥'],
		['公安','洪湖','監利','江陵','荊州市','石首','松滋'],
		['潛江'],
		['神農架'],
		['丹江口','房縣','十堰市','鄖西','鄖縣','竹山','竹溪'],
		['廣水','隨州市'],
		['天門市'],
		['仙桃市'],
		['赤壁','崇陽','嘉魚','通城','通山','鹹寧市'],
		['保康','谷城','老河口','南漳','襄樊市','宜城','棗陽'],
		['安陸','大悟','漢川','孝昌','孝感市','應城','雲夢'],
		['長陽','當陽','五峰','興山','宜昌市','宜都','遠安','枝江','秭歸']
		],
		[
		['長沙市','長沙縣','瀏陽','寧鄉','望城'],
		['安鄉','常德市','漢壽','津市','澧縣','臨澧','石門','桃源'],
		['安仁','郴州市','桂東','桂陽','嘉禾','臨武','汝城','宜章','永興','資興'],
		['常寧','衡東','衡南','衡山','衡陽市','衡陽縣','耒陽','祁東'],
		['辰溪','洪江','懷化市','會同','靖州','麻陽','通道','新晃','漵浦','元陵','芝江','中方'],
		['冷水江','漣源','婁底市','雙峰','新化'],
		['城步','洞口','隆回','邵東','邵陽市','邵陽縣','綏寧','武岡','新寧','新邵'],
		['韶山','湘潭市','湘潭縣','湘鄉'],
		['保靖','鳳凰','古丈','花垣','吉首','龍山','瀘溪','永順'],
		['安化','南縣','桃江','益陽市','元江'],
		['道縣','東安','江華','江永','藍山','寧遠','祁陽','雙牌','新田','永州市'],
		['華容','臨湘','淚羅','平江','湘陰','嶽陽市','嶽陽縣'],
		['慈利','桑植','張家界市'],
		['茶陵','醴陵','炎陵','攸縣','株洲市','株洲縣']
		],
		[
		['長春市','德惠','九臺','農安','榆樹'],
		['白城市','大安','桃南','通榆','鎮賚'],
		['白山','長白','撫松','靖宇','臨江'],
		['樺甸','吉林市','蛟河','磐石','舒蘭','永吉'],
		['東豐','東遼','遼源市'],
		['公主嶺','梨樹','雙遼','四平市','伊通'],
		['長嶺','扶余','前郭爾羅斯','乾安','松原市'],
		['輝南','集安','柳河','梅河口','通化市','通化縣'],
		['延吉市','敦化','和龍','琿春','龍井','圖們','汪清','安圖']
		],
		[
		['高淳','溧水','南京市'],
		['常州市','金壇','溧陽'],
		['洪澤','淮安市','金湖','漣水','盱眙'],
		['東海','贛榆','灌南','灌雲','連雲港市'],
		['海安','海門','南通市','啟東','如東','如臯','通州'],
		['常熟','昆山','蘇州市','太倉','吳江','張家港'],
		['述陽','泗洪','泗陽','宿遷市'],
		['姜堰','靖江','泰興','泰州市','興化'],
		['江陰','無錫市','宜興'],
		['豐縣','沛縣','邳州','睢寧','銅山','新沂','徐州市'],
		['濱海','大豐','東臺','阜寧','建湖','射陽','響水','鹽城市'],
		['寶應','高郵','江都','揚州市','儀征'],
		['丹陽','句容','揚中','鎮江市']
		],
		[
		['安義','進賢','南昌市','南昌縣','新建'],
		['崇仁','東鄉','撫州市','廣昌','金溪','樂安','黎川','南城','南豐','宜黃','資溪'],
		['安遠','崇義','大余','定南','贛縣','贛州市','會昌','龍南','南康','寧都','全南','瑞金','上猶','石城','信豐','興國','尋烏','於都'],
		['安福','吉安市','吉安縣','吉水','井岡山','遂川','泰和','萬安','峽江','新幹','永豐','永新'],
		['浮梁','景德鎮市','樂平'],
		['德安','都昌','湖口','九江市','九江縣','彭澤','瑞昌','武寧','星子','修水','永修'],
		['蓮花','蘆溪','萍鄉市','上栗'],
		['德興','廣豐','橫峰','鄱陽','鉛山','上饒市','上饒縣','萬年','婺源','弋陽','余幹','玉山'],
		['分宜','新余市'],
		['豐城','奉新','高安','靖安','上高','銅鼓','萬載','宜春市','宜豐','樟樹'],
		['貴溪','鷹潭市','余江']
		],
		[
		['法庫','康平','遼中','沈陽市','新民'],
		['鞍山市','海城','臺安','岫巖'],
		['本溪市','本溪縣','桓仁'],
		['北票','朝陽市','朝陽縣','建平','喀喇沁左翼','淩源'],
		['長海','大連市','普蘭店','瓦房店','莊河'],
		['丹東市','東港','鳳城','寬甸'],
		['撫順市','撫順縣','清原','新賓'],
		['阜新市','阜新縣','彰武'],
		['葫蘆島市','建昌','綏中','興城'],
		['北鎮','黑山','錦州市','淩海','義縣'],
		['燈塔','遼陽市','遼陽縣'],
		['大窪','盤錦市','盤山'],
		['昌圖','調兵山','開原','鐵嶺市','鐵嶺縣','西豐'],
		['大石橋','蓋州','營口市']
		],
		[
		['和林格爾','呼和浩特市','清水河','土默特左旗','托克托','武川'],
		['阿拉善右旗','阿拉善左旗','額濟納旗'],
		['巴彥淖爾市','磴口','杭錦後旗','烏拉特後旗','烏拉特前旗','烏拉特中旗','五原'],
		['包頭市','達爾罕茂明安聯合旗','固陽','土默特右旗'],
		['阿魯科爾沁旗','敖漢旗','巴林右旗','巴林左旗','赤峰市','喀喇沁旗','克什克騰旗','林西','寧城','翁牛特旗'],
		['達拉特旗','鄂爾多斯市','鄂托克旗','鄂托克前旗','杭錦旗','烏審旗','伊金霍洛旗','準格爾旗'],
		['阿榮旗','陳巴爾虎旗','額爾古納','鄂倫春旗','鄂溫克族旗','根河','呼倫貝爾市','滿洲裏','莫力達瓦旗','新巴爾虎右旗','新巴爾虎左旗','牙克石','紮蘭屯'],
		['霍林郭勒','開魯','科爾沁左翼後旗','科爾沁左翼中旗','庫倫旗','奈曼旗','通遼市','紮魯特旗'],
		['烏海'],
		['察哈爾右翼後旗','察哈爾右翼前旗','察哈爾右翼中旗','豐鎮','化德','涼城','商都','四子王旗','烏蘭察布市','興和','卓資'],
		['阿巴嘎旗','東烏珠穆沁旗','多倫','二連浩特','蘇尼特右旗','蘇尼特左旗','太仆寺旗','西烏珠穆沁旗','錫林郭勒市','鑲黃旗','正藍旗','正鑲白旗'],
		['阿爾山','科爾沁右翼前旗','科爾沁右翼中旗','突泉','烏蘭浩特','紮賚特旗']
		],
		[
		['賀蘭','靈武','銀川市','永寧'],
		['固原市','涇源','隆德','彭陽','西吉'],
		['平羅','石嘴山市'],
		['青銅峽','同心','吳忠市','鹽池'],
		['海原','中寧','中衛市']
		],
		[
		['大通','湟源','湟中','西寧市'],
		['班瑪','達日','甘德','久治','瑪多','瑪沁'],
		['剛察','海晏','門源','祁連'],
		['互助','化隆','樂都','民和','平安','循化'],
		['共和','貴德','貴南','同德','興海'],
		['大柴旦','德令哈','都蘭','格爾木','冷湖','茫崖','天峻','烏蘭'],
		['河南','尖紮','同仁','澤庫'],
		['稱多','囊謙','曲麻萊','玉樹','雜多','治多']
		],
		[
		['濟南市','濟陽','平陰','商河','章丘'],
		['濱州市','博興','惠民','無棣','陽信','沾化','鄒平'],
		['德州市','樂陵','臨邑','陵縣','寧津','平原','齊河','慶雲','武城','夏津','禹城'],
		['東營市','廣饒','墾利','利津'],
		['曹縣','成武','單縣','定陶','東明','菏澤市','巨野','鄄城','鄆城'],
		['濟寧市','嘉祥','金鄉','梁山','曲阜','泗水','微山','汶上','兗州','魚臺','鄒城'],
		['萊蕪市'],
		['茌平','東阿','高唐','冠縣','聊城市','臨清','莘縣','陽谷'],
		['蒼山','費縣','莒南','臨述','臨沂市','蒙陰','平邑','郯城','沂南','沂水'],
		['即墨','膠南','膠州','萊西','平度','青島市'],
		['莒縣','日照市','五蓮'],
		['東平','肥城','寧陽','泰安市','新泰'],
		['榮成','乳山','威海市','文登'],
		['安丘','昌樂','昌邑','高密','臨朐','青州','壽光','濰坊市','諸城'],
		['長島','海陽','萊陽','萊州','龍口','蓬萊','棲霞','煙臺市','招遠'],
		['滕州','棗莊市'],
		['高青','桓臺','沂源','淄博市']
		],
		[
		['古交','婁煩','清徐','太原市','陽曲'],
		['長治市','長治縣','長子','壺關','黎城','潞城','平順','沁縣','沁源','屯留','武鄉','襄垣'],
		['大同市','大同縣','廣靈','渾源','靈丘','天鎮','陽高','左雲'],
		['高平','晉城市','陵川','沁水','陽城','澤州'],
		['和順','介休','晉中市','靈石','平遙','祁縣','壽陽','太谷','昔陽','榆社','左權'],
		['安澤','大寧','汾西','浮山','古縣','洪洞','侯馬','霍州','吉縣','臨汾市','蒲縣','曲沃','隰縣','鄉寧','襄汾','翼城','永和'],
		['方山','汾陽','交城','交口','嵐縣','臨縣','柳林','呂梁市','石樓','文水','孝義','興縣','中陽'],
		['懷仁','山陰','朔州市','應縣','右玉'],
		['保德','代縣','定襄','繁峙','河曲','靜樂','苛嵐','寧武','偏關','神池','五臺','五寨','忻州市','原平'],
		['平定','陽泉市','盂縣'],
		['河津','稷山','絳縣','臨猗','平陸','芮城','萬榮','聞喜','夏縣','新絳','永濟','垣曲','運城市']
		],
		[
		['高陵','戶縣','藍田','西安市','周至'],
		['安康市','白河','漢陰','嵐臯','寧陜','平利','石泉','旬陽','鎮坪','紫陽'],
		['寶雞市','鳳縣','鳳翔','扶風','麟遊','隴縣','眉縣','岐山','千陽','太白'],
		['城固','佛坪','漢中市','留壩','略陽','勉縣','南鄭','寧強','西鄉','洋縣','鎮巴'],
		['丹鳳','洛南','山陽','商洛市','商南','鎮安','柞水'],
		['銅川市','宜君'],
		['白水','澄城','大荔','富平','韓城','合陽','華縣','華陰','蒲城','潼關','渭南市'],
		['彬縣','長武','淳化','涇陽','禮泉','乾縣','三原','武功','鹹陽市','興平','旬邑','永壽'],
		['安塞','富縣','甘泉','黃陵','黃龍','洛川','吳起','延安市','延長','延川','宜川','誌丹','子長'],
		['定邊','府谷','橫山','佳縣','靖邊','米脂','清澗','神木','綏德','吳堡','榆林市','子洲']
		],
		[
		['寶山'],
		['長寧'],
		['崇明'],
		['奉賢'],
		['虹口'],
		['黃浦'],
		['嘉定'],
		['金山'],
		['靜安'],
		['盧灣'],
		['閔行'],
		['南匯'],
		['浦東'],
		['普陀'],
		['青浦'],
		['松江'],
		['徐匯'],
		['楊浦'],
		['閘北']
		],
		[
		['成都市','崇州','大邑','都江堰','金堂','彭州','郫縣','蒲江','邛崍','雙流','新津'],
		['阿壩','黑水','紅原','金川','九寨溝','理縣','馬爾康','茂縣','壤塘','若爾蓋','松潘','汶川','小金'],
		['巴中市','南江','平昌','通江'],
		['達縣','達州市','大竹','開江','渠縣','萬源','宣漢'],
		['德陽市','廣漢','羅江','綿竹','什邡','中江'],
		['巴塘','白玉','丹巴','道孚','稻城','得榮','德格','甘孜','九龍','康定','理塘','瀘定','爐霍','色達','石渠','鄉城','新龍','雅江'],
		['廣安市','華鎣','鄰水','武勝','嶽池'],
		['蒼溪','廣元市','劍閣','青川','旺蒼'],
		['峨邊','峨眉山','夾江','犍為','井研','樂山市','馬邊','沐川'],
		['布拖','德昌','甘洛','會東','會理','金陽','雷波','美姑','冕寧','木裏','寧南','普格','西昌','喜德','鹽源','越西','昭覺'],
		['古藺','合江','瀘縣','瀘州市','敘永'],
		['丹棱','洪雅','眉山市','彭山','青神','仁壽'],
		['安縣','北川','江油','綿陽市','平武','三臺','鹽亭','梓潼'],
		['隆昌','內江市','威遠','資中'],
		['閬中','南部','南充市','蓬安','西充','儀隴','營山'],
		['米易','攀枝花市','鹽邊'],
		['大英','蓬溪','射洪','遂寧市'],
		['寶興','漢源','蘆山','名山','石棉','天全','雅安市','滎經'],
		['長寧','高縣','拱縣','江安','筠連','南溪','屏山','興文','宜賓市','宜賓縣'],
		['安嶽','簡陽','樂至','資陽市'],
		['富順','榮縣','自貢市']
		],
		[
		['臺北'],
		['阿蓮'],
		['安定'],
		['安平'],
		['八德'],
		['八裏'],
		['白河'],
		['白沙'],
		['板橋'],
		['褒忠'],
		['寶山'],
		['卑南'],
		['北鬥'],
		['北港'],
		['北門'],
		['北埔'],
		['北投'],
		['補子'],
		['布袋'],
		['草屯'],
		['長賓'],
		['長治'],
		['潮州'],
		['車城'],
		['成功'],
		['城中區'],
		['池上'],
		['春日'],
		['刺桐'],
		['高雄'],
		['花蓮'],
		['基隆'],
		['嘉義'],
		['苗栗'],
		['南投'],
		['屏東'],
		['臺東'],
		['臺南'],
		['臺中'],
		['桃園'],
		['新竹'],
		['宜蘭'],
		['彰化']
		],
		[
		['寶坻'],
		['北辰'],
		['大港'],
		['東麗'],
		['漢沽'],
		['和平'],
		['河北'],
		['河東'],
		['河西'],
		['紅橋'],
		['薊縣'],
		['津南'],
		['靜海'],
		['南開'],
		['寧河'],
		['塘沽'],
		['武清'],
		['西青']
		],
		[
		['達孜','當雄','堆龍德慶','拉薩市','林周','墨竹工卡','尼木','曲水'],
		['措勤','噶爾','改則','革吉','普蘭','日土','劄達'],
		['八宿','邊壩','察雅','昌都','丁青','貢覺','江達','類烏齊','洛隆','芒康','左貢'],
		['波密','察隅','工布江達','朗縣','林芝','米林','墨脫'],
		['安多','巴青','班戈','比如','嘉黎','那曲','尼瑪','聶榮','申紮','索縣'],
		['昂仁','白朗','定結','定日','崗巴','吉隆','江孜','康馬','拉孜','南木林','聶拉木','仁布','日喀則市','薩嘎','薩迦','謝通門','亞東','仲巴'],
		['措美','錯那','貢嘎','加查','浪卡子','隆子','洛紮','乃東','瓊結','曲松','桑日','紮囊']
		],
		[
		['北區'],
		['大埔區'],
		['東區'],
		['觀塘區'],
		['黃大仙區'],
		['九龍'],
		['葵青區'],
		['離島區'],
		['南區'],
		['荃灣區'],
		['沙田區'],
		['深水埗區'],
		['屯門區'],
		['灣仔區'],
		['西貢區'],
		['香港'],
		['新界'],
		['油尖旺區'],
		['元朗區'],
		['中西區']
		],
		[
		['烏魯木齊市','烏魯木齊縣'],
		['阿克蘇市','阿瓦提','拜城','柯坪','庫車','沙雅','溫宿','烏什','新和'],
		['阿拉爾'],
		['阿勒泰','布爾津','福海','富蘊','哈巴河','吉木乃','青河'],
		['博湖','和靜','和碩','庫爾勒','輪臺','且末','若羌','尉犁','焉耆'],
		['博樂','精河','溫泉'],
		['昌吉市','阜康','呼圖壁','吉木薩爾','瑪納斯','米泉','木壘','奇臺'],
		['巴裏坤','哈密市','伊吾'],
		['策勒','和田市','和田縣','洛浦','民豐','墨玉','皮山','於田'],
		['巴楚','伽師','喀什市','麥蓋提','莎車','疏附','疏勒','塔什庫爾幹塔吉克','葉城','英吉沙','嶽普湖','澤普'],
		['克拉瑪依'],
		['阿合奇','阿克陶','阿圖什','烏恰'],
		['石河子'],
		['額敏','和布克賽爾','沙灣','塔城市','托裏','烏蘇','裕民'],
		['圖木舒克'],
		['鄯善','吐魯番市','托克遜'],
		['五家渠'],
		['察布查爾錫伯','鞏留','霍城','奎屯','尼勒克','特克斯','新源','伊寧市','伊寧縣','昭蘇']
		],
		[
		['安寧','呈貢','富民','晉寧','昆明市','祿勸','石林','嵩明','尋甸','宜良'],
		['保山市','昌寧','龍陵','施甸','騰沖'],
		['楚雄市','大姚','祿豐','牟定','南華','雙柏','武定','姚安','永仁','元謀'],
		['賓川','大理市','洱源','鶴慶','劍川','彌渡','南澗','巍山','祥雲','漾濞','永平','雲龍'],
		['梁河','隴川','潞西','瑞麗','盈江'],
		['德欽','維西','香格裏拉'],
		['個舊','河口','紅河','建水','金平','開遠','瀘西','綠春','蒙自','彌勒','屏邊','石屏','元陽'],
		['華坪','麗江市','寧蒗','永勝','玉龍'],
		['滄源','鳳慶','耿馬','臨滄市','雙江','永德','雲縣','鎮康'],
		['福貢','貢山','蘭坪','瀘水'],
		['富源','會澤','陸良','羅平','馬龍','曲靖市','師宗','宣威','沾益'],
		['江城','景東','景谷','瀾滄','孟連','墨江','普洱','思茅市','西盟','鎮元'],
		['富寧','廣南','麻栗坡','馬關','丘北','文山','西疇','硯山'],
		['景洪','猛海','猛臘'],
		['澄江','峨山','華寧','江川','通海','新平','易門','玉溪市','元江'],
		['大關','魯甸','巧家','水富','綏江','威信','鹽津','彜良','永善','昭通市','鎮雄']
		],
		[
		['淳安','富陽','杭州市','建德','臨安','桐廬'],
		['安吉','長興','德清','湖州市'],
		['海寧','海鹽','嘉善','嘉興市','平湖','桐鄉'],
		['東陽','金華市','蘭溪','磐安','浦江','武義','義烏','永康'],
		['縉雲','景寧','麗水市','龍泉','青田','慶元','松陽','遂昌','雲和'],
		['慈溪','奉化','寧波市','寧海','象山','余姚'],
		['常山','江山','開化','龍遊','衢州市'],
		['上虞','紹興市','紹興縣','嵊州','新昌','諸暨'],
		['臨海','三門','臺州市','天臺','溫嶺','仙居','玉環'],
		['蒼南','洞頭','樂清','平陽','瑞安','泰順','溫州市','文成','永嘉'],
		['岱山','嵊泗','舟山市']
		],
		[
		['巴南'],
		['北碚'],
		['璧山'],
		['長壽'],
		['城口'],
		['大渡口'],
		['大足'],
		['墊江'],
		['豐都'],
		['奉節'],
		['涪陵'],
		['合川'],
		['江北'],
		['江津'],
		['九龍坡'],
		['開縣'],
		['梁平'],
		['南岸'],
		['南川'],
		['彭水'],
		['綦江'],
		['黔江'],
		['榮昌'],
		['沙坪壩'],
		['石柱'],
		['雙橋'],
		['銅梁'],
		['潼南'],
		['萬盛'],
		['萬州'],
		['巫山'],
		['巫溪'],
		['武隆'],
		['秀山'],
		['永川'],
		['酉陽'],
		['渝北'],
		['渝中'],
		['雲陽'],
		['忠縣']
		],
		[
		['阿根廷'],
		['埃及'],
		['愛爾蘭'],
		['奧地利'],
		['奧克蘭'],
		['澳大利亞'],
		['巴基斯坦'],
		['巴西'],
		['保加利亞'],
		['比利時'],
		['冰島'],
		['朝鮮'],
		['丹麥'],
		['德國'],
		['俄羅斯'],
		['法國'],
		['菲律賓'],
		['芬蘭'],
		['哥倫比亞'],
		['韓國'],
		['荷蘭'],
		['加拿大'],
		['柬埔寨'],
		['喀麥隆'],
		['老撾'],
		['盧森堡'],
		['羅馬尼亞'],
		['馬達加斯加'],
		['馬來西亞'],
		['毛裏求斯'],
		['美國'],
		['秘魯'],
		['緬甸'],
		['墨西哥'],
		['南非'],
		['尼泊爾'],
		['挪威'],
		['葡萄牙'],
		['其它地區'],
		['日本'],
		['瑞典'],
		['瑞士'],
		['斯裏蘭卡'],
		['泰國'],
		['土耳其'],
		['委內瑞拉'],
		['文萊'],
		['烏克蘭'],
		['西班牙'],
		['希臘'],
		['新加坡'],
		['新西蘭'],
		['匈牙利'],
		['以色列'],
		['意大利'],
		['印度'],
		['印度尼西亞'],
		['英國'],
		['越南'],
		['智利']
		]
		]
	}
};