# Standards

Common standards/styles configs for Sous Chef JS/TS projects

## Developing

Install dependencies:

```sh
nvm use
npm install
```

## Usage

### Start by adding our Typescript eslint configuration to `eslint.config.js`:

```sh
npm install -D @thesouschef/eslint-config
```

For pure typescript projects:

```ts
import config from "@thesouschef/eslint-config";

export default config;
```

For including the configuration along with other configurations:

```ts
import config from '@thesouschef/eslint-config';

export default [...config, <other rules>];
```

### For React projects:

```sh
npm install -D @thesouschef/eslint-config-react
```

```ts
import config from "@thesouschef/eslint-config";
import react from "@thesouschef/eslint-config-react";

export default [...config, ...react];
```

### For Next.JS projects:

```sh
npm install -D @thesouschef/eslint-config-next
```

```ts
import config from "@thesouschef/eslint-config";
import react from "@thesouschef/eslint-config-react";
import next from "@thesouschef/eslint-config-next";

export default [...config, ...react, ...next];
```

### For React Native projects:

NOTE: Under construction until `@react-native/eslint-config` adds support for flat config

```sh
npm install -D @thesouschef/eslint-config-react-native
```

```ts
import config from "@thesouschef/eslint-config";
import reactNative from "@thesouschef/eslint-config-react-native";

export default [...config, ...reactNative];
```

### Using our Prettier config:

```sh
npm install -D @thesouschef/prettier
```

Create a `.prettierrc.js` file with the following contents:

```js
export * from "@thesouschef/prettier";
```

If you wish to override any rules, then use the rules as such:

```js
import rules from '@thesouschef/prettier';

export default {
    ...rules,
    <your overrides>
};
```

### Contributing

This repo uses [nx](https://nx.dev/) to manage the various projects and [changesets](https://github.com/changesets/changesets) to manage deployments.
