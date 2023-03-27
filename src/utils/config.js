const PODCAST_LIST_LIMIT = 100
const PODCAST_LIST_GENRE = 1310
const EPISODE_LIST_LIMIT = 100

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24

export const API_URLS = {
  PODCAST_LIST: `https://itunes.apple.com/us/rss/toppodcasts/limit=${PODCAST_LIST_LIMIT}/genre=${PODCAST_LIST_GENRE}/json`,
  PODCAST_DETAIL: `https://itunes.apple.com/lookup?media=podcast&entity=podcastEpisode&limit=${EPISODE_LIST_LIMIT}`,
  // PODCAST_DETAIL: 'https://itunes.apple.com/lookup', // This endopoint does not return the exected info
}

export const CORS_URL = null // 'https://api.allorigins.win/get?url='

export const PODCAST_LIST_CACHE = {
  name: 'podcast-list',
  expiration: ONE_DAY_IN_MS,
  json: true,
}

export const PODCAST_DETAIL_CACHE = {
  name: 'podcast-detail',
  expiration: ONE_DAY_IN_MS,
  json: true,
}
