
import FoodBuzz from '../assets/images/projects/FoodBuzzHomepage.png'
import Quiz from '../assets/images/projects/QuizScreenshot.png'
import Weather from '../assets/images/projects/weather.png'
import Planner from '../assets/images/projects/WorkDay.png'
import Book from '../assets/images/projects/bookit.png'
import Placeholder from '../assets/images/projects/placeholder.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHub from '../assets/images/logo/icons8-github-96.png'

const styles = {
  sectionStyles: {
    background: 'white',
    padding: '0',
  },
};


function Projects() {
  return (
    <div>
    <section style={styles.sectionStyles} className="container-fluid">
      
        <Container id="samples" style={styles.sectionStyles} className="mb-4 bg-light rounded-3">
                <h6>FoodBuzz</h6>
                    <a href="https://dertodd.github.io/Project_one_The_Survivors/" target="_blank" rel="noopener noreferrer"><img src={FoodBuzz} alt='FoodBuzz' className="img-fluid rounded hover-shadow" /></a>
                    <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'><a href="https://github.com/DerTodd/Project_one_The_Survivors" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a></p>
        </div>
      </div>     
        </Container>
        <div className="row">
            <Container id="samples" style={styles.sectionStyles} className="mb-4 bg-light rounded-3">
                <Row>
                    <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid', borderLeft: 8}}>
                <figure className="col">
                    <div>
                    <h6>Horror Quiz</h6>
                        <a href="https://mlh19.github.io/HorrorQuiz/" target="_blank" rel="noopener noreferrer"><img src={Quiz} alt="Horror Quiz" className="img-fluid rounded hover-shadow" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/mlh19/HorrorQuiz" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a></p>
                            </div>
                        </div>
                    </div>
                </figure>
                </Col>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <h6>Weather Dashboard</h6>
                        <a href="https://mlh19.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded hover-shadow" src={Weather} alt="Weather Dashboard" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/mlh19/WeatherApp" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a></p>
                            </div>
                        </div>  
                    </div>
                </figure>
                </Col>
            </Row>
            <Row>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <h6>Day Planner</h6>
                    <a href="https://mlh19.github.io/DayPlanner" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded hover-shadow" src={Planner} alt="Day Planner" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/mlh19/DayPlanner" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a></p>
                            </div>
                        </div>
                    </div>
                </figure>
                </Col>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <h6>BookIt!</h6>
                    <a href="https://bookit-bookshelf.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded hover-shadow" src={Book} alt="Project 2" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/Mitchell-est-Robbins/Project2Group7" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a></p>
                            </div>
                        </div>
                        
                    </div>    
                </figure>
                </Col>
            </Row>
            <Row>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <h6>Placeholder</h6>
                    
                    <a href="/" target="_blank" rel="noopener noreferrer"><img className="img-fluid rounded hover-shadow" src={Placeholder} alt="Project 3" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                          
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="/" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'/></a></p>
                            </div>
                        </div>
                        
                    </div>    
                </figure>
                </Col>
            </Row>
            </Container>  
        </div>  
    </section>
    </div>
  );
}

export default Projects;
