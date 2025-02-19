/* eslint-disable react/prop-types */
import './Recommended.css'
// import thumbnail1 from '../../assets/thumbnail1.png'
// import thumbnail2 from '../../assets/thumbnail2.png'
// import thumbnail3 from '../../assets/thumbnail3.png'
// import thumbnail4 from '../../assets/thumbnail4.png'
// import thumbnail5 from '../../assets/thumbnail5.png'
// import thumbnail6 from '../../assets/thumbnail6.png'
// import thumbnail7 from '../../assets/thumbnail7.png'
// import thumbnail8 from '../../assets/thumbnail8.png'
import { useEffect, useState } from 'react'
import { API_KEY, valueConvert } from '../../data'
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {

  const [relatedData, setRelatedData] = useState([]);

  const fetchRelatedData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then(res => res.json())
      .then(data => setRelatedData(data.items))
  }

  useEffect(() => {
    fetchRelatedData()
  }, [])

  return (
    <div className='recommended'>
      {relatedData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className='vid-info'>
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{valueConvert(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  )
}

export default Recommended
