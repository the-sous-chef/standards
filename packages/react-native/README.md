# React Native JS/TS Eslint Config

```sh
npm install -D @thesouschef/eslint-config-react-native
```
## Usage

In your (eslint config file)[https://eslint.org/docs/latest/user-guide/configuring/] for vanilla JS/TS projects, extend this library like:

```
extends: [
    "@thesouschef/eslint-config",
    "@thesouschef/eslint-config-react",
    "@thesouschef/eslint-config-react-native"
]
```

For more reference, see the (documentation)[https://eslint.org/docs/latest/user-guide/configuring/configuration-files#extending-configuration-files].

*NOTE:* We use prettier for formatting, which is run using (eslint-plugin-prettier)[https://www.npmjs.com/package/eslint-plugin-prettier]. As such, prettier is a required dependency. It is recommended that you use the prettier plugin for your editor in addition to the eslint plugin and turn off auto-formatting by any other plugin (including eslint).
