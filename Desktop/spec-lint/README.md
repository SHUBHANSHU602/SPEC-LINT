Spec-lint

A small, rule-based CLI tool to lint structured configuration/spec files like YAML and JSON.

The idea is simple: load a file → run a set of rules → report problems in a consistent way.

This is not tied to any specific domain (OpenAPI, AsyncAPI, Docker, etc.).
Right now it ships with a basic generic ruleset, but the architecture is designed to grow.

Folder Structure of this project

spec-lint/
├─ src/
│  ├─ cli/
│  │  └─ index.ts          # CLI entry
│  ├─ core/
│  │  ├─ engine.ts         # runs rules
│  │  ├─ context.ts        # parsed data holder
│  │  └─ diagnostic.ts     # Diagnostic model
│  ├─ parser/
│  │  ├─ yaml.ts
│  │  ├─ json.ts
│  │  └─ index.ts
│  ├─ rules/
│  │  ├─ generic/
│  │  │  ├─ required-fields.ts
│  │  │  └─ duplicate-keys.ts
│  │  └─ index.ts
│  ├─ formatters/
│  │  ├─ pretty.ts
│  │  └─ index.ts
│  └─ index.ts
├─ package.json
├─ tsconfig.json
└─ README.md

Why this exists

Config files fail silently way too often.
You only notice mistakes when:
a service doesn’t start
a CI pipeline breaks
or something behaves weirdly in production
spec-lint aims to catch obvious structural issues early, before those configs are actually used.
Think of it like:
ESLint, but for config/spec files
simple rules, clear diagnostics, no magic