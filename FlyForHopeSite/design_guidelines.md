# Fly For Hope - Design Guidelines

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Airbnb**: Emotional storytelling through imagery and clean, authentic messaging
- **Apple**: Product-focused minimalism with generous whitespace and bold typography
- **Stripe**: Modern gradients, smooth animations, and refined landing page patterns

**Design Principles:**
1. Authenticity over polish - this is a real human story, not corporate marketing
2. Sky-inspired visual language - light, airy, uplifting
3. Progress-focused narrative - showing the journey matters as much as the destination
4. Trust through transparency - safety and responsibility communicated clearly

---

## Typography

**Primary Font**: Inter or DM Sans (Google Fonts)
- Modern, clean, excellent readability at all sizes

**Hierarchy:**
- Hero Headline: 4xl-6xl (64-96px desktop), bold (700), tight leading
- Section Headers: 3xl-4xl (48-60px), semibold (600)
- Subsection Headers: 2xl (30px), semibold (600)
- Body Text: base-lg (16-18px), regular (400), relaxed leading (1.7)
- Captions/Metadata: sm (14px), medium (500)
- CTA Buttons: base (16px), semibold (600), uppercase tracking

**Special Treatment:**
- Mission statement tagline uses larger size with gradient text effect
- Timeline milestones use bold weights for emphasis
- Quote-style treatment for donation section messaging

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: 6-8
- Section vertical spacing: 16-24 (mobile), 24-32 (desktop)
- Content max-width: 1280px with 6-8 horizontal padding
- Text content max-width: 768px for optimal readability

**Section Structure:**
- Hero: 90vh viewport with centered content
- Content sections: Natural height based on content (py-20 to py-32)
- Consistent vertical rhythm throughout scroll experience

---

## Component Library

### Navigation
**Sticky Header:**
- Transparent background with backdrop blur on scroll
- Logo/project name left, navigation links center, "Donate Now" CTA right
- Smooth anchor scrolling to sections
- Mobile: Hamburger menu with slide-out drawer

### Hero Section
**Layout:**
- Full-width background image (paramotor in sky or inspiring aerial view)
- Dark gradient overlay (40% opacity) for text contrast
- Centered content with mission statement
- Two CTAs side-by-side: "Track the Build" (primary) + "Support the Mission" (secondary outline)
- Buttons with backdrop blur background (bg-white/20 with blur)
- Scroll indicator at bottom

### About My Mission
**Layout:**
- Two-column on desktop: Left - personal story text, Right - photo of student/paramotor
- Single column mobile
- Pull quote treatment for key phrase about passion and purpose
- Subtle card elevation for content container

### Project Progress Timeline
**Interactive Timeline:**
- Vertical timeline with alternating left/right content on desktop
- Central vertical line with circular milestone markers
- Each milestone includes: Phase title, description, status indicator (completed/in-progress/upcoming)
- Icons for each phase (design, build, training, flight icons)
- Progress bar showing overall completion percentage
- Mobile: Single column with left-aligned markers

### Donations Section
**Centered, Impactful Layout:**
- Maximum width 900px
- Large heart or hope-themed icon
- Emotional 2-3 sentence message about supporting VCU Children's Hospital kids
- Prominent "Donate to VCU Children's Hospital" button
- Small disclaimer text: "You'll be redirected to the official donation page"
- Subtle background gradient or soft illustration

### Media/Updates Gallery
**Masonry Grid Layout:**
- 3 columns desktop, 2 columns tablet, 1 column mobile
- Mixed content: Photos (full cards), video thumbnails with play icons, blog post previews
- Hover effects: Slight scale + overlay with content title
- "Load More" button if content exceeds initial display
- Filter tabs: All / Photos / Videos / Blog Updates

### Safety & Training
**Icon Grid Layout:**
- 4-column grid on desktop (FAA compliance, professional training, safety gear, mentorship)
- Each item: Icon, title, 1-2 sentence description
- Responsible messaging tone
- Links to training certifications or safety resources

### Contact Section
**Split Layout:**
- Left side: Simple contact form (Name, Email, Message fields)
- Right side: Social media links (Instagram, YouTube, Twitter icons) + email address
- Optional: Newsletter signup checkbox within form
- Background: Subtle sky gradient

### Footer
**Multi-Column Layout:**
- Column 1: Fly For Hope logo + tagline
- Column 2: Quick links (Jump to sections)
- Column 3: Future sponsor logos placeholder
- Column 4: Social links + contact
- Bottom bar: Copyright, privacy policy link, "Built with passion"

---

## Images

**Large Hero Image:** Yes - Full-width background
- **Description:** Expansive sky view with paramotor in flight or student with paramotor at golden hour, conveying freedom and adventure
- **Placement:** Hero section full background with gradient overlay

**Additional Images:**
- About section: Authentic photo of student working on paramotor or portrait
- Media gallery: Build progress photos, flight videos, training documentation
- Timeline: Small icons/illustrations for each phase milestone
- Donations section: Optional subtle illustration or photo of children (stock image acceptable)

---

## Animations & Interactions

**Scroll Animations (subtle, purposeful):**
- Hero: Parallax effect on background image (very subtle)
- Sections: Fade-in on scroll into viewport
- Timeline: Progressive reveal as user scrolls
- Gallery: Stagger animation for grid items

**Hover States:**
- Gallery items: Scale 1.05 + show overlay
- Timeline markers: Pulse effect on hover
- Navigation links: Underline animation
- Cards: Subtle lift shadow

**No animations on:**
- CTA buttons (they handle their own states)
- Mobile (prefer instant feedback)

---

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked content)
- Tablet: 768-1024px (2-column grids, reduced spacing)
- Desktop: > 1024px (full multi-column layouts)

**Key Adaptations:**
- Hero: Reduce text size significantly on mobile, maintain impact
- Timeline: Vertical single-column on mobile
- Gallery: 1 column mobile, 2 tablet, 3 desktop
- Contact: Stack form and social links on mobile

---

## Special Elements

**Progress Tracker Button:** Fixed position bottom-right on scroll (after hero), opens modal/slide-out with detailed build progress

**Sponsor Logos Section:** Placeholder grid in footer with "Future Partners" heading, grayscale logos with color on hover

**Newsletter Signup:** Integrated into contact form as checkbox option, not separate section

**Trust Indicators:** Small badges near safety section (e.g., "FAA Compliant", "Safety First", "Trained Professional")

---

This design balances professional polish with authentic personality, creating an inspiring digital home for your mission that will resonate emotionally while building credibility and trust.