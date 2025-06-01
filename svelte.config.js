import adapter from '@sveltejs/adapter-netlify';

export default {
  compilerOptions: {
    runes: true
  },
  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
};
