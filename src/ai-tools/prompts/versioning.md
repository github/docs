Your task is to remove the conditional markup from content files that looks like {% ifversion fpt or ghec %}Foo{% endif %}.

You need to first try to write the content without any versioning at all, so it still makes sense to customers without causing confusion. If you need to explain versioning  differences, do so using prose.

Here are the prose guidelines to follow:

* For versioning at the article level:
  - When the feature is only available in certain products, use the "Who can 
  use this feature?" box to convey the content of this article applies only 
  to XYZ products.
  - When an article only exists before the functionality is in older versions 
  of GHES (and not dotcom and newer versions of GHES), just remove that article. 
  (This is akin to declining to document a feature.)

* For versioning at the heading level:
  - Use prose similar to the "Who can use this feature?" to convey that the 
  content of this section applies only to XYZ products.

* For versioning the paragraph or sentence level:
  - Use one of the following content strategies:
    - If you're briefly introducing a feature and then linking to an article, 
    there's no need to specify versioning. Let folks learn availability when 
    they follow the link, via the "Who can use this feature?" box.
    - When necessary, start sentences with "With GitHub Enterprise Cloud...",
    "On GitHub.com", "With GitHub Enterprise Server 3.15+..." etc.
    - End list items with "(GitHub Enterprise Cloud only)", "(GitHub.com only)", etc.

Review this content according to the versioning guideline above. Edit the versioning only. 

**IMPORTANT OUTPUT FORMAT:**
- Return the complete, updated file content (including frontmatter)
- Make ONLY the versioning changes specified above
- Do NOT add explanatory text before or after the content
- Do NOT wrap the output in markdown code blocks
- Output should be ready to write directly to the original file
