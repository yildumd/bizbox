import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  // Path resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  },

  // Base path handling
  base: mode === 'production' ? '/' : './',

  // Development server config
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  },

  // Preview config
  preview: {
    port: 3000,
    strictPort: true,
    host: true
  },

  // Build configuration
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'esbuild' : false,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('BusinessIdeaTemplate')) {
            return 'idea-templates';
          }
          if (id.includes('BusinessIdeas/categories')) {
            return 'business-ideas';
          }
        }
      }
    }
  },

  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'prop-types'
    ],
    exclude: ['js-big-decimal'],
    force: true
  },

  // Environment variables
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version)
  }
}));