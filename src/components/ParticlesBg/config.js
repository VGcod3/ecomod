const options = {
    background: {
        color: {
            value: "#121212",
        },
    },
    fpsLimit: 120,
    particles: {
        color: {
            value: "#ffffff",
            width: 1,

        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.9,
            width: 1,
        },
        move: {
            enable: true,
            random: false,
            speed: 4,
            straight: true,
        },
        number: {
            density: {
                enable: true,
            },
            value: 180,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 0.5, max: 1 },
        },
    },
    detectRetina: true,
}

export default options;