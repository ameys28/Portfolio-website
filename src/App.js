import Header from './components/header';
import Main from './components/main';
import Project from './components/projects';
import data from './projectdata';
import Footer from './components/footer';
import './App.css';

function App() {
  const project = data.map((data) => {
    return (
      <Project
        key={data.id}
        data={data}
      />
    );
  });
  return (
    <div>
      <Header />
      <Main />
      <section className="section">
      {project}
      </section>
      <Footer />
    </div>
    
  );
}

export default App;
