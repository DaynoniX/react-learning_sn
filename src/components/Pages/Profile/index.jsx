import React from 'react';
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";

import styles from './Profile.module.scss';

const Profile = () => {
    const renderInfo = () => (
        <div className={styles.info}>
            <div className={styles.avatar}>
                <img src="avtar.png" alt=""/>
            </div>
            <div className={styles.description}>
                <h4>John Doe</h4>
                <p><strong>Birthday date:</strong> 20.10.1990</p>
                <p><strong>City:</strong> Lazytown</p>
                <p><strong>Education:</strong> Highest in universe</p>
                <p><strong>Info:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi dignissimos eum fuga fugiat, nam quibusdam! Amet assumenda at ducimus ex iure molestias omnis optio tempore. Asperiores, tenetur?</p>
            </div>
        </div>
    );

    return (
        <div>
            <div className={styles.wallpaper} />
            {renderInfo()}
            <NewPost/>
            <div className={styles.posts}>
                <Post text={'its a first post'}/>
                <Post text={'its a second post'}/>
                <Post text={'its a third post'}/>
            </div>
        </div>
    );
}
 export default Profile;
