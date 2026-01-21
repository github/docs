---
title: Document API
intro: 'Generate comprehensive API documentation from your code.'
versions:
  feature: copilot
category:
  - Prompt files
  - Development workflows
  - Configure Copilot
complexity:
  - Advanced
octicon: copilot
topics:
  - Copilot
contentType: tutorials
---

{% data reusables.copilot.prompt-files-preview-note %}

This prompt file generates OpenAPI 3.0 specifications for REST API endpoints by analyzing your API code and creating standardized, machine-readable documentation.

## OpenAPI specification prompt

```text copy
---
agent: 'agent'
description: 'Generate OpenAPI 3.0 specification for API endpoints'
---

## Task

Analyze the API endpoint code and generate a valid OpenAPI 3.0 specification in YAML format.

## OpenAPI Structure

Generate a complete OpenAPI spec including:

1. **OpenAPI Header**
   - OpenAPI version (3.0.3)
   - API info (title, description, version)
   - Server configuration

2. **Path Definitions**
   - HTTP method and path
   - Operation summary and description
   - Tags for organization

3. **Parameters Schema**
   - Path parameters with type validation
   - Query parameters with constraints and defaults
   - Request body schema using proper JSON Schema
   - Required vs optional parameters

4. **Response Schemas**
   - Success responses (200, 201, etc.) with schema definitions
   - Error responses (400, 401, 404, 500) with error schema
   - Content-Type specifications
   - Realistic example values

5. **Components Section**
   - Reusable schemas for request/response models
   - Security schemes (Bearer token, API key, etc.)
   - Common parameter definitions

## Requirements

- Generate valid OpenAPI 3.0.3 YAML that passes validation
- Use proper JSON Schema for all data models
- Include realistic example values, not placeholders
- Define reusable components to avoid duplication
- Add appropriate data validation (required fields, formats, constraints)
- Include security requirements where applicable

Focus on: ${input:endpoint_focus:Which specific endpoint or endpoints should be documented?}

Generate production-ready OpenAPI specification that can be used with Swagger UI, Postman, and code generators.
```

## How to use this prompt file

1. Save the above content as `document-api.prompt.md` in your `.github/prompts` folder.
1. In {% data variables.product.prodname_vscode %}, display the {% data variables.copilot.copilot_chat_short %} view and enter `/document-api`. Optionally, you can also specify what specific endpoint you want documentation for by typing `endpoint_focus=GET /activities`, for example.

{% data reusables.copilot.prompt-files-further-reading %}
