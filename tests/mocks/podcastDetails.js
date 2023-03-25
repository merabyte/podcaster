import { episodes } from './episodes'
import { podcasts } from './podcasts'

export const podcastDetails = podcasts.map(podcast => ({
  ...podcast,
  episodes,
}))
