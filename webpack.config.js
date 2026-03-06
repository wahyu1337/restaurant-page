// webpack config js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";


export default{
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules:[
            {   // css
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                // Image Loader (js)
                test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
                type: 'asset/resource',
            },           
        ],
    },
};