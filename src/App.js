import React from 'react';
import BlogPost from './components/BlogPost';
import Projects from './components/Projects';
import './App.css';


const title = "Test Post Title";
const subtitle = "Subtitle for the current blogpost."
const date = "01/01/2022";
const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a dolorum eveniet ea eos magnam repudiandae, itaque assumenda quam unde amet maxime, perferendis libero adipisci, inventore soluta. Accusamus, ipsa nam. Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias repellat necessitatibus omnis officiis nemo obcaecati quibusdam voluptas, laboriosam temporibus vero delectus, facilis enim ducimus. Deleniti cum repellat ad in beatae ipsum modi distinctio tempore. Illum tenetur libero quos aut reiciendis dicta error numquam voluptate quod temporibus dolore, quas repudiandae iure itaque deleniti. Id dolores magnam quasi corrupti eos, obcaecati iusto labore blanditiis. Ex fugit tempore sint enim quo. Perspiciatis dolor magnam, consequuntur alias quia dicta blanditiis magni mollitia, architecto et commodi consequatur quisquam harum enim at ab minima nemo quasi voluptatem nihil. Alias dolorem hic facere quas repellendus mollitia numquam veniam. Maiores libero aut deserunt sunt porro, vero blanditiis, eum numquam perspiciatis facere sed officiis odit, quae rerum ab dolor! Mollitia earum voluptate rem eos, aut esse voluptatibus saepe, magnam itaque porro optio exercitationem. Reprehenderit, quibusdam corrupti voluptas, repellendus tempora sit delectus debitis nostrum voluptatum natus molestiae perspiciatis. Earum, magni quidem illum exercitationem natus adipisci ab, officiis quod rem explicabo quis? Sint, earum. Voluptatem eius obcaecati ut iusto laboriosam soluta quas voluptatibus necessitatibus aspernatur neque? Rerum voluptatibus ratione provident! Laborum excepturi, non perspiciatis unde soluta numquam dolorum commodi quos ab iste sequi nam dolores possimus expedita maxime maiores doloremque facere?"

function App() {
  return (
    <div className="App">
      <BlogPost title={title} subtitle={subtitle} date={date} content={content}/>
      <Projects />
    </div>
  );
}

export default App;
