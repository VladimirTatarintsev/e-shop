import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenu } from "store/slices/mobileMenuSlice";
import { Button } from "components";
import { MyLink } from "..";
import { ReactComponent as Cart } from "icons/cart.svg";
import { ReactComponent as Catalog } from "icons/catalog.svg";
import { ReactComponent as HeartIcon } from "icons/heart.svg";
import { ReactComponent as ScalesIcon } from "icons/scales.svg";
import { ReactComponent as Instagram } from "icons/instagram.svg";
import { ReactComponent as Telegram } from "icons/telegram-white.svg";
import { ReactComponent as LinkedIn } from "icons/linkedIn.svg";
import { ReactComponent as Viber } from "icons/viber.svg";
import { ReactComponent as YouTube } from "icons/youTube.svg";
import { ReactComponent as CloseIcon } from "icons/x-large.svg";
import { getIsMenuActive } from "store/selectors/mobileMenuSelector";
import styles from "./MobileMenu.module.css";

export const MobileMenu = ({ header, data: { cart, compare, wishList } }) => {
  const { active } = useSelector(getIsMenuActive);
  const dispatch = useDispatch();
  const handleHideMenu = () => {
    dispatch(setMobileMenu(false));
  };
  return (
    <div
      className={`${[styles.menu]} ${active ? [styles.menuActive] : ""}`}
      onClick={handleHideMenu}
    >
      <div className={styles.blur} />
      <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerContainer}>
          <Link to="/" className={styles.header} onClick={handleHideMenu}>
            {header}
          </Link>
          <Button
            color="transparent"
            size="medium"
            icon={CloseIcon}
            onClick={handleHideMenu}
          />
        </div>
        <Link
          className={styles.menuItem}
          to="/catalog"
          onClick={handleHideMenu}
        >
          <Catalog className={styles.linkIcon} />
          <span className={styles.linkText}>Каталог товаров</span>
        </Link>
        <Link className={styles.menuItem} to="/cart" onClick={handleHideMenu}>
          <div className={styles.iconWrap}>
            <Cart className={styles.linkIcon} />
            {cart.length ? (
              <div className={styles.linkCounter}>{cart.length}</div>
            ) : (
              ""
            )}
          </div>
          <span className={styles.linkText}>Корзина</span>
        </Link>
        <Link
          className={styles.menuItem}
          to="/compare"
          onClick={handleHideMenu}
        >
          <div className={styles.iconWrap}>
            <ScalesIcon className={styles.linkIcon} />
            {compare.length ? (
              <div className={styles.linkCounter}>{compare.length}</div>
            ) : (
              ""
            )}
          </div>
          <span className={styles.linkText}>Сравнение</span>
        </Link>
        <Link
          className={styles.menuItem}
          to="/wishList"
          onClick={handleHideMenu}
        >
          <div className={styles.iconWrap}>
            <HeartIcon className={styles.linkIcon} />
            {wishList.length ? (
              <div className={styles.linkCounter}>{wishList.length}</div>
            ) : (
              ""
            )}
          </div>
          <span className={styles.linkText}>Избранное</span>
        </Link>
        <div className={styles.followUs}>
          <span className={styles.title}>Следите за нами</span>
          <div className={styles.socials}>
            <MyLink
              className={styles.social}
              href="https://www.instagram.com/"
              color="primary"
              icon={Instagram}
            />
            <MyLink
              className={styles.social}
              href="https://www.viber.com"
              color="primary"
              icon={Viber}
            />
            <MyLink
              className={styles.social}
              href="https://web.telegram.org/"
              color="primary"
              icon={Telegram}
            />
            <MyLink
              className={styles.social}
              href="https://www.youtube.com"
              color="primary"
              icon={YouTube}
            />
            <MyLink
              className={styles.social}
              href="https://ru.linkedin.com/"
              color="primary"
              icon={LinkedIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
