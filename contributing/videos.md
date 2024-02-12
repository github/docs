# Using videos in GitHub Docs content

Videos are rarely used in the GitHub Docs. When videos are necessary to provide the best user experience for an article, they are used in conjunction with written text. Videos are not a replacement for written content.

Use these guidelines to determine if a video is appropriate to include in an article or on a landing page in the GitHub docs. If you have questions about whether or not a video would be a good addition to the docs, contact the Docs Content Strategy team.

If you add a link to a video or embed a video in the GitHub Docs, add the video's metadata to the "[Videos in GitHub Docs](#videos-in-github-docs)" section below.

The Docs team does not create or maintain video content. Videos are purely supplemental to help communicate significant or complex topics, and should be used sparingly because they are not a content type owned by the Docs team.

## Video checklist

Use this checklist to quickly determine if a video might be appropriate to add to an article or landing page.

- [ ] Is the video the only way to communicate the information?
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

Use these best practices to help determine if a video is well produced and is of a high enough quality to be included in the GitHub Docs.

Good videos introduce an instructional agenda that includes steps and goals so that someone watching quickly knows what they will learn. Videos are demonstrative, both showing and explaining the relevant steps that are performed. Videos should be engaging and encouraging. Videos must be well produced to be included in the GitHub docs. A well produced video meets accessibility requirements, has professional narration (if it is a narrated video), has clear visuals, and comes from a reputable source such as GitHub or Microsoft.

Videos are broadly grouped into three categories: product overviews, feature videos, and tutorials. These descriptions are generalizations of each video type. Some videos might not fit perfectly in one category, but can still be useful without meeting the exact guidelines.

### Product overviews
- **Purpose**: Briefly explain what the product is, showcase the main functionality, and get people interested
- **Length**: Less than a minute
- **Possible audiences**: People who want to know if a feature is useful for their goals, people who are new to GitHub and trying to understand what the products do
- **Possible locations in the docs**: Landing pages and guides

### Feature videos
- **Purpose**: Supplement conceptual or procedural content
- **Length**: As short as possible, without exceeding five minutes. Break longer content into multiple shorter, focused videos
- **Possible audiences**: People who are learning about or how to use a feature
- **Possible locations in the docs**: Guides, conceptual articles, procedural articles

### Tutorials
- **Purpose**: Help novice users get going with a product, drive adoption, or explain complex functionalities
- **Length**: Individual videos should be five minutes or less. Complex topics can have a series of shorter videos spread across an article. Total length should be a maximum of 15 minutes
- **Possible audiences**: New users of features or products
- **Possible locations**: Guides

## When to use videos

We might use videos instead of other visuals such as screenshots or diagrams when it is important to show movement or changes in state, like when someone navigates from one screen to another or demos a feature that involves progressing through multiple menus. However, screenshots or text may be sufficient to explain these procedures.

Videos can also be helpful to introduce features or products where a 30 second video can supplement information that requires multiple paragraphs to write.

Use videos that explain the value of the procedure or concept that they are showing.

## When to not use videos

Do not use videos for features that change quickly and may make videos out of date. Do not use videos that contradict the written content or violate any parts of the [content style guide](./content-style-guide.md). Do not use videos that just show a task without explaining or elaborating on the procedure. Do not use a video just because a video exists. Videos must be useful and relevant to our users, which includes staying accurate over time.

## Accessibility requirements

These are the minimum accessibility requirements for a video to be included in the GitHub docs. If a video violates any of these requirements, it cannot be added to the docs. Videos must meet the MAS-C standards for accessibility.

- No flashing or strobe effects
- Must have [closed captions](https://webaim.org/techniques/captions/#captions). See "[Creating video captions](#creating-video-captions)" below for more information
- No graphics overlap with where captions appear
- Typography must be legible
- Any overlays must meet [WCAG contrast standards](https://webaim.org/articles/contrast/)
- Any text must be on the screen long enough to be read (the text should appear onscreen for longer than it takes to read it out loud twice)
- Must have proofread [descriptive transcripts](https://www.w3.org/WAI/media/av/transcripts/) for what happens scene-by-scene. See "[Creating video transcripts](#creating-video-transcripts)" below for more information
- Videos do not autoplay

### Creating video captions

Videos must have human-generated captions before being added to the Docs site. You can use auto caption technology to help create the captions, but they must be proofread and edited for accuracy by a person. If the video hosting service has a native caption tool, like YouTube, you can use that tool to prepare captions or create a properly formatted `SRT` or `VTT` transcript file to upload with the video.

Creating captions is part of the process of producing accessible videos, so the owner of a video being added to GitHub Docs should provide captions.

#### Guidelines for captions

Where possible, captions should exactly match the words spoken in the video. Do not paraphrase or truncate captions, unless serious time constraints mean it would be difficult for someone to read the captions in the time given.

Captions must be synchronized to appear at approximately the same time as the audio. Captions should always be timed to appear on screen at the moment the speaker begins talking. For fast speech, where it would be difficult to read captions timed precisely to the audio, you can extend the captions to stay on screen after the speech has finished.

If a video has multiple speakers, identify the speakers in the captions. Do this by adding the speaker's name, or a descriptive name such as `Developer`, before the start of the sentence. For example: `Jimmy: Hello.`. You only need to do this when the speaker changes, not for every line of dialogue. If it's obvious from the visuals who is speaking, you do not need to identify the speaker.

Captions must be one or two lines, and no more than 32 characters per line. Put each new sentence on a new line. If you need to break a line mid-sentence, do so at a logical point, for example after commas or before conjunctions like `and` or `but`.

#### Adding and editing captions on YouTube

For videos hosted on YouTube, see "[Add subtitles and captions](https://support.google.com/youtube/answer/2734796?hl=en&ref_topic=7296214)" and "[Edit or remove captions](https://support.google.com/youtube/answer/2734705?hl=en&ref_topic=7296214)" in the YouTube docs.

### Creating video transcripts

For every video linked or embedded in the docs, we must have a descriptive transcript of the video. Transcript articles are formatted like other articles, with YAML frontmatter and Markdown content. To add a transcript to the Docs site, create an article in [`content/video-transcripts`](https://github.com/github/docs/tree/main/content/video-transcripts), and include the transcript as the article's body text. Give the article a filename like `transcript-VIDEO-NAME.md` and a `title` frontmatter property of `Transcript - VIDEO NAME`. Add the article to the `index.md` file in the `video-transcripts` directory.

Do not use Liquid variables or reusables to replace things like product names in the transcript. The transcript should be faithful to the audio in the video, and we should not change any text in the transcript as a result of updating a variable or reusable after the video was produced.

Creating transcripts is part of the process of producing accessible videos, so the owner of a video being added to the docs site should provide the content for a transcript.

You can use captions as the foundation for a transcript. Edit the captions to remove any timestamps and include the relevant information detailed below. A descriptive transcript includes a text version of both audio and visual information needed to understand the content of a video.

- If a video has multiple speakers, identify the speakers in the transcript
- Format the transcript in logical paragraphs, lists, and sections. If it helps people understand the content, you may add headers to sections. Consider how someone would get information from the transcript if they are not also viewing the video
- Add any onscreen text, relevant visual elements, or non-speech sounds that are not included in the captions. Place these descriptions after the spoken text that accompanies them in the video. Format visual information in brackets. For example, `[Background music plays. The narrator clicks the Code button and then the "+ New codespace" button.]`
- Add a `product_video` property to the transcript article's YAML frontmatter. The value of the `product_video` property is the YouTube URL of the video. The video's YouTube URL will display as an external link in the transcript article
- At the end of the transcript, link to the landing page for the product the video is about using the pattern `For more information about PRODUCT, see the ["Product" documentation](link/to/landing-page).`

See "[Text Transcript with Description of Visuals](https://www.w3.org/WAI/perspective-videos/captions/#transcript)" in the W3C docs for more examples of audio and visual transcriptions.

#### Linking to transcripts from externally hosted videos

Add a link to the article with a video's transcript in the description of the video on the platform where it is hosted. For more information, see "[Edit video settings](https://support.google.com/youtube/answer/57404?)" in the YouTube documentation.

#### Linking to transcripts for embedded videos

In any content with an embedded video, add a `product_video_transcript` property below the `product_video` property in the YAML frontmatter. The value of `product_video_transcript` is a link to the transcript article in the `video-transcripts` directory.

```yaml
title: Example product landing page
product_video: 'https://www.youtube-nocookie.com/embed/URL'
product_video_transcript: /content/video-transcripts/TRANSCRIPT-TITLE
```

## Titles for videos

Titles should be descriptive and follow the guidelines for titles in the [content model](./content-model.md#titles).

## Versioning

If a video is only relevant for specific GitHub products (Free, Pro and Team; GitHub Enterprise Server; GitHub AE; and GitHub Enterprise Cloud), the video must be versioned for those products. Use [Liquid](liquid-helpers.md) conditional statements to version the videos appropriately. The Liquid conditional versioning may need to be added when the content is initially created, or may need to be added when the content is updated for a feature update or Enterprise release.

## Video hosting

Videos must be hosted somewhere that GitHub owns and can grant the Docs team access to. Videos should not track users or use cookies. Currently, GitHub's videos are hosted on YouTube and added to the docs using the [Privacy Enhanced Mode](https://support.google.com/youtube/answer/171780?hl=en#zippy=%2Cturn-on-privacy-enhanced-mode) by changing the domain for the embedded URL from `https://www.youtube.com/VIDEO` to `https://www.youtube-nocookie.com/VIDEO`.

## Resources
- https://webaim.org
- https://www.w3.org/TR/WCAG22/#time-based-media

## Videos in GitHub Docs

Add the following metadata for each video added to the GitHub Docs.

```markdown copy
Title: Video title
URL: YouTube.com/
Description: One sentence
Product: e.x. Projects
Versions: e.x. fpt, GHES > 3.2
Date added: YYYY-MM-DD
Location: /where/in/docs
Transcript: ./content/video-transcripts/filename
```

```
Title: Codespaces - Your instant dev box in the cloud
URL: https://www.youtube-nocookie.com/embed/_W9B7qc9lVc
Description: A 1.5 minute overview of GitHub Codespaces.
Product: Codespaces
Versions: fpt, ghec
Date added: 2021-05-11
Location: /content/codespaces/index.md
Transcript: /video-transcripts/transcript-codespaces-your-instant-dev-box-in-the-cloud
```

```
Title: Using Projects for feature planning
URL: https://www.youtube-nocookie.com/embed/yFQ-p6wMS_Y
Description: Check out all the cool new things you can do with your GitHub Projects powered by GitHub Issues
Product: Issues
Versions: projects-v2
Date added: 2023-05-09
Location: /content/issues/index.md
Transcript: /video-transcripts/transcript-using-projects-for-feature-planning
```
