# Copilot IDE feature matrix

This directory holds the data behind the **[Copilot feature matrix](https://docs.github.com/en/copilot/reference/copilot-feature-matrix)**.

## The files

| File | What it holds |
| --- | --- |
| `matrix/<ide>.yml` | One file per IDE: its versions and per-feature support. Edit these. |
| [`../matrix-meta.yml`](../matrix-meta.yml) | Shared config across all six IDEs: the legend, column order, row order. |
| [`../../../../content/copilot/reference/copilot-feature-matrix.md`](../../../../content/copilot/reference/copilot-feature-matrix.md) | The page that renders it. |

Six IDEs: `vs-code`, `visual-studio`, `jetbrains`, `eclipse`, `xcode`, `neovim`.

## How `matrix-meta.yml` connects

Nothing in `matrix-meta.yml` describes an individual IDE. It defines the **vocabulary and ordering** that all six files share:

| Key | Controls | If you get it wrong |
| --- | --- | --- |
| `supportLevels` | The valid values you may write in `features`, and the rendered legend | An unlisted value fails CI |
| `ideOrder` | Column order in the summary, section order on the page | Must list **every** file in this directory — a missing entry means that IDE does not render at all |
| `featureOrder` | Row order in the summary table | A feature missing here **will not appear** in the summary |

So the relationship is: **the per-IDE file says what is true; `matrix-meta.yml` says what words you may use and what order things appear in.**

The four support levels today:

| Write this | Renders |
| --- | --- |
| `supported` | ✓ |
| `not-supported` | ✗ |
| `preview` | P |
| `closing-down` | C |

> [!WARNING]
> The symbols are **also hardcoded** in seven `{% case %}` blocks in the content file. If you change a symbol in `matrix-meta.yml`, change it there too.

## Anatomy of an IDE file

```yaml
name: VS Code # Display name
versionType: ide # "ide" or "extension" — see below
versions: # Newest first. This is the display list.
  - 1.108.0
  - 1.107.0
  - 0.0.0 # Sentinel: "supported before we tracked versions"
versionGroups: # The rendered tables. Versions may repeat across groups.
  latest releases:
    - 1.108.0
    - 1.107.0
  2025 releases:
    - 1.108.0
features: # Feature -> version -> support level
  Chat:
    1.108.0: supported
    1.107.0: supported
    0.0.0: supported
notApplicable: # Optional. Features that never apply to this IDE.
  - Agent skills # Renders "—", not "✗". Omit from `features` too.
```

**`versionType`** decides one sentence of intro copy. Use `ide` when the table tracks the IDE's own version (`vs-code`, `visual-studio`); use `extension` when it tracks the Copilot extension version (the other four). Four of six are `extension`.

**`notApplicable` vs `not-supported`** is a real distinction, so don't reach for `notApplicable` just to fill a hole:

- `not-supported` (✗) — this feature _could_ exist here, but didn't in that version.
- `notApplicable` (—) — this feature does not apply to this IDE **at all**, in any version.

## Adding a new version

The common task. Say VS Code ships 1.109.0:

1. **Add it to `versions`**, at the top (newest first).
2. **Add it to `versionGroups`** — usually both `latest releases` and the current year's group.
3. **Add it to every feature** in `features`. Copy the previous version's value, then change only what actually changed in the release.
4. **Run the tests** (below).

Step 3 is the one people skip. It is not optional — see the warning below.

> [!IMPORTANT]
> **A missing value renders as ✗ ("not supported"), not as blank.**
>
> The template falls through to `✗` when a key is absent, so forgetting a cell silently publishes a false claim that the feature is unsupported. It looks identical to a deliberate ✗. Always carry every feature forward.

## Adding a new feature

1. Add the feature name to `featureOrder` in `matrix-meta.yml`, or it will not appear in the summary table.
2. Add it to **every** IDE file — with real values, `not-supported` for versions predating it, or in `notApplicable` if it does not apply there.

A new feature changes the shape of the table and puts a new product name in front of customers. Get the name confirmed before you publish it.

## Rules the tests enforce

- Versions must be `x.y.z` — three numeric parts. `1.107`, `1.107.0-beta` and `1.5.66.1` are all rejected.
- Quote nothing: `1.108.0` is fine unquoted. (A two-part `1.107` parses as a _number_ and fails with a type error rather than a format one.)
- Every version in `versionGroups` must exist in `versions`, and vice versa.
- Every version used in `features` must exist in `versions`.
- Every support level used must be defined in `matrix-meta.yml`.
- Every feature used must be in `featureOrder`.
- `ideOrder` must match the files in this directory exactly.
- A `notApplicable` feature must not also have support data.

## Testing your change

```bash
npx vitest run src/data-directory/tests/
```

If port 4000 is busy, prefix with a free port: `PORT=4001 npx vitest run …`

Then check it visually:

```bash
npm start
# http://localhost:4000/en/copilot/reference/copilot-feature-matrix
```

Failures name the file, the feature, and what to fix. If a message is unclear, that is a bug worth reporting — the tests exist because these mistakes are invisible on the published page.

## Good to know

- **Versions are display-only.** A version renders because it is listed here, not because it exists upstream. Removing one removes a column.
- **JetBrains versions don't sort intuitively**: `1.5.66` is newer than `1.10.1`, but sorts before it as text. Order the list yourself; don't trust an alphabetical sort.
