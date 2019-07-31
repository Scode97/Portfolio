import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic03 from '../images/pic03.jpg'
import pic from '../images/pic.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

      <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">My developing journey</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          The headline, in short, illustrates my path along with learning, practicing, and enhancing my own coding skills. My interest in coding evolved once I started creating different programs back in high school. Irrespective of the fact that the programs we worked on were easy, I felt that I can express myself and my creativity through making up certain codings. I believed, since the very start, that practice is what will make me succeed although I found the majority just memorizing the rules, different structures, algorithms, etc. Ever since then, I started researching and reading different concepts correlated with coding using different languages including Java, HTML, CSS etc. This further made me link Java to an back-end application; namely, SQL.<br></br> 
          What made me hold on through coding is that through it you come up with many restrictions, and you try your level best to solve (debug) each and every error, and by that:<br></br><q> <strong> I learnt that one error is not just limited to one solution; there are many solutions that literaly lead to the exact same output.<br></br>
					The same goes on with life, when one door closes, and the other one closes, and the other one closes, there is a door right there that's open, hold on, be patient, it is right there, you got to change your path, if not, change your point of view about it.</strong></q>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <ul>
          <li>Currently a Co-organizer in <strong>Women TechMakers Kuwait</strong>. Being a part of WTM has really opened many opportunities ahead for me, I have learnt a lot and still up to enhancing my educational life as well as social life.</li>
          <li>Had an internship as a barista in <strong>ocafe</strong>, that thought me how to be more social, or basically, how to deal with people. I also learnt how to make different kind of drinks (Coffee, hot, and cold drinks etc.)</li>
          <li>had a part time job in <strong>AJM kuwait</strong>, I was basically handling all the registration work, and all the other receptionist work, including financial work.</li>
          </ul>
								
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>A fresh graduate at <strong>The American College of the Middle East (ACM)</strong>, majoring in <strong>Information Technology.</strong></p>
          <h3><strong>Why Information Technology?</strong></h3><br></br>
          <div >I have no idea...</div>
          Sounds funny... I know!! 
							At first, I wanted to become a Doctor, maybe that's because I didn't really know what I want or what I am really interested in; however, my GPA didn't help. So later, I thought that Information Technology revolves around coding but unfortunately I was wrong again. 
							That's negative I know, but hold on, read through... I have a point. You see, maybe IT wasn't my thing, but I don't regret it at all because in college, I took a course in programming Java, and that gave me a completely new interest which is basically coding. After that door closed, I started to discover many many new things. After I get my diploma in Information technology, I will change my major to Psychology and continue to enchance my skills in programming. That might seem weird, but with time, I got to know what I really want and what I am interested about. 
              <br></br><quote>YOU NEVER KNOW UNTIL YOU TRY</quote>
          {close}
        </article>

        <article id="interest" className={`${this.props.article === 'interest' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Interests</h2>
          <span className="image main"><img src={pic} alt="" />
          </span>
          <strong>
          <ul>
            <li>Reading</li>
            <li>Doodling</li>
            <li>Researching</li>
            <li>Writing</li>
            <li>Exploring new things</li>
            <li>UI/UX</li>
            <li>Teaching Others</li>
          </ul>
          </strong>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact Me</h2>
         <p>If you want to <strong>talk</strong>, you can <strong>find me</strong> at:</p>
         <h5>sehameldeen1997@gmail.com</h5>
          <ul className="icons">
            <li><a href="https://instagram.com/passion_to_code?igshid=19ng60k2v288u" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/Scode97" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main