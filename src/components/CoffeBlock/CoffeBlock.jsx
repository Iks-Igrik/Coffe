import React from "react";
import classNames from "classnames";
import Button from "../Button";
import PlusIcon from "./../../images/plus.svg"

const CoffeeBlock = ({
  id,
  name,
  imageUrl,
  sizes,
  price,
  opis,
  types,
  onClickAddCoffe,
  addedCount,
}) => {
  const availableNames = ["ground", "whole grain"];
  const availableSizes = [250, 500, 1000];

  const [activeSize, setActiveSize] = React.useState();
  const [activeType, setActiveType] = React.useState(types[0]);
  

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  const onAddCoffee = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: availableNames[activeType],
      };
      onClickAddCoffe(obj);
  };
 
  return (
    <div className="coffee-block">
      <div className="image-wrap">
        <img className="coffee-block__image" src={imageUrl} alt="Coffee" />
      </div>
      <div className="card-content">
        <h4 className="coffee-block__title">{name}</h4>
        <div className="coffee-block__selector">
          <ul className="coffee-block__list">
            <li>{opis}</li>
            {availableNames.map((types, index) => (
              <li
                key={types}
                onClick={() => onSelectType(index)}
                className={classNames({
                  activ: activeType === index,
                  disabled: !types.includes(index),
                })}
              >
                {types}
              </li>
            ))}
            {availableSizes.map((size, index) => (
              <li
                key={size}
                onClick={() => onSelectSize(index)}
                className={classNames({
                  activ: activeSize === index,
                  disabled: !sizes.includes(size),
                })}
              >
                {size} gramm
              </li>
            ))}
            <li>{price} $</li>
          </ul>

          {/* <ul>
            <li className="coffee-block__list2">Кислинка</li>
            <li className="coffee-block__list2">Горчинка</li>
            <li className="coffee-block__list2">Крепость</li>
            <li className="coffee-block__list2">Насыщенность</li>
          </ul> */}
        </div>
        <div className="coffee-block__bottom">
          

          <Button onClick={onAddCoffee} className="button--add custom-btn btn-wide button--outline" outline>
            <img className="coffee-block__img" src={PlusIcon} alt="coffee" />
            <span className="btn-content">Add to Cart </span>
             <b className="count-btn"> {addedCount && <i>{addedCount}</i>} </b>
             </Button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeBlock;
