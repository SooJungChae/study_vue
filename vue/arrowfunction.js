// https://kr.vuejs.org/v2/guide/instance.html
// arrowfunction test!
var thisTest = new Vue({
	el: '#arrow',
	data: {
		a: 1
	},
	created: function () {
		// `this` 는 vm 인스턴스를 가리킵니다.
		alert('a is: ' + this.a)
	}
})