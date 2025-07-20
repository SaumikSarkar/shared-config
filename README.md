# @saumiksarkar Shared Configs

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Release](https://img.shields.io/github/v/release/SaumikSarkar/shared-config)](https://github.com/SaumikSarkar/shared-config/releases)

Centralized, versioned configuration packages for TypeScript/React projects.  
Enforces consistent code quality, commit standards, and Jira (SSPORT-*) integration across repositories.

## 🚀 Features
- **Auto-versioned**: `semantic-release` manages versions on PR merge
- **Monorepo-ready**: Isolated packages with shared tooling
- **Enterprise-friendly**: Private registry support (GitHub Packages/npm)

## 📦 Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@saumiksarkar/eslint-config`](packages/eslint-config) | [![ESLint Version](https://img.shields.io/npm/v/@saumiksarkar/eslint)](packages/eslint-config) | TypeScript/React rules with SonarQube compatibility |
| [`@saumiksarkar/commitlint-config`](packages/commitlint-config) | [![Commitlint Version](https://img.shields.io/npm/v/@saumiksarkar/commitlint)](packages/commitlint-config) | Enforces Jira keys in commits with semantic commits |
| [`@saumiksarkar/prettier-config`](packages/prettier-config) | [![Prettier Version](https://img.shields.io/npm/v/@saumiksarkar/prettier)](packages/prettier-config) | Consistent code formatting |

## 🔧 Installation

```bash
# Install specific configs (Yarn)
yarn add -D @saumiksarkar/eslint-config @saumiksarkar/commitlint-config

# Or with npm
npm install -D @saumiksarkar/eslint-config @saumiksarkar/commitlint-config
```

## 📜 License

MIT © [Saumik Sanjaykumar Sarkar](https://github.com/SaumikSarkar).
Private registry access requires authentication.