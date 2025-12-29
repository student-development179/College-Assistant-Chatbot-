
# Viva Preparation: GEC Bhavnagar Assistant

### 1. Why separation of concerns?
"We used Vite/React for the frontend to provide a fast User Experience. The Node.js backend handles business logic and security. This ensures that database credentials never leak to the client-side browser."

### 2. How does the Database work?
"We use Neon PostgreSQL. I have created a `database_schema.sql` file that defines the `gec_knowledge_base` table. When a user asks about a branch, the backend runs a SQL `ILIKE` query. This allows for 'fuzzy matching', so if a user types 'Tell me about CE', the system correctly retrieves the description for Computer Engineering."

### 3. Why rule-based instead of AI?
"For official college information like fees (1500/0), office timings (10:45 AM – 5:45 PM), or the Holiday Calendar (2025–26), reliability is the priority. AI can hallucinate; rule-based systems ensure 100% accuracy as per GEC Bhavnagar and GTU norms."

### 4. What is the 'Contextual Flow'?
"If a user selects 'CE', we store that context in a session variable. If they then ask for 'Faculty', the bot knows to show Computer Engineering faculty automatically by filtering the database by `branch_code='ce'`, mimicking a real conversation."

### 5. Compliance with GTU Norms?
"The holiday list strictly follows the 2025–26 cycle, including the 2nd/4th Saturday holiday rule prevalent in Gujarat Government institutions. This ensures the prototype is ready for real-world deployment."

### 6. Database Search Failed (Fallback)
"In the prototype, if a user input doesn't match a database keyword, the system returns a graceful fallback. This prevents the bot from giving wrong information and instead guides the user back to valid modules."
