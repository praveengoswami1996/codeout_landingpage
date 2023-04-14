import './App.css';
import { Navbar, Courses, Carousel } from './components';

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Courses />
            <Carousel />
        </div>
    )
}

export default App;