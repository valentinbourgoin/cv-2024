import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier/flat";

const eslintConfig = [...nextConfig, prettierConfig];

export default eslintConfig;
