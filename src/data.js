export const domains = [
  {
    id: "people",
    name: "People",
    icon: "👥",
    weight: "42%",
    color: "#6366f1",
    description: "The People domain focuses on the skills and activities associated with effectively leading the project team. It covers managing team dynamics, supporting team performance, and addressing stakeholder needs.",
    overview: `The People domain represents 42% of the PMP exam and is the largest domain. It encompasses everything related to managing and leading people — from building a high-performing team to collaborating with stakeholders. 

In the modern project environment, a project manager is less of a boss and more of a servant leader. You empower your team, remove obstacles, and create an environment where people can do their best work.

Key mindset shifts:
• From "directing" to "coaching and mentoring"
• From "managing tasks" to "empowering individuals"
• From "avoiding conflict" to "resolving conflict constructively"
• From "top-down decisions" to "collaborative decisions"`,
    tasks: [
      {
        id: "p1",
        title: "Manage Conflict",
        description: "Interpret the source and stage of the conflict, examine/probe/determine the appropriate resolution, and resolve the conflict.",
        detail: `Conflict is INEVITABLE and can be productive when managed well. The PMP exam expects you to embrace conflict as a natural part of teamwork, not something to avoid.

**Conflict Sources (Thomas-Kilmann):**
- Schedules & priorities
- Resources
- Technical opinions
- Administrative procedures
- Cost
- Personality clashes

**5 Conflict Resolution Styles:**
1. **Collaborating / Problem Solving** ⭐ BEST — Win/Win. Both parties work together to find a solution that satisfies everyone. Time-consuming but produces the best long-term results.
2. **Compromising / Reconciling** — Win/Lose for both. Both parties give up something. Good for temporary solutions.
3. **Forcing / Directing** — Win/Lose. One party imposes their solution. Use only in emergencies or when safety is at risk.
4. **Smoothing / Accommodating** — Temporary fix. Emphasize areas of agreement, downplay differences. Does not resolve the root cause.
5. **Withdrawing / Avoiding** — Lose/Lose. Walk away from conflict. Only appropriate when the issue is trivial or emotions are too high.

**Exam Tip:** When asked "what is the BEST conflict resolution technique?" → Always choose Collaborating/Problem Solving UNLESS the question says it's an emergency or the situation requires a quick decision.`,
        enablers: [
          "Interpret the source and stage of the conflict",
          "Examine the context of the conflict",
          "Evaluate/recommend/reconcile the appropriate conflict resolution solution"
        ]
      },
      {
        id: "p2",
        title: "Lead a Team",
        description: "Set a clear vision, support diversity and inclusion, value servant leadership, determine an appropriate leadership style.",
        detail: `Leading a team in the PMP context means being a **servant leader** — someone who puts the team's needs first, removes obstacles, and creates conditions for success.

**Leadership Styles:**
- **Servant Leadership** — Focus on team's needs; enable the team to do their best
- **Transformational** — Inspire and motivate through vision and enthusiasm
- **Transactional** — Use rewards and consequences to manage behavior
- **Laissez-faire** — Hands-off; let the team decide (appropriate for highly experienced teams)
- **Situational** — Adapt your style based on the team member's competence and commitment

**Situational Leadership (Hersey & Blanchard):**
- Low competence + High commitment → **Directing** (Tell them what to do)
- Low-moderate competence + Low commitment → **Coaching** (Still directive but explain reasons)
- Moderate-high competence + Variable commitment → **Supporting** (Focus on relationship, not task)
- High competence + High commitment → **Delegating** (Let them run with it)

**Key Leadership Qualities for PMP:**
- Emotional intelligence (self-awareness, empathy)
- Decision-making under uncertainty
- Building trust through honesty
- Creating psychological safety`,
        enablers: [
          "Set a clear vision and mission for the team",
          "Support diversity and inclusion (e.g., behavior, culture, respect)",
          "Value servant leadership",
          "Determine an appropriate leadership style",
          "Inspire and motivate team members",
          "Influence others by demonstrating values"
        ]
      },
      {
        id: "p3",
        title: "Support Team Performance",
        description: "Appraise team performance against KPIs, support and recognize team member growth and development.",
        detail: `Supporting team performance means creating an environment where people can grow, be recognized, and continuously improve.

**Tuckman's Team Development Stages:**
1. **Forming** — Team comes together; polite, uncertain, dependent on leader
2. **Storming** — Conflict emerges; personalities clash; disagreements about roles
3. **Norming** — Team establishes norms and rules; cohesion builds
4. **Performing** — High performance; team is self-directed; minimal supervision needed
5. **Adjourning** (Mourning) — Team disbands; celebrate success; transition

**Motivational Theories:**

**Maslow's Hierarchy of Needs:**
5. Self-actualization (fulfillment)
4. Esteem (recognition)
3. Social (belonging)
2. Safety (security)
1. Physiological (basic needs — food, shelter)
→ Lower needs must be satisfied before higher needs motivate

**Herzberg's Two-Factor Theory:**
- **Hygiene Factors** (cause dissatisfaction if absent): Salary, working conditions, job security
- **Motivators** (cause satisfaction if present): Achievement, recognition, growth

**McGregor's Theory X and Y:**
- Theory X: People are lazy, avoid work, need close supervision
- Theory Y: People are self-motivated, seek responsibility, capable of self-direction
→ PMP favors Theory Y mindset

**Expectancy Theory (Vroom):** 
People are motivated when they believe effort → performance → reward

**Performance Appraisals:**
- Should be regular and continuous, not just annual
- Focus on behaviors, not personality
- Set SMART goals for improvement`,
        enablers: [
          "Appraise team members' performance against KPIs",
          "Support and recognize team member growth and development",
          "Determine appropriate feedback approach",
          "Verify performance improvements"
        ]
      },
      {
        id: "p4",
        title: "Empower Team Members",
        description: "Organize around team strengths, support team task accountability, evaluate demonstration of task accountability.",
        detail: `Empowerment is about giving your team the authority, tools, and confidence to make decisions and take ownership.

**Key Empowerment Concepts:**

**Delegation:**
- Assign tasks based on competency and interest
- Delegate authority, not just responsibility
- Don't micromanage — trust your team
- Follow up without hovering

**Self-organizing Teams (Agile):**
- Teams decide HOW to accomplish work
- No hierarchical structure for task assignment
- Team members select their own tasks
- PM acts as facilitator/coach

**Accountability vs. Responsibility:**
- Responsibility = doing the work
- Accountability = answering for the outcome
- Both can be shared, but accountability ultimately rests with the owner

**Empowerment Techniques:**
- Give team members decision-making authority within defined limits
- Involve team in planning and estimation
- Create psychological safety (team members feel safe to take risks)
- Celebrate failures as learning opportunities

**Exam Tip:** If a question asks about a team member who is not performing, the first step is usually to have a private conversation and understand the root cause — NOT to escalate to management or take disciplinary action immediately.`,
        enablers: [
          "Organize around team strengths",
          "Support team task accountability",
          "Evaluate demonstration of task accountability",
          "Determine and bestow level(s) of decision-making authority"
        ]
      },
      {
        id: "p5",
        title: "Ensure Team Members/Stakeholders are Trained",
        description: "Determine required competencies and elements of training, confirm required competency of team.",
        detail: `Training and competency development ensure your team has the skills needed to deliver the project successfully.

**Training Needs Analysis:**
1. Identify required competencies for the project
2. Assess current competency levels
3. Identify gaps
4. Plan training to close gaps

**Types of Training:**
- Formal training (classroom, online courses)
- On-the-job training (shadowing, pairing)
- Mentoring and coaching
- Conferences and workshops
- Self-study

**Competency vs. Performance:**
- Competency = ability/skill/knowledge (can they do it?)
- Performance = actual execution (are they doing it?)

**Training Documentation:**
- Track completed training in resource management plan
- Update skills inventory
- Record certifications and qualifications

**Stakeholder Training:**
- Don't forget stakeholders also need training
- System demonstrations, change management training
- User acceptance testing preparation`,
        enablers: [
          "Determine required competencies and elements of training",
          "Determine training options based on training needs",
          "Allocate resources for training",
          "Measure training outcomes"
        ]
      },
      {
        id: "p6",
        title: "Build a Team",
        description: "Appraise stakeholder skills, deduce project resource requirements, assess team skills and identify training needs.",
        detail: `Building a team involves acquiring the right people, developing their skills, and creating a cohesive unit.

**Resource Acquisition:**
- Pre-assignment (team members named in project charter)
- Negotiation with functional managers
- Acquisition from external sources
- Virtual teams

**Team Charter:**
- Ground rules for team behavior
- Communication norms
- Decision-making processes
- Conflict resolution approach
- Working hours / availability

**Diversity and Inclusion:**
- Diverse teams produce better outcomes
- Create inclusive environment where all voices are heard
- Be aware of cultural differences in communication styles
- Avoid unconscious bias in team selection

**Collocated vs. Virtual Teams:**
- Collocated: easier communication, team building
- Virtual: access to global talent, flexibility, requires more deliberate communication

**Building Team Cohesion:**
- Team-building activities
- Social events
- Shared goals and vision
- Recognition programs`,
        enablers: [
          "Appraise stakeholder skills",
          "Deduce project resource requirements",
          "Continuously assess and refresh team skills",
          "Maintain team and knowledge transfer"
        ]
      },
      {
        id: "p7",
        title: "Address and Remove Impediments",
        description: "Determine critical impediments/obstacles/blockers, prioritize critical impediments, implement solutions to remove impediments.",
        detail: `Removing impediments is one of the most important jobs of a project manager. If your team can't work, nothing gets done.

**Types of Impediments:**
- Technical blockers (missing tools, access, equipment)
- Organizational blockers (approvals, bureaucracy)
- Resource blockers (unavailable people)
- External blockers (vendor delays, regulatory approval)

**Impediment Management Process:**
1. Identify impediment
2. Log it (impediment backlog in Agile)
3. Assess impact and urgency
4. Determine who can resolve it (PM? Sponsor? Vendor?)
5. Escalate if necessary
6. Remove or work around it
7. Track resolution

**Agile Impediment Board:**
- Column: Impediment | Owner | Status | Resolution Date
- Reviewed in daily standup
- Scrum Master is responsible for removing impediments in Scrum

**Escalation:**
- Know when to escalate vs. handle yourself
- Escalate early — don't wait until it's a crisis
- Document escalations
- Follow up after escalation

**Exam Tip:** The PM should be proactive in removing obstacles. Don't wait for team members to solve all their own problems — that's your job!`,
        enablers: [
          "Determine critical impediments/obstacles/blockers for the team",
          "Prioritize critical impediments, obstacles, and blockers",
          "Use network to implement solutions to remove impediments",
          "Re-assess continually to ensure impediments are being addressed"
        ]
      },
      {
        id: "p8",
        title: "Negotiate Project Agreements",
        description: "Analyze the bounds of negotiations for agreements, assess priorities and determine ultimate objective(s) of the negotiation.",
        detail: `Negotiation is a critical skill for project managers. You negotiate for resources, scope, timeline, budget, and contracts.

**Negotiation Strategies:**
- **Win-Win (Integrative)** — Seek solutions that satisfy both parties ⭐ PREFERRED
- **Win-Lose (Distributive)** — One party gains at the other's expense
- **Compromise** — Both give up something

**BATNA:** Best Alternative to Negotiated Agreement
- Know your BATNA before entering negotiations
- The stronger your BATNA, the stronger your negotiating position

**Negotiation Preparation:**
1. Define your goals and priorities
2. Research the other party's needs and constraints
3. Identify areas of flexibility
4. Establish your BATNA
5. Determine walk-away point

**Key Negotiation Techniques:**
- Active listening — understand their perspective
- Separate people from the problem
- Focus on interests, not positions
- Generate multiple options before deciding
- Use objective criteria

**Common PMP Negotiation Scenarios:**
- Negotiating with functional managers for resources
- Negotiating scope changes with sponsor
- Vendor/contract negotiations
- Timeline negotiations with customers`,
        enablers: [
          "Analyze the bounds of the negotiations for agreement",
          "Assess priorities and determine ultimate objective(s) of the negotiation",
          "Verify objective(s) of the project agreement is met",
          "Participate in agreement negotiations",
          "Determine a negotiation strategy"
        ]
      },
      {
        id: "p9",
        title: "Collaborate with Stakeholders",
        description: "Evaluate engagement needs for stakeholders, optimize alignment between stakeholder needs, project objectives and organization strategy.",
        detail: `Stakeholder collaboration is ongoing throughout the project. It's not a one-time activity.

**Stakeholder Engagement Levels (PMBOK):**
- **Unaware** — Not aware of project or potential impacts
- **Resistant** — Aware but resistant to change
- **Neutral** — Aware but neither supportive nor resistant
- **Supportive** — Aware and supportive
- **Leading** — Actively engaged in ensuring project success

**Stakeholder Analysis Tools:**
- **Power/Interest Grid** — Plot stakeholders by power and interest
  - High Power / High Interest → Manage Closely
  - High Power / Low Interest → Keep Satisfied
  - Low Power / High Interest → Keep Informed
  - Low Power / Low Interest → Monitor
- **Salience Model** — Power, Legitimacy, Urgency

**Engagement Strategies:**
- Identify all stakeholders early
- Understand their needs, expectations, and concerns
- Tailor communication to each stakeholder
- Involve stakeholders in decision-making
- Manage expectations proactively

**Stakeholder Register:**
- Name, role, contact info
- Assessment of interests, involvement, impact
- Current and desired engagement level
- Communication requirements`,
        enablers: [
          "Evaluate engagement needs for stakeholders",
          "Optimize alignment between stakeholder needs, expectations, and project objectives",
          "Build trust and influence stakeholders to accomplish project objectives"
        ]
      },
      {
        id: "p10",
        title: "Build Shared Understanding",
        description: "Break down situation to identify the root cause of a misunderstanding, survey all necessary parties to reach consensus.",
        detail: `Shared understanding means all stakeholders have a common, accurate view of the project goals, status, and expectations.

**Causes of Misunderstanding:**
- Assumptions not surfaced
- Jargon and technical language
- Cultural differences
- Poor documentation
- Information silos

**Techniques to Build Shared Understanding:**
- **Kickoff meetings** — Align everyone at the start
- **Requirements workshops** — Joint sessions to clarify needs
- **Prototypes and mockups** — Show don't tell
- **User stories** — "As a [user], I want [goal] so that [benefit]"
- **Acceptance criteria** — Define what "done" looks like
- **Visual management** — Kanban boards, burn-down charts

**Active Listening:**
- Give full attention
- Don't interrupt
- Paraphrase to confirm understanding
- Ask clarifying questions
- Acknowledge emotions

**Communication Model:**
Sender → Encode → Channel → Decode → Receiver → Feedback
- Noise can occur at any point
- Sender is responsible for clear communication
- Confirm receipt and understanding`,
        enablers: [
          "Break down situation to identify the root cause of a misunderstanding",
          "Survey all necessary parties to reach consensus",
          "Support outcome of parties' agreement",
          "Investigate potential misunderstandings"
        ]
      },
      {
        id: "p11",
        title: "Engage and Support Virtual Teams",
        description: "Examine virtual team member needs, investigate alternatives for virtual team member engagement.",
        detail: `Virtual teams are increasingly common. They require deliberate communication and engagement strategies.

**Challenges of Virtual Teams:**
- Time zone differences
- Cultural differences
- Isolation and disconnection
- Communication delays
- Technology barriers
- Building trust without face-to-face

**Best Practices for Virtual Teams:**
- Establish clear communication protocols
- Use video calls to increase human connection
- Create virtual social spaces
- Be explicit about expectations and deadlines
- Use collaboration tools (Jira, Slack, Confluence, Teams)
- Regular check-ins (not just status — also wellbeing)
- Document everything (decisions, meeting notes)

**Team Building for Virtual Teams:**
- Virtual coffee chats
- Online team games/icebreakers
- Rotating "spotlight" presentations
- Celebrate wins publicly

**Communication Tools:**
- Synchronous: Video calls, phone calls, chat
- Asynchronous: Email, project management tools, wikis
- Choose the right tool for the message type`,
        enablers: [
          "Examine virtual team member needs (e.g., environment, geography, culture, global)",
          "Investigate alternatives for virtual team member engagement",
          "Implement options for virtual team member engagement",
          "Continually evaluate effectiveness of virtual team member engagement"
        ]
      },
      {
        id: "p12",
        title: "Define Team Ground Rules",
        description: "Communicate organizational principles with team and external stakeholders, establish an environment that fosters adherence to the ground rules.",
        detail: `Ground rules are the agreed-upon norms that govern how the team works together. Setting them early prevents many problems later.

**What to Include in Ground Rules:**
- Meeting norms (start on time, agendas, note-taking)
- Communication expectations (response times, preferred channels)
- Decision-making process (consensus, majority vote, PM decides)
- Conflict resolution approach
- Accountability expectations
- Work hours and availability
- Code of conduct (respect, inclusivity)

**Team Charter vs. Ground Rules:**
- Team charter is broader — includes goals, roles, values
- Ground rules focus specifically on behavioral norms
- Often combined in one document

**Establishing Ground Rules:**
1. Have the team create them collaboratively (not imposed)
2. Document them clearly
3. Distribute to all team members
4. Reference them when issues arise
5. Review and update as needed

**Enforcing Ground Rules:**
- Address violations immediately and privately
- Be consistent — enforce equally for everyone
- Tie consequences to the rules upfront`,
        enablers: [
          "Communicate organizational principles with team and external stakeholders",
          "Establish an environment that fosters adherence to ground rules",
          "Manage and rectify ground rule violations"
        ]
      },
      {
        id: "p13",
        title: "Mentor Relevant Stakeholders",
        description: "Allocate the time to mentor and to be mentored, recognize and act on mentoring opportunities.",
        detail: `Mentoring is about developing others' skills and supporting their professional growth. It's a key leadership responsibility.

**Mentoring vs. Coaching vs. Training:**
- **Mentoring**: Long-term relationship; share experience and wisdom; guide career development
- **Coaching**: Focused on helping someone discover their own answers; performance-based
- **Training**: Transfer of specific knowledge or skills; more formal

**Effective Mentoring:**
- Share experiences, not just advice
- Ask good questions to help mentee think
- Be available and accessible
- Celebrate progress
- Give honest feedback

**Being Mentored:**
- Seek out mentors actively
- Be open to feedback
- Take initiative in the relationship
- Apply learnings and report back

**Mentoring Opportunities:**
- New team members
- Team members taking on new responsibilities
- High-potential employees
- Stakeholders learning project management

**PMP Exam Context:**
- PM should mentor team members when they lack skills
- Mentoring is preferable to disciplinary action for skill gaps
- Create a learning culture on the team`,
        enablers: [
          "Allocate the time to mentor and to be mentored",
          "Recognize and act on mentoring opportunities"
        ]
      },
      {
        id: "p14",
        title: "Promote Team Performance Through Applied Emotional Intelligence",
        description: "Assess behavior through the lens of emotional intelligence, use EI to enhance team performance.",
        detail: `Emotional Intelligence (EI/EQ) is the ability to recognize, understand, and manage emotions — your own and others'. High EI is strongly correlated with effective leadership.

**Goleman's EI Components:**
1. **Self-Awareness** — Know your emotions and their impact
2. **Self-Regulation** — Control your emotions; don't act impulsively
3. **Motivation** — Inner drive beyond money and status
4. **Empathy** — Understand others' emotions
5. **Social Skills** — Manage relationships; build networks

**Why EI Matters for PMs:**
- Managing stress during crises
- Building rapport with diverse stakeholders
- Resolving conflicts constructively
- Giving difficult feedback
- Motivating team during challenges

**Applying EI in Practice:**
- Pause before reacting (self-regulation)
- Name the emotion you're feeling
- Consider others' perspective before responding
- Create psychological safety
- Show genuine appreciation

**EI Assessment:**
- 360-degree feedback
- Self-reflection journals
- Behavioral observation

**Exam Tip:** Questions about interpersonal situations often have "emotionally intelligent" answers — listen, empathize, understand the root cause before acting.`,
        enablers: [
          "Assess behavior through the lens of emotional intelligence",
          "Practice and use EI to enhance team performance",
          "Support team members needing emotional support"
        ]
      }
    ]
  },
  {
    id: "process",
    name: "Process",
    icon: "⚙️",
    weight: "50%",
    color: "#10b981",
    description: "The Process domain covers technical aspects of managing projects — planning, executing, monitoring, and delivering project work across both predictive and agile approaches.",
    overview: `The Process domain is the largest at 50% of the exam. It covers the technical "how" of project management — all the tools, techniques, and processes you use to plan and deliver projects.

The exam tests both predictive (waterfall) and agile/hybrid approaches. You need to know when to use each and how to adapt.

Key themes:
• Understand when to use predictive vs. agile vs. hybrid
• Know key planning processes and outputs
• Understand how to control and monitor project performance
• Know how to manage changes, risks, and quality`,
    tasks: [
      {
        id: "pr1",
        title: "Execute Project with Urgency",
        description: "Assess opportunities to deliver value by breaking projects into iterations, evaluate project performance and adjust accordingly.",
        detail: `Executing with urgency means delivering value as quickly as possible, adapting to change, and continuously improving.

**Iterative vs. Predictive Delivery:**
- Predictive: Plan everything upfront, execute, deliver at end
- Iterative: Plan in cycles, deliver working product each iteration
- Agile/Scrum: Sprints of 1-4 weeks, deliver increment each sprint

**Minimum Viable Product (MVP):**
- Smallest version of the product that delivers value
- Get to market faster, learn from feedback
- Reduce risk of building the wrong thing

**Value Delivery:**
- Focus on highest-value items first
- Use priority frameworks (MoSCoW, Kano, ROI)
- Continuously re-prioritize based on new information

**Agile Execution:**
- Sprint planning
- Daily standup
- Sprint review (demonstrate to stakeholders)
- Sprint retrospective (improve the process)

**Hybrid Approach:**
- Some phases predictive (requirements, architecture)
- Some phases agile (development, testing)
- Adapt based on what delivers most value`,
        enablers: [
          "Assess opportunities to deliver value by breaking projects into iterations",
          "Evaluate project performance to make timely decisions",
          "Evaluate the project/phase completion requirements to close the project/phase"
        ]
      },
      {
        id: "pr2",
        title: "Manage Communications",
        description: "Analyze communication needs of all stakeholders, determine communication methods, document project communications.",
        detail: `Communication is the #1 PM skill. Studies show PMs spend 90% of their time communicating.

**Communication Management Plan:**
- Who needs what information
- When they need it
- In what format
- Through what channel
- From whom

**Communication Methods:**
- **Interactive**: Real-time, two-way (meetings, calls) — best for complex topics
- **Push**: PM sends to stakeholders (emails, reports) — good for status updates
- **Pull**: Stakeholders access when needed (intranet, document repository)

**Communication Channels Formula:**
N × (N-1) / 2
Where N = number of stakeholders
- 5 people = 10 channels
- 10 people = 45 channels
- Adding 1 person to a 10-person team → goes from 45 to 55 channels

**Effective Communication:**
- Use appropriate medium for the message
- Be clear and concise
- Check for understanding
- Document important communications
- Adapt style to audience (technical vs. executive)

**Communication Blockers:**
- Cultural differences
- Language barriers
- Information overload
- Lack of trust
- Poor listening`,
        enablers: [
          "Analyze communication needs of all stakeholders",
          "Determine communication methods, channels, frequency, and level of detail for all stakeholders",
          "Communicate project information and updates effectively",
          "Confirm communication is understood and feedback is received"
        ]
      },
      {
        id: "pr3",
        title: "Assess and Manage Risks",
        description: "Determine risk management options, iteratively assess and prioritize risks, implement risk responses.",
        detail: `Risk management is proactive — identify, analyze, and plan responses BEFORE risks become issues.

**Risk vs. Issue:**
- Risk = uncertain future event (may or may not happen)
- Issue = problem that has already occurred

**Risk Types:**
- Positive risks = Opportunities (you want these to happen!)
- Negative risks = Threats (you want to avoid these)

**Risk Management Process:**
1. Plan Risk Management — how will you manage risks?
2. Identify Risks — what could go wrong (or right)?
3. Perform Qualitative Risk Analysis — prioritize by probability × impact
4. Perform Quantitative Risk Analysis — assign numerical values
5. Plan Risk Responses — what will you do?
6. Implement Risk Responses — execute the plan
7. Monitor Risks — track and update

**Risk Response Strategies:**

For THREATS:
- **Avoid** — Eliminate the risk by changing the plan
- **Transfer** — Shift impact to third party (insurance, contracts)
- **Mitigate** — Reduce probability or impact
- **Accept** — Do nothing (active = contingency plan; passive = acknowledge)
- **Escalate** — Send to sponsor if beyond PM authority

For OPPORTUNITIES:
- **Exploit** — Make sure the opportunity happens
- **Enhance** — Increase probability or impact
- **Share** — Partner with others to capture opportunity
- **Accept** — Take it if it comes
- **Escalate** — Escalate if beyond PM authority

**Key Risk Concepts:**
- Residual risk: Risk remaining after response
- Secondary risk: New risk created by a risk response
- Risk owner: Person responsible for monitoring and responding
- Risk appetite: How much risk the org will accept
- Risk threshold: Level at which risk requires action`,
        enablers: [
          "Determine risk management options",
          "Iteratively assess and prioritize risks",
          "Determine risk exposure of the project based on risk assessment data",
          "Communicate risk status to relevant stakeholders",
          "Implement appropriate risk responses based on methodology"
        ]
      },
      {
        id: "pr4",
        title: "Engage Stakeholders",
        description: "Analyze stakeholders and determine optimal approach to stakeholder engagement, assess stakeholder engagement throughout project.",
        detail: `Stakeholder engagement is ongoing and proactive. Don't wait for stakeholders to come to you.

**Stakeholder Identification:**
- Project charter mentions key stakeholders
- Brainstorm with team and sponsor
- Review org charts
- Identify who will be impacted

**Stakeholder Analysis:**
1. Identify all stakeholders
2. Analyze interests, influence, expectations
3. Classify (power/interest grid, salience model)
4. Plan engagement strategy

**Stakeholder Engagement Plan:**
- Documents strategies for engaging stakeholders
- Not the same as communication plan (engagement is broader)
- Includes how to move stakeholders to desired engagement level

**Managing Difficult Stakeholders:**
- Understand their concerns (listen first)
- Find common ground
- Involve them in decisions when appropriate
- Address concerns directly
- Escalate if they're sabotaging the project

**Sponsor Relationship:**
- Sponsor is your #1 ally
- Keep sponsor informed and engaged
- Escalate major issues to sponsor
- Sponsor approves changes to scope/budget/schedule`,
        enablers: [
          "Analyze stakeholders (e.g., power interest grid, salience, impact)",
          "Categorize stakeholders",
          "Engage stakeholders by category",
          "Develop, execute, and validate a strategy for stakeholder engagement",
          "Measure the engagement of stakeholders"
        ]
      },
      {
        id: "pr5",
        title: "Plan and Manage Budget and Resources",
        description: "Estimate budgetary needs, anticipate future budget challenges, monitor budget variations and work with governance process.",
        detail: `Budget management involves planning, estimating, tracking, and controlling project costs.

**Cost Estimation Techniques:**
- **Analogous Estimating** — Use similar past projects (top-down, least accurate)
- **Parametric Estimating** — Use statistical relationship (cost/unit × units)
- **Bottom-up Estimating** — Estimate each work package (most accurate, most time)
- **Three-point Estimating** — (O + 4M + P) / 6 (PERT formula)

**Cost Baseline vs. Budget:**
- Cost baseline = approved time-phased budget (S-curve)
- Budget = cost baseline + management reserve

**Earned Value Management (EVM) — CRITICAL FOR EXAM:**

Key Formulas:
- **PV** (Planned Value) = Budgeted cost of work scheduled
- **EV** (Earned Value) = Budgeted cost of work performed  
- **AC** (Actual Cost) = Actual cost of work performed

Variances:
- **CV** = EV - AC (negative = over budget)
- **SV** = EV - PV (negative = behind schedule)

Indices:
- **CPI** = EV / AC (>1 = under budget, <1 = over budget)
- **SPI** = EV / PV (>1 = ahead, <1 = behind)

Forecasts:
- **EAC** = BAC / CPI (forecast final cost)
- **ETC** = EAC - AC (remaining cost)
- **VAC** = BAC - EAC (variance at completion)
- **TCPI** = (BAC - EV) / (BAC - AC) (efficiency needed)`,
        enablers: [
          "Estimate budgetary needs based on the scope of the project and lessons learned from past projects",
          "Anticipate future budget challenges",
          "Monitor budget variations and work with governance process to adjust as necessary",
          "Plan and manage resources"
        ]
      },
      {
        id: "pr6",
        title: "Plan and Manage Schedule",
        description: "Estimate project tasks, utilize benchmarks and historical data, prepare schedule based on methodology.",
        detail: `Schedule management involves sequencing activities, estimating durations, developing the schedule, and controlling it.

**Schedule Development Process:**
1. Define activities (decompose work packages into activities)
2. Sequence activities (determine dependencies)
3. Estimate activity durations
4. Develop schedule (calculate start/finish dates)
5. Control schedule (monitor, compare, update)

**Network Diagram / PDM:**
- **FS (Finish-to-Start)** — Most common: B cannot start until A finishes
- **SS (Start-to-Start)** — B cannot start until A starts
- **FF (Finish-to-Finish)** — B cannot finish until A finishes
- **SF (Start-to-Finish)** — Rare: B cannot finish until A starts

**Critical Path Method (CPM):**
- Longest path through the network = Critical Path
- Zero float on critical path
- Any delay on critical path delays the whole project
- **Float/Slack** = Latest Start - Earliest Start = LS - ES = LF - EF

**Critical Chain Method:**
- Like CPM but accounts for resource constraints and human behavior
- Uses buffers instead of activity padding
- Focused on throughput

**Schedule Compression:**
- **Crashing** — Add resources to critical path activities (costs more)
- **Fast Tracking** — Do activities in parallel that were sequential (adds risk)

**Agile Scheduling:**
- Relative estimation (story points, T-shirt sizes)
- Sprint velocity (how many points per sprint)
- Release planning based on velocity`,
        enablers: [
          "Estimate project tasks (milestones, dependencies, story points)",
          "Utilize benchmarks and historical data",
          "Prepare schedule based on methodology",
          "Measure ongoing progress based on methodology",
          "Modify schedule, as needed, based on methodology"
        ]
      },
      {
        id: "pr7",
        title: "Plan and Manage Quality",
        description: "Determine quality standards, recommend quality improvement, use quality tools.",
        detail: `Quality management ensures the project and its deliverables meet requirements and stakeholder expectations.

**Quality Concepts:**
- **Quality Planning** — Define what quality means for this project
- **Quality Assurance (QA)** — Process-oriented; ensure processes are followed
- **Quality Control (QC)** — Product-oriented; verify deliverables meet standards

**Cost of Quality:**
- **Cost of Conformance** (Prevention + Appraisal) — Doing things right
  - Prevention: Training, design review, process documentation
  - Appraisal: Testing, inspection, audits
- **Cost of Non-Conformance** (Internal + External Failure) — Fixing failures
  - Internal failure: Rework, scrap, defects found internally
  - External failure: Warranty claims, customer complaints, recalls

**Quality Tools:**
- **Cause and Effect Diagram** (Fishbone/Ishikawa) — Find root cause
- **Control Chart** — Track process over time; identify out-of-control
- **Pareto Chart** — 80/20 rule; most defects from few causes
- **Histogram** — Distribution of data
- **Scatter Diagram** — Relationship between two variables
- **Flowchart** — Process mapping
- **Checklist** — Verify completion of steps

**Key Quality Principle:** 
Quality is planned in, not inspected in. Prevention > Inspection.

**Continuous Improvement:**
- **Kaizen** — Continuous small improvements
- **Lean** — Eliminate waste
- **Six Sigma** — Reduce defects (DMAIC process)`,
        enablers: [
          "Determine quality standard required for project deliverables",
          "Recommend options for improvement based on quality gaps",
          "Continually survey project deliverable quality",
          "Use Quality tools appropriately"
        ]
      },
      {
        id: "pr8",
        title: "Plan and Manage Scope",
        description: "Determine and prioritize requirements, break scope into manageable pieces, monitor and validate scope.",
        detail: `Scope management ensures the project includes all the work required, and ONLY the work required.

**Scope Planning:**
1. Plan Scope Management
2. Collect Requirements
3. Define Scope (Project Scope Statement)
4. Create WBS (Work Breakdown Structure)
5. Validate Scope
6. Control Scope

**Requirements Collection Techniques:**
- Interviews
- Focus groups
- Workshops (Joint Application Design)
- Surveys/questionnaires
- Observation (job shadowing)
- Prototypes
- Document analysis

**Work Breakdown Structure (WBS):**
- Hierarchical decomposition of project deliverables
- 100% Rule: WBS must include 100% of the project scope
- Work packages at lowest level (assignable, estimable)
- Not a schedule (no time or sequence)
- Not an org chart

**Scope Baseline = WBS + WBS Dictionary + Project Scope Statement**

**Scope Creep vs. Gold Plating:**
- Scope creep: Unauthorized scope additions (bad)
- Gold plating: Team adds extra features without asking (also bad!)
- Both violate scope baseline

**Validate Scope:**
- Formal acceptance of deliverables by customer/sponsor
- Done at end of phases (predictive) or sprints (agile)
- Results in accepted deliverables

**Control Scope:**
- Monitor for scope creep
- Manage change requests through integrated change control`,
        enablers: [
          "Determine and prioritize requirements",
          "Break down scope (e.g., WBS, backlog)",
          "Monitor and validate scope",
          "Plan and manage scope"
        ]
      },
      {
        id: "pr9",
        title: "Integrate Project Planning Activities",
        description: "Consolidate project/phase plans, assess consolidated project plans for dependencies, analyze data collected from project models.",
        detail: `Project integration management ties all the other knowledge areas together into a coherent project plan.

**Project Management Plan:**
- Master document that consolidates all subsidiary plans
- Includes: Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder management plans
- Also includes baselines: scope baseline, schedule baseline, cost baseline

**Developing the Project Charter:**
- Authorizes the project
- Names the Project Manager
- Defines high-level scope, budget, schedule
- Signed by Sponsor or initiating entity
- Key: PM has NO authority before charter is signed

**Develop Project Management Plan:**
- Progressive elaboration — plan becomes more detailed as you learn more
- Iterative process — update as conditions change
- Approved through change control after baselined

**Direct and Manage Project Work:**
- Execute the plan
- Create deliverables
- Implement approved change requests
- Gather work performance data

**Monitor and Control Project Work:**
- Compare actual to planned
- Identify variances
- Forecast future performance
- Recommend changes

**Perform Integrated Change Control:**
- Review ALL change requests
- Evaluate impact to all areas
- Approve or reject
- Update project documents
- Communicate decisions`,
        enablers: [
          "Consolidate the project/phase plans based on the chosen development life cycle",
          "Assess consolidated project plans for dependencies, gaps, and continued business value",
          "Analyze the data collected on project models to make informed project decisions",
          "Collect and analyze data to make informed project decisions"
        ]
      },
      {
        id: "pr10",
        title: "Manage Project Artifacts",
        description: "Determine the requirements for managing the project artifacts, validate that the project information is kept up to date.",
        detail: `Project artifacts are the documents, records, and tools used throughout the project. Managing them ensures everyone has accurate, current information.

**Types of Project Artifacts:**
- Plans (project management plan, subsidiary plans)
- Baselines (scope, schedule, cost)
- Registers (risk register, stakeholder register, issue log)
- Reports (status reports, performance reports)
- Agreements (contracts, MOUs)
- Lessons learned

**Document Management:**
- Version control (know which version is current)
- Access control (who can view/edit)
- Storage location (central repository)
- Naming conventions
- Archiving and retention

**Lessons Learned:**
- Capture throughout the project (not just at end)
- Include what worked and what didn't
- Store in lessons learned repository
- Reference at start of future projects

**Configuration Management:**
- Track and control changes to project deliverables/documents
- Ensure everyone is working with the correct version
- Part of integrated change control

**Project Information Management System (PMIS):**
- Software tools to manage project artifacts
- Examples: SharePoint, Confluence, ProjectLibre, MS Project`,
        enablers: [
          "Determine the requirements and/or management of project artifacts",
          "Validate that the project information is kept up to date and accessible to all stakeholders",
          "Continually assess the effectiveness of the management of the project artifacts"
        ]
      },
      {
        id: "pr11",
        title: "Determine Appropriate Project Methodology/Methods and Practices",
        description: "Assess project needs, complexity, and magnitude, recommend project execution strategy.",
        detail: `Choosing the right methodology is critical. There's no one-size-fits-all approach.

**Predictive (Waterfall):**
- Best for: Well-defined requirements, low uncertainty, regulated industries
- Sequential phases: Initiation → Planning → Execution → Monitoring → Closing
- Change is expensive and discouraged
- Deliver product at the end

**Agile:**
- Best for: Evolving requirements, innovation, customer collaboration critical
- Iterative cycles (sprints)
- Welcome change
- Deliver working product every iteration
- Frameworks: Scrum, Kanban, XP, SAFe

**Hybrid:**
- Combine predictive and agile elements
- Common in large organizations transitioning to agile
- Example: Predictive planning + Agile execution

**Scrum Framework:**
- Roles: Product Owner, Scrum Master, Development Team
- Events: Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective
- Artifacts: Product Backlog, Sprint Backlog, Increment
- Sprint = 1-4 weeks

**Kanban:**
- Visualize work on a board
- Limit WIP (Work in Progress)
- Flow-based, not time-boxed
- Pull system (team pulls work when ready)

**Choosing a Methodology:**
Consider: Requirements clarity, rate of change, stakeholder engagement, team experience, regulatory requirements, project size, risk tolerance`,
        enablers: [
          "Assess project needs, complexity, and magnitude of the project",
          "Recommend project execution strategy (e.g., contracting, finance)",
          "Recommend a project methodology/approach (i.e., predictive, agile, hybrid)",
          "Use iterative, incremental practices throughout the project life cycle (e.g., lessons learned, stakeholder engagement)"
        ]
      },
      {
        id: "pr12",
        title: "Establish Project Governance Structure",
        description: "Determine appropriate governance for a project, define escalation paths and thresholds.",
        detail: `Governance provides the framework for project decision-making, accountability, and oversight.

**Project Governance:**
- Who has authority to make what decisions?
- How are changes approved?
- Who resolves escalated issues?
- How is performance reported?

**Governance Documents:**
- Project charter (names PM and sponsor)
- Responsibility Assignment Matrix (RAM/RACI)
- Change control procedures
- Decision-making framework

**RACI Matrix:**
- **R**esponsible — Does the work
- **A**ccountable — Owns the outcome (only ONE per task)
- **C**onsulted — Input required; two-way communication
- **I**nformed — Updated on progress; one-way communication

**Change Control Board (CCB):**
- Reviews and approves/rejects change requests
- Composition varies (PM, sponsor, key stakeholders)
- Documents decisions

**Steering Committee:**
- Senior-level oversight
- Strategic direction
- Major decisions and escalations
- Budget approval

**Project Management Office (PMO):**
- Supportive: Templates and guidance
- Controlling: Compliance required
- Directive: PM directly assigned by PMO`,
        enablers: [
          "Determine appropriate governance for a project (e.g., replicate organizational governance)",
          "Define escalation paths and thresholds",
          "Define decision-making criteria and structures"
        ]
      },
      {
        id: "pr13",
        title: "Manage Project Issues",
        description: "Recognize when a risk becomes an issue, attack the issue with optimal action to achieve project success.",
        detail: `Issues are problems that have already occurred and require immediate attention.

**Risk vs. Issue:**
- Risk → potential future event
- Issue → event that has already occurred (realized risk or unplanned problem)

**Issue Log:**
- Document all issues
- Include: Description, date identified, owner, impact, status, resolution
- Review regularly in team meetings

**Issue Management Process:**
1. Identify the issue
2. Log it with details
3. Assign an owner
4. Assess impact
5. Determine resolution options
6. Implement resolution
7. Verify resolution
8. Close and document lessons learned

**Escalation of Issues:**
- Not all issues can be resolved by the PM
- Know your escalation path (team → PM → sponsor → steering committee)
- Escalate when: issue exceeds PM authority, involves political dimensions, impacts project significantly

**Workarounds:**
- Unplanned responses to unplanned risks (issues)
- Documented in issue log and risk register update
- Plan workarounds in advance when possible (contingency)`,
        enablers: [
          "Recognize when a risk becomes an issue",
          "Attack the issue with the optimal action to achieve project success",
          "Collaborate with relevant stakeholders on the approach to resolving the issues"
        ]
      },
      {
        id: "pr14",
        title: "Ensure Knowledge Transfer for Project Continuity",
        description: "Discuss project responsibilities within the team, outline expectations for working environment, confirm ongoing support for project after handoff.",
        detail: `Knowledge transfer ensures that critical project knowledge doesn't walk out the door when team members leave.

**Types of Knowledge:**
- Explicit knowledge: Documented information (easy to transfer)
- Tacit knowledge: Experience-based know-how (harder to transfer)

**Knowledge Transfer Methods:**
- Documentation (project records, decisions, lessons learned)
- Shadowing / pairing
- Handover meetings
- Training and workshops
- Videos and screen recordings
- Communities of practice

**Transition Planning:**
- Who is responsible for operations after project ends?
- What training is needed for operational team?
- What documentation must be created?
- Support/warranty period?
- Escalation paths post-implementation

**Lessons Learned Repository:**
- Accessible to all project teams
- Searchable and well-organized
- Contribution is everyone's responsibility

**Onboarding New Team Members:**
- Project orientation
- Access to project artifacts
- Introduction to team and stakeholders
- Mentoring by experienced team members`,
        enablers: [
          "Discuss project responsibilities within the team",
          "Outline expectations for working environment",
          "Confirm ongoing support for project after handoff",
          "Identify and document lessons learned throughout the project"
        ]
      },
      {
        id: "pr15",
        title: "Plan and Manage Procurement",
        description: "Define resource requirements and needs, communicate requirements to potential vendors, monitor procurement agreements.",
        detail: `Procurement management covers buying products or services from outside the project team.

**Procurement Documents:**
- **SOW (Statement of Work)** — Describes what will be purchased
- **RFI (Request for Information)** — Gather information from vendors
- **RFP (Request for Proposal)** — Competitive bid for complex work
- **RFQ (Request for Quotation)** — Price-based for commodity items
- **IFB (Invitation for Bid)** — Formal competitive bid

**Contract Types:**

**Fixed Price:**
- **FFP (Firm Fixed Price)** — Seller bears risk; buyer knows exact cost
- **FP-EPA** — Fixed price with economic price adjustment (for inflation)
- **FPIF** — Fixed Price Incentive Fee (profit sharing)

**Cost Reimbursable:**
- **CPFF** — Cost Plus Fixed Fee (seller reimbursed + fixed fee)
- **CPAF** — Cost Plus Award Fee (award based on performance)
- **CPIF** — Cost Plus Incentive Fee (shared savings)
- Buyer bears most risk

**Time and Material (T&M):**
- Hybrid; pay for time + materials
- Not-to-exceed clause adds control
- Used for staff augmentation

**Source Selection Criteria:**
- Technical capability
- Price/cost
- Management approach
- Past performance
- References

**Contract Management:**
- Monitor vendor performance
- Process invoices
- Manage changes through contract change control
- Close out properly`,
        enablers: [
          "Define resource requirements and needs",
          "Communicate requirements to potential vendors",
          "Monitor procurement agreements in alignment with project objectives",
          "Plan and manage procurement strategy",
          "Develop a delivery solution"
        ]
      },
      {
        id: "pr16",
        title: "Manage Project Compliance Requirements",
        description: "Confirm project compliance requirements, classify compliance categories, determine potential threats to compliance.",
        detail: `Compliance management ensures the project adheres to all legal, regulatory, organizational, and industry requirements.

**Types of Compliance:**
- Legal compliance (laws and regulations)
- Regulatory compliance (industry regulations — HIPAA, GDPR, SOX)
- Contractual compliance (contract terms)
- Organizational compliance (policies and procedures)
- Ethical compliance (codes of conduct)

**Compliance Planning:**
- Identify all applicable requirements early
- Include compliance activities in project plan
- Assign compliance ownership
- Schedule audits and reviews

**Non-Compliance Consequences:**
- Legal penalties and fines
- Contract termination
- Reputational damage
- Project cancellation

**PMI Code of Ethics:**
- Responsibility
- Respect
- Fairness
- Honesty

**Privacy and Data Protection:**
- Know applicable regulations (GDPR, CCPA, HIPAA)
- Include data protection in requirements
- Engage legal/compliance team early`,
        enablers: [
          "Confirm project compliance requirements (e.g., security, health and safety, regulatory compliance)",
          "Classify compliance categories",
          "Determine potential threats to compliance",
          "Use methods to support compliance",
          "Analyze the consequences of noncompliance"
        ]
      }
    ]
  },
  {
    id: "business",
    name: "Business Environment",
    icon: "🌐",
    weight: "8%",
    color: "#f59e0b",
    description: "The Business Environment domain focuses on the connection between projects and organizational strategy, evaluating project benefits, and supporting organizational change.",
    overview: `The Business Environment domain is the smallest at 8% of the exam. It focuses on the strategic context of projects — how they connect to organizational goals and deliver value.

Key themes:
• Projects exist to deliver business value
• PM must understand the strategic context
• Benefits realization extends beyond project closure
• Change management is critical for successful delivery`,
    tasks: [
      {
        id: "b1",
        title: "Plan and Manage Project Compliance",
        description: "Confirm project compliance requirements and classify compliance categories.",
        detail: `See the compliance content in the Process domain for detailed coverage. In the Business Environment context, compliance is about aligning with external standards, laws, and regulations.

**External Compliance Drivers:**
- Industry standards (ISO, IEEE)
- Government regulations
- Environmental regulations
- Labor laws
- Privacy laws (GDPR, HIPAA)

**Organizational Governance:**
- Portfolio management: Select right projects
- Program management: Manage related projects
- Project management: Deliver project objectives

**Enterprise Environmental Factors (EEFs):**
- External: Market conditions, legal regulations, cultural norms
- Internal: Organizational culture, existing infrastructure, policies

**Organizational Process Assets (OPAs):**
- Lessons learned repositories
- Templates and processes
- Historical information
- Policies and procedures`,
        enablers: [
          "Confirm project compliance requirements",
          "Classify compliance categories",
          "Determine potential threats to compliance",
          "Use methods to support compliance"
        ]
      },
      {
        id: "b2",
        title: "Evaluate and Deliver Project Benefits and Value",
        description: "Investigate that benefits are identified, document agreement on ownership, verify measurement system is in place.",
        detail: `Benefits realization is about ensuring the project delivers its intended business value — not just deliverables.

**Benefits vs. Deliverables:**
- Deliverable: The output (e.g., a new CRM system)
- Benefit: The outcome (e.g., 20% increase in sales efficiency)
- Value: The ultimate worth to the organization (e.g., $2M additional revenue)

**Business Case:**
- Justifies the project
- Documents expected benefits, costs, risks
- Used to make go/no-go decision
- Owned by the sponsor/business owner (not PM)

**Benefits Realization Plan:**
- How and when benefits will be measured
- Who is responsible for measuring benefits
- Timeline for benefit achievement (may be years after project)

**Key Metrics:**
- **ROI (Return on Investment)** = (Benefits - Costs) / Costs × 100%
- **NPV (Net Present Value)** — Present value of future cash flows minus investment
- **IRR (Internal Rate of Return)** — Discount rate that makes NPV = 0
- **Payback Period** — Time to recover the investment

**Value Delivery:**
- Projects should deliver benefits, not just meet scope
- Regularly re-evaluate if project is still delivering value
- Be willing to kill projects that no longer make sense`,
        enablers: [
          "Investigate that benefits are identified",
          "Document agreement on ownership for ongoing benefit realization",
          "Verify measurement system is in place to track benefits",
          "Evaluate delivery options to demonstrate value"
        ]
      },
      {
        id: "b3",
        title: "Evaluate and Address External Business Environment Changes",
        description: "Survey changes to external business environment, assess and prioritize impact on project scope/backlog.",
        detail: `The external environment constantly changes. PMs must monitor and adapt.

**External Factors to Monitor:**
- Economic conditions (inflation, recession)
- Regulatory changes (new laws, standards)
- Technology changes (new platforms, disruption)
- Competitive landscape
- Supplier/vendor landscape
- Political environment

**PESTLE Analysis:**
- **P**olitical — Government policies, trade agreements
- **E**conomic — Exchange rates, inflation, economic cycles
- **S**ocial — Demographics, cultural trends, consumer behavior
- **T**echnological — New tech, digital transformation
- **L**egal — Laws, regulations, compliance
- **E**nvironmental — Climate change, sustainability, ESG

**Responding to External Changes:**
1. Monitor the environment continuously
2. Assess impact on project scope, schedule, budget
3. Determine response options
4. Submit change requests if scope/plan affected
5. Update risk register

**Business Agility:**
- Ability to adapt quickly to change
- Agile approaches embrace change
- Predictive approaches manage change through change control`,
        enablers: [
          "Survey changes to external business environment (e.g., regulations, technology, geopolitical, market)",
          "Assess and prioritize impact on project scope/backlog based on changes in business environment",
          "Recommend options for scope/backlog changes (e.g., schedule, cost changes)",
          "Continually review external business environment for impacts on the project"
        ]
      },
      {
        id: "b4",
        title: "Support Organizational Change",
        description: "Assess organizational culture, evaluate impact of the project to the organization, evaluate resistance to organizational change.",
        detail: `Most projects drive organizational change. Managing this change is critical for realizing benefits.

**Change Management Models:**

**Kotter's 8-Step Model:**
1. Create urgency
2. Build the guiding coalition
3. Form strategic vision
4. Enlist a volunteer army
5. Enable action by removing barriers
6. Generate short-term wins
7. Sustain acceleration
8. Institute change

**ADKAR Model (Prosci):**
- **A**wareness — Why change is needed
- **D**esire — Motivation to support change
- **K**nowledge — How to change
- **A**bility — Skills to implement change
- **R**einforcement — Sustain the change

**Resistance to Change:**
- Understand root causes (fear, lack of trust, overload)
- Involve people in the change process
- Communicate benefits clearly
- Provide training and support
- Celebrate early wins

**Change Champions:**
- People within the organization who champion the change
- Help convince peers to adopt
- Provide feedback on adoption challenges

**Organizational Culture:**
- Culture eats strategy for breakfast (Drucker)
- Assess culture before planning change
- Align change approach with culture`,
        enablers: [
          "Assess organizational culture",
          "Evaluate impact of the project to the organization",
          "Evaluate resistance to organizational change within the project",
          "Recommend options to address organizational change management"
        ]
      }
    ]
  }
];

export const formulas = [
  {
    category: "Earned Value Management",
    items: [
      { name: "Planned Value (PV)", formula: "PV = BAC × % Planned", description: "Authorized budget for scheduled work", example: "Project BAC = $100K, 40% planned complete → PV = $40,000" },
      { name: "Earned Value (EV)", formula: "EV = BAC × % Actual Complete", description: "Authorized budget for completed work", example: "40% actually complete → EV = $40,000" },
      { name: "Actual Cost (AC)", formula: "AC = Actual cost incurred", description: "Total cost actually incurred", example: "Spent $50,000 so far → AC = $50,000" },
      { name: "Cost Variance (CV)", formula: "CV = EV - AC", description: "Negative = over budget, Positive = under budget", example: "EV=$40K, AC=$50K → CV = -$10,000 (over budget)" },
      { name: "Schedule Variance (SV)", formula: "SV = EV - PV", description: "Negative = behind schedule, Positive = ahead", example: "EV=$40K, PV=$45K → SV = -$5,000 (behind)" },
      { name: "Cost Performance Index (CPI)", formula: "CPI = EV / AC", description: "CPI > 1 = under budget, < 1 = over budget", example: "EV=$40K, AC=$50K → CPI = 0.8 (getting $0.80 per $1 spent)" },
      { name: "Schedule Performance Index (SPI)", formula: "SPI = EV / PV", description: "SPI > 1 = ahead, < 1 = behind", example: "EV=$40K, PV=$45K → SPI = 0.89 (89% of planned work done)" },
      { name: "Estimate at Completion (EAC)", formula: "EAC = BAC / CPI", description: "Forecast for total project cost (most common)", example: "BAC=$100K, CPI=0.8 → EAC = $125,000" },
      { name: "EAC (atypical variance)", formula: "EAC = AC + (BAC - EV)", description: "Use when current variance is atypical (won't recur)", example: "AC=$50K, BAC=$100K, EV=$40K → EAC = $110,000" },
      { name: "Estimate to Complete (ETC)", formula: "ETC = EAC - AC", description: "Remaining cost to finish project", example: "EAC=$125K, AC=$50K → ETC = $75,000" },
      { name: "Variance at Completion (VAC)", formula: "VAC = BAC - EAC", description: "Expected overage or savings at end", example: "BAC=$100K, EAC=$125K → VAC = -$25,000 (will be over budget)" },
      { name: "TCPI (BAC based)", formula: "TCPI = (BAC - EV) / (BAC - AC)", description: "CPI needed to complete within BAC", example: "BAC=$100K, EV=$40K, AC=$50K → TCPI = 60/50 = 1.2 (need to be 20% more efficient)" }
    ]
  },
  {
    category: "Schedule Formulas",
    items: [
      { name: "Float / Slack", formula: "Float = LS - ES = LF - EF", description: "Amount of time an activity can be delayed without delaying the project", example: "LS=Day 10, ES=Day 7 → Float = 3 days" },
      { name: "Activity Duration (PERT)", formula: "Duration = (O + 4M + P) / 6", description: "Three-point estimate: Optimistic, Most Likely, Pessimistic", example: "O=4, M=6, P=14 → Duration = (4+24+14)/6 = 7 days" },
      { name: "PERT Standard Deviation", formula: "SD = (P - O) / 6", description: "Spread / uncertainty of estimate", example: "P=14, O=4 → SD = 10/6 = 1.67 days" },
      { name: "PERT Variance", formula: "Variance = ((P - O) / 6)²", description: "Used in probability calculations", example: "SD=1.67 → Variance = 2.78" }
    ]
  },
  {
    category: "Communication Channels",
    items: [
      { name: "Communication Channels", formula: "N × (N - 1) / 2", description: "Total two-way communication channels", example: "5 people: 5×4/2 = 10 channels; 10 people: 10×9/2 = 45 channels" },
      { name: "Added Channels", formula: "New Channels - Old Channels", description: "Impact of adding team members", example: "Adding 1 person to 10-person team: 55 - 45 = 10 new channels" }
    ]
  },
  {
    category: "Financial / ROI Formulas",
    items: [
      { name: "Return on Investment (ROI)", formula: "ROI = (Benefits - Costs) / Costs × 100%", description: "Percentage return on investment", example: "Benefits=$150K, Costs=$100K → ROI = 50%" },
      { name: "Net Present Value (NPV)", formula: "NPV = Σ [Cash Flow / (1+r)^t] - Initial Investment", description: "Present value of future cash flows; higher NPV = better", example: "NPV > 0 = good investment; choose project with higher NPV" },
      { name: "Present Value (PV)", formula: "PV = FV / (1 + r)^n", description: "Today's value of a future amount", example: "$110K in 1 year at 10% → PV = $110K/1.1 = $100K" },
      { name: "Benefit-Cost Ratio (BCR)", formula: "BCR = Benefits / Costs", description: "BCR > 1 = benefits exceed costs; higher = better", example: "Benefits=$200K, Costs=$100K → BCR = 2.0" }
    ]
  },
  {
    category: "Quality Formulas",
    items: [
      { name: "Sigma Values", formula: "1σ = 68.27%, 2σ = 95.45%, 3σ = 99.73%, 6σ = 99.9997%", description: "Percentage of data within standard deviations (normal distribution)", example: "6 Sigma means only 3.4 defects per million opportunities" },
      { name: "Defects per Million (DPMO)", formula: "DPMO = (Defects / (Units × Opportunities)) × 1,000,000", description: "Quality metric for Six Sigma", example: "100 defects in 1M opportunities = 100 DPMO ≈ 5.2 sigma" }
    ]
  }
];

export const flashcards = [
  { id: 1, category: "People", front: "What is the BEST conflict resolution technique?", back: "Collaborating / Problem Solving (Win-Win). Both parties work together to find a solution that satisfies everyone. It's the most time-consuming but produces the best long-term results." },
  { id: 2, category: "People", front: "What are Tuckman's 5 stages of team development?", back: "1. Forming (polite, uncertain)\n2. Storming (conflict, personality clashes)\n3. Norming (norms established, cohesion)\n4. Performing (high performance, self-directed)\n5. Adjourning (disbanding, celebrating)" },
  { id: 3, category: "People", front: "What is Servant Leadership?", back: "A leadership style where the leader puts the team's needs first. The leader removes obstacles, provides resources, coaches, and enables the team to do their best work. It's the preferred PMP leadership style." },
  { id: 4, category: "People", front: "What are Maslow's 5 Hierarchy of Needs (lowest to highest)?", back: "1. Physiological (food, shelter)\n2. Safety (security, stability)\n3. Social (belonging, love)\n4. Esteem (recognition, achievement)\n5. Self-Actualization (fulfillment)\n\nLower needs must be met before higher needs motivate." },
  { id: 5, category: "People", front: "What is the difference between Theory X and Theory Y?", back: "Theory X: People are lazy, avoid work, need close supervision and external motivation.\nTheory Y: People are self-motivated, seek responsibility, and are capable of self-direction.\n\nPMP favors Theory Y mindset." },
  { id: 6, category: "People", front: "What are the 5 components of Emotional Intelligence (Goleman)?", back: "1. Self-Awareness\n2. Self-Regulation\n3. Motivation (inner drive)\n4. Empathy\n5. Social Skills" },
  { id: 7, category: "People", front: "What is the Power/Interest Grid used for?", back: "Stakeholder analysis tool to categorize stakeholders:\n• High Power / High Interest → Manage Closely\n• High Power / Low Interest → Keep Satisfied\n• Low Power / High Interest → Keep Informed\n• Low Power / Low Interest → Monitor" },
  { id: 8, category: "People", front: "What is RACI?", back: "R = Responsible (does the work)\nA = Accountable (owns the outcome — only ONE per task)\nC = Consulted (two-way communication, input required)\nI = Informed (one-way updates, doesn't need to be consulted)" },
  { id: 9, category: "Process", front: "What is the Critical Path?", back: "The longest sequence of activities from start to finish in a project network. It determines the minimum project duration. Activities on the critical path have ZERO float — any delay delays the entire project." },
  { id: 10, category: "Process", front: "What is the formula for Float/Slack?", back: "Float = LS - ES = LF - EF\n\nLS = Latest Start, ES = Earliest Start\nLF = Latest Finish, EF = Earliest Finish\n\nCritical Path has 0 float." },
  { id: 11, category: "Process", front: "What does CPI < 1 mean?", back: "Cost Performance Index < 1 means you are OVER BUDGET — you are getting less than $1 of work done for every $1 spent.\n\nCPI = EV / AC\nCPI > 1 = Under budget (good)\nCPI < 1 = Over budget (bad)\nCPI = 1 = On budget" },
  { id: 12, category: "Process", front: "What does SPI < 1 mean?", back: "Schedule Performance Index < 1 means you are BEHIND SCHEDULE — you have done less work than planned.\n\nSPI = EV / PV\nSPI > 1 = Ahead of schedule\nSPI < 1 = Behind schedule\nSPI = 1 = On schedule" },
  { id: 13, category: "Process", front: "What is the difference between Crashing and Fast Tracking?", back: "Crashing: Add resources to critical path activities to shorten duration. COSTS MORE money but keeps work sequential.\n\nFast Tracking: Do activities in parallel that were planned sequentially. Saves time but ADDS RISK (rework)." },
  { id: 14, category: "Process", front: "What are the 5 Risk Response strategies for Threats?", back: "1. Avoid — Eliminate the risk entirely\n2. Transfer — Shift to third party (insurance, contract)\n3. Mitigate — Reduce probability or impact\n4. Accept — Do nothing (active = contingency plan; passive = acknowledge)\n5. Escalate — If beyond PM authority" },
  { id: 15, category: "Process", front: "What is the WBS 100% Rule?", back: "The Work Breakdown Structure must capture 100% of the project scope — including all deliverables and work. Nothing in the WBS should be outside the project scope, and nothing in scope should be missing from the WBS." },
  { id: 16, category: "Process", front: "What is the difference between Quality Assurance and Quality Control?", back: "Quality Assurance (QA): Process-oriented. Ensures the RIGHT PROCESSES are being followed. Done by auditing.\n\nQuality Control (QC): Product-oriented. Ensures deliverables MEET STANDARDS. Done by inspection/testing." },
  { id: 17, category: "Process", front: "What are the 3 types of contracts and who bears risk?", back: "Fixed Price (FP): SELLER bears risk. Buyer knows exact cost.\n\nCost Reimbursable (CR): BUYER bears risk. Seller is reimbursed for costs.\n\nTime & Material (T&M): SHARED risk. Hybrid of both." },
  { id: 18, category: "Process", front: "What is Scope Creep vs Gold Plating?", back: "Scope Creep: Unauthorized additions to scope requested by stakeholders without going through change control. BAD.\n\nGold Plating: Team adds extra features/enhancements without customer request. Also BAD — violates scope baseline." },
  { id: 19, category: "Process", front: "What is the communication channels formula?", back: "N × (N - 1) / 2\n\nExamples:\n5 people = 10 channels\n10 people = 45 channels\n20 people = 190 channels\n\nAdding 1 person to a 10-person team adds 10 new channels (45 → 55)." },
  { id: 20, category: "Process", front: "What is the PERT formula for activity duration?", back: "Duration = (O + 4M + P) / 6\n\nO = Optimistic estimate\nM = Most Likely estimate\nP = Pessimistic estimate\n\nStandard Deviation = (P - O) / 6" },
  { id: 21, category: "Process", front: "What are the Scrum roles?", back: "Product Owner: Owns and prioritizes the product backlog; represents stakeholders.\n\nScrum Master: Servant leader; removes impediments; protects team; facilitates ceremonies.\n\nDevelopment Team: Self-organizing; does the actual work; cross-functional." },
  { id: 22, category: "Process", front: "What is Kanban's key principle?", back: "Limit Work in Progress (WIP). By limiting WIP, you increase flow, reduce multitasking, identify bottlenecks, and deliver work faster. It's a pull system — team pulls work when they have capacity." },
  { id: 23, category: "Business Environment", front: "What is the difference between a Deliverable and a Benefit?", back: "Deliverable: The output or product created by the project (e.g., new software system).\n\nBenefit: The measurable value the deliverable provides (e.g., 30% reduction in processing time).\n\nProjects should be measured by benefits delivered, not just deliverables." },
  { id: 24, category: "Business Environment", front: "What is NPV and how do you choose between projects?", back: "Net Present Value = Present value of future cash flows minus the initial investment.\n\nSelection rule:\n• NPV > 0 = Project adds value (accept)\n• NPV < 0 = Project destroys value (reject)\n• Multiple projects: Choose HIGHER NPV\n• Opportunity cost: When selecting one project, you forgo another" },
  { id: 25, category: "Business Environment", front: "What is Kotter's 8-Step Change Model?", back: "1. Create urgency\n2. Build guiding coalition\n3. Form strategic vision\n4. Enlist volunteer army\n5. Enable action (remove barriers)\n6. Generate short-term wins\n7. Sustain acceleration\n8. Institute change" },
  { id: 26, category: "Business Environment", front: "What is ADKAR?", back: "A = Awareness (why change is needed)\nD = Desire (motivation to support)\nK = Knowledge (how to change)\nA = Ability (skills to implement)\nR = Reinforcement (sustain the change)\n\nADKAR is Prosci's change management model. Each element must be achieved in order." },
  { id: 27, category: "People", front: "What is the PMI Code of Ethics?", back: "1. Responsibility: Take ownership for decisions and consequences\n2. Respect: Show high regard for yourself, others, and resources\n3. Fairness: Make decisions and act impartially and objectively\n4. Honesty: Understand the truth and act in a truthful manner" },
  { id: 28, category: "Process", front: "What is Earned Value and how is it calculated?", back: "Earned Value (EV) = The budgeted cost of work that has actually been completed.\n\nEV = BAC × % Actually Complete\n\nIf BAC = $100K and you're 40% done:\nEV = $100K × 0.40 = $40,000\n\nEV is the foundation of EVM — it bridges schedule and cost." }
];

export const quizQuestions = [
  {
    id: 1,
    domain: "People",
    difficulty: "Medium",
    question: "During a project, two team members have a disagreement about the technical approach. They've been arguing for two days and it's impacting the project schedule. As the project manager, what is the BEST course of action?",
    options: [
      "Make a decision yourself to save time",
      "Bring both team members together to discuss the issue and collaboratively reach a solution",
      "Assign one team member to the other work streams to avoid conflict",
      "Escalate the issue to the sponsor immediately"
    ],
    correct: 1,
    explanation: "Collaborating (Problem Solving) is the best conflict resolution technique. It brings both parties together to find a win-win solution. Making a decision yourself (forcing) or removing someone from the project are less effective. Escalation is premature — the PM should attempt to resolve first."
  },
  {
    id: 2,
    domain: "Process",
    difficulty: "Hard",
    question: "A project has a BAC of $200,000. At the reporting period, PV = $80,000, EV = $70,000, and AC = $90,000. What is the TCPI based on BAC?",
    options: ["1.09", "1.30", "0.78", "1.15"],
    correct: 1,
    explanation: "TCPI = (BAC - EV) / (BAC - AC) = ($200,000 - $70,000) / ($200,000 - $90,000) = $130,000 / $100,000 = 1.30. This means the project needs to perform 30% MORE efficiently than originally planned to finish within budget — which may be unrealistic."
  },
  {
    id: 3,
    domain: "People",
    difficulty: "Easy",
    question: "A new team member joins the project mid-way through. They are highly skilled but seem uncommitted and uncertain. According to Situational Leadership, what approach should the PM use?",
    options: [
      "Delegating — give them full autonomy",
      "Directing — tell them exactly what to do",
      "Supporting — focus on relationship and encourage",
      "Coaching — still provide direction but explain reasons"
    ],
    correct: 2,
    explanation: "The Situational Leadership model suggests that for someone with high competence but low commitment, the Supporting style is appropriate — focus on the relationship, encourage them, and provide emotional support without over-directing."
  },
  {
    id: 4,
    domain: "Process",
    difficulty: "Medium",
    question: "A stakeholder requests a significant change to the project scope that will add 3 weeks to the schedule. What should the project manager do FIRST?",
    options: [
      "Reject the change since it impacts the schedule",
      "Implement the change since the stakeholder is requesting it",
      "Evaluate the impact of the change on scope, schedule, cost, quality, risk, and resources",
      "Escalate to the sponsor for a decision"
    ],
    correct: 2,
    explanation: "Before doing anything, the PM should evaluate the full impact of the change on all project constraints (scope, time, cost, quality, risk, resources). Only after this assessment should the change be submitted to the Change Control Board (CCB) for approval or rejection."
  },
  {
    id: 5,
    domain: "Process",
    difficulty: "Medium",
    question: "You are using Earned Value Management and find that CPI = 0.75 and SPI = 0.85. What does this tell you?",
    options: [
      "The project is over budget and behind schedule",
      "The project is under budget and ahead of schedule",
      "The project is on budget but behind schedule",
      "The project is over budget but ahead of schedule"
    ],
    correct: 0,
    explanation: "CPI = 0.75 means the project is OVER BUDGET (getting only $0.75 worth of work per dollar spent). SPI = 0.85 means the project is BEHIND SCHEDULE (only 85% of planned work is done). Both being less than 1.0 indicates the project is in trouble on both dimensions."
  },
  {
    id: 6,
    domain: "Process",
    difficulty: "Easy",
    question: "Which estimating technique produces the MOST accurate project cost estimate?",
    options: [
      "Analogous estimating",
      "Parametric estimating",
      "Bottom-up estimating",
      "Expert judgment"
    ],
    correct: 2,
    explanation: "Bottom-up estimating is the most accurate because it estimates each individual work package and rolls them up. However, it's also the most time-consuming. Analogous estimating uses historical data from similar projects and is least accurate but fastest."
  },
  {
    id: 7,
    domain: "People",
    difficulty: "Medium",
    question: "A project team member consistently misses deadlines. Before taking any action, what should the PM do first?",
    options: [
      "Remove the team member from the project",
      "Escalate to HR immediately",
      "Have a private conversation to understand the root cause",
      "Assign all the team member's tasks to other people"
    ],
    correct: 2,
    explanation: "Before taking any action, the PM should have a private one-on-one conversation to understand WHY the team member is missing deadlines. There may be personal issues, skill gaps, unclear expectations, or organizational obstacles. Understanding the root cause is always the first step."
  },
  {
    id: 8,
    domain: "Process",
    difficulty: "Hard",
    question: "A project has activities with the following relationships: A(5 days) → B(3 days) and A(5 days) → C(7 days) → D(2 days). B and C both finish at D. What is the project duration?",
    options: ["10 days", "14 days", "12 days", "17 days"],
    correct: 1,
    explanation: "Path 1: A + B + D = 5 + 3 + 2 = 10 days. Path 2: A + C + D = 5 + 7 + 2 = 14 days. The Critical Path is the LONGEST path = 14 days. The project duration is 14 days. Activities A, C, and D are on the critical path."
  },
  {
    id: 9,
    domain: "Business Environment",
    difficulty: "Easy",
    question: "Your organization is choosing between two projects. Project A has NPV = $150,000, Project B has NPV = $200,000. Resources allow only one project. What is the opportunity cost of choosing Project A?",
    options: [
      "$150,000",
      "$50,000",
      "$200,000",
      "The NPV of Project A"
    ],
    correct: 2,
    explanation: "Opportunity cost is the value of the BEST ALTERNATIVE forgone. If you choose Project A ($150K), you give up Project B ($200K). Therefore, the opportunity cost is $200,000 — the value of Project B. This is why comparing NPVs is critical for project selection."
  },
  {
    id: 10,
    domain: "Process",
    difficulty: "Medium",
    question: "The project team identifies a risk that, if it occurs, would provide significant cost savings. What type of risk response should be used?",
    options: [
      "Mitigate",
      "Exploit",
      "Transfer",
      "Avoid"
    ],
    correct: 1,
    explanation: "This is a POSITIVE RISK (opportunity). 'Exploit' is the appropriate response when you want to ENSURE the opportunity materializes — make it definitely happen. 'Enhance' would increase the probability. Mitigate, Transfer, and Avoid are strategies for negative risks (threats)."
  },
  {
    id: 11,
    domain: "Process",
    difficulty: "Medium",
    question: "In a Scrum project, the team has committed to delivering 50 story points in a 2-week sprint. At the end of the sprint, they completed 35 story points. What should happen at the sprint review?",
    options: [
      "Only demonstrate the completed 35 points of work",
      "Demonstrate all 50 points including incomplete work",
      "Cancel the sprint and start over",
      "Add the 15 remaining points to the next sprint as a commitment"
    ],
    correct: 0,
    explanation: "In Scrum, the sprint review should only demonstrate COMPLETED, DONE work. Incomplete stories are not shown to stakeholders as finished work. The 15 unfinished story points go back to the product backlog and may be prioritized for the next sprint."
  },
  {
    id: 12,
    domain: "People",
    difficulty: "Easy",
    question: "According to Herzberg's Two-Factor Theory, which of the following is a MOTIVATOR (not just a hygiene factor)?",
    options: [
      "Salary increase",
      "Better working conditions",
      "Recognition for achievement",
      "Job security"
    ],
    correct: 2,
    explanation: "In Herzberg's theory, Motivators (satisfiers) include achievement, recognition, the work itself, responsibility, and advancement. Hygiene factors (dissatisfiers if absent) include salary, working conditions, job security, company policies, and supervision. Recognition is a motivator that drives true engagement."
  },
  {
    id: 13,
    domain: "Process",
    difficulty: "Medium",
    question: "A project manager learns that a key vendor will not be able to deliver a critical component on time due to factors outside their control. This was an identified risk with a contingency plan. What should the PM do?",
    options: [
      "Immediately escalate to the sponsor",
      "Implement the contingency plan that was developed for this risk",
      "Start looking for a new vendor right away",
      "Update the risk register and do nothing yet"
    ],
    correct: 1,
    explanation: "The contingency plan was developed specifically for this situation. Now that the risk has occurred (become an issue), the PM should implement the pre-planned contingency response. This is why you spend time planning risk responses — so you can act decisively when needed."
  },
  {
    id: 14,
    domain: "Process",
    difficulty: "Hard",
    question: "Which contract type places the MOST risk on the BUYER?",
    options: [
      "Firm Fixed Price (FFP)",
      "Fixed Price Incentive Fee (FPIF)",
      "Cost Plus Fixed Fee (CPFF)",
      "Time and Material (T&M)"
    ],
    correct: 2,
    explanation: "In Cost Plus contracts, the buyer reimburses ALL costs plus a fee. The seller has little incentive to control costs since they'll be reimbursed regardless. This places maximum risk on the BUYER. In Fixed Price contracts, the SELLER bears most risk since they've committed to a price."
  },
  {
    id: 15,
    domain: "Business Environment",
    difficulty: "Medium",
    question: "A project is nearing completion. The organizational change management team reports that users are resistant to adopting the new system. According to ADKAR, what might be missing?",
    options: [
      "Awareness — users don't know about the change",
      "Knowledge — users know about it but not how to use it",
      "Reinforcement — the change isn't being sustained",
      "Could be any ADKAR element depending on the root cause"
    ],
    correct: 3,
    explanation: "ADKAR is a sequential model. Resistance can come from lacking any element: Awareness (don't know why), Desire (don't want to), Knowledge (don't know how), Ability (can't do it), or Reinforcement (not sustained). Without diagnosing which element is missing, you can't prescribe the right solution."
  },
  {
    id: 16,
    domain: "Process",
    difficulty: "Medium",
    question: "A team using a hybrid methodology is planning their next release. They have 100 requirements, and the business wants all 100 delivered. The PM recommends using MoSCoW prioritization. Why?",
    options: [
      "To eliminate requirements that aren't needed",
      "To ensure the most valuable requirements are delivered first, managing risk of incomplete delivery",
      "Because MoSCoW is required by PMI standards",
      "To avoid having to create a WBS"
    ],
    correct: 1,
    explanation: "MoSCoW (Must Have, Should Have, Could Have, Won't Have) ensures that if not everything can be delivered, the most critical requirements (Must Have) are completed first. This manages delivery risk and ensures maximum business value is delivered even if scope must be reduced."
  },
  {
    id: 17,
    domain: "People",
    difficulty: "Easy",
    question: "A team member comes to you upset because another team member keeps interrupting them in meetings. As the PM, what is the BEST action?",
    options: [
      "Tell the interrupting team member to stop",
      "Reference the team's ground rules on meeting behavior",
      "Ignore it since it's a minor interpersonal issue",
      "Move the upset team member to a different team"
    ],
    correct: 1,
    explanation: "If the team established ground rules at the beginning of the project (which they should have), referencing those agreed-upon norms is the best approach. It's not the PM imposing a rule — it's reminding the team of their own commitments. This is why ground rules are established early."
  },
  {
    id: 18,
    domain: "Process",
    difficulty: "Medium",
    question: "What does a Control Chart help you determine?",
    options: [
      "The root cause of quality defects",
      "Whether a process is operating within acceptable limits over time",
      "The priority order of defects to fix",
      "The relationship between two quality variables"
    ],
    correct: 1,
    explanation: "A Control Chart tracks process performance over time and shows whether it's in statistical control (within control limits = ±3 sigma). If points fall outside the control limits or show non-random patterns (7 consecutive points on one side), the process is out of control and needs investigation. Fishbone diagrams identify root causes; Pareto charts prioritize; scatter diagrams show relationships."
  },
  {
    id: 19,
    domain: "Process",
    difficulty: "Hard",
    question: "You are 6 months into a 12-month project. BAC = $500,000, EV = $200,000, AC = $250,000, PV = $250,000. What is the Estimate at Completion (EAC)?",
    options: ["$500,000", "$625,000", "$550,000", "$450,000"],
    correct: 1,
    explanation: "CPI = EV/AC = $200K/$250K = 0.8. EAC = BAC/CPI = $500K/0.8 = $625,000. This means the project will likely cost $625K instead of $500K. The project is also behind schedule: SV = EV-PV = $200K-$250K = -$50K, and SPI = EV/PV = 0.8."
  },
  {
    id: 20,
    domain: "Business Environment",
    difficulty: "Medium",
    question: "During project execution, new government regulations require significant changes to the product design. This will increase costs by 20% and extend the schedule by 2 months. What should the PM do FIRST?",
    options: [
      "Submit a change request to update scope, schedule, and budget",
      "Immediately notify the sponsor and get their approval",
      "Assess the full impact of the regulatory change on the project",
      "Update the project management plan"
    ],
    correct: 2,
    explanation: "FIRST, assess the full impact. Before submitting change requests, notifying the sponsor, or updating plans, the PM needs a complete picture of what this regulatory change means for all aspects of the project (scope, schedule, cost, quality, risk, stakeholders). Then submit a change request with the full analysis."
  }
];

export const references = [
  {
    title: "PMBOK Guide – 7th Edition",
    type: "Primary",
    description: "Project Management Body of Knowledge. The foundational reference for the PMP exam. 7th edition introduces principles-based approach across 12 project management principles.",
    key_topics: ["Project Management Principles", "Performance Domains", "Tailoring", "Value Delivery"]
  },
  {
    title: "Agile Practice Guide",
    type: "Primary",
    description: "Published by PMI in collaboration with Agile Alliance. Required reading for the PMP exam — roughly 50% of exam questions have an agile or hybrid component.",
    key_topics: ["Agile Mindset", "Scrum", "Kanban", "XP", "Lean", "Hybrid Approaches"]
  },
  {
    title: "PMI Examination Content Outline (ECO)",
    type: "Primary",
    description: "The official document from PMI that defines exactly what's on the PMP exam. Use this to prioritize your study. Currently: 42% People, 50% Process, 8% Business Environment.",
    key_topics: ["People Domain", "Process Domain", "Business Environment Domain"]
  },
  {
    title: "Process Groups: A Practice Guide",
    type: "Secondary",
    description: "Formerly embedded in PMBOK, this guide covers the 5 process groups (Initiating, Planning, Executing, Monitoring & Controlling, Closing) and predictive project management processes.",
    key_topics: ["5 Process Groups", "49 Processes", "Inputs/Tools/Outputs", "Predictive Lifecycle"]
  },
  {
    title: "Scrum Guide (Schwaber & Sutherland)",
    type: "Secondary",
    description: "The definitive guide to Scrum. Free at scrumguides.org. Know all roles, events, and artifacts.",
    key_topics: ["Product Owner", "Scrum Master", "Sprint", "Backlog", "Ceremonies"]
  }
];
