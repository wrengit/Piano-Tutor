# Piano Tutor

A simple single octave piano made with JavaScript. Has a selection of songs to demonstrate how to play. Multi-touch playable keys.

## Demo

A link to the project hosted on GitHub Pages can be found [here](https://wrengit.github.io/Piano-Tutor/)

## UX

A link to the original wireframes can be found [here](https://github.com/wrengit/milestone2/blob/master/assets/Wireframes.pdf).

The site is purposefully simple, with a focus on the user interaction with the keyboard.
The UX was designed to be minimalist, and uncluttered, with all attention and screen real estate dedicated to the piano keys. The site/app was designed to be played primarily on a touch input device, such as a mobile, tablet or touch screen laptop.
The site directs the user to rotate their device into landscape mode, as the keyboard layout will not work in portrait.
Colours where chosen to keep attention focused on the keyboard, with a single page, non-scrollable view to make use on small screens easier. A landing menu page was used to ensure that the piano page remained uncluttered.

## Comments

The process took far longer than expected, whilst learning JavaScript on the go. I do not consider the site/app finished, but time-restraints means that I cannot further develop the site for examination purposes. The site will continue to be developed until it is finished post-grading, to be used as part of a personal portfolio.

The songs are stored as object arrays in 'songs.js' This file is not referenced by the site, and is included for development purposes only. The object arrays were converted to a string using the console and this string was used in 'index.html'.

## Features

### Existing Features

- Multi-touch input keyboard
- Tutor songs to demonstrate how to play
- Single piano 'voice' (classical piano)

### Features Left to Implement

- Fix browser compatibility across all available browsers
- Make site compatible with IOS and Safari
- Increase song list
- Add additional user selectable audio sounds (synth, strings, etc)
- Make played notes display sequentially in the #notebox, with previous notes visible for some period
- Rewrite entire site as a React Native application for Android or as a progressive web app (PWA). This will solve many of the current problems, such as delayed user input, browser compatibility, screen real estate.

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- Font Awesome
- Google Fonts
- PopperJS
- jQuery
- Boot swatch

## Services Used

- Tinypng - image compression
- Unsplash - image repository
- favicon.io - favicon generator
- Boot swatch - Bootstrap styles
- mycolor - colour gradient picker

## Libraries / plug-ins used

- jQuery full screen plug-in (https://github.com/kayahr/jquery-fullscreen-plugin/)

## Testing

The site was developed on a Dell XPS 13 13" 2-in-1 touch screen laptop. Initial testing was conducted with Brave Browser, Microsoft Edge, and Chrome. Mobile testing used a Huawei P20 pro, using Brave, Chrome, and Firefox. There was no availability of Apple devices, either mobile or desktop to conduct testing.

All testing was conducted manually.

The site was tested with W3 html & css validators.

### Browser compatibility

- On desktop/laptop, Brave Browser and Chrome showed full functionality. Audio played immediately after key press and fast repeated key presses stopped the audio cleanly before restarting. On mobile devices, Brave and Chrome showed full functionality, except for a short delay between registering keypress and playing a note. This was found to be a common issue on mobile browsers. Several attempts were made to remedy this situation including removing the user’s ability to zoom and using a JS plugin 'fast-click'. None of the changes removed the short ms delay in registering a click.
- Firefox desktop browser has a slight delay in playing the audio track when a key is pressed. Fast repeated key clicks of the same key lead to no audio being played, as it stops and restart the audio track before audio is heard. Firefox mobile browser does not support 'pointer' events by default. The user must manually turn these on in a config file.
- Edge browser on desktop has a similar audio play lag, though not as severe as Firefox. Repeated quick key presses lead to some audio being heard.
- Using a borrowed Apple iPhone early in development showed that the site does not register user touch input, like Firefox. Access to this device was very limited and testing at a later stage in development was not possible.

A method was found for detecting if the user was on a mobile or desktop browser (http://detectmobilebrowsers.com/
https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser). This was implemented in piano.js:

```javascript
const keyPress = note => {
  if (mobileAndTabletcheck == false) {
    note.onpointerdown = () => {
      keyDown(event);
    };
    note.onpointerup = () => {
      keyUp(event);
    };
    note.onpointerleave = () => {
      keyUp(event);
    };
  } else {
    note.onmousedown = () => {
      keyDown(event);
    };
    note.onmouseup = () => {
      keyUp(event);
    };
    note.onmouseleave = () => {
      keyUp(event);
    };
  }
};
```

Using this method allowed FireFox to register the user touch input. This played the audio note, but did not visually display the keypress. The reduced functionality also propagated to all mobile browsers, giving significanlty reduced functionality on Chrome, Brave, Edge.

The code has been left commented out in browsercheck.js for future work.

It was decided that for the current site version, full functionality with Chrome/Brave/Edge was more important to demonstrate how the finished site may look/feel.

### User stories

> As a user I would like to be able to play a piano on a mobile device.
>
> > The user can easily use multi-touch input or mouse clicks to trigger audio sounds and play a virtual piano.

> As a user I would like to be shown how to play a song, with a visual and audio demonstration.
>
> > The user can select a song and be shown both visually and audibly how to play the song.

> As a user, the song was playing too fast and I couldn't keep up. Also, too much of the song played in one go for me to be able to remember what to play.
>
> > The user can select the speed at which the song is played back, as well as how many bars are replayed.

## Cloning & Deployment

### Cloning

The site can be cloned to a local repository by the following steps (GitHub guide link [here](https://help.github.com/en/articles/cloning-a-repository)):

- Under the repository name, click Clone or download.

- In the Clone with HTTPs section, click the clipboard icon to copy the clone URL for the repository.

- Open the terminal on your local machine

- Change the current working directory to the location where you want the cloned directory to be made.

- Type `git clone`, and then paste the URL you previously copied.

\$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

- Press Enter. Your local clone will be created.

```

> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

```

### Deployment

The site is deployed on GitHub pages, directly from the master branch. The site will update with all further commits on the master branch. A cloned site can be deployed on GitHub via the following steps:

- Go to the setting menu on the GitHub repository

- Scroll down to find the 'GitHub Pages' subtitle and change the source to 'master branch'

- A link will appear beneath the 'GitHub Pages' subtitle with your hosted site.

## Credits

### Content

All content was written by me. Audio for the piano sounds were generated in a licenced copy of Ableton 9.

### Media

All images are from [Unsplash](http://unsplash.com), a royalty free, free to use image repository. Photographer credits for the image is below.

- Photo by Geert Pieters on [Unsplash](https://unsplash.com/@shotsbywolf)

