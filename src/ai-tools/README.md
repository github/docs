# AI-powered tools

The ai-tools subject provides CLI tools for using AI to edit and refine documentation based on prompt-driven guidelines. It integrates with GitHub Models API to apply automated improvements to content files.

## Purpose & Scope

This subject is responsible for:
- AI-powered content refinement (versioning, intro, etc.)
- Prompt-driven content editing with LLMs
- Integration with GitHub Models API
- Copilot Spaces export and conversion to prompts
- Automated content quality improvements
- Extensible prompt system for different refinement types

Current refinements: versioning, intro. Future: scannability, readability, style, technical accuracy.

## Architecture & Key Assets

### Key capabilities and their locations

- `scripts/ai-tools.ts` - Main CLI tool for running AI refinements
- `lib/call-models-api.ts` - Client for GitHub Models API inference
- `lib/prompt-utils.ts` - Loads prompts and executes refinements
- `prompts/*.md` - Prompt templates for different refinement types

## Setup & Usage

### Requirements

Add GitHub token with Models scopes to `.env`:

```bash
GITHUB_TOKEN=ghp_your_token_here
```

### Running refinements

```bash
# Direct command
tsx src/ai-tools/scripts/ai-tools.ts --refine versioning --files content/path/to/file.md

# Via npm script
npm run ai-tools -- --refine versioning --files content/path/to/file.md
```

### Options

- `--files, -f`: One or more content file paths (required)
- `--refine, -r`: Refinement type(s) - `versioning`, `intro` (default: `versioning`)
- `--write, -w`: Write changes to files (default: false, shows diff only)
- `--verbose, -v`: Verbose output for debugging
- `--space, -s`: Use Copilot Space as prompt
- `--exportSpace`: Export Copilot Space to prompt file

### Examples

Refine versioning in a file:
```bash
npm run ai-tools -- --files content/copilot/tutorials/coding-agent/get-the-best-results.md --refine versioning
```

Refine intro:
```bash
npm run ai-tools -- --files content/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo.md --refine intro
```

Multiple files:
```bash
npm run ai-tools -- --files file1.md file2.md file3.md --refine versioning
```

Write changes (not just preview):
```bash
npm run ai-tools -- --files content/path/to/file.md --refine versioning --write
```

## Data & External Dependencies

### Data inputs
- Content markdown files with frontmatter
- Prompt templates in `prompts/` directory
- GitHub Models API for inference

### Dependencies
- GitHub Models API - Requires `GITHUB_TOKEN` with Models scopes
- `commander` - CLI argument parsing
- `dotenv` - Environment variable loading
- Copilot Spaces (optional) - Can export/import prompts

### Data outputs
- Refined markdown content (preview or written to files)
- Diffs showing proposed changes
- Merged frontmatter updates

## Cross-links & Ownership

### Related subjects
- [`src/content-render`](../content-render/README.md) - Content parsing and rendering
- Content files in `content/` - Target of refinements

### Internal documentation
- [GitHub Models API docs](https://docs.github.com/en/rest/models/inference)
- Copilot Spaces for prompt management

### Ownership
- Team: Docs Content (for use and development)
- Note: These tools are for the docs-content team. We welcome them to use Copilot to support and develop these tools, but docs-engineering is largely hands off.

## Current State & Next Steps

### Available refinement types

Current prompts:
- `versioning` - Refines version-related content
- `intro` - Improves article introductions

Each prompt defines:
- Instructions for the LLM
- Expected output format
- Quality criteria

### Adding new refinements

1. Create prompt file in `prompts/` (e.g., `readability.md`).
2. Write prompt instructions and examples.
3. Test with Models UI first.
4. Use `--refine readability` to apply.

Prompt template in `prompts/prompt-template.yml`.

### Copilot Spaces integration

Export Space to prompt:
```bash
npm run ai-tools -- --exportSpace space-id --output prompts/my-prompt.md
```

Use Space as prompt:
```bash
npm run ai-tools -- --space space-id --files content/path/to/file.md
```

### Known limitations
- Requires GitHub token with Models scopes
- API rate limits apply
- Quality depends on prompt engineering
- Currently manual execution (not in CI)
- No automated testing/evals yet

### Best practices

**Prompt engineering:**
- Test prompts in GitHub Models UI first
- Include clear examples in prompts
- Define expected output format
- Iterate on prompts based on results

**File selection:**
- Start with single files to test
- Use glob patterns for batch processing
- Preview changes before writing

**Quality assurance:**
- Always review AI suggestions
- Don't blindly accept all changes
- Consider subject matter expertise needed
- Test refined content for correctness

### Troubleshooting

**Missing token error:**
Add `GITHUB_TOKEN` to `.env` with Models scopes.

**API errors:**
- Check token permissions
- Verify rate limits
- Check Models API status

**Poor refinement quality:**
- Refine the prompt template
- Add more examples
- Test in Models UI first
- Consider different model/parameters
