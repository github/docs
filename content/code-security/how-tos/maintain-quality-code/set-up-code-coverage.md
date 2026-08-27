---
title: Setting up code coverage for your repository
shortTitle: Set up code coverage
intro: 'Use built-in code coverage from {% data variables.product.prodname_code_quality_short %} to find untested code on pull requests, without paying for or maintaining a separate third-party service.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-repo-enable %}'
audience:
  - driver
contentType: how-tos
layout: inline
category:
  - Improve code quality
---

You can set up code coverage for your repository in two ways: 

* **Automatic setup:** Use the AI-powered agent to generate a workflow automatically. Choose this option if:
  * You want to get started quickly without writing YAML configuration.
  * Your project uses common test frameworks and build patterns.
  * You're comfortable iterating on an AI-generated workflow.
* **Manual setup:** Configure your CI workflow yourself. Choose this option if:
  * You need precise control over the coverage process.
  * You have complex CI requirements (such as private registries or custom build steps).
  * You want to understand exactly how coverage is configured.

## Automatic setup

You can use the automatic setup option to generate a working code coverage workflow without manually authoring CI configuration. An agent analyzes your repository, identifies your test framework, and opens a pull request with a coverage workflow ready for review.

> [!NOTE]
> Automatic setup uses AI to generate the workflow file. There is no additional cost for using this feature.

### Prerequisites for automatic setup

* {% data variables.product.prodname_code_quality_short %} is enabled for your repository. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
* Your repository has an existing test suite.

### Generating a coverage workflow automatically

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the sidebar, under "Security", click **{% data variables.code-quality.code_quality_ui_settings %}** to display the "{% data variables.code-quality.code_quality_ui %}" page.
1. In the "Code coverage analysis" section, click the **Setup** dropdown box.
1. In the list, select **Generate workflow with AI**. Wait for the agent to analyze your repository. The agent opens a draft pull request and posts a checklist of the steps it is working through.
1. To review the pull request, click **Review pull request**. 
   Review the pull request once the agent completes its work. The pull request description summarizes the changes, including any project configuration updates, workflow file changes, and coverage output settings.
1. If the workflow runs successfully in CI and coverage uploads correctly, merge the pull request.

   If the workflow needs adjustments, see [AUTOTITLE](/code-security/concepts/code-quality/automatic-code-coverage-setup) for guidance on the different outcomes and how to iterate.

For more information about how the agent works and what to expect, see [AUTOTITLE](/code-security/concepts/code-quality/automatic-code-coverage-setup).

## Manual setup

Built-in code coverage lets you track how thoroughly your tests exercise your code, without adding a third-party service to your toolchain or budget. In the following procedures, you will generate a Cobertura XML coverage report from your test suite, upload it to {% data variables.product.github %}, and view the coverage results on your pull requests.

### Prerequisites for manual setup

* {% data variables.product.prodname_code_quality_short %} is enabled for your repository.
* Your repository has a test suite that runs in {% data variables.product.prodname_actions %}.
* Your test framework can produce a coverage report in **Cobertura XML** format.

### Step 1: Generate a Cobertura XML coverage report

Configure your test framework to output a coverage report in the Cobertura XML format. Code coverage works with any programming language that can produce this format.

1. Identify the coverage tool for your language from the table below.
1. Add the appropriate command or configuration to your CI workflow so that a Cobertura XML file is generated each time your tests run.

| Language | Framework / Tool | How to generate Cobertura XML |
|----------|-----------------|-------------------------------|
| Python | `pytest` + `pytest-cov` | `pytest --cov=. --cov-report=xml` |
| Java | JaCoCo | Use the `cover2cover.py` script or the JaCoCo-to-Cobertura Gradle/Maven plugin |
| JavaScript/TypeScript | Istanbul / `nyc` | `nyc report --reporter=cobertura` |
| Ruby | SimpleCov | Add `SimpleCov::Formatter::CoberturaFormatter` |
| Go | `go test` + `gocover-cobertura` | `go test -coverprofile=cover.out && gocover-cobertura < cover.out > coverage.xml` |

> [!TIP]
> If your framework isn't listed above, check its documentation for Cobertura output support. Many tools either support it directly or can convert to Cobertura XML from other formats.

### Step 2: Upload the coverage report

After your tests generate a Cobertura XML report, upload it to {% data variables.product.github %} so coverage results appear on pull requests.

1. Open your repository's CI workflow file (for example, `.github/workflows/ci.yml`).
1. Add the following step after the step that runs your tests and generates the coverage report:

   ```yaml copy
   - name: Upload coverage report
     if: {% raw %}github.event_name != 'pull_request' || github.event.pull_request.head.repo.full_name == github.repository{% endraw %}
     uses: actions/upload-code-coverage@v1
     with:
       file: COVERAGE-FILE-PATH.xml
       language: LANGUAGE
       label: LABEL
   ```

1. Replace the following values:
   * **`COVERAGE-FILE-PATH.xml`**: The path to your Cobertura XML report (for example, `coverage.xml` or `target/site/jacoco/cobertura.xml`).
   * **`LANGUAGE`**: The primary language of the code being covered (for example, `Python`, `Java`, `JavaScript`).
   * **`LABEL`**: A label to identify this coverage report (for example, `code-coverage/pytest`).
1. Commit and push the workflow change.

### Full workflow example

This example runs Python tests with `pytest-cov` and uploads the coverage report:

```yaml annotate copy
# This workflow runs your test suite, generates a Cobertura XML coverage report, and uploads it to {% data variables.product.github %}. Once this workflow is committed, coverage results appear automatically on every pull request.
name: Code Coverage

# Run on pushes to the default branch (to establish the baseline) and on pull requests (to compare against it). {% data variables.product.prodname_code_quality_short %} compares PR branch coverage to the default branch, so both triggers are needed.
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

# The `code-quality: write` permission is required to upload coverage data. No other elevated permissions are needed.
permissions:
  contents: read
  code-quality: write

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      # Check out the PR head commit (not the merge commit) so coverage line numbers map correctly to the diff.
      - uses: {% data reusables.actions.action-checkout %}
        with:
          ref: {% raw %}${{ github.event.pull_request.head.sha || github.sha }}{% endraw %}

      # Replace this step with whatever language setup your project uses (Node.js, Java, Go, etc.). The upload action works with any language that produces a Cobertura XML report.
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: "3.x"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install pytest pytest-cov

      # Adapt this step for your test framework. The key requirement is producing a Cobertura XML file. For other languages, see the framework table earlier in this article.
      - name: Run tests with coverage
        run: pytest --cov=. --cov-report=xml

      # This step replaces any third-party coverage upload (Codecov, Coveralls, etc.). After this runs, the `{% data variables.code-quality.pr_commenter %}` bot posts a coverage summary directly on the pull request.
      - name: Upload coverage report
        if: {% raw %}github.event_name != 'pull_request' || github.event.pull_request.head.repo.full_name == github.repository{% endraw %}
        uses: actions/upload-code-coverage@v1
        with:
          file: coverage.xml
          language: Python
          label: code-coverage/pytest
```

### Step 3: View coverage results on pull requests

1. Open a pull request (or push to an existing one) that triggers the workflow you configured.
1. After the workflow completes, look for a comment from `{% data variables.code-quality.pr_commenter %}` on the pull request. The comment includes:
   * The aggregate line coverage percentage for the pull request branch compared to the default branch.
   * A per-file breakdown showing which files gained or lost coverage.
