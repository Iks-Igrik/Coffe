import React from 'react';
import {ThumbsUp, Tag, TextAa} from 'phosphor-react';

const Sort = React.memo(function Sort({items, activeSortType, onClickSortType}) {
      const [visiblePopup, setVisiblePopup] = React.useState(false);
//    const [activeItem, setActiveItem] = React.useState(0);
    const sortRef = React.useRef();
    const activeLabel = items.find((obj) => obj.type === activeSortType).name;
    
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };
    

 const handdleOutsideClick = (event) => 
 {
      const path = event.path || (event.composedPath && event.composedPath());
     if (!path.includes(sortRef.current)) 
     { setVisiblePopup(false);
    }
 }   
    React.useEffect(() => {
        document.body.addEventListener('click', handdleOutsideClick);
    }, []);

    const onSelectItem = (index) => {
      if (onClickSortType) {
        onClickSortType(index);
      }
      setVisiblePopup(false);
    };

   const components = {
      TextAa,
      Tag,
      ThumbsUp
  };

  const DynamicComponent = ({name}) => {
    const SpecificStory = components[name];
    return <SpecificStory name={name} size={22} />;
} 

    return (
        <div>
           <div ref={sortRef} className="sort">
            <div className="sort__label">
              <b> Sort by:</b>
              <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
              <ul>
              { items.map((obj, index) => (
              <li onClick={() => onSelectItem(obj)}
               className={ activeSortType === obj.type ? 'activ' : ''}
                  key={`${obj.type}_${index}`}>
                  {/* {obj.icon && <DynamicComponent name={obj.icon} />}  */}
                    {obj.name}
                  </li>
              ))}
              </ul>
            </div>}
          </div>
         </div>
    );
}
);
export default Sort;
