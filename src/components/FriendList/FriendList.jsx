import PropTypes from 'prop-types';
import defaultImg from './default.jpg';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li key={id} className={s.item}>
                    {isOnline ?
                        (<span className={s.online}></span>) :
                        (<span className={s.offline}></span>)}
                    <img className={s.avatar} src={avatar} alt={name} width="48" />
                    <p className={s.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.defaultProps = {
  avatar: defaultImg,
};

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendList;