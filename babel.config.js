module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "~": "./src",
          "@utils": "./src/utils",
          "@res": "./src/res",
          "@svg": "./src/res/svg",
          "@hooks": "./src/hooks",
          "@locales": "./src/locales",
        },
      },
    ],
  ],
};
