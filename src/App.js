import { useEffect, useState } from 'react';
import './App.css';
import { useFetch } from './useFetch';
import Follower from './Follower';



function App() {
const { loading, data } = useFetch();
const [followers, setFollowers] = useState([]);
const [page, setPage] = useState(0)
console.log(data);

useEffect (() => {
   if(loading) return; 
    setFollowers(data[page]);
}, [loading, page]);

const nextPage = () => {
  //logic to go next page
setPage((oldPage) => {
  let nextPage = oldPage + 1;
  if(nextPage > data.length - 1){
  nextPage = 0;
  }
  return nextPage;
});
};

const prevPage = () => {
// logic to go into previous page
 setPage((oldPage) => {
  let prevPage = oldPage - 1;
  if (prevPage < 0) {
prevPage = data.length - 1;
  }
  return prevPage;
 });
};



const handlePage = (index) => {

}

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'Github-Profiles'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers?.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading &&(
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>prev</button>
            {data.map ((item, index) => {
              return (
                <button key={index} className={`page-btn ${index === page ? "active-btn ": null} `} 
                onClick={() => handlePage(index)}
                > {""} 
                {index + 1}</button>
              )
            })}

            <button className='next-btn' onClick={nextPage}>next</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
