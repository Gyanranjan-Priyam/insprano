export type EventPrize = {
  position: string; // "1st", "2nd", "3rd"
  reward: string;   // "₹8,000 + Certificates"
};

export type EventContact = {
  name: string;
  phone: string;
};

export type EventTimelineItem = {
  label: string;
  time: string;
};

export type EventItem = {
  id: string;
  title: string;
  shortDescription: string;
  description?: string;           // full "About the Event" paragraph
  thumbnail: string;
  gallery?: string[];             // additional image URLs
  viewDetailsUrl: string;
  tags?: string[];
  // Event Details sidebar
  eventDate?: string;             // "Friday, October 17, 2025"
  eventTime?: string;             // "12:00 PM"
  venue?: string;
  teamSize?: string;              // "2 to 5 members"
  entryFees?: string;             // "Rs. 180 per head"
  registrationUrl?: string;
  // Prizes
  prizes?: EventPrize[];
  // Timeline
  timeline?: EventTimelineItem[];
  // Specs / Rules (bullet lists)
  specifications?: string[];
  rules?: string[];
  // Contact
  contacts?: EventContact[];
};

export type EventCategory = {
  id: string;
  label: string;
  events: EventItem[];
};

// ─── Inter-College Events ─────────────────────────────────────────────────────

export const interCollegeEvents: EventItem[] = [
  {
    id: "inter-codebreakers",
    title: "Codebreakers",
    shortDescription:
      "A team-based inter-college decryption and programming challenge where colleges compete to break code puzzles fastest.",
    thumbnail:
      "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/events/inter-codebreakers-thumb.jpg",
    viewDetailsUrl: "/events/inter-college/codebreakers",
    tags: ["Inter-College", "Cryptography", "Team"],
  },
  {
    id: "inter-kilobots",
    title: "KiloBots",
    shortDescription:
      "Autonomous robot battle arena — design, build, and pit your bot against rivals from colleges across the state.",
    thumbnail:
      "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/events/inter-kilobots-thumb.jpg",
    viewDetailsUrl: "/events/inter-college/kilobots",
    tags: ["Inter-College", "Robotics", "Automation"],
  },
];

// ─── Intra-College Events (by Department) ────────────────────────────────────

export type IntraBranch = {
  id: string;
  label: string;
  fullName: string;
  events: EventItem[];
};

// CE – Civil Engineering
export const ceEvents: EventItem[] = [
  {
    id: "ce-civil-quiz",
    title: "Civil Quiz",
    shortDescription:
      "A technical quiz event where participants answer 20 civil engineering questions covering structures, materials, and fundamentals — open to all branches.",
    description:
      "Civil Quiz is a technical quiz event designed to challenge participants' understanding of civil engineering fundamentals, structures, and materials. Participants answer 20 civil-related questions with four options each, and the highest number of correct answers determines the winner. Any branch can participate.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333717/CIVIL_EVENT-images-1_pselau.jpg",
    viewDetailsUrl: "/events/intra-college/ce/ce-civil-quiz",
    tags: ["Civil Engineering", "Quiz"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "10:30 AM",
    venue: "Room no 6",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "10:30 AM" },
    ],
    rules: [
      "Questions will cover surveying, structures, concrete technology, and environment.",
      "Electronic devices are not allowed.",
      "There will be elimination rounds.",
      "Maximum correct answers will determine the winner.",
      "Any branch can participate.",
      "Judge's decision is final.",
    ],
    contacts: [
      { name: "Subrat Nag", phone: "+91 9337570498" },
      { name: "Abhishek Kumbhar", phone: "+91 7849055685" },
      { name: "Sachidanand Das", phone: "+91 8249295762" },
    ],
  },
  {
    id: "ce-civil-crossword",
    title: "Civil Crossword",
    shortDescription:
      "Solve a crossword puzzle of 20 civil engineering questions covering concepts, materials, and famous structures — maximum correct answers wins.",
    description:
      "Civil Crossword is an event where participants solve crossword puzzles based on civil engineering concepts, materials, and famous structures. Participants solve a word box with 20 civil-related questions (no options provided), and the maximum number of correct answers determines the winner.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333718/CIVIL_EVENT-images-0_uwxf80.jpg",
    viewDetailsUrl: "/events/intra-college/ce/ce-civil-crossword",
    tags: ["Civil Engineering", "Puzzle"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "12:00 PM",
    venue: "Room no 6",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "12:00 PM" },
    ],
    rules: [
      "Crossword will test terminology and practical civil engineering knowledge.",
      "20 civil-related questions will be provided with no options.",
      "Participants must solve the word box with the appropriate answer.",
      "Time limit will be strictly followed.",
      "Maximum correct answers will determine the winner.",
      "Judge's decision will be final.",
    ],
    contacts: [
      { name: "Arghyarupa Priyadarshini", phone: "+91 7849073228" },
      { name: "Suvam Bohidar", phone: "+91 9861520547" },
      { name: "Gyanendra Mishra", phone: "+91 8249368239" },
    ],
  },
  {
    id: "ce-master-builder",
    title: "Master Builder",
    shortDescription:
      "Design and draft a small-scale civil building plan on-site following Vastu Shastra principles — judged on creativity, stability, and accuracy.",
    description:
      "Master Builder is an event where participants design and construct small-scale civil models demonstrating creativity, stability, and accuracy. Participants plan their building on-site according to the given area, following Vastu Shastra principles. Only A1 white sheets are provided, and participants must prepare all drawings with proper dimensions for rooms, doors, windows, and shelves. Any branch can participate.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333710/CIVIL_EVENT-images-2_maj37r.jpg",
    viewDetailsUrl: "/events/intra-college/ce/ce-master-builder",
    tags: ["Civil Engineering", "Building"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "02:30 PM",
    venue: "Room no 6",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "02:30 PM" },
    ],
    rules: [
      "Participants will use materials provided on the spot.",
      "Judging is based on innovation, strength, and design aesthetics.",
      "No pre-built structures are allowed.",
      "Only one member can participate (individual event).",
      "The size of the area will be given on the spot; planning must conform to that size.",
      "Vastu Shastra principles must be followed in planning.",
      "Only A1 white sheets are provided; participants must prepare all drawings.",
      "Dimensions of all rooms, doors, windows, and shelves must be clearly shown.",
      "Any branch can participate.",
      "Judge's decision is final.",
    ],
    contacts: [
      { name: "Siba Prasad Panda", phone: "+91 9337887457" },
      { name: "Surjeet Behera", phone: "+91 9438439539" },
      { name: "Adyasharani Das", phone: "+91 9078554800" },
    ],
  },
  {
    id: "ce-bridge-it",
    title: "Bridge It",
    shortDescription:
      "Teams design and construct a bridge model using ice cream sticks, thread, and glue — judged on load capacity, aesthetics, and material efficiency.",
    description:
      "Bridge It is a civil engineering challenge where teams design and construct a bridge model using provided materials that can sustain maximum load and exhibit good aesthetics. Ice cream sticks, thread, and glue are provided on site. Bridges must follow the span and stick limits, and winners are determined based on weight-to-load ratio. Any branch or year students forming a duo are allowed to participate.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333719/CIVIL_EVENT-images-3_nepixf.jpg",
    viewDetailsUrl: "/events/intra-college/ce/ce-bridge-it",
    tags: ["Civil Engineering", "Structural"],
    eventDate: "Saturday, October 18, 2025",
    eventTime: "10:30 AM",
    venue: "Room no 6",
    teamSize: "2 members",
    entryFees: "₹50 per team",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "10:30 AM" },
    ],
    rules: [
      "Each team must have exactly 2 members.",
      "Teams will be given standard materials (ice cream sticks, thread, and glue) on site.",
      "A bridge can be made up of a maximum of 150 sticks — not more.",
      "The length of the bridge must not exceed three spans or four supports.",
      "Judging criteria: load capacity, design, and material efficiency.",
      "Breaking of rules may lead to disqualification.",
      "Any branch or any year students forming a duo are allowed to participate.",
      "Judge's decision will be final.",
    ],
    contacts: [
      { name: "Sudeepta Rath", phone: "+91 7077068767" },
      { name: "Jyoti Ranjan Das", phone: "+91 8249311736" },
      { name: "Divyajyoti Pradhan", phone: "+91 9337618176" },
    ],
  },
  {
    id: "ce-treasure-hunt",
    title: "Treasure Hunt",
    shortDescription:
      "Navigate clues hidden across the campus involving surveying, mapping, and civil engineering trivia to find the treasure.",
    thumbnail: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/events/ce-treasure-hunt.jpg",
    viewDetailsUrl: "/events/intra-college/ce/ce-treasure-hunt",
    tags: ["Civil Engineering", "Adventure"],
  },
];

//Kilobots events
export const kilobotsEvents: EventItem[] = [
  {
    id: "kb-robo-sumo",
    title: "Robo Sumo",
    shortDescription:
      "Two teams battle head-to-head, manually controlling sumo bots to push the opponent's bot out of the ring in this fierce clash of strategy and strength.",
    description:
      "Witness the intensity of Robo Sumo, where two teams battle head-to-head to push their opponent's bot out of the ring. Teams control their customised sumo bots manually, using either wired or wireless methods, in a fierce showdown of strategy and strength. The first team to successfully knock the other's bot off the ring earns a point, bringing them closer to victory. Get ready for a compact yet thrilling clash in the world of Robo Sumo!",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760217730/ROBO_SUMO_mahl9b.jpg",
    viewDetailsUrl: "/events/inter-college/kilobots/kb-robo-sumo",
    tags: ["Robotics", "Combat", "Manual"],
    eventDate: "Saturday, October 18, 2025",
    eventTime: "08:00 AM",
    venue: "GCEK Ground Floor",
    teamSize: "2 to 4 members",
    entryFees: "Rs. 180 per head — access to all Robosprano events.",
    prizes: [
      { position: "1st", reward: "₹8,000 + Certificates" },
      { position: "2nd", reward: "₹6,000 + Certificates" },
      { position: "3rd", reward: "₹4,000 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "08:00 AM" },
    ],
    specifications: [
      "Maximum dimension of the robot: 30 cm × 30 cm × 15 cm (l×b×h); 5% tolerance is allowed.",
      "The robot may be wired or wireless.",
      "For wired bots, the wire length must be long enough to cover the whole arena and should remain slack during the complete run.",
      "Maximum weight must not exceed 5 kg.",
      "Participants will be provided with 220V, 50Hz standard AC supply; participants must arrange their own adaptor or batteries.",
      "Electric voltage anywhere in the machine must not exceed 12V DC at any point.",
      "The machine must not be made from Lego parts or any ready-made kit; violation will result in disqualification.",
    ],
    rules: [
      "The robot must conform to the given specifications.",
      "Each team can have a maximum of 2 to 4 members.",
      "Each team member must carry the identity card of their respective institute.",
      "The robot must not damage the arena.",
      "If a robot starts before the start signal, the counter will be restarted and the team gets a second chance; a repeated offence leads to disqualification.",
      "Your robot must be ready when your team is called.",
      "Each battle lasts 5 minutes; the team with the highest points at the end wins.",
      "Scoring criteria: (1) If Bot A pushes Bot B off the ring, a point is awarded to Bot A. (2) If two wheels of any bot go out of the ring, a point is awarded to the opponent. (3) If time expires with a tied score, sudden-death elimination begins — the first team to score a point wins.",
      "No test or practice runs will be allowed on the arena.",
      "If a robot becomes disabled during the competition, it will be declared the loser of the round.",
      "Unethical behaviour may lead to disqualification; the coordination committee holds final decision rights for any matter during the event.",
      "Judge's decision will be considered final.",
      "Certificates of Participation will be given to all participating teams, except those disqualified for violating competition rules.",
    ],
    contacts: [
      { name: "Yuvraj Ajay Taysam", phone: "+91 9905239937" },
      { name: "Nukesh Kumar Sahu", phone: "+91 9556192291" },
      { name: "Biswasmruti Sahoo", phone: "+91 9938827438" },
      { name: "Madhusmitha Sahoo", phone: "+91 9938962004" },
    ],
  },
  {
    id: "kb-robo-soccer",
    title: "Robo Soccer",
    shortDescription:
      "Two teams manually control custom soccer bots to score goals in the opponent's goalpost — the team with the most goals in the given time wins.",
    description:
      "Witness the intensity of Robo Soccer, where two teams battle head-to-head to score goals in their opponent's goalpost. Teams control their customised soccer bots manually, using either wired or wireless methods, in a fierce showdown of strategy and strength. The team that scores the highest number of goals within the given time will win the game. Get ready for a compact yet thrilling clash in the world of Robo Soccer!",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760217731/Robo_Soccer_lxp01u.jpg",
    viewDetailsUrl: "/events/inter-college/kilobots/kb-robo-soccer",
    tags: ["Robotics", "Soccer", "Manual"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "05:00 PM",
    venue: "GCEK Ground Floor",
    teamSize: "3 to 4 members",
    entryFees: "Rs. 180 per head — access to all Robosprano events.",
    prizes: [
      { position: "1st", reward: "₹7,000 + Certificates" },
      { position: "2nd", reward: "₹5,000 + Certificates" },
      { position: "3rd", reward: "₹3,000 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "05:00 PM" },
    ],
    specifications: [
      "Maximum dimension of the robot: 30 cm × 30 cm × 15 cm (l×b×h); 5% tolerance is allowed.",
      "The robot may be wired or wireless.",
      "For wired bots, the wire length must be long enough to cover the whole arena and should remain slack during the complete run.",
      "Maximum weight must not exceed 5 kg.",
      "Participants will be provided with 220V, 50Hz standard AC supply; participants must arrange their own adaptor or batteries.",
      "Electric voltage anywhere in the machine must not exceed 12V DC at any point.",
      "The machine must not be made from Lego parts or any ready-made kit; violation will result in disqualification.",
    ],
    rules: [
      "The robot must conform to the given specifications.",
      "Each team can have a maximum of 3 to 4 members.",
      "Each team member must carry the identity card of their respective institute.",
      "The robot must not damage the arena.",
      "If a robot starts before the start signal, the counter will be restarted and the team gets a second chance; a repeated offence leads to disqualification.",
      "Your robot must be ready when your team is called.",
      "The match will be conducted for 5 minutes — two halves of 2 minutes 30 seconds each.",
      "The team that scores the maximum goals within the time limit will be the winner.",
      "No test or practice runs will be allowed on the arena.",
      "If a robot becomes disabled during the competition, it will be declared the loser of the round.",
      "Unethical behaviour may lead to disqualification; the coordination committee holds final decision rights for any matter during the event.",
      "Judge's decision will be considered final.",
      "Certificates of Participation will be given to all participating teams, except those disqualified for violating competition rules.",
    ],
    contacts: [
      { name: "Yuvraj Ajay Taysam", phone: "+91 9905239937" },
      { name: "Nukesh Kumar Sahu", phone: "+91 9556192291" },
      { name: "Biswasmruti Sahoo", phone: "+91 9938827438" },
      { name: "Madhusmitha Sahoo", phone: "+91 9938962004" },
    ],
  },
  {
    id: "kb-line-follower",
    title: "Line Follower",
    shortDescription:
      "Build a fully autonomous robot that detects and follows a line track using IR sensors — speed, accuracy, and efficiency determine the winner.",
    description:
      "The Line Follower robot is a mobile machine that can detect and follow a line drawn on the floor. The path is predefined and can be either visible — such as a black line on a white surface — or invisible, such as a magnetic field. The robot senses the line using Infrared Ray (IR) sensors installed beneath it. The data is then transmitted to the processor via specific transition buses, which decides the appropriate commands and sends them to the driver, enabling the robot to follow the path autonomously.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760217733/Line_Follower_yfybzy.jpg",
    viewDetailsUrl: "/events/inter-college/kilobots/kb-line-follower",
    tags: ["Robotics", "Automation", "Autonomous"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "11:00 AM",
    venue: "GCEK Ground Floor",
    teamSize: "2 to 4 members",
    entryFees: "Rs. 180 per head — access to all Robosprano events.",
    prizes: [
      { position: "1st", reward: "₹8,000 + Certificates" },
      { position: "2nd", reward: "₹5,000 + Certificates" },
      { position: "3rd", reward: "₹3,000 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "11:00 AM" },
    ],
    specifications: [
      "The robot must be strictly autonomous.",
      "The width of the black or white line will be less than 3 cm.",
      "Dimensions of the robot must be less than 20 cm × 20 cm × 15 cm (l×b×h).",
      "Participants must ensure that room lighting, photography, etc. do not affect the functioning of sensors.",
      "If no robot finishes the course, the one that covered the longest distance in the least time will be considered the winner.",
      "Any robotic parts or building materials may be used provided the robot meets the above specifications and is primarily the original work of the team; ready-made robots are not allowed.",
      "Lego parts or ready-made kits are not allowed.",
    ],
    rules: [
      "The robot must follow the black line on a white background and complete the track in the least possible time.",
      "The robot must conform to the given specifications.",
      "A maximum of 3 touches are allowed per round; each touch adds a 5-second time penalty.",
      "Each team may have 2 to 4 members.",
      "If the machine remains immobile for a significant amount of time, an on-the-spot decision will be taken by the organisers.",
      "All tracks will be revealed at the time of the competition.",
      "Winners are judged on: (1) time to complete the track, and (2) number of checkpoints cleared.",
      "In case of a tie, winners are decided by minimum number of errors; if still tied, the more efficient bot is considered.",
      "A maximum of 3 minutes will be given before the competition starts for coding adjustments.",
    ],
    contacts: [
      { name: "Yuvraj Ajay Taysam", phone: "+91 9905239937" },
      { name: "Nukesh Kumar Sahu", phone: "+91 9556192291" },
      { name: "Biswasmruti Sahoo", phone: "+91 9938827438" },
      { name: "Madhusmitha Sahoo", phone: "+91 9938962004" },
    ],
  },
  {
    id: "kb-death-race",
    title: "Death Race",
    shortDescription:
      "A manual robotics racing challenge where teams build bots to navigate obstacles — switch bridges, marble pits, rotating discs, and more — in the least time.",
    description:
      "Death Race is a Racing event using Manual Robotics. Teams compete by building a racing bot — either wired or wireless — within specified dimensions that can be operated manually and can travel through all turns of the track. It should be able to withstand any obstacle, big or small, in the least time, including hurdles, checkpoints, and tasks within the track. Obstacles for the competition include Switch Bridge, speed breakers, marble pit, slippery path, rotating disc, curve ramp down, and more. The bot that completes the specified task in the least time will be declared the winner.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760217728/Death_Race_zpbtut.jpg",
    viewDetailsUrl: "/events/inter-college/kilobots/kb-death-race",
    tags: ["Robotics", "Racing", "Manual"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "12:00 PM",
    venue: "GCEK Ground Floor",
    teamSize: "2 to 5 members",
    entryFees: "Rs. 180 per head — access to all Robosprano events.",
    prizes: [
      { position: "1st", reward: "₹8,000 + Certificates" },
      { position: "2nd", reward: "₹6,000 + Certificates" },
      { position: "3rd", reward: "₹4,000 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "12:00 PM" },
    ],
    specifications: [
      "Maximum dimension of the robot: 30 cm × 30 cm × 15 cm (l×b×h); 5% tolerance is allowed.",
      "The robot may be wired or wireless.",
      "For wired bots, the wire length must be long enough to cover the whole track and should remain slack during the complete run.",
      "Maximum weight must not exceed 3 kg.",
      "Participants will be provided with 220V, 50Hz standard AC supply; participants must arrange their own adaptor or batteries.",
      "Electric voltage anywhere in the machine must not exceed 12V DC at any point.",
      "The machine must not be made from Lego parts or any ready-made kit; violation will result in disqualification.",
    ],
    rules: [
      "This is a racing event — the fastest and most balanced robot wins.",
      "The robot must conform to the given specifications.",
      "Each team can have a maximum of 2 to 5 members.",
      "Each team member must carry the identity card of their respective institute.",
      "The robot must not damage the arena.",
      "Wires must remain slack during the run; pulling the wire to aid the robot may lead to disqualification.",
      "If a robot starts before the start signal, the counter will be restarted and the team gets a second chance; a repeated offence leads to disqualification.",
      "Your robot must be ready when your team is called.",
      "Team members are allowed to touch or reset the robot's position a maximum of three times during the run; each instance incurs a time penalty and the timer will not stop.",
      "Robots are judged on: (1) Number of checkpoints cleared, then (2) Time to complete the track.",
      "No test or practice runs will be allowed on the arena.",
      "The robot must not leave behind any parts during the run; doing so will result in disqualification.",
      "Unethical behaviour may lead to disqualification; the coordination committee holds final decision rights for any matter during the event.",
      "Judge's decision will be considered final.",
      "Certificates of Participation will be given to all participating teams, except those disqualified for violating competition rules.",
    ],
    contacts: [
      { name: "Yuvraj Ajay Taysam", phone: "+91 9905239937" },
      { name: "Nukesh Kumar Sahu", phone: "+91 9556192291" },
      { name: "Biswasmruti Sahoo", phone: "+91 9938827438" },
      { name: "Madhusmitha Sahoo", phone: "+91 9938962004" },
    ],
  },
]

//Codebreakers events
export const codebreakersEvents: EventItem[] = [
  {
    id: "cb-hack-nova",
    title: "Hack Nova",
    shortDescription:
      "A social coding hackathon where teams of programmers, designers, and project managers collaborate to build innovative solutions to real-world problems within a limited timeframe.",
    description:
      "A hackathon is a social coding event that brings together programmers, designers, and project managers to collaborate on software projects. Participants work in teams to create innovative solutions to real-world problems within a limited timeframe. Problem statements will be provided at the beginning of the event.",
    thumbnail:
      "https://res.cloudinary.com/debeav22a/image/upload/v1760217731/Hack-a-thon_tvkwsy.jpg",
    viewDetailsUrl: "/events/inter-college/codebreakers/cb-hack-nova",
    tags: ["Hackathon", "Social Impact", "Inter-disciplinary"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "08:00 PM",
    venue: "GCEK Ground Floor",
    teamSize: "5 to 6 members",
    prizes: [
      { position: "1st", reward: "₹10,000 + Certificates" },
      { position: "2nd", reward: "₹6,000 + Certificates" },
      { position: "3rd", reward: "₹4,000 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "08:00 PM" },
    ],
    rules: [
      "Teams can consist of 5 to 6 members.",
      "Participants must register in advance through the provided enrollment link.",
      "All team members must be present during the event.",
      "The use of pre-existing code is allowed, but the majority of the work must be done during the hackathon.",
      "Teams will have 14 hours to complete their projects.",
      "Projects will be judged based on creativity, technical complexity, and potential impact.",
      "Participants must adhere to a code of conduct that promotes respect and collaboration.",
      "The decision of the judges will be final and binding.",
      "Problem statements will be provided at the beginning of the event.",
    ],
    contacts: [
      { name: "Yuvraj Ajay Taysam", phone: "+91 9905239937" },
      { name: "Krishidev Ghosh", phone: "+91 9337838821" },
      { name: "R Pradyota Reddy", phone: "+91 8658599527" },
      { name: "Suprit Mohanty", phone: "+91 7326976101" },
    ],
  },
]

// CSE – Computer Science & Engineering
export const cseEvents: EventItem[] = [
  {
    id: "cse-web-wizardry",
    title: "Web Wizardry",
    shortDescription:
      "Build and deploy a themed responsive website from scratch using HTML, CSS, and JS within 2 hours — judged on creativity, functionality, and design.",
    description:
      "Web Wizardry is a web development challenge where teams create and deploy a themed website within a fixed time using HTML, CSS, and JavaScript. Participants must build a simple responsive site within 1–2 hours. A sample website will be provided for reference.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333712/CSE_EVENT_LOGOS-images-1_hsp7aa.jpg",
    viewDetailsUrl: "/events/intra-college/cse/cse-web-wizardry",
    tags: ["CSE", "Web Development"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "11:00 AM",
    venue: "OS Lab",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "11:00 AM" },
    ],
    rules: [
      "Participants must create a functional website within 2 hours.",
      "Use of pre-made templates is not allowed.",
      "Judging is based on creativity, functionality, and design.",
      "Judge's decision will be final.",
    ],
    contacts: [
      { name: "Krishidev Ghosh", phone: "+91 9337838821" },
      { name: "R Pradyota Reddy", phone: "+91 8658599527" },
      { name: "Suprit Mohanty", phone: "+91 7326976101" },
    ],
  },
  {
    id: "cse-tech-charades",
    title: "Tech Charades",
    shortDescription:
      "Act out technology-related terms silently while your team guesses — dumb charades with a geeky twist, open to same-branch cross-year teams.",
    description:
      "Tech Charades is a fun event where participants guess technology-related terms through actions and clues — like dumb charades with a geeky twist! Participants must act out terms silently (e.g., 'Operating System', 'Cloud Computing') while their team guesses. Teams must consist of members from the same branch, but cross-year participation is allowed.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333710/CSE_EVENT_LOGOS-images-0_arl73l.jpg",
    viewDetailsUrl: "/events/intra-college/cse/cse-tech-charades",
    tags: ["CSE", "Fun"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "02:30 PM",
    venue: "Room No 7",
    teamSize: "3 to 4 members",
    entryFees: "₹50 per team",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "02:30 PM" },
    ],
    rules: [
      "Each team can have 3 to 4 members.",
      "No verbal hints allowed; participants must act out terms silently.",
      "Points are awarded for correct guesses within the time limit.",
      "Top-scoring teams advance to the finals.",
      "Participants must be from the same branch; cross-year participation is allowed.",
      "Judge's decision is final.",
    ],
    contacts: [
      { name: "R Pradyota Reddy", phone: "+91 8658599527" },
      { name: "Suprit Mohanty", phone: "+91 7326976101" },
    ],
  },
  {
    id: "cse-9-locks",
    title: "9 Locks",
    shortDescription:
      "Unlock nine progressive digital puzzles using logic, algorithms, and coding skills — solve one to get the clue for the next.",
    description:
      "9 Locks is a cryptography and problem-solving event where participants unlock nine digital puzzles using logic, algorithms, and coding skills. Solve one puzzle to get a clue for the next, progressing toward the final answer.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333711/CSE_EVENT_LOGOS-images-3_kftppf.jpg",
    viewDetailsUrl: "/events/intra-college/cse/cse-9-locks",
    tags: ["CSE", "Cybersecurity"],
    eventDate: "Saturday, October 18, 2025",
    eventTime: "09:30 AM",
    venue: "OS Lab",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "09:30 AM" },
    ],
    rules: [
      "Participants will face 9 progressive levels of challenges.",
      "Use of the internet is not allowed.",
      "Time-based tie-breaking will apply.",
      "Judge's decision will be final.",
    ],
    contacts: [
      { name: "R Pradyota Reddy", phone: "+91 8658599527" },
      { name: "Suprit Mohanty", phone: "+91 7326976101" },
    ],
  },
  {
    id: "cse-tech-talk",
    title: "Tech Talk",
    shortDescription:
      "Pick a cheat on a trending technology topic and deliver a 7-minute speech — a dynamic event testing knowledge, communication, and quick thinking.",
    description:
      "Tech Talk is a dynamic event where participants share their insights and research on trending technologies, AI, cybersecurity, or any innovation of their choice. Cheats will be shuffled in a container; participants pick one and deliver a speech within the allotted time. A 1–2 minute window is provided for a quick search on the topic before speaking.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333711/CSE_EVENT_LOGOS-images-2_dywspp.jpg",
    viewDetailsUrl: "/events/intra-college/cse/cse-tech-talk",
    tags: ["CSE", "Presentation"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "10:00 AM",
    venue: "Room No 7",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "10:00 AM" },
    ],
    rules: [
      "Topics must be approved by the event coordinators.",
      "Presentation time: 7 minutes + 2 minutes Q&A.",
      "A 1–2 minute window will be provided for a quick search on the topic before speech delivery.",
      "Plagiarism will lead to disqualification.",
      "Judges' decision will be final.",
    ],
    contacts: [
      { name: "Krishidev Ghosh", phone: "+91 9337838821" },
      { name: "R Pradyota Reddy", phone: "+91 8658599527" },
      { name: "Suprit Mohanty", phone: "+91 7326976101" },
    ],
  },
];

// EE – Electrical Engineering
export const eeEvents: EventItem[] = [
  {
    id: "ee-electro-puzzle",
    title: "Electro Puzzle",
    shortDescription:
      "A multi-round brain-teasing event combining electrical engineering knowledge with logical puzzles — crosswords, circuit riddles, and practical challenges.",
    description:
      "Electro Puzzle is a creative and brain-teasing event that combines electrical engineering knowledge with logical and analytical thinking. It challenges participants to solve puzzles, riddles, and problem statements related to electrical and electronic concepts.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333716/EVENT_ELECTRICAL-images-0_kntxsc.jpg",
    viewDetailsUrl: "/events/intra-college/ee/ee-electro-puzzle",
    tags: ["Electrical Engineering", "Puzzle"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "01:15 PM",
    venue: "Room No 7",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "01:15 PM" },
    ],
    rules: [
      "Round 1 — Concept Puzzles: Solve crossword, match-the-pair, or riddle-based questions related to electrical terms, symbols, and principles.",
      "Round 2 — Circuit/Logic Puzzles: Solve logic circuits, decode hidden circuit diagrams, or answer reasoning-based electrical problems.",
      "Round 3 (optional) — Practical Challenge: Short tasks or visual puzzles where participants identify circuit behaviour or component functions.",
      "No external devices or internet use allowed.",
      "The fastest and most accurate participant wins.",
      "Judge's decision is final.",
    ],
    contacts: [
      { name: "Anubhab Sahoo", phone: "+91 6372430840" },
      { name: "Soumya Ranjan Thakur", phone: "+91 8260753259" },
      { name: "Swastik Rath", phone: "+91 8249146628" },
      { name: "Anshuman Mund", phone: "+91 9938240807" },
    ],
  },
  {
    id: "ee-circuit-o-mania",
    title: "Circuit-o-Mania",
    shortDescription:
      "A hands-on multi-round circuit event — quiz, design/implementation, and fault-finding — testing practical electrical knowledge under time pressure.",
    description:
      "Circuito-mania is a hands-on technical event focused on designing, analyzing, and troubleshooting electrical or electronic circuits. It tests participants' practical understanding of circuit concepts and their ability to think logically under time constraints.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333712/EVENT_ELECTRICAL-images-2_hncljz.jpg",
    viewDetailsUrl: "/events/intra-college/ee/ee-circuit-o-mania",
    tags: ["Electrical Engineering", "Circuits"],
    eventDate: "Saturday, October 18, 2025",
    eventTime: "10:00 AM",
    venue: "NT Lab",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "10:00 AM" },
    ],
    rules: [
      "Round 1 — Circuit Quiz: A short written round with questions on basic circuit theory, components, and logic diagrams.",
      "Round 2 — Circuit Design/Implementation: Participants are given a problem statement to design or simulate a working circuit using provided components or software tools.",
      "Round 3 (optional) — Fault Finding: Identify and correct errors in a given faulty circuit.",
      "Components will be provided at the venue.",
      "Circuits must match the given specifications to earn points.",
      "Points are awarded for efficiency, creativity, and accuracy.",
      "Judges' decision is final.",
    ],
    contacts: [
      { name: "Anubhab Sahoo", phone: "+91 6372430840" },
      { name: "Soumya Ranjan Thakur", phone: "+91 8260753259" },
      { name: "Swastik Rath", phone: "+91 8249146628" },
      { name: "Anshuman Mund", phone: "+91 9938240807" },
    ],
  },
  {
    id: "ee-plug-in-play",
    title: "Plug-In Play",
    shortDescription:
      "A treasure-hunt–style event where teams trace clues, wire circuits at each station, and race to complete the final power-up challenge.",
    description:
      "Plug-In Play is a thrilling, treasure-hunt–style technical event where participants trace clues, unlock circuit challenges, and complete connection tasks step by step. Each correct setup reveals the next clue, leading them closer to the final 'power-up' challenge!",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333715/EVENT_ELECTRICAL-images-3_q0xlyz.jpg",
    viewDetailsUrl: "/events/intra-college/ee/ee-plug-in-play",
    tags: ["Electrical Engineering", "Hands-on"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "04:00 PM",
    venue: "Room No 7",
    teamSize: "2 members",
    entryFees: "₹50 per team",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "04:00 PM" },
    ],
    rules: [
      "Clue Round: Teams solve riddles or technical hints related to electrical concepts to find their next station or task.",
      "Connection Challenge: At each station, teams must correctly wire or assemble a small circuit (e.g., lamp control, relay logic, or sensor setup).",
      "Final Power Task: The last clue leads to a complete working setup — the team that completes it first is declared the winner.",
      "Each team must have exactly 2 members.",
      "Time limits will be enforced strictly.",
      "Judging will be based on accuracy and time.",
      "Judge's decision is final.",
    ],
    contacts: [
      { name: "Anubhab Sahoo", phone: "+91 6372430840" },
      { name: "Soumya Ranjan Thakur", phone: "+91 8260753259" },
      { name: "Swastik Rath", phone: "+91 8249146628" },
      { name: "Anshuman Mund", phone: "+91 9938240807" },
    ],
  },
  {
    id: "ee-watt-a-quiz",
    title: "Watt A Quiz",
    shortDescription:
      "A two-round technical quiz on electrical and electronics engineering — MCQs followed by a viva round testing circuits, machines, power systems, and more.",
    description:
      "Watt A Quiz is a technical quiz event based on electrical and electronics engineering concepts. It tests participants' knowledge of core subjects like basic electrical circuits, machines, power systems, electronics, and recent technological advancements.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760333715/EVENT_ELECTRICAL-images-1_wxaexx.jpg",
    viewDetailsUrl: "/events/intra-college/ee/ee-watt-a-quiz",
    tags: ["Electrical Engineering", "Quiz"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "11:00 AM",
    venue: "Room No 7",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "11:00 AM" },
    ],
    rules: [
      "Round 1 — Written/MCQ Quiz: Participants answer around 15 objective questions related to electrical engineering fundamentals and general technical awareness.",
      "Round 2 — Viva/Oral Round: Shortlisted participants face an interview-style round where judges ask conceptual or application-based questions related to electrical topics.",
      "Electronic devices are not permitted.",
      "Preliminary and final rounds will be conducted.",
      "Judge's decision is final.",
    ],
    contacts: [
      { name: "Anubhab Sahoo", phone: "+91 6372430840" },
      { name: "Soumya Ranjan Thakur", phone: "+91 8260753259" },
      { name: "Swastik Rath", phone: "+91 8249146628" },
      { name: "Anshuman Mund", phone: "+91 9938240807" },
    ],
  },
  {
    id: "ee-treasure-hunt",
    title: "Treasure Hunt",
    shortDescription:
      "Follow electrical-themed clues hidden across campus to locate the hidden treasure before rival teams.",
    thumbnail: "https://res.cloudinary.com/dw47ib0sh/image/upload/v1/techfest/events/ee-treasure-hunt.jpg",
    viewDetailsUrl: "/events/intra-college/ee/ee-treasure-hunt",
    tags: ["Electrical Engineering", "Adventure"],
  },
];

// ME – Mechanical Engineering
export const meEvents: EventItem[] = [
  {
    id: "me-machine-hunt",
    title: "Machine Hunt",
    shortDescription:
      "A mechanical treasure hunt where teams follow engineering clues and solve technical puzzles to discover hidden components and machines.",
    description:
      "Machine Hunt is a mechanical treasure hunt where teams follow engineering clues and solve technical puzzles to discover hidden components and machines. Teams follow clues, solve tasks, and find hidden machine parts through teamwork and logic.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760341534/Every_Nut_Needs_a_MECH-Over_ivg5rq.jpg",
    viewDetailsUrl: "/events/intra-college/me/me-machine-hunt",
    tags: ["Mechanical Engineering", "Adventure"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "11:30 AM",
    venue: "Room no 5",
    teamSize: "3 to 5 members",
    entryFees: "₹25 per team",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "11:30 AM" },
    ],
    rules: [
      "Each team can have 3 to 5 members.",
      "No use of mobile phones or external help is allowed.",
      "Teams must complete all checkpoints within the time limit.",
      "Using hints may lead to penalties in the final score.",
      "Judge's decision will be final.",
    ],
    contacts: [
      { name: "Prajanyamyee Panda", phone: "+91 8018015977" },
      { name: "Siba Prasad Nayak", phone: "+91 9178039421" },
    ],
  },
  {
    id: "me-who-i-am",
    title: "Who I Am",
    shortDescription:
      "Identify tools, machines, and famous engineers from visual, sound, and verbal clues — a fast-paced guessing event for sharp technical minds.",
    description:
      "Who I Am is an interactive guessing event where participants identify tools, machines, and famous engineers based on visual or verbal clues. A clue-based identification event to challenge your technical knowledge and presence of mind.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760341534/Every_Nut_Needs_a_MECH-Over_ivg5rq.jpg",
    viewDetailsUrl: "/events/intra-college/me/me-who-i-am",
    tags: ["Mechanical Engineering", "Quiz"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "03:00 PM",
    venue: "Room no 5",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "03:00 PM" },
    ],
    rules: [
      "No external assistance is permitted.",
      "Rounds will include images, sound clues, and rapid-fire questions.",
      "Top scorers move to the final round.",
      "Judge's decision will be final.",
    ],
    contacts: [
      { name: "Pratyush Sahu", phone: "+91 7735518558" },
      { name: "Ritesh Kumar Mohanta", phone: "+91 7846899447" },
    ],
  },
  {
    id: "me-doctor-syringe",
    title: "Doctor Syringe",
    shortDescription:
      "Design functional hydraulic mechanisms using syringes and simple materials to complete given tasks — judged on creativity, design efficiency, and performance.",
    description:
      "Doctor Syringe is a creative hands-on event where teams design functional hydraulic mechanisms using syringes to perform given tasks. Participants test their mechanical skills by building syringe-based systems to complete challenges efficiently and creatively.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760341534/Every_Nut_Needs_a_MECH-Over_ivg5rq.jpg",
    viewDetailsUrl: "/events/intra-college/me/me-doctor-syringe",
    tags: ["Mechanical Engineering", "Hydraulics"],
    eventDate: "Saturday, October 18, 2025",
    eventTime: "09:30 AM",
    venue: "Corridor - College Back Gate",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "09:30 AM" },
    ],
    rules: [
      "All designs must be made using syringes and simple materials provided.",
      "No pre-assembled models are allowed.",
      "Judging is based on creativity, design efficiency, and performance.",
      "Judges' decision will be final.",
    ],
    contacts: [
      { name: "Pratyush Sahu", phone: "+91 7735518558" },
      { name: "P Sumanth", phone: "+91 8093203618" },
    ],
  },
  {
    id: "me-thermo-quiz",
    title: "Thermo Quiz",
    shortDescription:
      "A competitive technical quiz testing speed and accuracy on thermodynamics, heat transfer, and fluid mechanics — with preliminary and final rounds.",
    description:
      "Thermo Quiz is a competitive technical quiz to test participants' knowledge of thermodynamics, heat transfer, and fluid mechanics. It challenges mechanical minds on speed, accuracy, and conceptual understanding.",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760341534/Every_Nut_Needs_a_MECH-Over_ivg5rq.jpg",
    viewDetailsUrl: "/events/intra-college/me/me-thermo-quiz",
    tags: ["Mechanical Engineering", "Thermodynamics"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "10:00 AM",
    venue: "Room no 5",
    teamSize: "Individual",
    entryFees: "₹25 per participant",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificate" },
      { position: "2nd", reward: "₹500 + Certificate" },
    ],
    timeline: [
      { label: "Event Starts", time: "10:00 AM" },
    ],
    rules: [
      "Questions will be based on thermodynamics, fluid mechanics, and heat transfer.",
      "Use of electronic devices during the quiz is strictly prohibited.",
      "Preliminary and final rounds will be conducted.",
      "Participants must carry their institute ID cards.",
      "The decision of the judges will be final.",
    ],
    contacts: [
      { name: "Prajanyamyee Panda", phone: "+91 8018015977" },
      { name: "Shivam Dash", phone: "+91 8457810700" },
    ],
  },
];

//Gaming Events
export const gamingEvents: EventItem[] = [
    {
    id: "gaming-free-fire",
    title: "Free Fire",
    shortDescription:
      "Form your squad of 4 and compete in fast-paced tactical Free Fire gameplay — strategize, battle, and claim victory in this thrilling esports event.",
    description:
      "Join us for an exciting Free Fire tournament where teams compete in fast-paced, tactical gameplay. Form your squad, strategize, and battle it out to claim victory in this thrilling esports event. Whether you're a seasoned player or new to the game, this tournament promises intense action and unforgettable moments. Don't miss your chance to showcase your skills and win amazing prizes!",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760281578/free_fire_xxj79e.jpg",
    viewDetailsUrl: "/events/intra-college/gaming/gaming-free-fire",
    tags: ["Gaming"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "04:30 PM",
    venue: "GCEK Seminar Hall",
    teamSize: "4 members",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "04:30 PM" },
    ],
    rules: [
      "Each team must have exactly 4 members.",
      "Participants must register in advance through the provided enrollment link.",
      "All team members must be present during the event.",
      "Teams must adhere to the game's code of conduct and sportsmanship guidelines.",
      "Use of cheats or hacks will result in immediate disqualification.",
      "Matches will be monitored by referees to ensure fair play.",
      "The decision of the referees will be final and binding.",
    ],
    contacts: [
      { name: "Ashish Kumar Mahapatra", phone: "+91 8456060172" },
      { name: "Harsh Wardhan", phone: "+91 8342932374" },
    ],
  },
  {
    id: "gaming-valorant",
    title: "Valorant Tournament",
    shortDescription:
      "Form your squad and compete in fast-paced tactical Valorant gameplay — strategize, battle, and claim victory in this thrilling esports showdown.",
    description:
      "Join us for an exciting Valorant tournament where teams compete in fast-paced, tactical gameplay. Form your squad, strategize, and battle it out to claim victory in this thrilling esports event. Whether you're a seasoned player or new to the game, this tournament promises intense action and unforgettable moments. Don't miss your chance to showcase your skills and win amazing prizes!",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760281577/valorant_phefnc.jpg",
    viewDetailsUrl: "/events/intra-college/gaming/gaming-valorant",
    tags: ["Gaming", "Esports"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "04:30 PM",
    venue: "GCEK Seminar Hall",
    teamSize: "4 to 5 members",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "04:30 PM" },
    ],
    rules: [
      "Each team can have 4 to 5 members.",
      "Participants must register in advance through the provided enrollment link.",
      "All team members must be present during the event.",
      "Teams must adhere to the game's code of conduct and sportsmanship guidelines.",
      "Use of cheats or hacks will result in immediate disqualification.",
      "Matches will be monitored by referees to ensure fair play.",
      "The decision of the referees will be final and binding.",
    ],
    contacts: [
      { name: "Asit Kumar Behera", phone: "+91 7848933368" },
      { name: "Abhishek Singh", phone: "+91 9337163376" },
    ],
  },
  {
    id: "gaming-bgmi",
    title: "BGMI",
    shortDescription:
      "Form your squad of 4 and compete in fast-paced tactical BGMI gameplay — drop in, strategize, and be the last team standing.",
    description:
      "Join us for an exciting BGMI tournament where teams compete in fast-paced, tactical gameplay. Form your squad, strategize, and battle it out to claim victory in this thrilling esports event. Whether you're a seasoned player or new to the game, this tournament promises intense action and unforgettable moments. Don't miss your chance to showcase your skills and win amazing prizes!",
    thumbnail: "https://res.cloudinary.com/debeav22a/image/upload/v1760281577/bgmi_qts2fo.jpg",
    viewDetailsUrl: "/events/intra-college/gaming/gaming-bgmi",
    tags: ["Gaming"],
    eventDate: "Friday, October 17, 2025",
    eventTime: "04:30 PM",
    venue: "GCEK Seminar Hall",
    teamSize: "4 members",
    prizes: [
      { position: "1st", reward: "₹1,000 + Certificates" },
      { position: "2nd", reward: "₹500 + Certificates" },
    ],
    timeline: [
      { label: "Event Starts", time: "04:30 PM" },
    ],
    rules: [
      "Each team must have exactly 4 members.",
      "Participants must register in advance through the provided enrollment link.",
      "All team members must be present during the event.",
      "Teams must adhere to the game's code of conduct and sportsmanship guidelines.",
      "Use of cheats or hacks will result in immediate disqualification.",
      "Matches will be monitored by referees to ensure fair play.",
      "The decision of the referees will be final and binding.",
    ],
    contacts: [
      { name: "Jashaswi Dhal", phone: "+91 8093705512" },
      { name: "Samir", phone: "+91 8480112440" },
    ],
  },
]

// Branch categories for the intra-college page
export const intraBranches: IntraBranch[] = [
  { id: "ce", label: "CE", fullName: "Civil Engineering", events: ceEvents },
  { id: "cse", label: "CSE", fullName: "Computer Science & Engineering", events: cseEvents },
  { id: "ee", label: "EE", fullName: "Electrical Engineering", events: eeEvents },
  { id: "me", label: "ME", fullName: "Mechanical Engineering", events: meEvents },
  { id: "gaming", label: "Gaming", fullName: "Gaming Events", events: gamingEvents },
];

// Combined intra-college events (flat list for backward compatibility)
export const intraCollegeEvents: EventItem[] = [
  ...ceEvents,
  ...cseEvents,
  ...eeEvents,
  ...meEvents,
  ...gamingEvents,
];

// ─── All Events Categorised ───────────────────────────────────────────────────

export const eventCategories: EventCategory[] = [
  {
    id: "inter-college",
    label: "Inter-College",
    events: [...codebreakersEvents, ...kilobotsEvents],
  },
  {
    id: "intra-college",
    label: "Intra-College",
    events: intraCollegeEvents,
  },
];

// ─── Flat list of all events ──────────────────────────────────────────────────

export const allEvents: EventItem[] = [
  ...codebreakersEvents,
  ...kilobotsEvents,
  ...intraCollegeEvents,
];
