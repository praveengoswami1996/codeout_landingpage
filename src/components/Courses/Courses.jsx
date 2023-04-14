import './Courses.css';
import { courses } from '../../constants';

const Courses = () => {
  return (
    <div className='app__courses'>
        {
            courses.map((course) => {
                return (
                    <div className='app__courses_link' key={course.key}>
                        <div className='app__courses_icon'>
                            <img src={course.url} alt="Course Icon"/>
                        </div>
                        <span>{course.name}</span>
                    </div>
                )    
            })
        }
    </div>
  )
}

export default Courses;