# Developer table of contents

This directory generates a full table of contents for the docs.github.com site.

<img src="toc-screenshot.png" width=30% style="padding-bottom: 2em" />

The table of contents is generated locally within the `static` subdirectory as a series of `index.html` files, within version subdirectories such as `free-pro-team@latest` and `enterprise-cloud@latest` etc.

## Generating the table of contents

To generate the table of contents, run the following command from the Terminal:

```bash
npm run dev-toc
```

After generating the files, the ToC should open in your default browser. If it doesn't, open your browser and navigate to `file:///PATH/TO/docs-internal/src/dev-toc/static/free-pro-team@latest/index.html`.

## Generating the ToC with one or more sections auto-expanded

Alternatively, you can generate the table of contents with a specific top-level section of the docs auto-expanded by running the following command:

```bash
tsx src/dev-toc/generate.ts -o PRODUCT-ID [PRODUCT-ID PRODUCT-ID ...]
```

where `PRODUCT-ID` is the first part of the URL for the top-level section of the docs. For example, the `actions` section of the docs has the URL `https://docs.github.com/en/actions`, so the `PRODUCT-ID` is `actions`. So the command would be:

```bash
tsx src/dev-toc/generate.ts -o actions
```

Note: if you generate the table more than once, with a different product ID flag you will need to refresh the page to see the changes.
