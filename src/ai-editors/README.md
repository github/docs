# AI-powered editors

A CLI tool for using AI to edit documentation according to defined prompts.

This tool runs an AI review of content files based on an (extensible) set of prompt-driven guidelines. The default is versioning. In the future we might add: scannability, readability, style, technical accuracy.

This script calls the [Models API](https://docs.github.com/en/rest/models/inference?apiVersion=2022-11-28#run-an-inference-request). It requires a personal access token with Models scopes in your `.env` file.

## Usage

```sh
tsx src/ai-editors/scripts/ai-edit.js --editor <type> --response <type> --files <file1.md>
```

* `--files, -f`: One or more content file paths to process (required).
* `--response, -r`: Specify the AI response format. Options: `rewrite` (default), `list`, `json`.
* `--editor, -e`: Specify one or more editor types (default: `versioning`).

**Example:**

```sh
tsx src/ai-editors/scripts/ai-edit.js --files content/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo.md --editor versioning --response list
```

## Requirements

* A valid `GITHUB_TOKEN` with Models scopes in your local `.env` file.

## Future development ideas

* Add prompts to support all available editors.
* Test prompts in Models UI and add evals to prevent regressions.
* Enable running in CI.
* Explore the new `llm` plugin for GitHub Models (see https://github.com/github/copilot-productivity/discussions/5937).
* Add MCP for more comprehensive context.
* Integrate with Copilot Edit mode in VS Code.
* Add unit tests.
