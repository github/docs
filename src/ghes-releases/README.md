# GHES releases and deprecations

New GHES releases are cut about every 3 months and around the same time, the oldest release is deprecated (unofficially supported). The release schedule is located here: src/ghes-releases/lib/enterprise-dates.json

## About this directory

- `src/ghes-releases/lib` - The release and deprecation issue templates used as a checklist.
- `src/ghes-releases/scripts` - The scripts used to create new releases and deprecations for GHES.
- `src/ghes-releases/tests` - The tests used to verify the GHES releases and deprecations

## How to get help

Slack: `#docs-engineering`
Repo: `github/docs-engineering`

If you have a question about this feature, you can ask in the `#docs-engineering` Slack channel. If you notice a problem with this feature, you can open an issue in the `github/docs-engineering` repository.

## GHES releases

Every day a workflow runs to check whether it's time to create new release tracking issues. New release tracking issues get opened on the code freeze date for the new release.

New release issues get opened in the `docs-content` repo and use the templates located in `src/ghes-releases/lib/release-templates`.

### Adding or removing templates

Templates can be added and removed by simply adding a new file to the `release-template` directory using the naming convention that already exists. For every template in that directory, a new issue will be created. The issues are linked together using the tasklist in the parent template `release-steps-0.md`. Each template file has a corresponding liquid variable for the issue url created from the template. The liquid variable format is `{{ release-steps-<TEMPLATE NUMBER>-url }}`. The liquid variables can be used in the templates to autopopulate issues and link issues together.

## GHES deprecations

Every day a workflow runs to check whether it's time to create new deprecation tracking issues. New deprecation tracking issues get opened 7 days before the deprecation date. There is only one template used to generate the deprecation tracking issue (`src/ghes-releases/lib/deprecation-steps.md`).

## Template format

Templates in `src/ghes-releases/lib/release-templates` are Markdown, YAML frontmatter, and Liquid. The Liquid variables available to those templates are _not_ the same as liquid variables used by the Docs team for content and data. See the [Template variables](#template-variables) for the available variables.

## Template variables

- `{{ release-number }}` - The GHES release number. For example, `3.13`.
- `{{ release-target-date }}` - The target GHES release date. For example, `2021-09-01`.
- `{{ release-prp }}` - The enterprise team's primary responsible person (PRP) for the release.
- `{{release-feature-freeze-date }}` - The feature freeze date for the release. For example, `2021-08-01`.
- `{{ release-code-freeze-date }}` - The code freeze date for the release. For example, `2021-08-15`.
- `{{ release-rc-target-date }}` - The release candidate target date for the release. For example, `2021-08-30`.
- `{{ release-steps-0-url }}` - The URL of the issue that was created with the `release-steps-0.md` template.
- `{{ release-steps-1-url }}` - The URL of the issue that was created with the `release-steps-1.md` template.
- `{{ release-steps-2-url }}` - The URL of the issue that was created with the `release-steps-2.md` template.
- `{{ release-steps-3-url }}` - The URL of the issue that was created with the `release-steps-3.md` template.
- `{{ release-steps-4-url }}` - The URL of the issue that was created with the `release-steps-4.md` template.
- `{{ release-steps-5-url }}` - The URL of the issue that was created with the `release-steps-5.md` template.
- `{{ release-rc-target-date-minus-1 }}` - The day before the release candidate target date. For example, `2021-08-29`.
- `{{ release-rc-target-date-minus-2 }}` - Two days before the release candidate target date. For example, `2021-08-28`.
- `{{ release-rc-target-date-minus-3 }}` - Three days before the release candidate target date. For example, `2021-08-27`.
- `{{ release-rc-target-date-minus-4 }}` - Four days before the release candidate target date. For example, `2021-08-26`.
- `{{ release-rc-target-date-minus-5 }}` - Five days before the release candidate target date. For example, `2021-08-25`.
- `{{ release-rc-target-date-minus-6 }}` - Six days before the release candidate target date. For example, `2021-08-24`.
- `{{ release-rc-target-date-minus-7 }}` - Seven days before the release candidate target date. For example, `2021-08-23`.
