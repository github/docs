import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'
import { JourneyLearningTracks } from './JourneyLearningTracks'

export type JourneyLearningTrack = {
  id: string
  title: string
  description: string
  trackName: string
  trackProduct: string
  guides?: Array<{
    href: string
    title: string
  }>
}

export const JourneyLanding = () => {
  const { title, intro, heroImage, introLinks } = useLandingContext()

  // Temp until we hookup real data
  const stubLearningTracks: JourneyLearningTrack[] = [
    {
      id: 'admin:get_started_with_your_enterprise_account',
      title: 'Get started with your enterprise account',
      description:
        'Set up your enterprise account and configure initial settings for your organization.',
      trackName: 'get_started_with_your_enterprise_account',
      trackProduct: 'admin',
      guides: [
        {
          href: '/admin/overview/about-enterprise-accounts?learn=get_started_with_your_enterprise_account&learnProduct=admin',
          title: 'About enterprise accounts',
        },
        {
          href: '/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise?learn=get_started_with_your_enterprise_account&learnProduct=admin',
          title: 'Inviting people to manage your enterprise',
        },
        {
          href: '/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies?learn=get_started_with_your_enterprise_account&learnProduct=admin',
          title: 'About enterprise policies',
        },
      ],
    },
    {
      id: 'admin:adopting_github_actions_for_your_enterprise_ghec',
      title: 'Adopt GitHub Actions for your enterprise',
      description:
        'Learn how to plan and implement a rollout of GitHub Actions in your enterprise.',
      trackName: 'adopting_github_actions_for_your_enterprise_ghec',
      trackProduct: 'admin',
      guides: [
        {
          href: '/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises?learn=adopting_github_actions_for_your_enterprise_ghec&learnProduct=admin',
          title: 'About GitHub Actions for enterprises',
        },
        {
          href: '/actions/get-started/understand-github-actions?learn=adopting_github_actions_for_your_enterprise_ghec&learnProduct=admin',
          title: 'Understanding GitHub Actions',
        },
        {
          href: '/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise?learn=adopting_github_actions_for_your_enterprise_ghec&learnProduct=admin',
          title: 'Introducing GitHub Actions to your enterprise',
        },
        {
          href: '/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/migrating-your-enterprise-to-github-actions?learn=adopting_github_actions_for_your_enterprise_ghec&learnProduct=admin',
          title: 'Migrating your enterprise to GitHub Actions',
        },
      ],
    },
    {
      id: 'actions:continuous-integration',
      title: 'Continuous integration with GitHub Actions',
      description:
        'Set up automated testing and building for your projects using GitHub Actions workflows.',
      trackName: 'continuous-integration',
      trackProduct: 'actions',
      guides: [
        {
          href: '/actions/automating-builds-and-tests/about-continuous-integration?learn=continuous-integration&learnProduct=actions',
          title: 'About continuous integration',
        },
        {
          href: '/actions/automating-builds-and-tests/building-and-testing-nodejs?learn=continuous-integration&learnProduct=actions',
          title: 'Building and testing Node.js',
        },
        {
          href: '/actions/automating-builds-and-tests/building-and-testing-python?learn=continuous-integration&learnProduct=actions',
          title: 'Building and testing Python',
        },
      ],
    },
  ]

  return (
    <DefaultLayout>
      <div>
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />

        <div className="container-xl px-3 px-md-6 mt-6 mb-4">
          <JourneyLearningTracks tracks={stubLearningTracks} />
        </div>
      </div>
    </DefaultLayout>
  )
}
