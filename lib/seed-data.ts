import { ChatCategory, ChatResponse } from '../types';

export const SEED_RESPONSES: ChatResponse[] = [
  // --- Small Talk ---
  { id: 1, keyword: 'hi', response: 'Hello! I am the GEC Bhavnagar Assistant. Use the buttons below or type your query.', category: ChatCategory.SMALL_TALK },
  { id: 2, keyword: 'who are you', response: 'I am the official GEC Bhavnagar College Assistant. I provide info on branches, faculty, fees, and more.', category: ChatCategory.SMALL_TALK },
  { id: 3, keyword: 'thanks', response: 'You\'re welcome! 😊 Feel free to ask anything about the college.', category: ChatCategory.SMALL_TALK },
  { id: 4, keyword: 'help', response: 'I can help with branches, faculty, subjects, college timing, holidays, placements or GTU papers.', category: ChatCategory.SMALL_TALK },
  { id: 5, keyword: 'bye', response: 'Goodbye! Have a great day!', category: ChatCategory.SMALL_TALK },
  { id: 6, keyword: 'default', response: 'I didn\'t understand that. Please ask about college info, branches, fees, or holidays.', category: ChatCategory.SMALL_TALK },

  // --- College Info ---
  { id: 10, keyword: 'about', response: 'Government Engineering College, Bhavnagar was established in 2004. It is affiliated with GTU and approved by AICTE.', category: ChatCategory.COLLEGE_INFO },
  { id: 11, keyword: 'timing', response: 'Official College & Office Hours:\n10:45 AM to 05:45 PM\n(Monday to Saturday, closed on 2nd & 4th Saturdays). All Sundays are holidays.', category: ChatCategory.COLLEGE_INFO },
  { id: 12, keyword: 'location', response: 'GEC Bhavnagar is located at Vidyanagar, Bhavnagar, Gujarat, India. Pin Code: 364002.', category: ChatCategory.COLLEGE_INFO },
  { id: 13, keyword: 'contact', response: 'Contact GEC Bhavnagar:\nPhone: +91-278-2521234\nEmail: info@gecbhavnagar.ac.in', category: ChatCategory.COLLEGE_INFO },
  { id: 14, keyword: 'website', response: 'Official GEC Bhavnagar Website: https://www.gecbhavnagar.ac.in', category: ChatCategory.COLLEGE_INFO },
  { id: 15, keyword: 'placements', response: 'GEC Bhavnagar has a dedicated Training & Placement Cell that coordinates campus recruitment drives and internships with leading companies.', category: ChatCategory.COLLEGE_INFO },
  { id: 16, keyword: 'library', response: 'The college library has a vast collection of technical books, journals, and digital resources to support student learning and research.', category: ChatCategory.COLLEGE_INFO },
  { id: 17, keyword: 'labs', response: 'GEC Bhavnagar is equipped with state-of-the-art laboratories for all branches, including Computer Labs, Electronics Labs, Civil Labs, and Mechanical Workshops.', category: ChatCategory.COLLEGE_INFO },
  { id: 18, keyword: 'hostel', response: 'The college provides separate hostel facilities for boys and girls. Hostel facilities include mess, and 24/7 security.', category: ChatCategory.COLLEGE_INFO },


  // --- Fees ---
  { id: 20, keyword: 'fees', response: 'Official Fee Structure:\n- Boys: ₹1,500\n- Girls: ₹0\n- TFWS: ₹0\nFees are governed by Government of Gujarat norms. Scholarships like MYSY are applicable for eligible students.', category: ChatCategory.FEES_INFO },
  { id: 21, keyword: 'scholarship', response: 'Scholarships at GEC Bhavnagar:\n- MYSY Scholarship for SC/ST/OBC/General category students.\n- Digital Gujarat Scholarship.\nCheck eligibility and apply through the college office.', category: ChatCategory.FEES_INFO },
  { id: 22, keyword: 'payment', response: 'Fee Payment Methods:\n- Online via the official college portal.\n- Offline at the college accounts office during working hours.', category: ChatCategory.FEES_INFO },
  { id: 23, keyword: 'refund', response: 'Fee Refund Policy:\nRefunds are processed as per Government of Gujarat guidelines. Contact the college accounts office for detailed procedures.', category: ChatCategory.FEES_INFO },


  // --- Academics & Portals ---
  { id: 30, keyword: 'syllabus', response: 'Click here for the official GTU Syllabus portal: https://gtu.ac.in/syllabus/syllabus.aspx\nYou can find branch-wise schemes and detailed subjects for all semesters here.', category: ChatCategory.ACADEMICS },
  { id: 31, keyword: 'portal', response: 'Official GTU Student Portal: http://student.gtu.ac.in/Login.aspx\nUse this for results, exam form filling, and viewing your academic profile.', category: ChatCategory.STUDENT_PORTAL },
  { id: 32, keyword: 'timetable', response: 'Official GTU Timetable Portal: https://gtu.ac.in/timetable/timetable.aspx\nCheck your semester-wise exam schedule and important academic dates here.', category: ChatCategory.ACADEMICS },
  { id: 33, keyword: 'gtu papers', response: 'Access previous year GTU question papers here: https://gtu.ac.in/OldQuestionPapers/OldQuestionPapers.aspx\nSelect your branch and semester to find relevant papers for practice.', category: ChatCategory.ACADEMICS },
  

  // --- 2025-26 Holiday Module ---
  { id: 40, keyword: 'holiday', response: '📅 ACADEMIC HOLIDAY CALENDAR (2025–26)\n\nNational Holidays:\n- 15 Aug 2025: Independence Day\n- 02 Oct 2025: Gandhi Jayanti\n- 26 Jan 2026: Republic Day\n\nFestival Holidays:\n- 07 Sep 2025: Janmashtami\n- 20 Oct 2025: Diwali (Laxmi Pujan)\n- 21 Oct 2025: Diwali (Balipratipada)\n- 05 Nov 2025: Guru Nanak Jayanti\n- 14 Jan 2026: Uttarayan\n- 02 Mar 2026: Holi\n- 31 Mar 2026: Eid-ul-Fitr\n\nWeekly Rules:\n- All Sundays are holidays.\n- 2nd & 4th Saturdays are holidays.\n- No extra holiday if a festival falls on a Sunday/Off-Saturday.\n\nSemester Breaks:\n- Winter Vacation: Dec 2025 - Jan 2026.\n- Summer Vacation: May 2026 - June 2026.', category: ChatCategory.HOLIDAYS },
  
  // --- Branches Knowledge & Careers ---

  // --- Information & Communication Technology (ICT) ---
  { id: 100, keyword: 'ict info', response: 'ICT Branch Overview:\nIntegration of IT with Communication networks. Focuses on bridging the gap between hardware and software systems.\nCore Subjects: Digital Communication, Data Science, Embedded Systems, Signal Processing.', category: ChatCategory.BRANCHES_KNOWLEDGE, branch: 'ict' },
  { id: 101, keyword: 'ict career', response: 'Career Roles for ICT Graduates:\n- Network Security Specialist\n- Embedded Systems Developer\n- Data Architect\n- Communication Systems Engineer\n- Telecom Infrastructure Manager', category: ChatCategory.CAREERS, branch: 'ict' },

  // --- Computer Engineering (CE) ---
  { id: 110, keyword: 'ce info', response: 'CE Branch Overview:\nFocuses on software architecture, algorithm design, and computational theory.\nCore Subjects: Data Structures, Machine Learning, Operating Systems, Cloud Computing.', category: ChatCategory.BRANCHES_KNOWLEDGE, branch: 'ce' },
  { id: 111, keyword: 'ce career', response: 'Career Roles for CE Graduates:\n- Full Stack Web Developer\n- AI/ML Engineer\n- Software Architect\n- Cybersecurity Analyst\n- DevOps Engineer', category: ChatCategory.CAREERS, branch: 'ce' },

  // --- Information Technology (IT) ---
  { id: 120, keyword: 'it info', response: 'IT Branch Overview:\nFocuses on the management, storage, and retrieval of information using software tools.\nCore Subjects: DBMS, Web Technologies, Cyber Security, Software Project Management.', category: ChatCategory.BRANCHES_KNOWLEDGE, branch: 'it' },
  { id: 121, keyword: 'it career', response: 'Career Roles for IT Graduates:\n- Database Administrator\n- IT Consultant\n- Systems Analyst\n- Web Applications Developer\n- Network Administrator', category: ChatCategory.CAREERS, branch: 'it' },

  // --- Electronics & Communication (EC) ---
  { id: 130, keyword: 'ec info', response: 'EC Branch Overview:\nDeals with electronic circuits, semiconductor devices, and wireless communication.\nCore Subjects: VLSI Design, Microprocessors, Satellite Communication, RF Engineering.', category: ChatCategory.BRANCHES_KNOWLEDGE, branch: 'ec' },
  { id: 131, keyword: 'ec career', response: 'Career Roles for EC Graduates:\n- VLSI Design Engineer\n- Robotics Engineer\n- RF Planning Engineer\n- Hardware Design Specialist\n- Electronic Circuit Analyst', category: ChatCategory.CAREERS, branch: 'ec' },

  // --- Civil Engineering ---
  { id: 140, keyword: 'civil info', response: 'Civil Branch Overview:\nDeals with the design, construction, and maintenance of the physical built environment.\nCore Subjects: Structural Analysis, Fluid Mechanics, Transportation Engineering, Surveying.', category: ChatCategory.BRANCHES_KNOWLEDGE, branch: 'civil' },
  { id: 141, keyword: 'civil career', response: 'Career Roles for Civil Graduates:\n- Structural Engineer\n- Site Supervisor\n- Urban Infrastructure Planner\n- Hydrologist\n- Quantity Surveyor', category: ChatCategory.CAREERS, branch: 'civil' },

  // --- Mechanical Engineering ---
  { id: 150, keyword: 'mechanical info', response: 'Mechanical Branch Overview:\nDeals with the design and manufacture of machines, engines, and mechanical systems.\nCore Subjects: Thermodynamics, Theory of Machines, CAD/CAM, Manufacturing Processes.', category: ChatCategory.BRANCHES_KNOWLEDGE, branch: 'mechanical' },
  { id: 151, keyword: 'mechanical career', response: 'Career Roles for Mechanical Graduates:\n- Design Engineer (Automotive)\n- Production Manager\n- Maintenance Engineer\n- Robotics System Designer\n- Thermal Power Plant Consultant', category: ChatCategory.CAREERS, branch: 'mechanical' },

  // --- Faculty (Existing) ---
  { id: 50, keyword: 'ce faculty', response: '🧑‍🏫 CE Faculty: Dr. Hardik Molia, Mr. K. P. Kandoriya, Mr. Ashish Nimavat, Mr. Chinmay Vyas, Prof. H. S. Sanghavi, Mr. Kirit Rathod.', category: ChatCategory.FACULTY, branch: 'ce' },
  { id: 51, keyword: 'it faculty', response: '🧑‍🏫 IT Faculty: Shailesh Molia, Anoop Patel, Jayesh Rathod, Sweta Garasia, Nishidh Chavda, Virendra Barot, Bharat Vainsh.', category: ChatCategory.FACULTY, branch: 'it' },
  { id: 52, keyword: 'ict faculty', response: '🧑‍🏫 ICT Faculty: Bindi Joshi, Mehul Vala, Khyati Chavda.', category: ChatCategory.FACULTY, branch: 'ict' },
  { id: 53, keyword: 'civil faculty', response: '🧑‍🏫 Civil Faculty: Mrs. Vishwa Dave, Yashodhar Pathak, Purvang Pandya, Chintan Gajjar, Saad Golwala.', category: ChatCategory.FACULTY, branch: 'civil' },
  { id: 54, keyword: 'mechanical faculty', response: '🧑‍🏫 Mech Faculty: Dr. S. M. Mehta, Dr. Janak Valaki, Dr. D. B. Jani, Dr. Mehul Mehta, Dr. Sanjay Zala.', category: ChatCategory.FACULTY, branch: 'mechanical' },
  { id: 55, keyword: 'ec faculty', response: '🧑‍🏫 EC Faculty: Dr. Hasmukh Koringa, Dr. Devang Jani, Dr. Janak Trivedi, Dr. Miral Patel, Dr. Amit Rathod.', category: ChatCategory.FACULTY, branch: 'ec' }
];

export const SUGGESTED_QUESTIONS = [
  "Branches Knowledge",
  "Timetable",
  "Branch Syllabus",
  "Fees Info",
  "Holiday List 2025-26",
  "Student Portal"
];

export const BRANCH_LIST = [
  "Information & Communication Technology",
  "Computer Engineering",
  "Information Technology",
  "Electronics & Communication Engineering",
  "Civil Engineering",
  "Mechanical Engineering"
];