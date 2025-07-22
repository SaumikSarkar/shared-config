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
| [`@saumiksarkar/eslint-config`](packages/eslint-config) | [![GitHub Release](https://img.shields.io/github/v/release/SaumikSarkar/shared-config?include_prereleases&label=npm)](https://github.com/SaumikSarkar/shared-config/pkgs/npm/eslint-config) | TypeScript/React rules with SonarQube compatibility |
| [`@saumiksarkar/commitlint-config`](packages/commitlint-config) | Not yet published | Enforces Jira keys in commits with semantic commits |
| [`@saumiksarkar/prettier-config`](packages/prettier-config) | Not yet published | Consistent code formatting |

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