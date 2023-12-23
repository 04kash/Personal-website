import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects(){
    return(
        <section id="projects" className='project'>
           <h1>Projects</h1>
           <Container>
                    <Row className='unit'>
                <Col  md={4}>
                <h1>DiscoverCity</h1>
                </Col>
                <Col className='bd' md={6}>
                   <ul>
                    <li> Successfully led a four-member team in developing DiscoverCity, a travel app that leverages the OpenTripMap
API for location suggestions and stores user data in a JSON file.
</li>
<li> Achieved a significant milestone by implementing Clean Architecture principles and incorporating design patterns like Strategy and Simple Factory, ensuring future scalability and adaptability to evolving APIs

</li>
<li> Drove the creation of a comprehensive testing suite (unit, integration, end-to-end tests), covering 75% of the
codebase, ensuring the app’s reliability.
</li>
                   </ul>
                </Col>
            </Row>
            <Row className='unit'>
                <Col  md={4}>
                <h1>Academic Weapon</h1>
                </Col>
                <Col className='bd' md={6}>
                   <ul>
                    <li>A tool that transforms digital and handwritten notes into
interactive flashcards and quizzes using GPT-3.5 and Microsoft Azure’s OCR.
</li>
<li>Spearheaded the project’s frontend development using React, ensuring a user-friendly and intuitive interface for
flashcards and quizzes.
</li>
                   </ul>
                </Col>
            </Row>
            <Row className='unit'>
                <Col  md={4}>
                <h1>Compel-O-Meter</h1>
                </Col>
                <Col className='bd' md={6}>
                   <ul>
                    <li>Developed an algorithm to determine the compellingness of twitter tweets, where the compellingness of a textual post
is defined as the degree to which it successfully incorporates pathos(emotion) and logos (reasoning)
</li>
<li>Incorporated Parse Trees, parts of speech tagging and sentiment analysis using libraries such as SpaCy and NLTK and used the Flask framework to customize UI more freely and allow users to run Compel-O-Meter on the web.
</li>
<li> Created an AI powered Lexicon to address the shortcomings caused by using a lexicon with fixed number of words.
</li>
                   </ul>
                </Col>
            </Row>
               <Row className='unit'>
                <Col  md={4}>
                <h1>TinDog</h1>
                </Col>
                <Col className='bd' md={6}>
                   <ul>
                    <li>Designed a Dog Dating Responsive Website as part of the Udemy Web Development Bootcamp 2022.</li>
<li>Used advanced CSS features such as z-index and stacking order to arrange images and other content and imported
fonts from google fonts.
</li>
<li>Used bootstrap to design buttons, price tables, the navigation bar and the carousel with arrows.
</li>
                   </ul>
                </Col>
            </Row>
             </Container>
            </section>
            
    
    )

}

export default Projects;
