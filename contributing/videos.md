# Using videos in GitHub Docs content

Videos are used in conjunction with written text to help users understand content in the GitHub docs.

Use these guidelines to determine if a video is appropriate to include in an article or on a landing page in the GitHub docs. If you have questions about whether or not a video would be a good addition to the docs, contact the Docs Content Strategy team.

The Docs team does not create or maintain video content. Videos are purely supplemental to help communicate significant or complex topics, and should be used sparingly because they aren't a content type owned by the Docs team.

## Video checklist

Use this checklist to quickly determine if a video might be appropriate to add to an article or landing page.

- [ ] Does GitHub own the video?
- [ ] Is the video well produced? (See the [Best practices](#best-practices) below for more information)
- [ ] Is the video accessible? (See the [Accessibility requirements](#accessibility-requirements))
- [ ] Is the video less than five minutes long?
- [ ] Does the video have a specific audience and purpose in the docs? If it is only relevant to a particular product or feature, you must use [versioning](#versioning)

If you answer "no" to any of these items, the video is not suitable for adding to the GitHub docs.

### Maintenance

Does the video have a maintenance schedule or a team directly responsible for auditing and updating the content if it becomes out of date?

If yes, you can include the video without any additional steps.

If no, create an issue with an appropriate target date to review or remove the video.

## Best practices

Good videos introduce an instructional agenda that includes steps and goals so that someone watching quickly knows what they will learn. Videos are demonstrative, both showing and explaining the relevant steps that are performed. Videos should be engaging and encouraging. Videos must be well produced to be included in the GitHub docs. A well produced video meets accessibility requirements, has professional narration (if it is a narrated video), has clear visuals, and comes from a reputable source such as GitHub or Microsoft.

Videos are broadly grouped into three categories: product overviews, feature videos, and tutorials. These descriptions are generalizations of each video type. Some videos might not fit perfectly in one category, but can still be useful without meeting the exact guidelines.

### Product overviews
- **Purpose**: Briefly explain what the product is, showcase the main functionality, and get people interested
- **Length**: Less than a minute
- **Possible audiences**: People who want to know if a feature is useful for their goals, people who are new to GitHub and trying to understand what the products do
- **Possible locations in the docs**: Landing pages and guides
- **Example**: "[GitHub Discussions in 60 seconds](https://www.youtube.com/watch?time_continue=28&v=IpBw2SJkFyk&feature=emb_title)" on the [Discussions landing page](https://docs.github.com/en/discussions)

### Feature videos
- **Purpose**: Supplement conceptual or procedural content
- **Length**: As short as possible, without exceeding five minutes. Break longer content into multiple shorter, focused videos
- **Possible audiences**: People who are learning about or how to use a feature
- **Possible locations in the docs**: Guides, conceptual articles, procedural articles
- **Example:** "[Pull Requests • GitHub & Git Foundations](https://www.youtube.com/watch?v=d5wpJ5VimSU&list=PLg7s6cbtAD15G8lNyoaYDuKZSKyJrgwB-&index=20)" in "[Git and GitHub learning resources](https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources#tune-in)"

### Tutorials
- **Purpose**: Help novice users get going with a product, drive adoption, or explain complex functionalities
- **Length**: Individual videos should be five minutes or less. Complex topics can have a series of shorter videos spread across an article. Total length should be a maximum of 15 minutes
- **Possible audiences**: New users of features or products
- **Possible locations**: Guides
- **Example:** "[Setting up your GitHub Enterprise licenses with Visual Studio subscriptions](https://www.youtube.com/watch?v=P_zBgp_BE_I)" in "[Setting up Visual Studio subscriptions with GitHub Enterprise](https://docs.github.com/en/enterprise-cloud@latest/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise#about-setup-of-visual-studio-subscriptions-with-github-enterprise)"

## When to use videos

We might use videos instead of other visuals such as screenshots or diagrams when it is important to show movement or changes in state, like when someone navigates from one screen to another or demos a feature that involves progressing through multiple menus.

Videos can also be helpful to introduce features or products where a 30 second video can supplement information that requires multiple paragraphs to write.

Use videos that explain the value of the procedure or concept that they are showing.

## When to not use videos

Do not use videos for features that change quickly and may make videos out of date. Do not use videos that contradict the written content or violate any parts of the [content style guide](./content-style-guide.md). Do not use videos that just show a task without explaining or elaborating on the procedure.

## Accessibility requirements

These are the minimum accessibility requirements for a video to be included in the GitHub docs. If a video violates any of these requirements, it cannot be added to the docs. Videos must meet the MAS-C standards for accessibility.

- No flashing or strobe effects
- Must have closed captions
- No graphics overlap with where captions appear
- Typography must be legible
- Any overlays must meet [WCAG contrast standards](https://webaim.org/articles/contrast/)
- Any text must be on the screen long enough to be read (the text should appear onscreen for longer than it takes to read it out loud twice)
- Must have proofread [audio and visual transcripts](https://webaim.org/techniques/captions/) for what happens scene-by-scene
- Videos do not autoplay

## Titles for videos

Titles should be descriptive and follow the guidelines for titles in the [content model](./content-model.md#titles).

## Versioning

If a video is only relevant for specific GitHub products (Free, Pro and Team; GitHub Enterprise Server; GitHub AE; and GitHub Enterprise Cloud), the video must be versioned for those products. Use [Liquid](liquid-helpers.md) conditional statements to version the videos appropriately. The Liquid conditional versioning may need to be added when the content is initially created, or may need to be added when the content is updated for a feature update or Enterprise release.

## Video hosting

Videos must be hosted somewhere that GitHub owns and can grant the Docs team access to. Videos should not track users or use cookies.

## Resources
- https://webaim.org
- https://www.w3.org/TR/WCAG22/#time-based-media
