import React from 'react';
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import Post from './components/post';

const data = {
  username: "Mohammed Mosayed",
  bio: "I am the Web Instructor for Pursuit",
  posts: [
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=1',
      caption: 'caption 1'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=2',
      caption: 'caption 2'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=3',
      caption: 'caption 3'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=4',
      caption: 'My trip to the beach'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=3',
      caption: 'caption 3'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=3',
      caption: 'caption 3'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=3',
      caption: 'caption 3'
    },
    { 
      image: 'https://source.unsplash.com/1600x900/?nature,water&h=3',
      caption: 'caption 3'
    }
  ]
}

const App = (props) => {
  return (
    <>
      <Header />
      <Jumbotron username={data.username} bio={data.bio} />
      <div className='container'>
        <div className='row'>
          {
            data.posts.map((e, i) => {
              return <Post image={e.image} caption={e.caption} key={i} />;
            })
          }
          
        </div>
      </div>
    </>
  );
}

export default App;
