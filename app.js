
const Pageres = require('pageres');

const pageres = new Pageres({delay: 2})
	.src('https://www.facebook.com/', ['480x320', '1024x768', '1280x1024','iphone 5s'], {crop: true})
	.src('https://www.youtube.com/', ['1280x1024', '1920x1080'])
	.src('https://www.amazon.in/', ['1024x768'])

	.dest('D:/Projects/screenshots')
	.run()
	.then(() => console.log('done'));