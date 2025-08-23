import colors from 'tailwindcss/colors'

export default {
    theme: {
        colors: {
            gray: colors.gray,
            blue: colors.blue,
            red: colors.red,
            pink: colors.pink,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        }
    }
}