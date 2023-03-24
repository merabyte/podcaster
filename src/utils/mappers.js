export function fromAPIDataToPodcastList(apiData) {
  const results = apiData?.feed.entry || []

  return results.map(item => ({
    id: item.id.attributes['im:id'],
    title: item['im:name']?.label,
    author: item['im:artist']?.label,
    imageUrl: item['im:image']?.at(-1).label,
    description: item.summary?.label,
  }))
}

export function fromAPIDataToPodcastDetail(apiData) {
  const results = apiData?.results || []
  const [podcast = {}, ...episodes] = results

  return {
    id: `${podcast.trackId}`,
    title: podcast.trackName,
    author: podcast.artistName,
    imageUrl: podcast.artworkUrl600,
    description: podcast.description,
    episodes: episodes.map(episode => ({
      id: `${episode.trackId}`,
      podcastId: `${podcast.trackId}`,
      title: episode.trackName,
      description: episode.description,
      audioUrl: episode.episodeUrl,
      ISODate: episode.releaseDate,
      durationMilis: episode.trackTimeMillis ?? 0,
    })),
  }
}
