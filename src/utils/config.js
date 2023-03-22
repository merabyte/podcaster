const PODCAST_LIST_LIMIT = 100
const PODCAST_LIST_GENRE = 1310

const ORIGINAL_URLS = {
  PODCAST_LIST: `https://itunes.apple.com/us/rss/toppodcasts/limit=${PODCAST_LIST_LIMIT}/genre=${PODCAST_LIST_GENRE}/json`,
  PODCAST_ITEM: 'https://itunes.apple.com/lookup',
}
const CORS_URL = 'https://api.allorigins.win/get?url='
const transformURL = url => CORS_URL + encodeURIComponent(url)

export const URLS = Object.entries(ORIGINAL_URLS).reduce(
  (acc, [key, url]) => ({ ...acc, [key]: transformURL(url) }),
  {},
)
export const PODCASTS_COOKIE = {
  name: 'podcast_list',
  path: '/',
  expiration: 1,
}
