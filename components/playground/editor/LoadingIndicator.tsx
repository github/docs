import { Box, Text } from '@primer/components'

export function LoadingIndicator() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={4}>
      <img width="120px" src="/playground/loading.gif" alt="bouncing octocat" />
      <Text fontFamily="mono" fontSize={1} color="gray.8">
        Loading...
      </Text>
    </Box>
  )
}
