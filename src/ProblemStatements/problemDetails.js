import {
  communityFrontDoor,
  door2door,
  molSchooling,
  homeBuying,
} from '../assets/problemCategories';

export const problemDetails = {
  topic1: {
    name: 'Community Front Door',
    imgUrl: communityFrontDoor,
    route: 'community-front-door',
    problemStatement:
      'Many facilities booking services are scattered across multiple platforms and are unintuitive for citizens to use',
    vision:
      'A smart booking platform offering the communities with the fastest, intuitive and captive way to book ALL government and selected partners (non-government) public facilities in Singapore',
    objectives: [
      'Offer ample opportunities to promote engagement to different market segments.',
      'Poised to be a lifestyle platform to enable one to find/share booking partner facilitate/encourage social-mixing and healthier lifestyles among citizens.',
      'Be a platform to act as a data point and feedback point for understanding consumer behaviour to improve offerings and better serve communities',
    ],
    background: [
      'For a user right now to book facilities, multiple websites offer the booking functions, and some are not even online yet.',
      'To book sports facilities, ActiveSG or OnePA would be the place to go depending on the location you are booking.',
      'HDB facilities are booked via the individual Town Council mostly by calling or email correspondence',
      'Community Center facilities are managed via the OnePA website.',
    ],
    links: [
      {
        name: 'myActiveSG Website',
        href: 'https://www.myactivesg.com/Facilities',
      },
      { name: 'onePA Website', href: 'https://www.onepa.sg/cat/facility' },
    ],
  },
  topic2: {
    name: 'Door2Door',
    imgUrl: door2door,
    route: 'door2door',
    problemStatement:
      'As times are changing and technology is moving, we are more connected than ever, but at the same time losing our kampung community spirit. People living in Singapore do not look to our community for help and aid when they can be easily provided',
    vision:
      'Connect the demand and supply of help and aid to families and individuals in a community, to foster an air of friendliness among neighbours',
    objectives: [
      'To create a safe and friendly platform for people to help one another with minor tasks, be it helping translate bills to taking care of pets while away.',
      'To ensure that the platform is not abused and mistreated',
    ],
    background: [
      'Currently some people who have purchased their BTO flat form communities by leveraging off popular platforms like WhatsApp or Facebook to create floor chats.',
      'These chats are used for coordination such as bulk buying certain items for a cheaper price or sending friendly reminders. But there are only so many things a chat group can do and offer, and not everybody will be included as resale flats and people continue to move.',
      'There is currently no easy way to bring communities together via events or letting communities know of the efforts and activities carried out in their area. Many still rely on pamphlets in lifts or door to door communication.',
    ],
  },
  topic3: {
    name: 'MOL Schooling',
    imgUrl: molSchooling,
    route: 'mol-schooling',
    problemStatement:
      'Currently there are many avenues and touch points that parents have to go through during their child’s schooling, and the processes can be confusing and tedious',
    vision:
      'Parents Gateway, a digital platform designed to give greater convenience to parents, will be leveraged and extended to aggregate and integrate all interactions between schools and parents',
    objectives: [
      'To extend Parents Gateway to new functionalities to facilitate interactions between parents and schools.',
      'To make a go to place for parents to perform simple administrative transactions, and to stay updated on schools’ programmes and activities.',
    ],
    background: [
      'Right now Parents Gateway is an app launched by MOE to help strengthen the relationships between parents and schools.',
      'The current features include, giving consent for your children activities anytime, anywhere. Receiving official announcements directly from schools. Keeping track of upcoming activities for multiple children.',
      'Teachers can use the website to keep track of the administrative tasks sent out to parents',
    ],
    links: [
      { name: 'Parents Gateway Website', href: 'https://pg.moe.edu.sg/' },
    ],
  },
  topic4: {
    name: 'Home Buying',
    imgUrl: homeBuying,
    route: 'home-buying',
    problemStatement:
      'Many first time home buyers maximise the use of their CPF funds available for home purchase at the point of planning and application. This causes a false sense of affordability. They might commit to a bigger home just because they can afford it now, but will affect their retirement',
    vision:
      'We hope to let citizens make informed and prudent decisions around purchasing their first home with regards to their future goals and purchases, and making this process simple and easy',
    objectives: [
      'To understand what are the pain points when planning to buy a home and possible solutions to them.',
      'To improve the citizen facing experience when buying their first home.',
      'To equip citizens with information and the ability to make sensible tradeoffs with regard to their housing purchasing decisions',
    ],
    background: [
      'Currently information around buying a flat is relatively hard to find and confusing, due to the many grants and schemes available depending on your situation.',
      'Many citizens now use a combination of the HDB website, Bank websites, CPF websites, financial calculators and financial blogs to figure out what to do before committing to a home.',
      'Once committing the process is such that citizens must Apply for a BTO and wait for the application outcome. This is done via computer balloting. Applicants are then invited with their queue number chosen from the balloting to apply for their apartment. One the exercise closes, if there is enough demand for the area, construction will be given the go ahead and the applicants that have successfully booked the apartment get their keys when completed.',
    ],
    links: [
      {
        name: 'HDB New Flat Website',
        href: 'https://www.hdb.gov.sg/cs/infoweb/residential/buying-a-flat/new',
      },
    ],
  },
};
