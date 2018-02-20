/*
 * Background image segments
 */
window.addEventListener('load', function() {
    document.querySelector('.banner').classList.add('loaded');
});
if (window.innerWidth > 992) {
    segmenter = new Segmenter(document.querySelector('.segmenter'), {
        pieces: 8,
		positions: [
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100},
			{top: 0, left: 0, width: 100, height: 100}
		],
		shadows: false,
		parallax: true,
		parallaxMovement: {min: 5, max: 15},
		animation: {
			duration: 2500,
			easing: 'easeOutExpo',
			delay: 0,
			opacity: .1,
			translateZ: {min: 10, max: 25}
		},
		onReady: function() {
            window.addEventListener('load', function() {
                segmenter.animate();
            });
		}
        // pieces: 4,
		// positions: [
		// 	{top: 2, left: 80, width: 20, height: 20},
		// 	{top: 2, left: 2, width: 40, height: 40},
		// 	{top: 20, left: 30, width: 50, height: 50},
		// 	{top: 50, left: 60, width: 30, height: 40}
		// ],
		// parallax: true,
		// parallaxMovement: {min: 5, max: 10},
		// onReady: function() {
        //     window.addEventListener('load', function() {
        //         segmenter.animate();
        //     });
		// }
    });
};
