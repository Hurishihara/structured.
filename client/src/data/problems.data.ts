import { CalendarXIcon, CircleXIcon, FileXIcon, LightbulbOffIcon, type LucideIcon, MessageCircleXIcon, TrendingDownIcon, UnlinkIcon } from 'lucide-react';

export const problems: {
    title: string;
    description: string;
    icon: LucideIcon;
}[] = [
    {
        title: 'Multiple Platforms, No Central Hub',
        description: 'You\'re spread thin trying to keep track of content across various platforms. Without one place to view everything, it\'s impossible to stay organized and efficient.',
        icon: CircleXIcon
    },
    {
        title: 'Lost in the Chaos of Content Scheduling',
        description: 'Ever find yourself wondering what\'s scheduled, what\'s already been posted, and what\'s still pending? It\'s a content nightmare without the right system.',
        icon: CalendarXIcon
    },
    {
        title: 'Engagement Metrics? They\'re Everywhere!',
        description: 'Tracking metrics across different dashboards is time-consuming and frustrating. How do you know what\'s working when the data is scattered?',
        icon: TrendingDownIcon
    },
    {
        title: 'Communcation Breakdown: Too Many Tools',
        description: 'Coordinating with your team shouldn\'t be a puzzle. But with emails, DMs, and scattered messages, important updates get lost in the shuffle.',
        icon: MessageCircleXIcon
    },
    {
        title: 'Manual Reporting Drains Your Time',
        description: 'Creating reports by hand is tedious and error-prone. You need insights fast, but compiling data from multiple sources eats up your valuable time.',
        icon: FileXIcon
    },
    {
        title: 'Inconsistent Branding Across Channels',
        description: 'Maintaining a consistent brand voice and look across all your social media platforms is challenging without a unified strategy and tools.',
        icon: CircleXIcon
    },
    {
        title: 'Missed Opportunities for Growth & Collaboration',
        description: 'You\'re missing out on potential collaborations, partnerships, or brand deals simply because you can\'t track or manage your outreach and engagement efforts in one place.',
        icon: UnlinkIcon
    },
    {
        title: 'Overwhelmed by Content Ideas',
        description: 'You have a ton of great content ideas, but without a system to organize and prioritize them, they often get lost or forgotten.',
        icon: LightbulbOffIcon
    }
]