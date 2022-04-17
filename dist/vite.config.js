import { defineConfig } from 'vite';

export default defineConfig ({
	base: '/cjdanoy/web/',
	build: {
    chunkSizeWarningLimit: 1600,
  },
})