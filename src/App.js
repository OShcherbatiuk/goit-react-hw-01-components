import Profile from './components/Profile/Profile'
import user from './user.json'

const App = () => {
    return (
        <div>
            <Profile
                url={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        </div>
    );
};

export default App;