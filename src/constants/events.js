const events = [
  {
    id: 1,
    name: "Log Off Night 2024",
    date: " July 7 2024 ",
    time: "7:00pm - 11:00pm (GMT+8)",
    venue: "Bayview Hotel, George Town, Penang",
    description: "An annual dinner to celebrate and appreciate final year computer science students' contributions.",
    details: "Log Off Night is the epic celebration marking the end of the 2023/2024 academic year for all Computer Science students! It’s a night where we come together to celebrate our achievements, honor our graduating final-year studets and bid farewell to dear friends.",
    tag1: "USM Students",
    tag2: "Prom Night",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/lon-2024-poster.webp"
  },
  {
    id: 2,
    name: "Project Innovation & eXploration in CS Education and Learning 2024",
    date: " July 2 2024 ",
    time: "10:00am - 12:40pm (GMT+8)",
    venue: "Dewan Budaya, USM",
    description: "An annual flagship exhibition programme specially curated for final year computer science students.",
    tag1: "Year 4",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/pixel-2024-poster.webp"
  },
  {
    id: 3,
    name: "Annual General Meeting 2024",
    date: " June 26 2024 ",
    description: "An annual event to showcase the achievements of CS Society throughout the year and elect the new executives members.",
    tag1: "CS Students",
    tag2: "CS Society",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/agm-2024-poster.webp"
  },
  {
    id: 4,
    name: "Varsity Hackathon 2024",
    date: " April 20 2024 ",
    description: "A completely redesigned international hackathon and a space for university students to gain new hackathon experience.",
    tag1: "International",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/vhack-2024-poster.webp"
  },
  {
    id: 5,
    name: "Sukan Antara Pusat Pengajian Sains 2024",
    date: " April 9 2024 ",
    description: "A joint collaboration sports competition between seven competing Science Schools in USM.",
    tag1: "Science Schools",
    tag2: "Sports",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/sukapps-2024-poster.webp"
  },
  {
    id: 6,
    name: "Frosty Fantasy Night 2023",
    date: " April 4 2024 ",
    description: "A brand new event specifically designed for computer science undergraduates to unwind and relax.",
    tag1: "CS Students",
    tag2: "Entertainment",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/frostynight-2023-poster.webp"
  },
  {
    id: 7,
    name: "Major Minor Exploration Event 2024",
    date: " Mar 5 2024 ",
    description: "A 2-day virtual event aimed at helping first-year USM CS students to select their academic tracks.",
    tag1: "Year 1",
    tag2: "Talk",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/me2-2024-poster.webp"
  },
  {
    id: 8,
    name: "Virtual Computer Science Internship & Recruitment Fair 2023",
    date: " Dec 4 2023 ",
    description: "A 1-day online event featuring career talks and sharing sessions primarily for computer science students at USM.",
    tag1: "Year 3 & 4",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/vcsirf-2023-poster.webp"
  },
  {
    id: 9,
    name: "CS Bersamamu 2023",
    date: " Oct 22 2023 ",
    description: "An annual event that is organized to welcome and guide first-year students from School of Computer Sciences, USM.",
    tag1: "Year 1",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2023-2024/csbersamamu-2023-poster.webp"
  },


  {
    id: 10,
    name: "Log Off Night 2023",
    date: " July 14 2023 ",
    description: "An annual dinner to celebrate and appreciate final year computer science students' contributions.",
    tag1: "USM Students",
    tag2: " Prom Night ",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/lon-2023-poster.webp"
  },

  {
    id: 11,
    name: "Project Innovation & eXploration in CS Education and Learning 2023",
    date: " July 12 2023 ",
    description: "An annual flagship exhibition programme specially curated for final year computer science students.",
    tag1: " Year 4 ",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/pixel-2023-poster.webp"
  },

  {
    id: 12,
    name: "Annual General Meeting 2023",
    date: " June 21 2023 ",
    description: "An annual event to showcase the achievements of CS Society throughout the year and elect the new executives members.",
    tag1: " CS Students ",
    tag2: " CS Society ",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/agm-2023-poster.webp"
  },

  {
    id: 13,
    name: "CS Sports Day 2023",
    date: " Apr 30 2023 ",
    description: "A brand-new student-led sports event for students and lecturers in the School of Computer Sciences.",
    tag1: "CS Students",
    tag2: "Sports",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/cs-sports-day-2023-poster.webp"
  },

  {
    id: 14,
    name: "Varsity Hackathon 2023",
    date: " Apr 2 2023 ",
    description: "A completely redesigned international hackathon and a space for university students to gain new hackathon experience.",
    tag1: "International",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/vhack-2023-poster.webp"
  },
  {
    id: 15,
    name: "Major Minor Exploration Event 2023",
    date: " Mar 5 2023 ",
    description: "A virtual event aimed at helping first-year USM CS students to select their academic tracks.",
    tag1: "Year 1",
    tag2: "Talk",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/me2-2023-poster.webp"
  },
  {
    id: 16,
    name: "C++ Clinic 2023",
    date: " Jan 28 2023 ",
    description: "An online C++ coding workshop involving first-year computer science students from USM in preparation for their final exam.",
    tag1: "Year 1",
    tag2: "Workshop",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/cpp-clinic-2023-poster.webp"
  },
  {
    id: 17,
    name: "Computer Science Internship & Recruitment Fair 2022",
    date: " Jan 7 2023 ",
    description: "A 2-day physical event featuring career talks and exhibitions uniquely for computer science students at USM.",
    tag1: "Year 3 & 4",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/csirf-2022-poster.webp"
  },
  {
    id: 18,
    name: "CS Bersamamu 2022",
    date: " Oct 29 2022 ",
    description: "An annual event that is organized for the first-year students from School of Computer Sciences, USM.",
    tag1: "Year 1",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/csbersamamu-2022-poster.webp"
  },
  {
    id: 19,
    name: "Testing Event 2022",
    date: " April 1 2022 ",
    description: "Testing testing 123",
    tag1: "Year 1",
    tag2: "Flagship",
    img: "https://cssocietyusm.com/assets/img/events/2022-2023/csbersamamu-2022-poster.webp"
  },
];

export default events;