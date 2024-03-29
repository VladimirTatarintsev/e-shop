import cx from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSort } from "store/slices/sortSlice";
import { getSort } from "store/selectors/sortSelector";
import { ReactComponent as SelectIcon } from "icons/chevron-down.svg";
import styles from "./Select.module.css";

export const Select = ({ className, options }) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const dispatch = useDispatch();
  const { selectedName } = useSelector(getSort);

  const handleShowOptions = () => {
    setIsShowOptions(!isShowOptions);
  };
  const handleSetSort = (sort) => {
    dispatch(setSelectedSort(sort));
    setIsShowOptions(false);
  };

  const selectClass = cx(styles.selectContainer, className);
  return (
    <div className={selectClass}>
      <div className={styles.customSelect} onClick={handleShowOptions}>
        <span className={styles.text}>Отсортировать:</span>
        <p>{selectedName}</p>
        <SelectIcon
          className={isShowOptions ? [styles.turnIcon] : [styles.icon]}
        />
      </div>
      {isShowOptions && (
        <div className={styles.showDropdown}>
          {options.map((option) => (
            <div
              className={styles.option}
              data-name={option.name}
              key={option.value}
              onClick={() => handleSetSort(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
