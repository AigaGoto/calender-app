const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ["", ".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current"
                  }
                }
              ],
              "@babel/preset-react"
            ],
            plugins: [
              [
                "babel-plugin-import",
                {
                  libraryName: "@material-ui/icons",
                  libraryDirectory: "",
                  camel2DashComponentName: false
                }
              ]
            ]
          }
        }
      },
      {
        test: /react-datepicker.css/,
        use: [{ 
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }],
        exclude: /src/
      },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        use: [
           "style-loader",
          {
            loader: "css-loader",
            options: {
              localsConvention: "camelCase",
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};