Use HTML anchor tags (`<a id="unique-anchor-name"></a>`) to create navigation anchor points to any place in the document.

> [!NOTE]
> Custom anchors will not be included in the document outline/Table of Contents.

Link to custom anchors by using the `id` given to the anchor.

For example:

```markdown
# Section Heading

Some body text of this section.

<a id="my-custom-anchor-point"></a>
Some text I want to provide a direct link to, but which doesn't have its own heading.

...more content...

[A link to that custom anchor](#my-custom-anchor-point)
```

> [!TIP]
> Custom anchors are not considered by the automatic naming and numbering behavior of automatic heading links.\
> To avoid ambiguous references, use a unique naming scheme for custom anchors, such as adding a prefix to the `id` attribute value of custom anchors.
