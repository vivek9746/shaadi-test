import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useUsersearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [users, setUsers] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://randomuser.me/api',
      params: { page: pageNumber,
      results:'30',
      seed: 'abc' },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setUsers(prevusers => {
        // return [...new Set([...prevusers, ...res.data.results.map(b => b)])]
        // return [...new Set([...prevusers, ...res.data.results.map(b=>b.name.first)])]
        return ([...prevusers, ...res.data.results])
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, users, hasMore }
}
