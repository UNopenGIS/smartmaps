import React, { useEffect, useState } from 'react';

// List of usernames that have an existing profile page
const existingProfiles = ['albertkun'];

function ContributorCard({ username, role }) {
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setAvatarUrl(data.avatar_url));
    }, [username]);

    // Determine if the current username has an existing profile page
    const hasProfilePage = existingProfiles.includes(username);
    const profileUrl = `./about/contributors/${username}`;
    const githubUrl = `https://github.com/${username}`;
    const finalUrl = hasProfilePage ? profileUrl : githubUrl;

    return (
        <a href={finalUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                <img src={avatarUrl} alt={username} style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                <div>
                    <div>{username}</div>
                    <div style={{ fontSize: '0.8em', color: '#666' }}>{role}</div>
                </div>
            </div>
        </a>
    );
}

export default ContributorCard;