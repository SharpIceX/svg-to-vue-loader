<!-- markdownlint-disable MD041 -->

## Usage

### Install

```bash
npm add --save-dev svg-to-vue-loader vue-loader @vue/compiler-sfc # Npm
yarn add -D svg-to-vue-loader vue-loader @vue/compiler-sfc # Yarn
pnpm add -D svg-to-vue-loader vue-loader @vue/compiler-sfc # Pnpm
```

### Config

```typescript
// webpack.config.ts
import type webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import type { LoaderOptions } from 'svg-to-vue-loader';

export default {
  // ...
  // support cache
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            use: [
              'vue-loader',
              {
                loader: 'svg-to-vue-loader',
                options: {
                  // Your options here
                } satisfies LoaderOptions,
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  // ..
} satisfies webpack.Configuration;
```

or

```javascript
// webpack.config.ts
import { VueLoaderPlugin } from 'vue-loader';

/**
 * @type {import('webpack').Configuration}
 */
export default {
  // ...
  // support cache
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'psvg-to-vue-loader',
            use: [
              'vue-loader',
              {
                loader: 'svg-to-vue-loader',
                /** @type {import('svg-to-vue-loader').LoaderOptions} */
                options: {
                  // Your options here
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [new vueLoaderPlugin()],
  // ..
};
```

## Types

```typescript
// types/type.d.ts

declare module '*.svg' {
  import type { ComponentType } from 'svg-to-vue-loader';
  const component: ComponentType;
  export default component;
}
```

or

```typescript
// types/type.d.ts

declare module '*.svg' {
  import type { noSizeComponentType } from 'svg-to-vue-loader';
  const component: ComponentType;
  export default component;
}
```
