let particles = {
	particles: {
		number: {
			value: 400
		},
		color: {
			value: ['#1e79f7', '#c9711e']
		},
		shape: {
			type: 'circle'
		},
		opacity: {
			value: 1,
			random: false,
			anim: {
				enable: true,
				speed: 0.35,
				opacity_min: 0.6,
				sync: false
			}
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: false
			}
		},
		line_linked: {
			enable: false
		},
		move: {
			enable: true,
			speed: 0.4,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200
			}
		}
	},
	retina_detect: true
}	
export default particles;