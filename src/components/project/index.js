import React from 'react'
import Images from 'assets/index'

class Project extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="cart-thumb">
          <div className="project-image-box">
            <div className="images-inner">
              <img className="background-image" src={this.props.value.logo_background} alt="background"/>
              <img className="icon-image" src={Images[ this.props.value.language ]} alt="icon"/>
            </div>
            <div className="button-wrapper">
              <a href={this.props.value.repository} className="source-button">Source</a>
              {this.props.value.demo !== "" &&
              <a href={this.props.value.demo} className="code-button">Demo</a>
              }
            </div>
          </div>
          <div className="button-wrapper-mobile">
            <a href={this.props.value.repository} className="source-button">Source</a>
            {this.props.value.demo !== "" &&
            <a href={this.props.value.demo} className="code-button">Demo</a>
            }
          </div>
          <div className="project-text-inner">
            <h3 className="project-title">{this.props.value.name}</h3>
            <ul className="project-icon-languages">
              <li className="icon-language">
                <img className="icon-language-image" src={Images[ this.props.value.language ]} alt="lang"/>
              </li>
            </ul>
            <p className="project-description">{this.props.value.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project
