import { useEffect, useState } from 'react'

import { usePodcastListRequest } from '../../hooks'
import PodcastItem from '../../components/PodcastItem'
import Loading from '../../components/Loading'

const COLORS = [
  'rgb(204, 251, 241)',
  'rgb(186, 230, 253)',
  'rgb(229, 231, 235)',
  'rgb(165, 243, 252)',
  'rgb(186, 230, 253)',
  'rgb(191, 219, 254)',
  'rgb(199, 210, 254)',
]

function Home() {
  const { data, loading } = usePodcastListRequest()
  const [filteredResults, setFilteredResults] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    const dataList = data || []
    const searchRx = new RegExp(searchText, 'i')
    const newResults = searchText
      ? dataList.filter(podcast => {
          const { title, author } = podcast
          return searchRx.test(title + author)
        })
      : dataList

    setFilteredResults(newResults)
  }, [data, searchText])

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center justify-end gap-x-3">
        <span className="w-10 p-0.5 text-center bg-blue-700 font-semibold text-white rounded-md">
          {filteredResults.length}
        </span>
        <input
          type="text"
          placeholder="Filter podcasts..."
          className="w-56 border py-0.5 px-1 font-light"
          maxLength={25}
          disabled={loading}
          value={searchText}
          onChange={ev => setSearchText(ev.target.value)}
        />
      </div>

      {loading && <Loading className="self-center" />}

      {!loading && !filteredResults?.length && (
        <div className="pt-8 self-center text-center italic text-gray-600">
          <p>No results found.</p>
          <p>Please, try again with a different text query.</p>
        </div>
      )}

      {!loading && filteredResults && (
        <div className="grid grid-cols-4 gap-x-5 gap-y-14">
          {filteredResults.map((podcast, i) => {
            const href = `/podcast/${podcast.id}`
            const colorIndex = i % COLORS.length
            const color = COLORS[colorIndex]

            return (
              <PodcastItem
                key={podcast.id}
                href={href}
                boxBg={`linear-gradient(45deg, ${color}, transparent)`}
                {...podcast}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Home
