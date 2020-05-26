<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@font-face {font-family: "iconfont";
	  src: url('~@/static/font/iconfont.eot?t=1590501729869'); /* IE9 */
	  src: url('~@/static/font/iconfont.eot?t=1590501729869#iefix') format('embedded-opentype'), /* IE6-IE8 */
	  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOIAAsAAAAAB3AAAAM7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqCMIIuATYCJAMQCwoABCAFhG0HSRuZBsiuMQbXD0QLZccGVwskyAtFqWTSb2ERZGP/zt7tJwQLpXgChaArLJBUrbB1FM+y8e9Qp13kIk+kEgW3Ik+E/wbZcUiJLD/jDEjrb0AwIa9NFnDBpZjaaS7AzbXQl/i/zihp7Jf+iIB/3Dv9rSEwH1Auaw5bGwOMO+8CG2tSlGgBYsvhzKvw6DpOoN20KpZzHX2DECORcYF4pmsixKT0siYztArNJUuzxkegtbxCt/HB/338sx8xFE0VmXr+QbsCTT/TPswTloWTi4BgPCvEVVRsAkncKrXfJITxTYJ2fb8I20CzFMrPgQ/zwjMmz9ezTnsrff54hWhG0jvBISQqP/ttfqwYAK0AxUtIU+BlLGlFMy4DbxHqpI+HqvQnJsV4gryhYnjz8hMbM4dGtmw8tixj8OisZ89GnjwZevx48OnT4cn9r0YuPdn4tfHJC3w5wcLhzVlnnlkKuVXcBr2uPavdlDl0bOOj5S/yok49ZyLl2/dtk23Z2z4Q2bGAk85NgY/Xkblzp+l40a6dyNPt2hUTd+6a8vFuXIkX3Y9DpUtDZe+Ca/SE7F+f5uhL9o/vrpYf2FsnHHn75nAeiXB1wvjKI7nXh78Xur7/2HImtWXsGUNbt1pCFrZ1C0MhBFIkJLZuhZGT6gLKDWtcZ2oAjer/+m85z8j9f5pc979Vgh//EX1ee21COydoPVtH8BM6ZUIDKYmIIVOTqVVm+zJpmcAdSdupmwZ293s7hnJITye0GoqhaDEFVatFVOI2oUmHQ2jW6gTabehc3WEAI4hsw7rVCEKvM1B0+wxVrzuoxL2BJsO+Q7PeEKDd1UjfssNy6HGtjIicKFiaj3WZBlRm4nFBZj/RTJ/IkiKfNkyYoYeww2rPpjpJgLAxZhhzNCfnKlYZ9eMOdBrx+SgOMuohMre6OQ/W2Gxq2ZusMvVDnLMYQsQRCkwyH6aTUQGq25qLy32/H6Ex+YhYTUOdfRjBGPTuMQcrewtUpzzQquFaXjHMoXHiOBWmYig/rANZCR+NU1iwfJAHIeOs3D2iQTVsuJnaVm6dX+l/wm3QjuyTUaJGRpOWJ7oY4NRMOH+uL52X7KNFGdQ0TAoAAA==') format('woff2'),
	  url('~@/static/font/iconfont.woff?t=1590501729869') format('woff'),
	  url('~@/static/font/iconfont.ttf?t=1590501729869') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
	  url('~@/static/font/iconfont.svg?t=1590501729869#iconfont') format('svg'); /* iOS 4.1- */
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.iconjiantou:before {
	  content: "\e613";
	}
	
	.iconicontouxiang:before {
	  content: "\e678";
	}
	
	.iconsousuo:before {
	  content: "\e612";
	}

</style>
