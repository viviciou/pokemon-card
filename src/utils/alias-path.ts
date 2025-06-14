import path from "path";

export const alias = {
  "@": path.resolve(__dirname, "./src"),
  "@components": path.resolve(__dirname, "./src/components"),
  "@ui": path.resolve(__dirname, "./src/components/ui"),
  "@pages": path.resolve(__dirname, "./src/pages"),
  "@hooks": path.resolve(__dirname, "./src/hooks"),
  "@services": path.resolve(__dirname, "./src/services"),
  "@utils": path.resolve(__dirname, "./src/utils"),
};