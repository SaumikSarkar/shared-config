# @saumiksarkar/eslint-config

[![GitHub Release](https://img.shields.io/github/v/release/SaumikSarkar/shared-config?include_prereleases&label=npm)](https://github.com/SaumikSarkar/shared-config/pkgs/npm/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

TypeScript/React ESLint configuration optimized for:
- **Code Quality**: SonarQube-compatible rules
- **Consistency**: Airbnb style guide base
- **Performance**: Fast linting with focused rule sets
- **Jira Integration**: Jira ticket references in commit footer

## 📦 Available Configurations

| Preset | Description |
|--------|-------------|
| `@saumiksarkar/eslint-config` | Base JavaScript rules |
| `@saumiksarkar/eslint-config/react` | React + JSX rules |
| `@saumiksarkar/eslint-config/typescript` | Base TypeScript rules |
| `@saumiksarkar/eslint-config/react-typescript` | React + TypeScript rules |
| `@saumiksarkar/eslint-config/jest` | Jest testing patterns |
| `@saumiksarkar/eslint-config/jest-react` | React + Jest testing patterns |
| `@saumiksarkar/eslint-config/node` | Node.js best practices |
| `@saumiksarkar/eslint-config/vitest` | Vitest testing patterns |
| `@saumiksarkar/eslint-config/vitest-react` | React + Vitest testing patterns |
| `@saumiksarkar/eslint-config/chai-mocha` | Chai + Mocha testing patterns |
| `@saumiksarkar/eslint-config/sonar` | SonarQube best practices |

## 🚀 Installation

```bash
yarn add -D @saumiksarkar/eslint-config eslint@^8
# or
npm install --save-dev @saumiksarkar/eslint-config eslint@^8
```

## ⚙️ Usage

### Extend in your ESLint config:

```js
// .eslintrc.js
module.exports = {
  extends: ["@saumiksarkar/eslint-config"],
  // Project-specific overrides
  rules: {
    "react/prop-types": "off" // Example override
  }
};
```

### Add lint scripts to package.json:

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --fix"
  }
}
```

## 🔧 Features

### Rule Highlights

- **TypeScript**: Strict type-checking rules
- **React**: Hooks optimization, JSX best practices
- **Accessibility**: jsx-a11y plugin enabled
- **Formatting**: Prettier integration (no conflicts)

### IDE Setup

- Install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Enable "Auto Fix on Save" in VSCode settings:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 📜 License

MIT © [Saumik Sanjaykumar Sarkar](https://github.com/SaumikSarkar).
Part of the [shared-config](https://github.com/SaumikSarkar/shared-config) monorepo.
