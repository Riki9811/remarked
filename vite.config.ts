import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@assets": resolve(__dirname, "./src/assets"),
			"@components": resolve(__dirname, "./src/components"),
			"@constants": resolve(__dirname, "./src/constants"),
			"@hooks": resolve(__dirname, "./src/hooks"),
			"@routes": resolve(__dirname, "./src/routes"),
			"@myTypes": resolve(__dirname, "./src/types"),
		},
	},
	server: {
		port: 8000,
	},
	plugins: [svgr(), react()],
});
