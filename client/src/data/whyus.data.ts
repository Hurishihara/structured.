import { AppWindowIcon, ChartNoAxesCombinedIcon, type LucideIcon, UsersIcon } from "lucide-react";

export const whyUs: {
    title: string;
    description: string;
    icon: LucideIcon;
}[] = [
    {
        title: 'Improve Collaboration',
        description: 'Assign tasks, track deadlines, and work seamlessly with your team all in one place.',
        icon: UsersIcon
    },
    {
        title: 'Centralized Workflow',
        description: 'Manage all your social media in one platform, eliminating the need to juggle multiple tools. No more switching between apps.',
        icon: AppWindowIcon
    },
    {
        title: 'Actionable Insights',
        description: 'Get real-time performance metrics and analytics to optimize your social media strategy effectively.',
        icon: ChartNoAxesCombinedIcon
    }
]