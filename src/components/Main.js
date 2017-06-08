require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
let imageDatas=require('../data/imageDatas.json')

//利用子执行函数，将图片名信息转成图片URL路径信息
imageDatas=(function genImageURL(imageDatasArr){
  for(var i=0; i<imageDatasArr.length; i++){
      var singleImageData=imageDatasArr[i]

      singleImageData.imageURL=require('../images/'+singleImageData.fileName)

      imageDatasArr[i]=singleImageData;
  }
  return imageDatasArr;
})(imageDatas)


class ImgFigure extends React.Component {
    render() {
        return (
            <div className="img-figure">
                <img src={this.props.data.imageURL}
                     alt={this.props.data.title}
                    />
                <div className="img-text">
                    <h2 className="img-title">{this.props.data.title}</h2>
                </div>
            </div>
        );
    }
}

class AppComponent extends React.Component {
  render() {

    var controllerUnits=[],
        imgFigures=[];

    imageDatas.forEach((value)=>{
        imgFigures.push(<ImgFigure data={value}/>)
    })

    return (
      <section className="stage">
          <section className="img-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
