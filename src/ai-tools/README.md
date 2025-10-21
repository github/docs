# AI-powered tools

A CLI tool for using AI to edit documentation according to defined prompts.

This tool refines content files using AI based on an (extensible) set of prompt-driven guidelines. The default is versioning refinement. In the future we might add: scannability, readability, style, technical accuracy.

This script calls the [Models API](https://docs.github.com/en/rest/models/inference?apiVersion=2022-11-28#run-an-inference-request). It requires a personal access token with Models scopes in your `.env` file.

## Usage

```sh
# Direct command
tsx src/ai-tools/scripts/ai-tools.ts --refine <type> --files <file1.md>

# Or via npm script
npm run ai-tools -- --refine <type> --files <file1.md>
```

* `--files, -f`: One or more content file paths to process (required).
* `--refine, -r`: Specify one or more refinement types (default: `versioning`).

**Examples:**

```sh
# Direct command
tsx src/ai-tools/scripts/ai-tools.ts --files content/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo.md --refine versioning

# Via npm script  
npm run ai-tools -- --files content/copilot/tutorials/coding-agent/get-the-best-results.md --refine intro
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
