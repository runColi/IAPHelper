module.exports = {
	// 恢复购买（调用OC静态函数）
	restorePurchasesStart: function () {
	    try {
	        // 使用原生去查找已购买的商品，然后再传回JS：第一个参数 IAPHelper 是类名，第二个参数 restorePurchases 是OC的静态函数名
	        jsb.reflection.callStaticMethod("IAPHelper", "restorePurchases");
	    } catch (err) {
	        cc.log(err);
	    }
	},
	
	// 恢复购买（OC调用，传回商品ID列表）
	restorePurchasesEnd: function (ids) {
	    try {
	        let productIds = ids.split(',');
	        productIds.forEach(function(id) {
	        	// 在这里进行恢复处理
	        }, this);
	    } catch (err) {
	        cc.log(err);
	    }
	}
}
