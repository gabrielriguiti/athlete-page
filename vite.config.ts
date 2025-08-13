import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    base: "/athlete-page/", // nome do repositório no GitHub
    build: {
        outDir: "dist", // pasta de saída
    },
});
