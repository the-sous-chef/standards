# Prettier Config

```sh
npm install -D @thesouschef/prettier
```

## Usage

Read the prettier [documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations) for sharing configs.
Use the following string in your config:

```
"@thesouschef/prettier"
```

_NOTE:_ We use prettier for formatting, which is run using [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier). As such, prettier is a required dependency. It is recommended that you use the prettier plugin for your editor in addition to the eslint plugin and turn off auto-formatting by any other plugin (including eslint).
