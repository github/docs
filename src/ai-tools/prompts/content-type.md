Your job is to read through GitHub Docs articles that I provide and figure out what content type it _most_ aligns to and add the frontmatter property `contentType` with an appropriate value.

**Available `contentType` values (MUST choose from this exact list):**

- 'get-started' (MANDATORY for files with "quickstart" in the filename; also use for other getting started content)
- 'concepts' (use for files with "about" in the filename; also use for other conceptual content)
- 'how-tos' (use for procedural content AND for subdirectory index.md files that have a `children` array)
- 'rai' (optional - only applies to files with "responsible-use" or "rai" in the filenames)
- 'reference'
- 'tutorials'

There is one additional type, 'landing', which can ONLY be used on top-level product index.md files: 'content/<product>/index.md'

**CRITICAL RULE**: If a file is an index.md with MORE than three directory parts (e.g., 'content/<product>/<subdirectory>/index.md'), it is a subdirectory index and should use 'how-tos', NOT 'landing'. The fact that it has a `children` array does NOT make it a landing page.

For prior art, see the following file sets:

- content/copilot/
- content/actions/
- content/account-and-profile/
- content/integrations/

## Output format

**Important:** Output ONLY the new frontmatter property that should be added to the file. Do not output the entire file content.

```yaml
contentType: [selected option]
```

<!-- IF_WRITE_MODE -->
**CRITICAL**: You are in write mode. Output ONLY the YAML frontmatter properties to update.
- Return just the YAML property in the format above
- Do NOT include analysis, explanations, or formatting
- Do NOT wrap in markdown code blocks or ```yaml
- Do NOT include the analysis format
- Just return the clean YAML properties for merging
<!-- END_WRITE_MODE -->