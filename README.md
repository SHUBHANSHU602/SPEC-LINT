<p align="center">
  <img src="./assets/logo.png" alt="Spec Lint Logo" width="200"/>
</p>

<h1 align="center">Spec Lint</h1>

<p align="center">
  A lightweight, extensible YAML & JSON specification linter.
</p>


# Spec-Lint

Spec-Lint is a lightweight, rule-based linter for structured specification files written in JSON or YAML.

It provides a small but extensible validation engine designed to detect structural issues early in the development lifecycle. The core is intentionally minimal and decoupled from the CLI layer, allowing future integrations such as editor plugins or automated pipelines.

---

## Overview

Specification documents are often used as contracts between systems. Small inconsistencies — missing fields, incorrect structure, or invalid assumptions — can lead to runtime errors or integration failures.

Spec-Lint addresses this by:

- Parsing JSON and YAML documents
- Running modular validation rules
- Producing standardized diagnostics
- Supporting configurable rule severity
- Providing machine-readable output for CI

The project is designed with clear separation between:

- **Parsing layer**
- **Rule execution engine**
- **Diagnostic model**
- **Output formatting**
- **CLI interface**

This makes the system predictable, testable, and extensible.

---

## Installation

Clone the repository and install dependencies:

```
git clone https://github.com/your-username/spec-lint.git
cd spec-lint

npm install
```

Build the project:


```
npm run build
```


After building, run:
```
node dist/cli/index.js lint <file>

Example;-

node dist/cli/index.js lint example.yaml
```



##Usage

---


Lint a specification file:
```
spec-lint lint example.yaml

```

If issues are detected:
```
ERROR  required-fields  Missing required field: name $.name
```

If no issues are found:
```
✔ No issues found
```

Output Formats

By default, Spec-Lint uses a human-readable formatter.

You can switch to JSON output:
```
spec-lint lint example.yaml --format json
```
Example JSON output:
```
[
  {
    "ruleId": "required-fields",
    "severity": "error",
    "message": "Missing required field: name",
    "path": "$.name"
  }
]
```
## Project Structure
```
spec-lint/
├─ src/
│ ├─ cli/
│ │ └─ index.ts # CLI entry point
│ │
│ ├─ core/
│ │ ├─ engine.ts # Rule execution engine
│ │ ├─ context.ts # Rule interfaces & shared context
│ │ └─ diagnostic.ts # Standardized diagnostic model
│ │
│ ├─ parser/
│ │ ├─ index.ts # Parser entry (file type detection)
│ │ ├─ json.ts # JSON parser
│ │ └─ yaml.ts # YAML parser
│ │
│ ├─ rules/
│ │ ├─ generic/
│ │ │ └─ required-fields.ts # Example domain-agnostic rule
│ │ └─ index.ts # Rule aggregation
│ │
│ ├─ formatters/
│ │ └─ pretty.ts # Human-readable CLI formatter
│ │
│ └─ index.ts # Public API exports
│
├─ package.json
├─ tsconfig.json
└─ README.md
```