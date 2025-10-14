# Design Guidelines: Meu Devocionalzinho Kids Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from successful product landing pages with warm, family-oriented aesthetics similar to Headspace (calm, approachable) and Canva's landing pages (soft colors, clear CTAs, trust-building elements).

## Core Design Principles
- **Mobile-First**: Optimized primarily for iPhone SE (320px width) and up
- **Soft & Joyful**: Convey faith, family warmth, and spiritual growth
- **Trust-Building**: Prominent social proof, testimonials, and urgency elements
- **Conversion-Focused**: Clear CTAs and streamlined purchase flow

## Color Palette

### Primary Colors (Light Mode Only)
- **Primary**: 210 85% 92% (Soft blue - backgrounds, accents)
- **Secondary**: 45 95% 88% (Soft yellow - highlights, warmth)
- **Accent**: 42 85% 55% (Golden - CTAs, stars, special elements)
- **Success**: 145 60% 45% (Soft green - alternative CTA)
- **Base**: 0 0% 100% (White - main background)
- **Text**: 220 15% 25% (Dark blue-gray - readable body text)
- **Text Light**: 220 10% 45% (Lighter text for secondary content)

## Typography

### Font Families
- **Primary (Headings)**: 'Quicksand', sans-serif (Google Fonts) - friendly, rounded, approachable
- **Secondary (Body)**: 'Inter', sans-serif (Google Fonts) - highly legible for mobile reading

### Type Scale
- **Hero Title**: text-3xl md:text-5xl font-bold leading-tight
- **Section Headings**: text-2xl md:text-4xl font-semibold
- **Subheadings**: text-lg md:text-xl font-medium
- **Body Text**: text-base md:text-lg leading-relaxed
- **Small Text**: text-sm

## Layout System

### Spacing Primitives
Use Tailwind spacing units: **4, 6, 8, 12, 16, 20** for consistent rhythm
- Container padding: px-4 md:px-8
- Section spacing: py-12 md:py-20
- Component gaps: gap-4, gap-6, gap-8
- Element margins: mb-4, mb-6, mb-8

### Responsive Breakpoints
- Mobile: 320px-767px (base styles)
- Tablet: 768px-1023px (md:)
- Desktop: 1024px+ (lg:)

### Container Strategy
- Max width: max-w-6xl mx-auto
- Section padding: px-4 sm:px-6 lg:px-8
- Content width for text: max-w-prose for readability

## Component Library

### Hero Section
- Full-width background with soft gradient (blue to white)
- Centered content with max-w-4xl
- Star rating (4.9/5) with gold stars inline with text
- Social proof badge: "Mais de 500 famílias..." as subtle badge
- Family devotional image (provided by client) - warm, joyful

### Feature Cards
- Grid layout: grid-cols-1 md:grid-cols-2 gap-6
- Soft rounded corners: rounded-2xl
- Subtle shadows: shadow-sm hover:shadow-md transition
- Icon + text layout with generous padding (p-6)
- Background: white with subtle blue tint (bg-blue-50/30)

### Testimonial Section
- Card-based layout: grid-cols-1 md:grid-cols-3 gap-6
- Quote marks in soft gold
- Customer name and location in lighter text
- Rounded cards with gentle shadows
- White background on soft blue section background

### Pricing Section
- Prominent price display with original price crossed out
- Large discount badge: "-78%" in gold/yellow
- Clear price hierarchy: Large R$ 12,99, struck-through R$ 59,99
- Countdown timer: 5-minute countdown with bold numbers
- Timer styling: rounded-lg border-2 border-gold with padding

### CTA Buttons
- Primary: Green (145 60% 45%) or Gold (42 85% 55%)
- Large touch targets: min-h-14 px-8 py-4
- Rounded: rounded-full
- Text: text-lg md:text-xl font-semibold
- Shadow for depth: shadow-lg hover:shadow-xl
- Ensure text never overflows: text-center overflow-hidden text-ellipsis
- Full width on mobile: w-full md:w-auto

### Contact Section
- Two-column on desktop: contact info + support hours
- Icons for email and WhatsApp (use Heroicons)
- Soft background: bg-blue-50
- Clear, readable contact details

## Images

### Hero Image
Large, warm image of family doing devotional together - children and parents reading Bible, smiling, joyful atmosphere. Position: Below hero text on mobile, right side on desktop (50/50 split).

### Supporting Images
Secondary image showcasing children engaged in devotional activities - can be placed in "O que você vai encontrar" section.

**Note**: Client will provide 2 custom photos to replace generic placeholders.

## Accessibility & Mobile Optimization

### Critical Mobile Fixes
- All text must respect container boundaries (overflow-hidden, text-ellipsis for long buttons)
- No horizontal scroll: overflow-x-hidden on body
- Touch targets minimum 44px
- Readable font sizes (minimum 16px for body)

### Responsive Images
- Use object-cover for consistent aspect ratios
- Provide proper alt text for all images
- Lazy loading for performance

## Animations
**Minimal & Purposeful**: 
- Subtle fade-in on scroll for sections (intersection observer)
- Smooth countdown timer transitions
- Button hover/active states only
- No distracting parallax or heavy animations

## Technical Specifications
- Mobile-first responsive design
- Optimized for iPhone SE (320px) minimum width
- Fast loading with optimized images
- Countdown timer implementation (5-minute JavaScript timer)
- WhatsApp and email links properly formatted
- All interactive elements accessible via keyboard