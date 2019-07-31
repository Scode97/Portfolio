import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
            <h1>Seham Eldeen</h1>
                <h3>What you THINK,you BECOME</h3>
                <p><b>TO BRING A CHANGE, A small change, One step at a time, I believe will make much of a difference.</b></p>
            </div>
        </div>
        <nav>
            <ul>
            <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Developing Journey</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('interest')}}>Interests</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
