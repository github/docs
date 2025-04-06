# Image density

Apple's Retina display technology debuted in 2010. Since then, there's been increasing diversity of pixel densities for images and screenshots. Historically, Docs did not specify or handle pixel densities for images. Depending on screenshotting or output tool, you may end up with a 1x image, 1.5x image, 2x image, or even larger. That means without correction 1x images appear blurry to folks on Retina displays, while for non-Retina displays 1.5x and 2x images appear too large.

We default to 2x images when rendering images on Docs. This helps get the images to the correct size while also keeping them sharp on high density displays. This change requires us to indicate to the browser what pixel density to use for each image. PPI/DPI metadata settings do not impact browser rendering.

Most folks are now using Snagit for screenshots. In Snagit, enable the “retina images” setting. This creates images at a 2x size. By creating images at 2x size, this means for folks on high density displays, they see a crisper image.

We have an exceptions list for images not at 2x. You can verify the size of an image by viewing it in Preview app (or Windows equivalent)... if it appears very large, it's likely a 2x image. If it appears at regular size, even after hitting Command + 0 to reset the scale, then it is likely a 1x image.

If you need to add a new 1x image, please add it to the exceptions list. If you see an image that appears too small or too large, then we will need to edit the list in that case as well. And in general, please make sure you use Snagit for screenshots using the retina setting enabled.
