import React from 'react';
import Carousel from 'react-images'; //https://jossmac.github.io/react-images/#/

const images = [
    { source: 'https://cutt.ly/ke3x2y5' },
    { source: 'https://cutt.ly/ee3x2lR' }, 
    { source: 'https://cutt.ly/re3x2LP' }
];

class Images extends React.Component {
  render() {
    return <Carousel  className="mt-b3 mt-3"views={images} />;
  }
}
export default Images;