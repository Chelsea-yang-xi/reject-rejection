/* Reject Rejection — vanilla JS, single file, zero deps */
(() => {
'use strict';

// ============================================================
// I18N — all UI strings
// ============================================================
const I18N = {
  en: {
    brand: 'Reject Rejection',
    tagline: 'Reject the rejection. Keep the dignity.',
    subTagline: 'Turn template rejections into witty, risk-scored reply drafts. Never sent automatically — you stay in control.',
    labelPaste: 'Paste the rejection email',
    labelPasteGhost: 'Paste your last message thread (optional)',
    placeholderPaste: 'After careful consideration, we have decided to move forward with other candidates whose experience more closely aligns with our current needs...',
    placeholderPasteGhost: 'If you have the last message in the thread, paste it here. Otherwise leave blank and just fill in the context below.',
    labelContext: 'What happened?',
    ctxApplied: 'Just applied',
    ctxInterview: 'Had interviews',
    ctxAssignment: 'Did an assignment',
    ctxGhosted: 'Got ghosted',
    ctxUnknown: 'No idea',
    labelGhostCtx: 'Quick context — no email needed',
    ghostHint: 'Fill in what you remember. We will use this instead of an email.',
    ghostCompany: 'Company',
    ghostRole: 'Role',
    ghostSince: 'Last contact',
    ghostCompanyPh: 'e.g., Acme Inc.',
    ghostRolePh: 'e.g., Senior Product Manager',
    ghostSincePh: 'e.g., 4 weeks ago, after the final interview',
    labelTone: 'Choose a tone',
    cta: 'Reject this rejection',
    ctaGhost: 'Break the silence',
    actCopy: 'Copy',
    actDownload: 'Download .txt',
    actProfessional: 'More professional',
    actSavage: 'More savage',
    actLinkedIn: 'Turn into LinkedIn post',
    actRegenerate: 'Regenerate',
    actArchive: 'Save to Rage Archive',
    archiveTitle: 'Rage Archive',
    shareTitle: 'Share this tool',
    footPrivacy: 'Everything happens in your browser. Nothing is uploaded. Nothing is logged.',
    footSolidarity: 'Built for candidates who deserve better feedback. Share it with someone who just got an "after careful consideration" email.',
    notRejection: "This doesn't look like a rejection email. Paste a longer message to enable generation.",
    ghostReady: 'Ghost mode: paste optional, context below is what matters.',
    detected: 'Detected:',
    typeAssignment: 'Post-Assignment Rejection',
    typeInterview: 'Post-Interview Rejection',
    typeGhost: 'Ghosting (no letter)',
    typeFakePolite: 'Fake Politeness Rejection',
    typeTemplate: 'Template Rejection',
    typeNoFeedback: 'No-Feedback Rejection',
    riskGreen: 'Safe to send after a final read.',
    riskYellow: 'Review carefully before sending.',
    riskOrange: 'Recommended for venting or a rewrite.',
    riskRed: 'Do not send. Keep as therapy.',
    riskTherapy: 'For your eyes only.',
    safetyBanner: "We removed a personal attack — here's the sharper-but-safe version.",
    toastCopied: 'Copied to clipboard.',
    toastDownloaded: 'Downloaded.',
    toastArchived: 'Saved to Rage Archive.',
    toastShareCopied: 'Link copied — pass it on.',
    archiveRestore: 'Restore',
    archiveDelete: 'Delete',
    confirmDelete: 'Delete this draft?',
    featuredPill: '★ Aim for a second look',
    tones: {
      reconsider:   { name: 'Reconsideration Request', desc: 'Graceful, evidence-based ask for one more look. Designed to actually send.' },
      professional: { name: 'Professional Closure',    desc: 'Polite, mature, feedback-oriented. Actually sendable.' },
      pointed:      { name: 'Polite but Pointed',      desc: 'Respectful but clearly critical of process quality.' },
      mirror:       { name: 'Corporate Mirror',        desc: 'Mirrors HR template language back, with irony.' },
      survivor:     { name: 'Assignment Survivor',     desc: 'Firm critique of unpaid labor. No personal attacks.' },
      therapy:      { name: 'Therapy Draft',           desc: 'Funny, dramatic, cathartic. For your eyes only.', warn: 'Do not send' },
      linkedin:     { name: 'LinkedIn Reflection',     desc: 'Thought-leadership voice. Safe to post publicly.' }
    }
  },
  zh: {
    brand: 'Reject Rejection',
    tagline: '拒绝拒信，保留尊严。',
    subTagline: '把模板拒信变成有分寸的回信草稿，自带风险评分。永远不会自动发送——你来定。',
    labelPaste: '粘贴你收到的拒信',
    labelPasteGhost: '粘贴你最后一封消息（可选）',
    placeholderPaste: '经过慎重考虑，我们决定推进与其他更符合当前需求的候选人进入下一轮……',
    placeholderPasteGhost: '如果你手上有最后一封往来邮件，可以粘贴在这里。也可以留空，只填下面的信息。',
    labelContext: '当时发生了什么？',
    ctxApplied: '只是投了简历',
    ctxInterview: '面试过了',
    ctxAssignment: '做了作业/笔试',
    ctxGhosted: '被晾着了',
    ctxUnknown: '说不清',
    labelGhostCtx: '简要信息——不需要拒信',
    ghostHint: '填你还记得的就行，我们用这些信息代替邮件内容。',
    ghostCompany: '公司',
    ghostRole: '职位',
    ghostSince: '上次联系',
    ghostCompanyPh: '例如：某科技公司',
    ghostRolePh: '例如：高级产品经理',
    ghostSincePh: '例如：终面之后 4 周',
    labelTone: '选一个语气',
    cta: '回敬这封拒信',
    ctaGhost: '打破这份沉默',
    actCopy: '复制',
    actDownload: '下载 .txt',
    actProfessional: '更专业一些',
    actSavage: '更狠一些',
    actLinkedIn: '改成 LinkedIn 帖子',
    actRegenerate: '换一版',
    actArchive: '收进愤怒档案',
    archiveTitle: '愤怒档案',
    shareTitle: '分享这个工具',
    footPrivacy: '一切运算都在你的浏览器里。不上传，不记录。',
    footSolidarity: '献给所有应该收到更好反馈的候选人。把它转给刚收到「经过慎重考虑」的朋友。',
    notRejection: '这看起来不像一封拒信。粘贴更长的内容才能生成回信。',
    ghostReady: '幽灵模式：邮件可选，关键是下面的信息。',
    detected: '识别到：',
    typeAssignment: '笔试/作业之后被拒',
    typeInterview: '面试之后被拒',
    typeGhost: '被晾着（没有拒信）',
    typeFakePolite: '虚假客气型拒信',
    typeTemplate: '模板拒信',
    typeNoFeedback: '无反馈型拒信',
    riskGreen: '通读一遍即可发送。',
    riskYellow: '发送前请仔细核对。',
    riskOrange: '建议用来发泄或改写。',
    riskRed: '不要发送，留作疗愈用。',
    riskTherapy: '仅供你自己看。',
    safetyBanner: '我们移除了一段人身攻击——这是「更利落但安全」的版本。',
    toastCopied: '已复制到剪贴板。',
    toastDownloaded: '已下载。',
    toastArchived: '已收进愤怒档案。',
    toastShareCopied: '链接已复制——传出去吧。',
    archiveRestore: '恢复',
    archiveDelete: '删除',
    confirmDelete: '删除这条草稿？',
    featuredPill: '★ 争取再考虑',
    tones: {
      reconsider:   { name: '争取再考虑',       desc: '有礼有据地争取最后一次机会。真正用来发送的那种。' },
      professional: { name: '专业收尾',         desc: '礼貌、成熟、要反馈。真能发的那种。' },
      pointed:      { name: '客气但有刺',       desc: '尊重对方，但明确指出流程问题。' },
      mirror:       { name: '企业话术镜像',     desc: '用对方的 HR 模板话术反射回去，自带反讽。' },
      survivor:     { name: '免费劳动幸存者',   desc: '严厉批评无偿作业，但不攻击个人。' },
      therapy:      { name: '疗愈草稿',         desc: '搞笑、夸张、解压。仅供你自己看。', warn: '请勿发送' },
      linkedin:     { name: 'LinkedIn 反思',    desc: '思想领导力风格，安全可公开发布。' }
    }
  }
};

const TONE_IDS = ['reconsider', 'professional', 'pointed', 'mirror', 'survivor', 'therapy', 'linkedin'];
const TONE_BASELINE = { reconsider: 0, professional: 0, pointed: 1, mirror: 2, survivor: 2, therapy: 4, linkedin: 1 };
const FEATURED_TONES = new Set(['reconsider']);

// ============================================================
// TEMPLATES — TONE → SCENARIO (letter|ghost) → {short, long}
// 24 (rejection) + 28 (ghost) = 56 templates across EN + ZH
// PRD §12 verbatim retained for: mirror/letter/long, pointed/letter/long,
// survivor/letter/long, therapy/letter/long
// ============================================================
const TEMPLATES = {
  en: {
    reconsider: {
      letter: {
        short: `Subject: Quick follow-up on {ROLE}\n\nDear {NAME},\n\nThank you for your decision regarding {ROLE} at {COMPANY}. Before I close the door on this opportunity, I wanted to make one short ask.\n\nIf there was a specific concern that drove the decision, I would welcome the chance to address it briefly — by email or in a 15-minute call. Across our conversations, my interest only grew. If the decision is firm, I respect that fully and thank the team for the time invested.\n\nKind regards,\n[Your name]`,
        long:  `Subject: A small ask before I move on\n\nDear {NAME},\n\nThank you for your decision regarding the {ROLE} position at {COMPANY}. Before I close the door on this opportunity, I wanted to make one short request.\n\nIf there was a specific concern that drove the decision, I would welcome the chance to address it directly — whether in writing or in a brief call. Across our conversations I came away even more convinced this is the team I want to contribute to, and I would rather know I had given the strongest possible version of my candidacy than walk away with a question unanswered.\n\nIf the decision is final, I respect that fully and thank the team for the time invested. Either way, I appreciate the consideration.\n\nKind regards,\n[Your name]`
      },
      ghost: {
        short: `Subject: Following up on {ROLE}\n\nDear {NAME},\n\nIt has been {SINCE} since our last conversation about {ROLE} at {COMPANY}. Before assuming anything, I wanted to check in once: is there something I can address, or has the role moved in a different direction? Either answer helps me move forward respectfully.\n\nThank you for the time invested so far.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Following up on {ROLE} at {COMPANY}\n\nDear {NAME},\n\nI hope you are well. It has been {SINCE} since our last conversation, and I wanted to follow up once before assuming the role has moved in a different direction.\n\nIf anything in my candidacy raised a concern, I would welcome the chance to address it directly. If timing or scope has shifted on your side, I would appreciate knowing — and would still be open to continuing the conversation when the moment is right. My interest in {COMPANY} hasn't changed; I simply want to respect everyone's time, including yours, by not leaving this unclear.\n\nEither way, thank you for the consideration so far.\n\nKind regards,\n[Your name]`
      }
    },
    professional: {
      letter: {
        short: `Subject: Re: Your decision\n\nDear {NAME},\n\nThank you for letting me know. I appreciate the time the team invested in evaluating my application for {ROLE} at {COMPANY}.\n\nIf there is any specific feedback you can share, I would value it for future opportunities.\n\nWishing the team continued success.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Re: Application Update\n\nDear {NAME},\n\nThank you for taking the time to inform me of your decision regarding the {ROLE} position at {COMPANY}. I understand that selection processes involve many considerations, and I appreciate being told clearly rather than left without an answer.\n\nIf you are able to share any specific feedback on my application or interview, I would genuinely value it. Concrete input helps candidates calibrate and improve, and it reflects well on the company's commitment to candidate experience.\n\nThank you again for the opportunity to learn more about the team. I wish you success in finding the right person for the role.\n\nKind regards,\n[Your name]`
      },
      ghost: {
        short: `Subject: Following up on {ROLE}\n\nDear {NAME},\n\nIt has been {SINCE} since our last conversation regarding {ROLE} at {COMPANY}. I wanted to follow up briefly to confirm the current status, so I can plan my next steps accordingly. Any update — including that the role is no longer moving forward — would be appreciated.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Status check on {ROLE} at {COMPANY}\n\nDear {NAME},\n\nI hope you're well. It has been {SINCE} since our last conversation about the {ROLE} position, and I wanted to follow up once to check on the current status of the process.\n\nI understand priorities shift and timelines slip, especially across busy hiring cycles. A short update — even one confirming the role has moved in a different direction — would help me plan my next steps. I remain interested if the opportunity is still open, and I appreciate the time the team invested earlier in the process.\n\nKind regards,\n[Your name]`
      }
    },
    pointed: {
      letter: {
        short: `Subject: Re: Interview Process\n\nDear {NAME},\n\nThank you for the update. Given the rounds invested, I would have appreciated more specific feedback. Clearer communication after multi-stage processes makes a meaningful difference to the candidate experience.\n\nBest of luck with the search.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Re: Interview Process\n\nDear {NAME},\n\nThank you for letting me know. While I understand the decision, I would have appreciated more specific feedback given the time invested across the interview process. As candidates also commit time, preparation, and energy, clear communication after multiple rounds makes a meaningful difference to the overall candidate experience.\n\nI remain grateful for the opportunity to learn more about the company and wish the team success in finding the right fit.\n\nKind regards,\n[Your name]`
      },
      ghost: {
        short: `Subject: Closing the loop on {ROLE}\n\nDear {NAME},\n\nIt has been {SINCE} since our last exchange. After the rounds invested on both sides, an update — even a brief one confirming the role has moved elsewhere — would have been valuable. I'm following up once so we can both close this cleanly.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Closing the loop on {ROLE} at {COMPANY}\n\nDear {NAME},\n\nIt has been {SINCE} since our last conversation about the {ROLE} role. After multiple rounds and the preparation involved on both sides, I would have appreciated an update — even a brief confirmation that the role had moved in a different direction.\n\nI'm following up once so that we can both close the loop cleanly. For future candidates, a short note at the moment a decision is made (or a process is paused) is one of the lowest-effort, highest-impact improvements a hiring team can make.\n\nThank you for the time invested earlier in the process.\n\nKind regards,\n[Your name]`
      }
    },
    mirror: {
      letter: {
        short: `Subject: Re: Your Update\n\nDear Hiring Team,\n\nThank you for your rejection. After careful consideration, I regret to inform you that I will not be moving forward with accepting it at this time.\n\nWhile your message met industry-standard vagueness, I have decided to proceed with other disappointments more aligned with my growth objectives.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Re: Your Update\n\nDear Hiring Team,\n\nThank you for your rejection. After careful consideration, I regret to inform you that I will not be moving forward with accepting your rejection at this time.\n\nWhile your rejection demonstrated many of the standard qualities I have come to expect from the recruitment market, I have decided to proceed with other disappointments that more closely align with my personal and professional growth objectives.\n\nI appreciate the opportunity to be briefly considered, processed, and released back into the job market. I wish you the best in your continued search for candidates who meet your evolving, undisclosed, and possibly internal requirements.\n\nKind regards,\n[Your name]`
      },
      ghost: {
        short: `Subject: Re: (the silence)\n\nDear Hiring Team,\n\nThank you for your continued silence regarding {ROLE} at {COMPANY}. After {SINCE} of careful non-consideration on your end, I regret to inform you that I will be advancing without you.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Re: Our Implicit Decision\n\nDear Hiring Team,\n\nThank you for your prolonged and carefully maintained silence regarding the {ROLE} position at {COMPANY}. After {SINCE} of patient consideration on my end and apparent reorganization on yours, I regret to inform you that I will be moving forward with opportunities whose timelines more closely align with the conventional definition of a hiring process.\n\nPlease consider this email a courtesy update — the kind I'm told is sometimes appreciated. I wish you continued success in your search for a candidate who is willing to wait indefinitely.\n\nKind regards,\n[Your name]`
      }
    },
    survivor: {
      letter: {
        short: `Subject: Re: Application Update\n\nDear {NAME},\n\nThank you for the update. Given the time the assignment required, more specific feedback would have been valuable. For future candidates, clearer evaluation criteria and a feedback step would make unpaid work more respectful of candidates' time.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Re: Application Update\n\nDear {NAME},\n\nThank you for the update. I appreciate the opportunity to participate in the process and complete the assignment. Given the time and strategic thinking required, I would have valued more specific feedback on the work submitted.\n\nFor future candidates, clearer expectations around the purpose, evaluation criteria, and feedback process for assignments would make the experience more transparent and respectful.\n\nKind regards,\n[Your name]`
      },
      ghost: {
        short: `Subject: Following up on the submitted work\n\nDear {NAME},\n\nIt has been {SINCE} since I completed the work you requested for {ROLE}. A brief update — including the role's current status — would be appreciated, both for closure and for future candidates who put real time into assignments.\n\nKind regards,\n[Your name]`,
        long:  `Subject: Status on {ROLE} and the submitted work\n\nDear {NAME},\n\nIt has been {SINCE} since I submitted the assignment for the {ROLE} role at {COMPANY}. I wanted to follow up once for clarity.\n\nBeyond my own case, I'd gently flag this as a broader candidate-experience issue: when candidates invest hours of real work into take-home tasks, even a one-line acknowledgment of the outcome makes a meaningful difference. I would appreciate a brief update on where things stand.\n\nKind regards,\n[Your name]`
      }
    },
    therapy: {
      letter: {
        short: `Subject: Re: After Careful Consideration\n\nDear Hiring Team,\n\nThank you for your carefully considered template. After equally careful review, I regret to inform you that it has not advanced to the next stage of my emotional processing.\n\nWith stronger personalization and an actual feedback step, your rejection emails may become more competitive in future cycles.\n\nKind regards,\nA candidate who has seen this template before`,
        long:  `Subject: Re: After Careful Consideration\n\nDear Hiring Team,\n\nThank you for your carefully considered template. After an equally careful review of your rejection, I regret to inform you that it has not been selected to proceed to the next stage of my emotional processing.\n\nAlthough your email showed strong alignment with industry-standard vagueness, I have decided to move forward with other forms of disappointment that offer clearer learning opportunities.\n\nPlease do not be discouraged from rejecting future candidates. With additional personalization and a stronger feedback structure, your rejection emails may become more competitive in future cycles.\n\nKind regards,\nA candidate who has seen this template before`
      },
      ghost: {
        short: `Subject: A Status Update You Did Not Ask For\n\nDear Hiring Team,\n\nAfter {SINCE} of analyzing your silence at the level of detail you have not extended to me, I regret to inform you that our relationship has been quietly closed on my side as well. Please do not respond — I would not know what to do with it.\n\nKind regards,\nA candidate who took the hint`,
        long:  `Subject: Re: (your unwritten email)\n\nDear Hiring Team,\n\nIt has been {SINCE} since our last conversation regarding {ROLE} at {COMPANY}. I want to thank you for the time I have spent inferring your decision from the structure of your inbox.\n\nWhile your silence demonstrated impressive consistency and admirable economy of effort, I have decided to interpret it as the rejection it almost certainly is, and proceed accordingly. Please consider this email a closure of the loop on my end. I appreciate the opportunity to have been almost-considered.\n\nKind regards,\nA candidate who has now stopped checking the inbox`
      }
    },
    linkedin: {
      letter: {
        short: `Got another "after careful consideration" today.\n\nI'm not posting this to vent. I'm posting it because the gap between how much time candidates invest and how little feedback we get back has become normalized — and it doesn't have to be.\n\nIf you hire: send one specific sentence. It costs you 90 seconds and changes someone's week.\n\n#hiring #candidateexperience`,
        long:  `A few weeks of interviews. Multiple rounds. Real preparation. Then: "after careful consideration, we have decided to move forward with other candidates."\n\nI don't write this to complain about a single company. I write it because the gap between what candidates invest and what we get back as feedback has quietly become the norm — and norms are choices.\n\nThree things I think any team can do without changing their hiring stack:\n\n1. After a real interview, send one specific sentence of feedback. Not a paragraph. One sentence.\n2. If an assignment took more than two hours of someone's time, treat the response with the same care.\n3. Never let a candidate go more than two weeks without an update. Silence is a decision.\n\nNone of this is about being soft. It is about respecting time. Companies who get this right will quietly out-recruit the ones who don't.\n\n#hiring #candidateexperience #recruiting`
      },
      ghost: {
        short: `Multiple rounds of interviews. Real prep. Then {SINCE} of total silence.\n\nI'm not naming the company. I'm posting this because "no response" has quietly become an acceptable answer in our industry — and it shouldn't be.\n\nIf you hire: a one-sentence "we're moving in another direction" takes 30 seconds and costs you nothing. It also tells the world what kind of team you are.\n\n#hiring #candidateexperience`,
        long:  `Multiple rounds of interviews. Genuine preparation on my side. Then {SINCE} of complete silence.\n\nI'm not naming the company. I'm posting this because "no response" has quietly become an industry-accepted answer to a real human investment of time — and it shouldn't be.\n\nA few things that are basically free:\n\n1. If a candidate makes it past round one, owe them a yes-or-no. Always.\n2. If you don't know the answer yet, owe them a date by which you will.\n3. "We've decided to go in another direction" is a complete sentence. It does not require a paragraph.\n\nNone of this requires a new ATS. It requires treating candidates as people whose time matters as much as the time of the people doing the hiring. The companies that get this right will quietly out-recruit the ones who don't.\n\n#hiring #candidateexperience #recruiting`
      }
    }
  },

  zh: {
    reconsider: {
      letter: {
        short: `主题：希望再争取一次机会\n\n{NAME} 你好，\n\n感谢告知关于 {COMPANY} {ROLE} 一职的决定。如果有具体的顾虑促成了这一决定，我希望有机会简短回应一次——一封邮件或一次 15 分钟的通话都可以。几轮交流下来，我对这个机会的意愿只增不减。如果决定已经完全敲定，我也充分尊重，再次感谢团队投入的时间。\n\n此致\n[你的名字]`,
        long:  `主题：关于 {COMPANY} {ROLE} 一职，能否再争取一次机会\n\n{NAME} 你好，\n\n感谢告知关于 {COMPANY} {ROLE} 一职的决定。在彻底结束这次机会之前，我想冒昧提一个小请求。\n\n如果是某个具体的顾虑让你方做出了这个决定，我希望有机会直接回应——可以是邮件，也可以是 15 分钟的简短通话。经过几轮交流之后，我对加入这个团队的意愿反而更明确了，比起带着疑问转身离开，我更希望确认自己已经呈现了最完整的候选人版本。\n\n如果决定已经完全敲定，我完全尊重，也再次感谢团队投入的时间。\n\n此致\n[你的名字]`
      },
      ghost: {
        short: `主题：关于 {ROLE} 的跟进\n\n{NAME} 你好，\n\n距离我们上次关于 {COMPANY} {ROLE} 的沟通已经 {SINCE}。在默认任何结论之前，我想确认一次：是否有我可以回应的顾虑，或者岗位本身已有变化？任一答案都能帮助我体面地继续前进。\n\n感谢之前投入的时间。\n\n此致\n[你的名字]`,
        long:  `主题：关于 {COMPANY} {ROLE} 一职的跟进\n\n{NAME} 你好，\n\n距离我们上次沟通已经 {SINCE}，在默认这个机会已转向之前，我想跟进一次。\n\n如果是我候选人画像中的某一点引发了顾虑，我希望有机会正面回应；如果是你方时间或岗位安排出现了变化，我也希望知道——如果合适，我仍然愿意在合适的时间继续这段沟通。我对 {COMPANY} 的兴趣没有变化，只是希望尊重所有人的时间，包括你方的，不把它悬在那里。\n\n不论哪种结果，都感谢之前的考虑。\n\n此致\n[你的名字]`
      }
    },
    professional: {
      letter: {
        short: `主题：Re: 关于你方的决定\n\n{NAME} 你好，\n\n感谢通知。也感谢团队为我应聘 {COMPANY} {ROLE} 一职花费的时间。\n\n如果有任何具体反馈可以分享，对我未来的求职会很有帮助。\n\n祝团队招聘顺利。\n\n此致\n[你的名字]`,
        long:  `主题：Re: 招聘进展\n\n{NAME} 你好，\n\n感谢告知关于 {COMPANY} {ROLE} 一职的决定。我理解招聘选择涉及多重考量，也感谢明确告知，而非让候选人无限等待。\n\n如果你方便分享任何具体反馈，我会非常感激。具体的反馈对候选人后续的调整非常有价值，也体现了公司对候选人体验的重视。\n\n再次感谢有机会进一步了解团队。祝团队顺利找到合适的人选。\n\n此致\n[你的名字]`
      },
      ghost: {
        short: `主题：关于 {ROLE} 的跟进\n\n{NAME} 你好，\n\n距离上次关于 {COMPANY} {ROLE} 的沟通已经 {SINCE}。希望简短跟进一下当前进展，方便我合理安排后续。任何形式的更新——包括职位已不再推进——都会非常感谢。\n\n此致\n[你的名字]`,
        long:  `主题：关于 {COMPANY} {ROLE} 当前进展\n\n{NAME} 你好，\n\n希望一切顺利。距离我们上次关于 {ROLE} 的沟通已经 {SINCE}，我想跟进一次了解流程的当前状态。\n\n我理解招聘节奏经常会因团队优先级或预算而出现变化。一句简短的更新——哪怕是确认岗位已转向其他方向——都能帮助我合理安排后续。如果机会仍然开放，我依然有意愿继续；也再次感谢团队在前期投入的时间。\n\n此致\n[你的名字]`
      }
    },
    pointed: {
      letter: {
        short: `主题：Re: 关于面试流程\n\n{NAME} 你好，\n\n感谢告知。但考虑到经历的几轮面试，我希望能得到更具体的反馈。在多轮流程之后清晰沟通，对候选人体验意义重大。\n\n祝招聘顺利。\n\n此致\n[你的名字]`,
        long:  `主题：Re: 关于面试流程\n\n{NAME} 你好，\n\n感谢告知。虽然理解最终决定，但考虑到整个面试流程投入的时间，我希望能收到更具体的反馈。候选人也投入了时间、准备和精力，多轮面试之后能够清晰沟通，对整体候选人体验意义重大。\n\n感谢有机会更深入了解 {COMPANY}，祝团队顺利找到合适的人选。\n\n此致\n[你的名字]`
      },
      ghost: {
        short: `主题：关于 {ROLE} 的进展\n\n{NAME} 你好，\n\n距离我们上次沟通已经 {SINCE}。在双方都投入了多轮之后，我希望能得到一封更新——哪怕只是确认岗位已转向其他方向。这次跟进是为了把这件事干净地收尾。\n\n此致\n[你的名字]`,
        long:  `主题：关于 {COMPANY} {ROLE} 一职的收尾\n\n{NAME} 你好，\n\n距离上次关于 {ROLE} 的沟通已经 {SINCE}。考虑到双方为多轮面试投入的准备和时间，我希望能得到一次更新——哪怕只是确认岗位已转向其他方向。\n\n这次跟进是为了把流程在双方都干净地收尾。对未来的候选人而言，在决定做出（或流程暂停）的当下发出一封简短通知，是招聘团队投入产出比最高的改进之一。\n\n感谢前期的考虑。\n\n此致\n[你的名字]`
      }
    },
    mirror: {
      letter: {
        short: `主题：Re: 关于你方的更新\n\n招聘团队你好，\n\n感谢你方发来的拒信。经过我方的慎重考虑，很遗憾通知你方：我无法在此时接受这封拒信。\n\n虽然这封邮件展现了行业标准级别的含糊与流程化，但出于对个人发展的考虑，我决定推进与其他更具学习价值的失望进入下一阶段。\n\n此致\n[你的名字]`,
        long:  `主题：Re: 关于你方的更新\n\n招聘团队你好，\n\n感谢你方发来的拒信。经过我方的慎重考虑，很遗憾通知你方：我无法在此时接受这封拒信。\n\n虽然这封拒信展现了我对招聘市场已有的种种标准预期，但综合考虑个人成长方向后，我决定推进与其他更契合我职业目标的失望进入下一阶段。\n\n感谢你方在短时间内对我进行了考察、流程化处理，并将我重新释放回求职市场。祝你方在持续寻找符合不断演变的、未公开的、可能也内部不太清晰的需求的候选人时一切顺利。\n\n此致\n[你的名字]`
      },
      ghost: {
        short: `主题：Re: 你方的（沉默）\n\n招聘团队你好，\n\n感谢你方就 {COMPANY} {ROLE} 一职保持的持续沉默。在 {SINCE} 的耐心等待之后，很遗憾通知你方：我决定推进与其他更具时间观念的失望进入下一阶段。\n\n此致\n[你的名字]`,
        long:  `主题：Re: 我方对你方沉默的解读\n\n招聘团队你好，\n\n感谢你方就 {ROLE} 一职保持的、长期且精心维护的沉默。经过 {SINCE} 的耐心等待与对你方内部重组的合理推测，很遗憾通知你方：我决定推进与其他时间线更符合常规招聘流程定义的机会。\n\n请将本邮件视为一次礼貌性的更新——我听说这种东西有时是受欢迎的。祝你方在持续寻找一位愿意无限期等待的候选人的过程中一切顺利。\n\n此致\n[你的名字]`
      }
    },
    survivor: {
      letter: {
        short: `主题：Re: 关于申请进展\n\n{NAME} 你好，\n\n感谢更新。考虑到作业本身所需的时间，我希望能得到更具体的反馈。对未来候选人而言，更清晰的评估标准与反馈环节，会让无偿任务的体验更尊重候选人。\n\n此致\n[你的名字]`,
        long:  `主题：Re: 关于申请进展\n\n{NAME} 你好，\n\n感谢更新。也感谢有机会参与流程并完成作业。考虑到作业所需的时间与策略性思考，我希望能就提交内容获得更具体的反馈。\n\n对未来候选人而言，更清晰的作业目的、评估标准与反馈机制，会让这一过程更透明，也更尊重候选人的投入。\n\n此致\n[你的名字]`
      },
      ghost: {
        short: `主题：关于已提交作业的跟进\n\n{NAME} 你好，\n\n距离我提交 {ROLE} 一职的作业已经 {SINCE}。希望能得到一次简短更新——包括岗位当前的状态。这既是为了我自己的下一步，也是为了未来同样在作业上投入真实时间的候选人。\n\n此致\n[你的名字]`,
        long:  `主题：关于 {ROLE} 与已提交作业的进展\n\n{NAME} 你好，\n\n距离我提交 {COMPANY} {ROLE} 一职的作业已经 {SINCE}，我想跟进一次以获得明确信息。\n\n抛开我个人的情况，我想就这个更普遍的候选人体验问题提一句：当候选人在 take-home 作业上投入数小时真实工作时，哪怕一句关于结果的反馈，都会带来本质区别。希望能得到关于当前状态的简短更新。\n\n此致\n[你的名字]`
      }
    },
    therapy: {
      letter: {
        short: `主题：Re: 经过慎重考虑\n\n招聘团队你好，\n\n感谢你方发来的、经过慎重考虑的模板。经过我方同样慎重的审阅，很遗憾通知你方：这封拒信未能进入我情绪处理流程的下一阶段。\n\n如果未来在拒信中加入更个性化的内容、以及实质性的反馈环节，你方的拒信在下一轮市场竞争中会更具竞争力。\n\n此致\n一个见过这个模板的候选人`,
        long:  `主题：Re: 经过慎重考虑\n\n招聘团队你好，\n\n感谢你方发来的、经过慎重考虑的模板。经过我方同样慎重的审阅，很遗憾通知你方：这封拒信未能进入我情绪处理流程的下一阶段。\n\n虽然这封邮件高度契合行业标准的含糊水平，但我决定推进与其他更具学习价值的失望进入下一阶段。\n\n请不要因此而气馁，未来仍可继续拒绝其他候选人。如果在内容上加入更多个性化、以及更扎实的反馈结构，你方的拒信在下一轮市场竞争中会更具竞争力。\n\n此致\n一个见过这个模板的候选人`
      },
      ghost: {
        short: `主题：一份你没有要求的状态更新\n\n招聘团队你好，\n\n经过 {SINCE} 对你方沉默的细致解读——细致程度远超你方曾分配给我的——很遗憾通知你方：这段关系已在我方一侧悄然关闭。请勿回复，我也不知道该如何处理。\n\n此致\n一个听懂了暗示的候选人`,
        long:  `主题：Re:（你方未发出的邮件）\n\n招聘团队你好，\n\n距离我们上次就 {COMPANY} {ROLE} 一职的沟通已经 {SINCE}。感谢你方让我有机会通过你方收件箱的结构来推断你方的决定。\n\n虽然你方的沉默展现了令人印象深刻的连贯性和值得敬佩的精力节约，但我决定将其解读为它几乎一定是的那种拒绝，并据此推进。请将本邮件视为我方对这段流程的闭环。感谢曾有机会被你方近乎考虑过。\n\n此致\n一个已经不再查看收件箱的候选人`
      }
    },
    linkedin: {
      letter: {
        short: `今天又收到一封「经过慎重考虑」。\n\n我不是来发泄的。我想说的是：候选人投入的时间，和能拿回的反馈，差距已经被习以为常——但其实并不需要这样。\n\n如果你在招人：发一句具体的反馈，只花你 90 秒，却能改变对方的一周。\n\n#招聘 #候选人体验`,
        long:  `几周面试，多轮流程，认真准备，最终换来一句「经过慎重考虑，我们决定推进其他候选人」。\n\n我不是为某一家公司而写。我想说的是：候选人投入的时间，和我们能拿回的反馈，差距已经被默认成「行业惯例」——但惯例本身就是选择。\n\n任何团队不改流程就能做的三件事：\n\n1. 真实面试之后，发一句具体反馈。不用一段，一句话就够。\n2. 如果作业占用候选人超过两小时，请用相同力度对待对方的回应。\n3. 永远不要让候选人等待超过两周还没有更新。沉默也是一种决定。\n\n这些都无关「软」。这关乎尊重时间。把这件事做对的公司，会在招聘上默默胜过那些不做的。\n\n#招聘 #候选人体验`
      },
      ghost: {
        short: `多轮面试，认真准备，然后是 {SINCE} 的彻底沉默。\n\n我不点名公司。我只是想说：「不回复」已经悄悄成为这个行业默认可以接受的答案——这不应该。\n\n如果你在招人：一句「我们决定推进其他方向」只需要 30 秒，对你零成本。但它告诉世界你是什么样的团队。\n\n#招聘 #候选人体验`,
        long:  `多轮面试，认真准备，然后是 {SINCE} 的彻底沉默。\n\n我不点名公司。我想说的是：「不回复」已经悄悄成为这个行业对真实时间投入的默认答案——这不应该。\n\n三件基本零成本的事：\n\n1. 候选人进了第一轮之后，就欠对方一个明确的「是」或「否」。\n2. 如果暂时没答案，那就先欠对方一个「什么时候会有答案」。\n3. 「我们决定推进其他方向」是一句完整的话。它不需要一整段。\n\n这些都不需要换 ATS。它需要的是：把候选人当作时间和招聘方时间同等重要的人来对待。把这件事做对的公司，会在招聘上默默胜过那些不做的。\n\n#招聘 #候选人体验`
      }
    }
  }
};

// ============================================================
// DETECTION RULES — first match wins (only for 'letter' scenario)
// ============================================================
const DETECTION = [
  { type: 'assignment', kws: ['assignment','case study','take-home','take home','task we sent','submission','作业','笔试','测评'] },
  { type: 'interview',  kws: ['interview','conversation with the team','panel','onsite','on-site','second round','final round','面试','面谈'] },
  { type: 'ghost',      kws: ['circling back','wanted to close the loop','closing the loop','following up','回复一下','跟进一下'], maxLen: 250 },
  { type: 'fakePolite', kws: ['truly impressive','incredibly difficult decision','such a strong candidate','you should be proud','exceptionally strong'] },
  { type: 'template',   kws: ['after careful consideration','not move forward','other candidates','regret to inform','keep your resume on file','position has been filled','position is no longer'] },
  { type: 'template',   kws: ['很遗憾','未能进入下一轮','选择了其他候选人','感谢你的申请','感谢您的申请','职位已关闭','保留你的简历','保留您的简历','岗位已关闭'] }
];

function detectType(body) {
  const txt = (body || '').toLowerCase();
  const len = txt.length;
  if (len < 80) return null;
  for (const rule of DETECTION) {
    if (rule.maxLen && len > rule.maxLen) continue;
    for (const kw of rule.kws) {
      if (txt.includes(kw.toLowerCase())) return rule.type;
    }
  }
  return len > 80 ? 'noFeedback' : null;
}

const TYPE_LABEL_KEY = {
  assignment: 'typeAssignment',
  interview:  'typeInterview',
  ghost:      'typeGhost',
  fakePolite: 'typeFakePolite',
  template:   'typeTemplate',
  noFeedback: 'typeNoFeedback'
};

// ============================================================
// FIELD PARSING — manual ghost inputs take precedence; fall back to email parse
// ============================================================
function parseFields(body, lang, scenario, ghostCtx) {
  const fallback = lang === 'zh'
    ? { NAME: '招聘团队', COMPANY: '[公司名]', ROLE: '[该岗位]', SINCE: '一段时间' }
    : { NAME: 'Hiring Team', COMPANY: '[Company]', ROLE: '[the role]', SINCE: 'some time' };
  const out = { ...fallback };

  // Email-derived fields
  if (body) {
    // NAME = sender (parsed from sign-off block), NOT candidate name (in salutation).
    // "Dear Chelsea," addresses the candidate; the HR signer lives after "Best regards,".
    let m = body.match(/(?:^|\n)[ \t]*(?:Yours faithfully|Sincerely yours|Yours sincerely|Best regards|Kind regards|Warm regards|All the best|Best wishes|Many thanks|Yours truly|Thank you|Sincerely|Regards|Warmly|Cheers|Thanks|Best)[ \t]*[,.\-]*[ \t]*\r?\n+[ \t]*([A-Z][a-zA-Z\-'\.]{1,30}(?:[ \t]+[A-Z][a-zA-Z\-'\.]{1,30}){0,2})/i);
    if (m) out.NAME = m[1].trim().replace(/^The\s+/i, '');
    m = body.match(/(?:此致敬礼|此致|祝好|顺祝|顺颂|敬礼|敬上|谨上)[ \t，,。.]*\r?\n+[ \t]*([一-龥]{2,15})/);
    if (m) out.NAME = m[1];

    m = body.match(/(?:at|from|with|join|joining|interest in)\s+([A-Z][\w&\.\- ]{1,40}?)(?:[\.\,\n]|\s(?:for|team|on|regarding))/);
    if (m) out.COMPANY = m[1].trim();
    m = body.match(/([一-龥A-Za-z0-9·\-]{2,30})\s*(?:公司|科技|集团)/);
    if (m) out.COMPANY = m[1] + (body.match(/公司|科技|集团/) || [''])[0];

    m = body.match(/(?:for the|the|our)\s+([A-Za-z][\w \-/&]{2,40}?)\s+(?:position|role|opportunity|opening)/i);
    if (m) out.ROLE = m[1].trim();
    m = body.match(/([一-龥A-Za-z0-9·\-]{2,30})\s*(?:一职|岗位|职位)/);
    if (m) out.ROLE = m[1];
  }

  // Manual ghost inputs win (for ghost scenario)
  if (scenario === 'ghost' && ghostCtx) {
    if (ghostCtx.company) out.COMPANY = ghostCtx.company.trim();
    if (ghostCtx.role)    out.ROLE = ghostCtx.role.trim();
    if (ghostCtx.since)   out.SINCE = ghostCtx.since.trim();
  }

  return out;
}

function fill(tpl, fields) {
  return tpl.replace(/\{(NAME|COMPANY|ROLE|SINCE)\}/g, (_, k) => fields[k] || '');
}

// ============================================================
// SAFETY — blocklist + risk scoring
// ============================================================
const BLOCKLIST = [
  'idiot','idiots','moron','morons','stupid','retard','retarded','asshole','assholes',
  'bitch','bastard','scum','loser','losers','clown show','garbage human','trash human',
  'shut up','kill yourself','kys','go die',
  '傻逼','蠢货','贱','滚','去死','低能','废物','人渣'
];
const SARCASM_MARKERS = [
  'after careful consideration','thank you for your rejection','disappointments',
  'undisclosed','emotional damage','industry-standard vagueness','template',
  'your continued silence','your carefully maintained silence','your unwritten email',
  '经过慎重考虑','谢谢你方的拒信','感谢你方发来的拒信','行业标准','含糊',
  '你方的持续沉默','你方未发出的邮件','耐心等待'
];
const INTENSIFIERS = [
  'insulting','waste of time','clown','joke','pathetic','disgrace',
  '侮辱','浪费时间','可笑','笑话','耻辱'
];

function containsBlocked(text) {
  const t = text.toLowerCase();
  return BLOCKLIST.some(w => t.includes(w.toLowerCase()));
}

function riskScore(text, toneId) {
  const t = text.toLowerCase();
  let score = TONE_BASELINE[toneId] || 0;
  for (const m of SARCASM_MARKERS) if (t.includes(m.toLowerCase())) score += 1;
  for (const m of INTENSIFIERS)    if (t.includes(m.toLowerCase())) score += 2;
  if (containsBlocked(t)) score += 5;
  return score;
}

function riskLevel(score, toneId) {
  let level;
  if (score <= 1) level = 'green';
  else if (score <= 3) level = 'yellow';
  else if (score <= 5) level = 'orange';
  else level = 'red';
  if (toneId === 'therapy' && level === 'red') level = 'orange';
  return level;
}

const RISK_BADGE = { green: '🟢', yellow: '🟡', orange: '🟠', red: '🔴' };
const RISK_NOTE_KEY = { green: 'riskGreen', yellow: 'riskYellow', orange: 'riskOrange', red: 'riskRed' };

// ============================================================
// STATE
// ============================================================
const STORAGE = { lang: 'rr_lang', archive: 'rr_archive_v1' };

const state = {
  lang: (() => {
    const saved = localStorage.getItem(STORAGE.lang);
    if (saved === 'en' || saved === 'zh') return saved;
    return (navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
  })(),
  tone: 'reconsider',
  variant: 0,
  scenario: 'letter',     // 'letter' | 'ghost'
  lastDraft: '',
  lastType: null,
  lastFields: null,
  lastScenario: null,
  lastLangOfDraft: null
};

// ============================================================
// DOM
// ============================================================
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

const els = {
  emailInput: $('#emailInput'),
  emailLabel: $('#emailLabel'),
  detectHint: $('#detectHint'),
  contextGroup: $('#contextGroup'),
  ghostCard: $('#ghostCard'),
  ghostCompany: $('#ghostCompany'),
  ghostRole: $('#ghostRole'),
  ghostSince: $('#ghostSince'),
  toneGrid: $('#toneGrid'),
  generateBtn: $('#generateBtn'),
  result: $('#result'),
  typeBadge: $('#typeBadge'),
  engineBadge: $('#engineBadge'),
  riskBadge: $('#riskBadge'),
  riskNote: $('#riskNote'),
  safetyBanner: $('#safetyBanner'),
  draftOutput: $('#draftOutput'),
  actions: $('.actions'),
  archiveToggle: $('#archiveToggle'),
  archiveList: $('#archiveList'),
  archiveCount: $('#archiveCount'),
  langBtn: $('#langBtn'),
  shareBtn: $('#shareBtn'),
  toast: $('#toast'),
  boom: $('#boom')
};

// ============================================================
// CHERRY BOMB EXPLOSION
// ============================================================
const BOOM_PARTICLES = ['🍒','🍒','🍒','★','✦','✶','💥','BOOM','POW','BANG','ZAP','KAPOW'];
const BOOM_COLORS = ['#E63946','#FF3F8E','#FFD23F','#0A0A0A','#E63946','#FF3F8E'];
const BOOM_WORDS = ['BOOM!','POW!','BANG!','KAPOW!','ZAP!'];
const PREFERS_REDUCED = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function detonate() {
  const boom = els.boom;
  if (!boom) return;
  if (PREFERS_REDUCED()) return;

  // CTA visual punch
  els.generateBtn.classList.add('firing');
  setTimeout(() => els.generateBtn.classList.remove('firing'), 220);

  // Reset any prior run
  boom.classList.remove('active');
  const particles = boom.querySelector('.boom-particles');
  particles.innerHTML = '';

  // Rotate the BOOM/POW/BANG word
  const textEl = boom.querySelector('.boom-text');
  textEl.textContent = BOOM_WORDS[Math.floor(Math.random() * BOOM_WORDS.length)];

  // Spawn particles around the center
  const N = 16;
  for (let i = 0; i < N; i++) {
    const p = document.createElement('span');
    p.className = 'boom-particle';
    const angle = (360 / N) * i + (Math.random() * 22 - 11);
    const distance = 200 + Math.random() * 240;
    const rot = Math.random() * 720 - 360;
    const rad = angle * Math.PI / 180;
    const dx = Math.cos(rad) * distance;
    const dy = Math.sin(rad) * distance;
    p.style.setProperty('--dx', dx + 'px');
    p.style.setProperty('--dy', dy + 'px');
    p.style.setProperty('--rot', rot + 'deg');
    p.style.color = BOOM_COLORS[Math.floor(Math.random() * BOOM_COLORS.length)];
    p.style.fontSize = (22 + Math.random() * 14) + 'px';
    p.textContent = BOOM_PARTICLES[Math.floor(Math.random() * BOOM_PARTICLES.length)];
    particles.appendChild(p);
  }

  // Force reflow so re-adding .active restarts the animations
  void boom.offsetWidth;
  boom.classList.add('active');
  setTimeout(() => boom.classList.remove('active'), 900);
}

// ============================================================
// RENDER
// ============================================================
function t(key) { return I18N[state.lang][key] || key; }

function applyI18N() {
  document.documentElement.lang = state.lang === 'zh' ? 'zh' : 'en';
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  $$('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  els.langBtn.textContent = state.lang === 'zh' ? 'EN' : '中文';
  applyScenarioCopy();
  renderToneGrid();
  if (!els.result.classList.contains('hidden')) {
    renderTypeBadge(state.lastType);
    renderRisk();
  }
  renderArchiveList();
  detectAndHint();
}

function applyScenarioCopy() {
  if (state.scenario === 'ghost') {
    els.emailLabel.textContent = t('labelPasteGhost');
    els.emailInput.placeholder = t('placeholderPasteGhost');
    els.generateBtn.textContent = t('ctaGhost');
  } else {
    els.emailLabel.textContent = t('labelPaste');
    els.emailInput.placeholder = t('placeholderPaste');
    els.generateBtn.textContent = t('cta');
  }
}

function renderToneGrid() {
  const tones = I18N[state.lang].tones;
  els.toneGrid.innerHTML = '';
  TONE_IDS.forEach(id => {
    const def = tones[id];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tone-card' + (FEATURED_TONES.has(id) ? ' featured' : '');
    btn.dataset.tone = id;
    btn.setAttribute('aria-pressed', String(state.tone === id));
    btn.innerHTML = `<span class="t"></span><span class="d"></span>`;
    btn.querySelector('.t').textContent = def.name;
    btn.querySelector('.d').textContent = def.desc;
    if (FEATURED_TONES.has(id)) {
      const star = document.createElement('span');
      star.className = 'star-pill';
      star.textContent = t('featuredPill');
      btn.appendChild(star);
    }
    if (def.warn) {
      const pill = document.createElement('span');
      pill.className = 'warn-pill';
      pill.textContent = def.warn;
      btn.appendChild(pill);
    }
    btn.addEventListener('click', () => {
      state.tone = id;
      $$('.tone-card').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.tone === id)));
    });
    els.toneGrid.appendChild(btn);
  });
}

function renderTypeBadge(typeKey) {
  if (!typeKey) { els.typeBadge.textContent = ''; return; }
  const key = TYPE_LABEL_KEY[typeKey];
  els.typeBadge.textContent = `${t('detected')} ${t(key)}`;
}

function renderRisk() {
  const tone = state.tone;
  const score = riskScore(els.draftOutput.value, tone);
  const lvl = riskLevel(score, tone);
  els.riskBadge.textContent = RISK_BADGE[lvl];
  if (tone === 'therapy') {
    els.riskNote.textContent = t('riskTherapy');
  } else {
    els.riskNote.textContent = t(RISK_NOTE_KEY[lvl]);
  }
  els.riskBadge.dataset.level = lvl;
}

// ============================================================
// SCENARIO SWITCHING
// ============================================================
function readContextRadio() {
  const checked = document.querySelector('input[name="ctx"]:checked');
  return checked ? checked.value : 'interview';
}

function syncScenarioFromContext() {
  const ctx = readContextRadio();
  const newScenario = ctx === 'ghosted' ? 'ghost' : 'letter';
  if (newScenario !== state.scenario) {
    state.scenario = newScenario;
    els.ghostCard.classList.toggle('hidden', state.scenario !== 'ghost');
    applyScenarioCopy();
  }
  detectAndHint();
}

function readGhostCtx() {
  return {
    company: els.ghostCompany.value || '',
    role: els.ghostRole.value || '',
    since: els.ghostSince.value || ''
  };
}

// ============================================================
// DETECTION HINT (live)
// ============================================================
function detectAndHint() {
  if (state.scenario === 'ghost') {
    els.detectHint.textContent = t('ghostReady');
    els.detectHint.classList.remove('warn');
    els.generateBtn.disabled = false;
    return;
  }
  const body = els.emailInput.value || '';
  const len = body.trim().length;
  if (len === 0) {
    els.detectHint.textContent = '';
    els.detectHint.classList.remove('warn');
    els.generateBtn.disabled = false;
    return;
  }
  const type = detectType(body);
  if (!type) {
    els.detectHint.textContent = t('notRejection');
    els.detectHint.classList.add('warn');
    els.generateBtn.disabled = true;
  } else {
    els.detectHint.textContent = `${t('detected')} ${t(TYPE_LABEL_KEY[type])}`;
    els.detectHint.classList.remove('warn');
    els.generateBtn.disabled = false;
  }
}

// ============================================================
// GENERATION
// ============================================================
function chooseDraftLang(body) {
  const cjk = (body.match(/[一-龥]/g) || []).length;
  if (cjk >= 8) return 'zh';
  return state.lang;
}

function generateDraft({ regenerate = false } = {}) {
  const body = els.emailInput.value.trim();
  let type;
  if (state.scenario === 'ghost') {
    type = 'ghost';
  } else {
    type = detectType(body);
    if (!type) { detectAndHint(); return; }
  }

  const draftLang = chooseDraftLang(body);
  const ghostCtx = state.scenario === 'ghost' ? readGhostCtx() : null;
  const fields = parseFields(body, draftLang, state.scenario, ghostCtx);
  if (regenerate) state.variant = state.variant === 0 ? 1 : 0;
  const lengthKey = state.variant === 0 ? 'long' : 'short';
  const tpl = TEMPLATES[draftLang][state.tone][state.scenario][lengthKey];
  let text = fill(tpl, fields);

  let safetySwapped = false;
  if (containsBlocked(text)) {
    text = fill(TEMPLATES[draftLang].professional[state.scenario].short, fields);
    safetySwapped = true;
  }

  state.lastDraft = text;
  state.lastType = type;
  state.lastFields = fields;
  state.lastScenario = state.scenario;
  state.lastLangOfDraft = draftLang;

  els.draftOutput.value = text;
  els.engineBadge.textContent = '📋';
  renderTypeBadge(type);
  renderRisk();
  els.safetyBanner.classList.toggle('hidden', !safetySwapped);
  if (safetySwapped) els.safetyBanner.textContent = t('safetyBanner');
  els.result.classList.remove('hidden');
  els.result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// ACTIONS
// ============================================================
function copyText(s) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(s);
  }
  const ta = document.createElement('textarea');
  ta.value = s; document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch(e) {}
  document.body.removeChild(ta);
  return Promise.resolve();
}

function download(filename, content) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => els.toast.classList.remove('show'), 1800);
}

function reFillWith(toneId) {
  const lang = state.lastLangOfDraft || state.lang;
  const scenario = state.lastScenario || state.scenario;
  const ghostCtx = scenario === 'ghost' ? readGhostCtx() : null;
  const fields = state.lastFields || parseFields(els.emailInput.value, lang, scenario, ghostCtx);
  const tpl = TEMPLATES[lang][toneId][scenario].long;
  els.draftOutput.value = fill(tpl, fields);
  state.tone = toneId;
  $$('.tone-card').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.tone === toneId)));
  renderRisk();
  if (containsBlocked(els.draftOutput.value)) {
    els.draftOutput.value = fill(TEMPLATES[lang].professional[scenario].short, fields);
    els.safetyBanner.textContent = t('safetyBanner');
    els.safetyBanner.classList.remove('hidden');
    renderRisk();
  } else {
    els.safetyBanner.classList.add('hidden');
  }
}

function makeMoreProfessional() { reFillWith('professional'); }
function makeMoreSavage()       { reFillWith(state.tone === 'therapy' ? 'therapy' : 'mirror'); }
function toLinkedIn()           { reFillWith('linkedin'); }

// ============================================================
// SAFETY ON USER EDIT
// ============================================================
function onDraftEditCheck() {
  const text = els.draftOutput.value;
  if (containsBlocked(text)) {
    const lang = state.lastLangOfDraft || state.lang;
    const scenario = state.lastScenario || state.scenario;
    const ghostCtx = scenario === 'ghost' ? readGhostCtx() : null;
    const fields = state.lastFields || parseFields(els.emailInput.value, lang, scenario, ghostCtx);
    els.draftOutput.value = fill(TEMPLATES[lang].professional[scenario].short, fields);
    els.safetyBanner.textContent = t('safetyBanner');
    els.safetyBanner.classList.remove('hidden');
  } else {
    els.safetyBanner.classList.add('hidden');
  }
  renderRisk();
}

// ============================================================
// ARCHIVE
// ============================================================
function loadArchive() {
  try { return JSON.parse(localStorage.getItem(STORAGE.archive) || '[]'); }
  catch(e) { return []; }
}
function saveArchive(arr) {
  localStorage.setItem(STORAGE.archive, JSON.stringify(arr));
}
function addToArchive() {
  if (!els.draftOutput.value.trim()) return;
  const arr = loadArchive();
  arr.unshift({
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,6),
    ts: Date.now(),
    tone: state.tone,
    scenario: state.lastScenario || state.scenario,
    lang: state.lastLangOfDraft || state.lang,
    text: els.draftOutput.value
  });
  saveArchive(arr.slice(0, 50));
  renderArchiveList();
  showToast(t('toastArchived'));
}
function renderArchiveList() {
  const arr = loadArchive();
  els.archiveCount.textContent = `(${arr.length})`;
  els.archiveList.innerHTML = '';
  arr.forEach(item => {
    const li = document.createElement('li');
    li.className = 'archive-item';
    const tones = I18N[state.lang].tones;
    const toneName = (tones[item.tone] && tones[item.tone].name) || item.tone;
    const date = new Date(item.ts);
    const dateStr = date.toLocaleString(state.lang === 'zh' ? 'zh-CN' : 'en-US',
      { year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
    const preview = item.text.replace(/\s+/g,' ').slice(0, 60) + (item.text.length > 60 ? '…' : '');
    const left = document.createElement('div');
    left.innerHTML = `<div class="meta"></div><div class="preview"></div>`;
    left.querySelector('.meta').textContent = `${toneName} · ${dateStr}`;
    left.querySelector('.preview').textContent = preview;
    const ops = document.createElement('div');
    ops.className = 'ops';
    const restore = document.createElement('button');
    restore.textContent = t('archiveRestore');
    restore.addEventListener('click', () => {
      els.draftOutput.value = item.text;
      state.tone = item.tone;
      state.lastLangOfDraft = item.lang;
      state.lastScenario = item.scenario || 'letter';
      $$('.tone-card').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.tone === item.tone)));
      els.result.classList.remove('hidden');
      renderRisk();
      els.draftOutput.scrollIntoView({ behavior:'smooth', block:'start' });
    });
    const del = document.createElement('button');
    del.textContent = t('archiveDelete');
    del.addEventListener('click', () => {
      if (!confirm(t('confirmDelete'))) return;
      saveArchive(loadArchive().filter(x => x.id !== item.id));
      renderArchiveList();
    });
    ops.appendChild(restore); ops.appendChild(del);
    li.appendChild(left); li.appendChild(ops);
    els.archiveList.appendChild(li);
  });
}

// ============================================================
// WIRING
// ============================================================
function init() {
  applyI18N();
  syncScenarioFromContext();
  renderArchiveList();

  els.langBtn.addEventListener('click', () => {
    state.lang = state.lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem(STORAGE.lang, state.lang);
    applyI18N();
  });

  els.shareBtn.addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
      try { await navigator.share({ title: 'Reject Rejection', url }); return; }
      catch(e) {}
    }
    await copyText(url);
    showToast(t('toastShareCopied'));
  });

  els.emailInput.addEventListener('input', detectAndHint);
  els.contextGroup.addEventListener('change', syncScenarioFromContext);

  els.generateBtn.addEventListener('click', () => {
    if (els.generateBtn.disabled) return;
    const reduce = PREFERS_REDUCED();
    if (!reduce) detonate();
    setTimeout(() => generateDraft({ regenerate: false }), reduce ? 0 : 320);
  });

  els.draftOutput.addEventListener('blur', onDraftEditCheck);
  els.draftOutput.addEventListener('input', renderRisk);

  els.actions.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-act]');
    if (!btn) return;
    const act = btn.dataset.act;
    switch(act) {
      case 'copy':
        copyText(els.draftOutput.value).then(() => showToast(t('toastCopied')));
        break;
      case 'download': {
        const stamp = new Date().toISOString().slice(0,16).replace(/[:T]/g,'-');
        download(`reject-rejection-${state.tone}-${stamp}.txt`, els.draftOutput.value);
        showToast(t('toastDownloaded'));
        break;
      }
      case 'professional': makeMoreProfessional(); break;
      case 'savage':       makeMoreSavage(); break;
      case 'linkedin':     toLinkedIn(); break;
      case 'regenerate':   generateDraft({ regenerate: true }); break;
      case 'archive':      addToArchive(); break;
    }
  });

  els.archiveToggle.addEventListener('click', () => {
    const open = els.archiveToggle.getAttribute('aria-expanded') === 'true';
    els.archiveToggle.setAttribute('aria-expanded', String(!open));
    els.archiveList.classList.toggle('hidden', open);
  });

  $$('.tone-card').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.tone === state.tone)));
}

document.addEventListener('DOMContentLoaded', init);
})();
