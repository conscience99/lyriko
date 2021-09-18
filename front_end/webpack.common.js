const path = require("path");
const loader = require("sass-loader");
const webpack = require("webpack");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/front_end"),
    filename: "[name].bundle.js",
  },
  devtool: false,
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
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

/* const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/front_end"),
    filename: "[name].js",
  },
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
        test: /\.(sass|css|scss)$/,

        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: {
                plugins: "autoprefixer",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: path.resolve(__dirname, "./static/images"),
              name: "[name]-[sha1:hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),

    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
};
 */
