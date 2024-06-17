You can use custom anchor tags, using plain HTML, at any place in the document.

> [!NOTE]
> Custom anchors will not be included in the document outline/Table of Contents.

Custom anchors can be linked to using the `id` you gave them.

For example:

```markdown
# Section Heading

Some body text of this section.

<a id="my-custom-anchor-point"></a>
Some text I want to provide a direct link to, but which doesn't have its own heading.

... a bunch more content...
[A link to that custom anchor](#my-custom-anchor-point)
```

> [!TIP]
> Custom anchors do not participate in the auto-numbering behavior, like automatic heading anchors do, nor will automatic naming and numbering of heading anchors take your custom anchors into account.\
> To avoid potential confusion or improper navigation, use a unique naming scheme for all custom anchors, to avoid overlap with heading anchors (e.g., using a prefix, like `prefix-`),.
