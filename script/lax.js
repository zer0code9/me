lax.init();
lax.addDriver('scrollY', function () {
    return window.scrollY
}, {frameStep: 0.5})

lax.addElements('taker', {
    scrollY: {
        translateY: [
            ["elInY", "elCenterY"],
            ['elHeight/4', 0]
        ],
        scale: [
            ["elInY", "elCenterY - 350"],
            [0.8, 1, 0.9]
        ],
        opacity: [
            ["elInY", "elCenterY - 350"],
            [0, 1]
        ]
    }
})
lax.addElements('divider', {
    scrollY: {
        translateY: [
            ["elInY", "elCenterY"],
            ['elHeight/4', 0]
        ],
        scale: [
            ["elInY", "elCenterY - 350"],
            [0.8, 1, 0.9]
        ],
        opacity: [
            ["elInY", "elCenterY - 350"],
            [0, 1]
        ]
    }
})
lax.addElements('.portion', {
    scrollY: {
        opacity: [
            ["elInY", "elCenterY - 350"],
            ['0', '0.8']
        ]
    }
})
lax.addElements('#name', {
    scrollY: {
        scale: [
            ["elCenterY - 350", "elCenterY + 600"],
            ['0.5', '1.4']
        ]
    }
})