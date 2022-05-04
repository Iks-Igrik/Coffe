import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
       
          <ContentLoader 
            speed={2}
            width={500}
            height={200}
            viewBox="0 0 500 200"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="10" y="0" rx="0" ry="0" width="196" height="244" />
          </ContentLoader>
        )
  }

export default LoadingBlock;
