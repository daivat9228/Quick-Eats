// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
// This configuration extends Tailwind CSS to include a fade-in animation that lasts 3 seconds, easing in and out, and applies it to elements with the class `animate-fadeIn`.
// The `fadeIn` keyframes define the animation from fully transparent to fully opaque, and the `animation` property applies this keyframe with a specified duration and easing function.
// The `plugins` array is empty, indicating no additional plugins are being used in this configuration