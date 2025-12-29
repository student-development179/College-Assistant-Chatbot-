import { SEED_RESPONSES, BRANCH_LIST } from '../lib/seed-data';
import { ChatCategory, Message } from '../types';

let currentContext: {
  branch: string | null;
  step: 'none' | 'selecting_branch' | 'branch_details'
} = {
  branch: null,
  step: 'none'
};

const BRANCH_MAP: Record<string, string> = {
  'information & communication technology': 'ict',
  'computer engineering': 'ce',
  'information technology': 'it',
  'electronics & communication engineering': 'ec',
  'civil engineering': 'civil',
  'mechanical engineering': 'mechanical'
};

export const getBotResponse = async (userMessage: string, history: Message[]): Promise<{ response: string, category: ChatCategory, options?: string[] }> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  const msg = userMessage.toLowerCase().trim();

  // Reset/Main Menu logic
  if (msg === 'main menu' || msg.includes('back')) {
    resetContext();
    return {
      response: "Returning to main selection. How can I help you?",
      category: ChatCategory.SMALL_TALK,
      options: ["Branches Knowledge", "Fees Info", "Holiday List 2025-26"]
    };
  }

  // Handle Initial Branch Knowledge Trigger
  if (msg === 'branches knowledge') {
    currentContext.step = 'selecting_branch';
    return {
      response: "Please select a branch to explore detailed overview and career opportunities:",
      category: ChatCategory.BRANCHES_KNOWLEDGE,
      options: BRANCH_LIST
    };
  }

  // Handle Branch Selection
  if (currentContext.step === 'selecting_branch' || BRANCH_LIST.map(b => b.toLowerCase()).includes(msg)) {
    const branchKey = BRANCH_MAP[msg] || msg;
    if (Object.values(BRANCH_MAP).includes(branchKey)) {
      currentContext.branch = branchKey;
      currentContext.step = 'branch_details';
      
      const details = SEED_RESPONSES.find(i => i.keyword === `${branchKey} info`)?.response;
      
      return {
        response: details || `Found information for ${branchKey.toUpperCase()}.`,
        category: ChatCategory.BRANCHES_KNOWLEDGE,
        options: ["Career Roles", "Faculty Details", "Timetable", "Branch Syllabus", "Main Menu"]
      };
    }
  }

  // Contextual Career Roles
  if (msg === 'career roles' || (msg.includes('career') && currentContext.branch)) {
    const careerRes = SEED_RESPONSES.find(r => r.category === ChatCategory.CAREERS && r.branch === currentContext.branch);
    if (careerRes) {
      return { 
        response: careerRes.response, 
        category: ChatCategory.CAREERS,
        options: ["Faculty Details", "Timetable", "Main Menu"] 
      };
    }
  }

  // Contextual Faculty
  if (msg === 'faculty details' || (msg.includes('faculty') && currentContext.branch)) {
    const facultyRes = SEED_RESPONSES.find(r => r.category === ChatCategory.FACULTY && r.branch === currentContext.branch);
    if (facultyRes) {
      return { 
        response: facultyRes.response, 
        category: ChatCategory.FACULTY,
        options: ["Career Roles", "Timetable", "Main Menu"] 
      };
    }
  }

  // Timetable with official timing enforcement
  if (msg === 'timetable') {
    const branchPrefix = currentContext.branch ? `${currentContext.branch.toUpperCase()} ` : "";
    return {
      response: `${branchPrefix}Departmental Timetable:\nClasses run from 10:45 AM to 05:45 PM.\nDetailed PDF schedules are available on the department notice board.`,
      category: ChatCategory.TIMETABLE,
      options: ["Branch Syllabus", "Main Menu"]
    };
  }

  // Global Keyword Match (Fallback to seed data keywords)
  const match = SEED_RESPONSES.find(item => msg.includes(item.keyword.toLowerCase()));
  if (match) {
    return { response: match.response, category: match.category };
  }

  // Academic/Syllabus Global Link
  if (msg.includes('syllabus')) {
    return { 
      response: "Official GTU Syllabus Portal: https://gtu.ac.in/syllabus/syllabus.aspx\nYou can select your branch and semester there.", 
      category: ChatCategory.ACADEMICS 
    };
  }

  // Final Database Fallback
  return { 
    response: "I couldn't find specific data for that in the GEC database. Please try selecting one of the official modules below or specifying a branch (e.g., 'Tell me about CE').", 
    category: ChatCategory.FALLBACK,
    options: ["Branches Knowledge", "Fees Info", "Holiday List 2025-26", "Timetable"]
  };
};

export const resetContext = () => {
  currentContext = { branch: null, step: 'none' };
};