import Profile from '../src/shared/Profile.js';
const test = QUnit.test;

QUnit.module('Profile Component');

test('render with user props', assert => {
    //arrange
    const user = {
        displayName: 'Dirt',
        photoURL: 'http://via.placeholder.com/50'
    };

    const profile = new Profile({ user });
    const expected = /*html*/`
            <div class="profile">
                <img src="http://via.placeholder.com/50">
                <span>Dirt</span>
                <button>Sign Out</button>
            </div>
        `;
    //act
    const rendered = profile.renderTemplate();
    //assert
    assert.htmlEqual(rendered, expected);
});