import * as devIcon from './dev-icons.js';
import sparkleMonkeyPhoto from '../../assets/project-photo-sparklemonkey-medium.png';
import eSkatePhoto from '../../assets/project-photo-eskate-medium.png';
import yaketyakPhoto from '../../assets/project-photo-yaketyak-medium.png';

export const projects = [
  {
    name: 'Yaketyak',
    photo: yaketyakPhoto,
    websiteURL: 'http://yaketyak.com/',
    description: 'Yaketyak was created within a two week solo sprint for a client to gain proof of concept of the Sendbird Chat API capabilities. Scope for MVP was discussed which included Create, Read, Update, and Destroy operations on profiles, chat channels, and individual messages. The client required the stack to match their in-house languages, frameworks, and libraries. This included React for the interface, Redux for state management, Material UI and Sass for style, and Webpack for compiling. Additionally, the client requested a user navigation tracking system, with the tool being up to my discretion, to be implemented and stored in state. We met, virtually, twice a week for status updates and new features or changes.',
    featureOne: 'React-Tracking library implemented for user navigation and event tracking.',
    featureTwo: 'Redux utilized to manage the state of the application.',
    featureThree: 'Material UI was implemented to mimick the client\'s branding.',
    devIcons: [devIcon.reactIcon, devIcon.reduxIcon, devIcon.materialIcon, devIcon.sassIcon, devIcon.webpackIcon],
  },
  {
    name: 'E-Skate',
    photo: eSkatePhoto,
    websiteURL: 'http://e-skate.tech/',
    description: 'E-Skate is an eCommerce site built to expand the clients customer reach and share. I provided the client with a separate admin interface, upon authorization, to control their inventory with create, update, or delete operations on their products. Since the client is in their beginning growth stage, I implemented the ability to change their store logo, contact information, and social media in case any rebranding takes place during their growth.',
    featureOne: 'Full-Stack application with admin interface allowing CRUD operations on items and store settings.',
    featureTwo: 'Image assets stored in AWS S3 while all other data stored in mLab using mongoDB.',
    featureThree: 'Redux utilized for app state management for shopping cart and admin authorization.',
    devIcons: [devIcon.nodeIcon, devIcon.reactIcon, devIcon.sassIcon, devIcon.mongoDBIcon, devIcon.webpackIcon],
  },
  {
    name: 'Sparkle Monkey',
    photo: sparkleMonkeyPhoto,
    websiteURL: 'http://sparklemonkey.space/',
    description: 'Sparkle Monkey simplifies the process for music lovers to narrow down their search for concert events they would like to attend. Based on the users input of location and time range, Sparkle Monkey will plot the events on a Google map that is easily navigated. If maps aren\'t your jam, pun intended, click on the list view for easy scrolling. Both interfaces allow the user to click through to purchase tickets at the 3rd party vendor.',
    featureOne: 'Full-Stack application using the Ticketmaster API for event resources.',
    featureTwo: 'Utilized Google Maps & Spiderfy API\'s to plot the data for easy viewing.',
    featureThree: 'Accessibility integrations include multiple map color modes and Chrome Vox dication.',
    devIcons: [devIcon.JSIcon, devIcon.nodeIcon, devIcon.jQueryIcon, devIcon.HTML5Icon, devIcon.CSS3Icon],
  },
];
