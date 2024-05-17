# GHES releases

New GHES releases are cut about every 3 months and around the same time, the oldest release is deprecated (or unofficially supported). The release schedule is located here: src/ghes-releases/lib/enterprise-dates.json

## How does it work

The docs content team creates new releases and the docs engineering team deprecates releases. An issue reminding the teams about releases and deprecations are opened up automatically in the docs-content (for releases) and docs-engineering repos (for deprecations).

## About this directory

- `src/ghes-releases/lib` - The release and deprecation issue templates used as a checklist.
- `src/ghes-releases/scripts` - The scripts used to create new releases and deprecations for GHES.
- `src/ghes-releases/tests` - The tests used to verify the GHES releases and deprecations

## How to get help

Slack: `#docs-engineering`
Repo: `github/docs-engineering`

If you have a question about this feature, you can ask in the `#docs-engineering` Slack channel. If you notice a problem with this feature, you can open an issue in the `github/docs-engineering` repository.
