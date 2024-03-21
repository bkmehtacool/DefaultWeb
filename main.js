function myFunction() {
	const e = document.getElementsByTagName('h1');
	var doc = new DOMParser().parseFromString(e, 'text/xml');
	console.log(document.body.children[0]);
}
