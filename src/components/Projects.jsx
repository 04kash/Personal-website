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
                <h1>Google Search-Clone</h1>
                </Col>
                <Col className='bd' md={6}>
                   <ul>
                    <li>Used HTML forms to Clone the Google main search and google images search.
</li>
<li>Designed buttons,search bars, adjusted size and position of images and other elements on the website using CSS and imported fonts using FontAwesome.
</li>
<li>User can type in a query in the search bar, click the search button and will be taken to google search results page.
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
            <Row className='unit'>
                <Col  md={4}>
                <h1>Connect4</h1>
                </Col>
                <Col className='bd' md={6}>
                   <ul>
                    <li>Developed a 2 player connect4 game to play with family and friends anytime and anywhere</li>
<li>Represented the board as a 2D list and made use of functions, lists,conditional statements and nested loops.
</li>
<li>Implemented error handling, took all edge cases into consideration by making separate functions to check vertically,
horizontally and diagonally for 4 pieces in a row.
</li>
                   </ul>
                </Col>
            </Row>
             </Container>
            </section>
            
    
    )

}

export default Projects;
