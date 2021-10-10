const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    /* entry: {
        app: "./src/index.js",
        //hot: "webpack/hot/dev-server.js",
        //client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
    }, */
    entry: "/src/index.js",
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        client: {
            overlay: true,
        },
        hot: true,
        open: true,
        static: "./public",
        historyApiFallback: true,
    },
    mode: "development",

    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
                resolve: {
                    extensions: [".js", ".jsx"],
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: [
                    {
                        // inject CSS to page
                        loader: "style-loader",
                    },
                    {
                        // translates CSS into CommonJS modules
                        loader: "css-loader",
                    },
                    {
                        // Run postcss actions
                        loader: "postcss-loader",
                        options: {
                            // `postcssOptions` is needed for postcss 8.x;
                            // if you use postcss 7.x skip the key
                            postcssOptions: {
                                // postcss plugins, can be exported to postcss.config.js
                                plugins: function () {
                                    return [require("autoprefixer")];
                                },
                            },
                        },
                    },
                    {
                        // compiles Sass to CSS
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "[name].bundle.js",
    },
};
