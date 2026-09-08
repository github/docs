---
title: Attaching files with GitHub CLI
intro: Attach local images and videos to issues, pull requests, and comments without leaving the command line.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Use and extend the CLI
---

You can attach a local image or video from the command line with {% data variables.product.prodname_cli %} using the `--attach` flag. {% data variables.product.prodname_cli %} uploads the file to {% data variables.product.github %} and writes the resulting URL into the body of your issue, pull request, or comment, so it renders inline just as it would if you attached it in your browser.

You need push access to the repository to attach files.

The `--attach` flag is available on the following commands:

* `gh issue create`
* `gh issue edit`
* `gh issue comment`
* `gh pr create`
* `gh pr edit`
* `gh pr comment`

## Attaching a file

Pass `--attach` with the path to a local file. In the following example, replace ISSUE-NUMBER with the number of your issue and PATH/TO/IMAGE with the path to your image. You can repeat the flag to attach more than one file, but you can't attach the same file twice.

```shell
gh issue comment ISSUE-NUMBER --attach PATH/TO/IMAGE
```

You can combine `--attach` with `--body` or `--body-file` to embed images and videos in your Markdown. The following example uses placeholders for the pull request title, Markdown body file, and two image files.

```shell
gh pr create \
  --title "PULL-REQUEST-TITLE" \
  --body-file PATH/TO/BODY-FILE \
  --attach PATH/TO/FIRST-IMAGE \
  --attach PATH/TO/SECOND-IMAGE
```

To set alt text for an image, add it to the end of the path after a `#`, in place of ALT-TEXT.

```shell
gh issue comment ISSUE-NUMBER --attach 'PATH/TO/IMAGE#ALT-TEXT'
```

If you do not provide alt text, {% data variables.product.prodname_cli %} uses the file name.

> [!NOTE]
> Alt text is not supported on video files.

## Embedding an attachment in Markdown

If your Markdown text already references a local file, and you attach that same file with `--attach`, {% data variables.product.prodname_cli %} rewrites the reference in place to point at the uploaded file, rather than appending a second copy at the end. This lets you write Markdown with ordinary local paths, preview it locally where the images render, then post it unchanged. The reference is rewritten no matter where the body text comes from: `--body`, `--body-file`, standard input, or the text editor.

### Embedding an image

For example, save the following content in `PATH/TO/BODY-FILE`:

```markdown
The sign-in screen shows an error where the form should be:

![the sign-in screen showing an authentication error](PATH/TO/IMAGE)
```

Run the following command with `--body-file`:

```shell
gh issue comment \
  ISSUE-NUMBER \
  --body-file PATH/TO/BODY-FILE \
  --attach PATH/TO/IMAGE
```

{% data variables.product.prodname_cli %} replaces the local path with the uploaded URL and keeps your Markdown and alt text. When a reference is rewritten, the alt text comes from the Markdown, so any `#` alt text on the flag applies only to files that are appended.

Any attached file that the body does not reference is appended to the end of the body, in the order you passed the flags.

### Embedding a video

To embed a video as a player, save the following Markdown image reference in `PATH/TO/VIDEO-BODY-FILE`. The reference must be the only content in its paragraph.

```markdown
![](PATH/TO/VIDEO)
```

Then attach the same video:

```shell
gh issue comment \
  ISSUE-NUMBER \
  --body-file PATH/TO/VIDEO-BODY-FILE \
  --attach PATH/TO/VIDEO
```

{% data variables.product.prodname_cli %} replaces the entire reference with the uploaded URL, which renders as a player. If the reference appears within a sentence, it renders as a link instead.

## Limitations

The {% data variables.product.prodname_cli %} only supports uploading image and media files. For a list of supported file types, see [AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/attaching-files#image-and-media-files).
