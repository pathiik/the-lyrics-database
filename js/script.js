window.onscroll = function() {scrollSticky()};

document.addEventListener("DOMContentLoaded", function () {
    loadLyrics('watermelon-sugar');
});

var header = document.getElementById("header-bottom");
var sticky = header.offsetTop;
var mainContent = document.querySelector('.main');

function scrollSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
    mainContent.style.paddingTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("sticky");
    mainContent.style.paddingTop = "0";
  }
} 

function loadLyrics(song) {
    const lyricsSection = document.getElementById('lyrics-section');
    let songClass = '';
    let songTitle = '';
    let lyrics = '';

    // Remove active class from all nav links
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));

    switch (song) {
        case 'watermelon-sugar':
            songClass = 'peaceful';
            songTitle = 'Watermelon Sugar';
            songArtist = 'Harry Styles';
            lyrics = `<p class="indie-flower italic">Tastes like <span class="span-strawberry">strawberries</span> on a summer evenin'<br>And it sounds just like a song<br>I want more berries and that <span class="span-summer">summer feelin'</span><br>It's so wonderful and warm</p>
            <p class="indie-flower italic"><span class="span-breathe-in">Breathe me in,</span> <span class="span-breathe-out">breathe me out</span><br>I don't know if I could ever go without<br>I'm just thinking out <span class="span-high">loud</span><br>I don't know if I could ever go without</p>
            <p class="indie-flower italic"><span class="span-watermelon">Watermelon</span> sugar <span class="span-high">high</span><br>Watermelon sugar high<br>Watermelon sugar high<br><span class="span-watermelon">Watermelon</span> sugar <span class="span-high">high</span></p>
            <p class="indie-flower italic"><span class="span-strawberry">Strawberries</span> on a summer evenin'<br>Baby, you're the end of June<br>I want your belly and that <span class="span-summer">summer feelin'</span><br>Getting washed away in you</p>
            <p class="indie-flower italic"><span class="span-breathe-in">Breathe me in,</span> <span class="span-breathe-out">breathe me out</span><br>I don't know if I could ever go without</p>
            <p class="indie-flower italic span-high">Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high</p>
            <p class="indie-flower italic">I just wanna taste it, I just wanna taste it<br><span class="span-high">Watermelon sugar high</span></p>
            <p class="indie-flower italic">Tastes like strawberries on a summer evenin'<br>And it sounds just like a song<br>I want your belly and that summer feelin'<br>I don't know if I could ever go without</p>
            <p class="indie-flower italic span-watermelon">Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high (sugar)<br>Watermelon sugar high (sugar)<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br>Watermelon sugar high<br></p>
            <p class="indie-flower italic">I just wanna taste it, I just wanna taste it (Eh-eh-ah)<br>Watermelon sugar high<br>I just wanna taste it, I just wanna taste it (Ooh, yeah)<br>Watermelon sugar <span class="span-high">high</span><br><span class="span-watermelon">Watermelon sugar</span></p>`;
            songCoverImage = 'images/watermelon-sugar-cover.jpg';
            songCoverDesc = 'Cover Image of Watermelon Sugar by Harry Styles';
            songSpotifyLink = 'https://open.spotify.com/track/6UelLqGlWMcVH1E5c4H7lY?si=5b3b8e132b744967';
            songYoutubeLink = 'https://youtu.be/E07s5ZYygMg?si=uh0kiMMIpH-3OIV9';
            songSoundCloudLink = 'https://soundcloud.com/harrystyles/watermelon-sugar?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-watermelon-sugar').classList.add('active');
            break;
        case 'take-me-to-church':
            songClass = 'sad';
            songTitle = 'Take Me To Church';
            songArtist = 'Hozier';
            lyrics = `<p class="playfair-display">My lover's got humor<br>She's the giggle at a funeral<br>Knows everybody's disapproval<br>I should've worshipped her sooner<br>If the heavens ever did speak<br>She's the last true mouthpiece</p>
            <p class="playfair-display verse-1">Every Sunday's gettin' more bleak<br>A fresh poison each week<br>We were born sick, you heard them say it<br>My church offers no absolutes<br>She tells me, <span class="span-worship">"Worship in the bedroom"</span><br>The only heaven I'll be sent to<br>Is when I'm alone with you<br>I was born sick, but I love it<br>Command me to be well</p>
            <p class="playfair-display pre-chorus">A, amen<br>Amen, amen</p>
            <p class="playfair-display chorus">Take me to church<br>I'll worship like a dog at the shrine of your lies<br>I'll tell you my sins and you can sharpen your knife<br>Offer me that deathless death<br>Oh, good God, let me give you my life</p>
            <p class="chorus-add">Take me to church<br>I'll worship like a dog at the shrine of your lies<br>I'll tell you my sins and you can sharpen your knife<br>Offer me that deathless death<br>Oh, good God, let me give you my life</p>
            <p class="playfair-display">If I'm a pagan of the good times<br>My lover's the sunlight<br>To keep the goddess on my side<br>She demands a sacrifice<br>Drain the whole sea, get somethin' shiny<br>Somethin' meaty for the main course<br>That's a fine lookin' high horse<br>What you got in the stable?<br>We've a lot of starvin' faithful<br>That looks tasty, that looks plenty<br>This is hungry work</p>
            <p class="playfair-display chorus">Take me to church<br>I'll worship like a dog at the shrine of your lies<br>I'll tell you my sins and you can sharpen your knife<br>Offer me that deathless death<br>Oh, good God, let me give you my life</p>
            <p class="chorus-add">Take me to church<br>I'll worship like a dog at the shrine of your lies<br>I'll tell you my sins and you can sharpen your knife<br>Offer me that deathless death<br>Oh, good God, let me give you my life</p>
            <p class="playfair-display pre-chorus">A, amen<br>Amen, amen</p>
            <p class="playfair-display chorus">Take me to church<br>I'll worship like a dog at the shrine of your lies<br>I'll tell you my sins and you can sharpen your knife<br>Offer me that deathless death<br>Oh, good God, let me give you my life</p>
            <p class="chorus-add">Take me to church<br>I'll worship like a dog at the shrine of your lies<br>I'll tell you my sins and you can sharpen your knife<br>Offer me that deathless death<br>Oh, good God, let me give you my life</p>`;
            songCoverImage = 'images/take-me-to-church-cover.jpg';
            songCoverDesc = 'Cover Image of Take Me To Church by Hozier';
            songSpotifyLink = 'https://open.spotify.com/track/1CS7Sd1u5tWkstBhpssyjP?si=9160896427824e23';
            songYoutubeLink = 'https://www.youtube.com/watch?v=MYSVMgRr6pw';
            songSoundCloudLink = 'https://soundcloud.com/xmusicx13/hozier-take-me-to-church?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-take-me-to-church').classList.add('active');
            break;
        case 'happy':
            alert('This lyrics is under construction. Please check back later.');
            songClass = 'happy';
            songTitle = 'Happy';
            songArtist = 'Pharrell Williams';
            lyrics = `<p class="roboto">It might seem crazy what I'm 'bout to say<br>Sunshine she's here, you can take a break<br>I'm a hot air balloon that could go to space<br>With the air, like I don't care, baby, by the way, huh</p>
            <p class="roboto">(Because I'm happy)<br>Clap along if you feel like a room without a roof<br>(Because I'm happy)<br>Clap along if you feel like happiness is the truth<br>(Because I'm happy)<br>Clap along if you know what happiness is to you<br>(Because I'm happy)<br>Clap along if you feel like that's what you wanna do</p>
            <p class="roboto">Here come bad news, talking this and that (Yeah!)<br>Well, give me all you got, don't hold it back (Yeah!)<br>Well, I should probably warn ya, I'll be just fine (Yeah!)<br>No offense to you, don't waste your time, here's why</p>
            <p class="roboto">(Because I'm happy)<br>Clap along if you feel like a room without a roof<br>(Because I'm happy)<br>Clap along if you feel like happiness is the truth<br>(Because I'm happy)<br>Clap along if you know what happiness is to you<br>(Because I'm happy)<br>Clap along if you feel like that's what you wanna do (Hey Come On Uh,)</p>
            <p class="roboto">(Happy), Bring me down<br>Can't nothing (Happy), bring me down<br>My level's too high to (Happy), bring me down<br>Can't nothing (Happy), bring me down, I said<br>(Let me tell you now)<br>(Happy, Happy, Happy, Happy,) Bring me down<br>Can't nothing (Happy, Happy, Happy, Happy,) bring me down<br>My level's too high to (Happy, Happy, Happy, Happy,) bring me down<br>Can't nothing (Happy, Happy, Happy,) bring me down, I said</p>
            <p class="roboto">(Because I'm happy)<br>Clap along if you feel like a room without a roof<br>(Because I'm happy)<br>Clap along if you feel like happiness is the truth<br>(Because I'm happy)<br>Clap along if you know what happiness is to you<br>(Because I'm happy)<br>Clap along if you feel like that's what you wanna do<br>(Because I'm happy)<br>Clap along if you feel like a room without a roof<br>(Because I'm happy)<br>Clap along if you feel like happiness is the truth<br>(Because I'm happy)<br>Clap along if you know what happiness is to you<br>(Because I'm happy)<br>Clap along if you feel like that's what you wanna do (Hey Come On Uh,)</p>
            <p class="roboto">(Happy, Happy, Happy, Happy,) Bring me down<br>Can't nothing (Happy, Happy, Happy, Happy,) bring me down<br>My level's too high to (Happy, Happy, Happy, Happy,) bring me down<br>Can't nothing (Happy, Happy, Happy,) bring me down, I said...</p>
            <p class="roboto">(Because I'm happy)<br>Clap along if you feel like a room without a roof<br>(Because I'm happy)<br>Clap along if you feel like happiness is the truth<br>(Because I'm happy)<br>Clap along if you know what happiness is to you<br>(Because I'm happy)<br>Clap along if you feel like that's what you wanna do<br>(Because I'm happy)<br>Clap along if you feel like a room without a roof<br>(Because I'm happy)<br>Clap along if you feel like happiness is the truth<br>(Because I'm happy)<br>Clap along if you know what happiness is to you<br>(Because I'm happy)<br>Clap along if you feel like that's what you wanna do (Come on)</p>`;
            songCoverImage = 'images/happy-cover.jpg';
            songCoverDesc = 'Cover Image of Happy by Pharrell Williams';
            songSpotifyLink = 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH?si=539de7359996418b';
            songYoutubeLink = 'https://youtu.be/ZbZSe6N_BXs?si=nybeSNybqnyenA8l';
            songSoundCloudLink = 'https://soundcloud.com/3312w617/pharrell-williams-happy-from-despicable-me-2-soundtrack?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-happy').classList.add('active');
            break;
        case 'uptown-funk':
            alert('This lyrics is under construction. Please check back later.');
            songClass = 'groovy';
            songTitle = 'Uptown Funk';
            songArtist = 'Mark Ronson ft. Bruno Mars';
            lyrics = `<p>UPDATE IN PROGRESS...</p>`;
            songCoverImage = 'images/uptown-funk-cover.jpg';
            songCoverDesc = 'Cover Image of Uptown Funk by Mark Ronson ft. Bruno Mars';
            songSpotifyLink = 'https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS?si=7c2225f39e7140ec';
            songYoutubeLink = 'https://youtu.be/OPf0YbXqDm0?si=-WPP9tP8ItHfBQDX';
            songSoundCloudLink = 'https://soundcloud.com/thenoisyfreaks/mark-ronson-ft-bruno-mars-uptown-funk-the-noisy-freaks-ft-andrew-hunt-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-uptown-funk').classList.add('active');
            break;
        case 'without-me':
            alert('This lyrics is under construction. Please check back later.');
            songClass = 'rap';
            songTitle = 'Without Me';
            songArtist = 'Eminem';
            lyrics = `<p>UPDATE IN PROGRESS...</p>`;
            songCoverImage = 'images/without-me-cover.jpg';
            songCoverDesc = 'Cover Image of Without Me by Eminem';
            songSpotifyLink = 'https://open.spotify.com/track/7lQ8MOhq6IN2w8EYcFNSUk?si=199ae5d0365f4080';
            songYoutubeLink = 'https://youtu.be/YVkUvmDQ3HY?si=TRSx4_i7V1r-1Yhd';
            songSoundCloudLink = 'https://soundcloud.com/eminemofficial/without-me-album-version?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-without-me').classList.add('active');
            break;
        case 'beautiful-things':
            alert('This lyrics is under construction. Please check back later.');
            songClass = 'sad';
            songTitle = 'Beautiful Things';
            songArtist = 'Benson Boone';
            lyrics = `<p>UPDATE IN PROGRESS...</p>`;
            songCoverImage = 'images/beautiful-things-cover.png';
            songCoverDesc = 'Cover Image of Beautiful Things by Benson Boone';
            songSpotifyLink = 'https://open.spotify.com/track/6tNQ70jh4OwmPGpYy6R2o9?si=11051ba4d022470d';
            songYoutubeLink = 'https://youtu.be/Oa_RSwwpPaA?si=NeAZVzuknm9TqxWC';
            songSoundCloudLink = 'https://soundcloud.com/user-176440317/beautiful-things-benson-boone?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-beautiful-things').classList.add('active');
            break;
        case 'perfect':
            alert('This lyrics is under construction. Please check back later.');
            songClass = 'love';
            songTitle = 'Perfect';
            songArtist = 'Ed Sheeran';
            lyrics = `<p>UPDATE IN PROGRESS...</p>`;
            songCoverImage = 'images/perfect-cover.jpg';
            songCoverDesc = 'Cover Image of Perfect by Ed Sheeran';
            songSpotifyLink = 'https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v?si=d1ab6a35fffd4d81';
            songYoutubeLink = 'https://youtu.be/2Vv-BfVoq4g?si=02J_esvtBoUkMv9j';
            songSoundCloudLink = 'https://soundcloud.com/edsheeran/perfect?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-perfect').classList.add('active');
            break;
        case 'cruel-summer':
            alert('This lyrics is under construction. Please check back later.');
            songClass = 'fun';
            songTitle = 'Cruel Summer';
            songArtist = 'Taylor Swift';
            lyrics = `<p>UPDATE IN PROGRESS...</p>`;
            songCoverImage = 'images/cruel-summer-cover.jpg';
            songCoverDesc = 'Cover Image of Cruel Summer by Taylor Swift';
            songSpotifyLink = 'https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=0fbf764dd118449f';
            songYoutubeLink = 'https://youtu.be/ic8j13piAhQ?si=M1WU4mp6qGVpBRY-';
            songSoundCloudLink = 'https://soundcloud.com/taylorswiftofficial/cruel-summer?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
            document.getElementById('nav-cruel-summer').classList.add('active');
            break;
    }

    // Update lyrics section content
    lyricsSection.innerHTML = `
    <h1 class="song-title">${songTitle}</h1> 
        <article class="lyrics ${songClass}">
        <h2 class="song-artist">${songArtist}</h2>
            ${lyrics}
        </article>
        <p class="song-name">${songTitle} by ${songArtist}</p>
        <figure>
            <img src="${songCoverImage}" alt="${songCoverDesc}" class="song-cover">
        </figure>
            <p class="song-listen">Listen on:</p>
        <nav class="links-nav"><ul>
            <li>
                <a href=${songSpotifyLink} title="Spotify" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-spotify" style="color: #1ed760;"></i>
                </a>
            </li>
            <li>
                <a href=${songYoutubeLink} title="YouTube" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-youtube" style="color: #cd201f;"></i>
                </a>
            </li>
            <li>
                <a href=${songSoundCloudLink} title="SoundCloud" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-soundcloud" style="color: #ff7700;"></i>
                </a>
            </li>
        </ul></nav>
        `;
}
