# Piano Tutor
Milestone 2 project: Interactive Frontend Development - Code Institute

A simple single octave piano made with Javascript. Has a selection of songs to demonstrate how to play. Multi-touch playable keys.

## Demo
A link to the project hosted on GitHub Pages can be found [here](https://wrengit.github.io/milestone2/)

## UX
The UX was designed to be simple, and uncluttered, with all attention and screen real-estate dedicated to the piano keys. The site/app was designed to be played primarily on a touch input device, such as a mobile, tablet or touch screen laptop. 
Colours where chosen to keep attention focused on the keyboard, with a single page, non scrollable view to make use on small screens easier. A landing menu page was used to ensure that the piano page remained uncluttered.

## Comments
The process took far longer than expected, whilst learning JavaScript on the go. I do not consider the site/app finished, but time-restraints means that I cannot further develop the site for examination purposes. The site will continue to be developed until it is finshed post grading, to be used as part of a personal portfolio.

## Features
### Existing Features
* Multi-touch input keyboard
* Tutor songs to demonstate how to play
* Single piano 'voice' (classical piano)

### Features Left to Implement
* Fix browser compatabilty across all available browsers
* Make site compatible with IOS and Safari
* Increase song list
* Add additional user selectable audio sounds (synth, strings, etc)
* Make played notes display sequentially in the #notebox, with previous notes visible for some period of time
* Rewrite entire site as a React Native application for Android. This will solve many of the current problems, such as delayed user input, broswer compatabilty, screen real-estate


## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* FontAwesome
* Google Fonts
* PopperJS
* Jquery

## Services Used
* Tinypng - image compression
* Unsplash - image repository
* favicon.io - favicon generator
* Bootswatch - Bootstrap styles

## Libraries / plug-ins used
* JQuery full screen plug-in (https://github.com/kayahr/jquery-fullscreen-plugin/)

## Testing
* The site was developed on a Dell XPS 13 13" 2-in-1 tuch screen laptop. Initial testing was conducted with Brave Browser, Microsoft Edge, and Chrome. Mobile testing used a Huawei P20 pro, using Brave, Chrome, and Firefox. There was no availablity of Apple devices, either mobile or desktop to conduct testing. 
All testing was conducted manually.

### Browser compatability
* On desktop/laptop, Brave Browser and Chrome showed full functionality. Audio played immediately after key press and fast repeated key presses stoped the audio cleanly before restarting. On mobile devices, Brave and Chrome showed full functionality, excpet for a short delay between registering keypress and playing a note. This was found to be a common issue on mobile browsers. Several attempts were made to remidy this situation including removing the users abilty to zoom and using a JS plugin 'fast-click'. None of the changes removed the short ms delay in registering a click. 
* Firefox desktop browser has a slight delay in playing the audio track when a key is pressed. Fast repeated key clicks of the same key lead to no audio being played, as it stops and restart the audio track before audio is heard. Firefox mobile browser does not recognise user input to click keys at all. Removing all functionality from the site. This is a bug/issue that needs to be addressed. 
* Edge browser on desktop has a similar audio play lag, though not as severe as Firefox. Repeated quick key presses lead to some audio being heard. 
* Using a borrowed Apple iPhone early in development showed that the site does not register user touch input, similar to Firefox. Access to this device was very limited and testing at a later stage in development was not possible. 

### User stories
> As a user I would like to be able to play a piano on a mobile device.
>
>> The user can easily user multi-touch input or mouse clicks to trigger audio sounds and play a virtual piano.

> As a user I would like to be shown how to play a song, with a visual and audio demonstration.
>
>> The user has the abilty to select a song, and be shown both visually and audibly how to play the song.

> As a user, the song was playing too fast and I couldn't keep up. Also, too much of the song played in one go for me to be able to remember what to play.
>
>> The user has the abilty to select the speed at which the song is played back, as well as how many bars are replayed. 

## Cloning & Deployment

### Cloning
The site can be cloned to a local repository by the following steps (GitHub guide link [here](https://help.github.com/en/articles/cloning-a-repository)):

* Under the repository name, click Clone or download.

* In the Clone with HTTPs section, click the clipboard icon to copy the clone URL for the repository.

* Open the terminal on your local machine

* Change the current working directory to the location where you want the cloned directory to be made.

* Type ```git clone```, and then paste the URL you previously copied.

$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

* Press Enter. Your local clone will be created.

```
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

### Deployment
The site is deployed on GitHub pages, directly from the master branch. The site will update with all further commits on the master branch. A cloned site can be deployed on GitHub via the following steps:

* Go to the setting menu on the GitHub repository

* Scroll down to find the 'GitHub Pages' subtitle and change the source to 'master branch'

* A link will appear beneath the 'GitHub Pages' subtitle with your hosted site.

## Credits

### Content
All content was written by me. Audio for the piano sounds were generated in a licenced copy of Ableton 9.

### Media
All images are from [Unsplash](http://unsplash.com), a royalty free, free to use image repository. Photographer credits for the image is below.

* Photo by Geert Pieters on [Unsplash](https://unsplash.com/@shotsbywolf)


### Acknowledgements

