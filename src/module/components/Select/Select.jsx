import cx from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSort } from "store/slices/selectedSortSlice";
import { ReactComponent as SelectIcon } from "icons/chevron-down.svg";
import styles from "./Select.module.css";

export const Select = ({ className, options }) => {
  const [isShowOptions, setIsShowOptions] = useState(false);
  const dispatch = useDispatch();
  const selectedSortName = useSelector((state) => state.selectedSort.name);

  const handleShowOptions = () => {
    setIsShowOptions(!isShowOptions);
  };

  const selectClass = cx(styles.selectContainer, className);
  return (
    <div className={selectClass}>
      <div className={styles.customSelect} onClick={handleShowOptions}>
        <span className={styles.text}>Сортировать:</span>
        <p>{selectedSortName}</p>
        <SelectIcon
          className={isShowOptions ? [styles.turnIcon] : [styles.icon]}
        />
      </div>
      {isShowOptions && (
        <div className={styles.showDropdown}>
          {options.map((option) => (
            <div
              className={styles.option}
              option={option}
              data-name={option.name}
              key={option.value}
              onClick={() => {
                dispatch(setSelectedSort(option));
                setIsShowOptions(false);
              }}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
