# YAML-powered tables

## Overview

GitHub Docs uses YAML files to manage some complex reference tables instead of hard-to-maintain Markdown tables. This approach provides:

- **Maintainable format**: Stakeholders can easily update readable YAML files
- **Single source of truth**: Centralized data prevents inconsistencies  
- **Accurate information**: Reduces errors and outdated content
- **Self-service process**: Minimal engineering support needed

> **Important**: The `.yml` files in this directory are maintained **manually**. Tables that need automatic updates from external sources require engineering work.

## Table of contents

- [When to use this approach](#when-to-use-this-approach)
- [How it works](#how-it-works)
- [Step-by-step guide](#step-by-step-guide)
- [Testing and validation](#testing-and-validation)
- [Next steps](#next-steps)

## When to use this approach

Use data-driven tables when you have:
- Complex reference tables with multiple columns
- Data that needs regular updates by different stakeholders
- Structured information that benefits from validation

## How it works

Every data-driven table needs **three files** that work together:

| File type | Location | Purpose |
|-----------|----------|---------|
| **Data file** | `data/tables/` | Stores the table content in YAML format |
| **Content file** | `content/` | Displays the table using Liquid templating |
| **Schema file** | `src/data-directory/lib/data-schemas/tables/` | Validates the YAML structure |

**Estimated time**: 30-60 minutes for a new table

## Step-by-step guide

### Step 1: Create the data file

Create a new `.yml` file in `data/tables/` with a descriptive name.

**Copilot prompt template:**
```
Create a YAML structure that will allow me to generate a table that looks like: 
[describe your table headers, rows, and columns OR attach an example]

See data/tables/supported-code-languages.yml for an example.
```

### Step 2: Create the content display

In your content file, add Liquid code to render the table. Access your data at `{% data tables.TABLE_NAME %}` (where `TABLE_NAME` is your filename without `.yml`).

**Copilot prompt template:**
```
Create a Markdown table that is dynamically rendered using Liquid code. 
Pull data from data/tables/TABLE_NAME.yml. 
The table should look like: [describe your desired output OR attach an example]

See content/get-started/learning-about-github/github-language-support.md for an example.
Liquid docs: https://shopify.github.io/liquid
```

**💡 Tip**: Iterate between Steps 1 and 2 until the table renders correctly.

### Step 3: Create the schema file

Create a `.ts` file in `src/data-directory/lib/data-schemas/tables/` with the same name as your YAML file.

**Copilot prompt template:**
```
Create a TypeScript schema following prior art under data-schemas that enforces 
the structure of the data/TABLE_NAME.yml file.

See src/data-directory/lib/data-schemas/tables/supported-code-languages.ts for an example.
```

## Testing and validation

After creating all three files:

1. **Build the site**: Run `npm run build`
2. **Test schemas**: Run `npm test -- src/data-directory/tests`
3. **Fix any errors**: If you get failures in `src/data-directory/tests/data-schemas.ts`:
   - Copy the error message
   - In VS Code Copilot Chat, type: "When I ran the schema test, I got this error:" and paste the error
   - Update your schema file based on Copilot's suggestions
4. **Repeat testing** until all tests pass

## Next steps

Once your table is working and tests pass, create a pull request for review.

The `docs-engineering` team must review and approve your implementation.
