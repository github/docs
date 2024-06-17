You can link directly to a section in a rendered file by hovering over the section heading to expose {% octicon "link" aria-label="the link" %}.

![Screenshot of a README for a repository. To the left of a section heading, a link icon is outlined in dark orange.](/assets/images/help/repository/readme-links.png)

Heading styles (`#`, `##`, etc) automatically create anchors which have default names of the text of the heading, with the following rules:\
 - All text is converted to lower-case.
 - Spaces, including consecutive spaces, are replaced by hyphens (`-`).
 - Leading and trailing whitespace is trimmed.
 - Punctuation or other characters not allowed in a URI fragment are removed, not URL-encoded.
 - Unicode characters legal in URI fragments are allowed and will be used unmodified (e.g., `Θ`).
 - Paired formatting markup characters, even if legal in a URI fragment, are removed, with their contents remaining (e.g., `_italics_` becomes `italics`).

For example:
`# This'll be a _Helpful_ Section About the Greek Letter Θ!` will, by default, result in an anchor named `#thisll-be-a-helpful-section-about-the-greek-letter-Θ`

If the same text is used for more than one heading, at any level, the first will be named as above, and subsequent headings will have `-X` appended to the name, where `X` is an integer beginning at `1`.

For example:
```markdown
### This text is the same
...content of the first section...

# This text is the same
...content of the second section...
```

This will result in the first section's anchor being named `#this-text-is-the-same` and the second section's anchor being named `#this-text-is-the-same-1`.
