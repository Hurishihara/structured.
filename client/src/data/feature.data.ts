import { CalendarClockIcon, CheckCircleIcon, ShieldIcon, SparklesIcon, TargetIcon, type LucideIcon } from 'lucide-react';

type FeatureData = {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const campaignPlanningData: FeatureData[] = [
    {
        title: 'Campaign Scheduling',
        description: 'Create campaigns with defined start and end dates to stay on track.',
        icon: CalendarClockIcon,
    },
    {
        title: 'Objective Setting',
        description: 'Set clear objectives like awareness, engagement, and sales to guide your efforts.',
        icon: TargetIcon,
    },
]

export const teamCollaborationData: FeatureData[] = [
    {
        title: 'Post Assignment',
        description: 'Assign posts to specific content creators to streamline content production.',
        icon: SparklesIcon
    },
    {
        title: 'Role-Based Access',
        description: 'Manage permissions with role-based access for Admins, Managers, and Content Creators.',
        icon: ShieldIcon
    },
    {
        title: 'Real-Time Task Tracking',
        description: 'Track task completion in real-time to stay updated on progress and ensure efficiency.',
        icon: CheckCircleIcon,
    }
]
