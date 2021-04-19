import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li key={id} className="item">
                    <span className="status"></span>
                    <img className="avatar" src={avatar} alt={name} width="48" />
                    <p className="name">{name}</p>
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