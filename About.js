import prof from '../image/pushan1.jpeg';

const about = () => {
    return (
       <section className="about" id="about">
          <h2 className="title">About Me</h2> 
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <img className="pic" src={prof} alt="not found" />
          </div>
          <div className="col-sm abutme">
            <div className="text1">
              <h4>I'm  Pushan Verma and I'm a <span className="typing-2"></span></h4>
            </div>
            <br/>
           <h3 className="abouttext">Hello World ! I am a undergraduate from GGSIPU (3rd year) intrested in web development and also has a keen intrest in Cloud Computing . I have a CGPA of 7.9(upto 4th sem) .</h3>
          </div>  
        </div>
      </div>
        </section>
    );
}

export default about;
