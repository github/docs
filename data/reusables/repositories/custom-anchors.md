You can use standard HTML anchor tags (`<a name="unique-anchor-name"></a>`) to create navigation anchor points for any location in the document.

> [!NOTE]
> Custom anchors will not be included in the document outline/Table of Contents.

You can link to a custom anchor with the name, `name`, you gave the anchor. The syntax is exactly the same as when you link to an anchor that is automatically generated for a heading.

For example:

```markdown
# Section Heading

Some body text of this section.

<a name="my-custom-anchor-point"></a>
Some text I want to provide a direct link to, but which doesn't have its own heading.

...more content...

[A link to that custom anchor](#my-custom-anchor-point)
```

> [!TIP]
> Custom anchors are not considered by the automatic naming and numbering behavior of automatic heading links.\
> To avoid ambiguous references, use a unique naming scheme for custom anchors, such as adding a prefix to the `id` attribute value of custom anchors.
