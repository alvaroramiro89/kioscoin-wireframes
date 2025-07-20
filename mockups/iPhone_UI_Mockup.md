# KIOSCOIN V2 - iPhone UI Mockup

## 📱 iPhone 14 Pro Design Specifications

### Screen Layout (393x852px)

```
┌─────────────────────────────────────┐  ← iPhone Frame
│  3:57                    📶 📶 🔋   │  ← Status Bar
├─────────────────────────────────────┤
│                                     │
│           kioscoin                  │  ← Header (60px)
│         Purple Gradient             │
│                                     │
├─────────────────────────────────────┤
│  👤 @Alv      7⭕ 5⭐ 12992.31m⏱️  │  ← Profile Stats (80px)
├─────────────────────────────────────┤
│                                     │
│  🔵 USDC    $ 102.89        🔗     │  ← Balance Card (140px)
│  👛 0x2501...A6e18F        📋     │
│                                     │
├─────────────────────────────────────┤
│      ⭕        ➕        ⬇️       │  ← Quick Actions (80px)
│   Receive     Add      Send        │
├─────────────────────────────────────┤
│  PAYMENT METHODS                    │  ← Payment Section (160px)
│  🏦 Revolut              ✅       │
│  🏦 N26                  ✅       │
│  ➕ Add new method                 │
├─────────────────────────────────────┤
│     🟢 Buy        🟢 Sell         │  ← Actions (60px)
├─────────────────────────────────────┤
│   🏠 Home   📦 Orders  👤 Profile  │  ← Bottom Nav (80px)
│                        (active)    │
└─────────────────────────────────────┘
```

## 🎨 Design System

### Colors

- **Brand Purple**: #8B5CF6
- **Secondary Purple**: #A78BFA
- **Success Green**: #16a34a
- **Background**: #f8fafc
- **Card Background**: #ffffff
- **Border**: #e5e7eb
- **Text Primary**: #111827
- **Text Secondary**: #6b7280

### Typography

- **Logo**: 24px, Bold, Purple Gradient
- **Balance**: 32px, Bold, Dark
- **Username**: 18px, Medium
- **Badges**: 14px, Medium
- **Body**: 16px, Regular
- **Caption**: 14px, Regular

### Spacing

- **Screen Padding**: 16px
- **Card Padding**: 20px
- **Element Spacing**: 16px
- **Button Height**: 44px minimum
- **Border Radius**: 12px-16px

## 🔄 Interactions

### Copy Functionality

- Tap 📋 → Copy wallet address
- Show toast: "Address copied!"
- Haptic feedback

### Dropdown Menus

- Tap ⬇️ → Expand/collapse sections
- Smooth animation (0.3s ease)
- Rotate arrow icon

### Network Selector

- Tap 🔗 → Show USDC BNB/ARB options
- Update balance display
- Close on selection

### Add Payment Method

- Tap ➕ → Modal overlay
- Options: WISE, ING, Binance Pay
- Form validation

## 📐 Component Specifications

### Profile Stats Card

- Height: 80px
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 16px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

### Balance Card

- Height: 140px
- Background: White
- Border: 2px solid #dbeafe
- Border Radius: 20px
- Shadow: 0 4px 6px rgba(0,0,0,0.05)

### Quick Action Buttons

- Size: 60x60px
- Background: #f3f4f6
- Border: 2px solid #9ca3af
- Border Radius: 50%
- Icon Size: 24px

### Payment Method Items

- Height: 48px each
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Verified: Green accent (#ecfdf5)

### Buy/Sell Buttons

- Height: 44px
- Width: 48% each
- Background: #16a34a
- Color: White
- Border Radius: 12px
- Font Weight: 600

## 🎯 UX Considerations

### Accessibility

- Minimum 44px touch targets
- High contrast ratios
- Screen reader friendly
- Haptic feedback

### Performance

- Smooth 60fps animations
- Lazy loading for heavy components
- Optimized images and icons
- Fast tap responses (<100ms)

### iOS Guidelines

- Safe area margins
- Native-like interactions
- Proper keyboard handling
- Status bar integration

## 📱 Responsive Behavior

### iPhone Sizes

- iPhone SE: Scale down 15%
- iPhone 14/15: Base design
- iPhone 14/15 Plus: Scale up 10%
- iPhone 14/15 Pro Max: Scale up 15%

### Landscape Mode

- Stack payment methods horizontally
- Reduce vertical spacing
- Maintain touch targets

---

_Created: December 2024_
_Version: 1.0_
_Platform: iOS Mobile_
