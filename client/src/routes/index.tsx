import ColorBends from '@/components/ColorBends'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2Icon, CircleOffIcon, LayoutGridIcon, SparklesIcon, UsersRoundIcon } from 'lucide-react'
import { problems } from '@/data/problems.data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CardSwap, { Card as CSCard } from '@/components/CardSwap'
import { whyUs } from '@/data/whyus.data'
import { campaignPlanningData, teamCollaborationData } from '@/data/feature.data'
import FacebookIcon from '@/components/ui/facebook-icon'
import InstagramIcon from '@/components/ui/instagram-icon'
import TwitterIcon from '@/components/ui/twitter-icon'
import TiktokIcon from '@/components/ui/tiktok-icon'
import { Separator } from '@/components/ui/separator'

const RouteComponent = () => {
  return (
    <>
    <div className='relative h-screen overflow-hidden'>
      <ColorBends
        rotation={10}
        colors={['#1A2B4C', '#ffffff', ]}
        speed={0.2}
        className='bg-white'
      />
      {/* Hero Section */}
      <nav className='absolute top-0 left-0 right-0 z-10'>
        {/* Navigation content can go here */}
        <div>
          <h2 className='text-xl font-black font-primary text-deep-navy p-4'>
            <LayoutGridIcon className='inline-block w-8 h-8  mr-2 mb-1' />
            Structured.
          </h2>
        </div>
      </nav>
      <section className='absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 w-full'>
        <div className='flex flex-col items-center text-center gap-5'>
          <div className='inline-flex items-center gap-2 bg-confident-blue/10 text-deep-navy px-4 py-2 rounded-full'>
              <SparklesIcon className='w-5 h-5' />
              <p className='tracking-normal text-sm font-medium font-secondary'>
                Launching Soon!
              </p>
          </div>
          <h1 className='text-8xl max-w-7xl font-extrabold font-primary text-deep-navy leading-none tracking-tight'>
            Manage Your Social Media {' '}
            <span className='bg-gradient-to-r from-deep-navy to-confident-blue/60 bg-clip-text text-transparent'>
              Campaigns with Ease
            </span>
          </h1>
          <p className='text-lg font-secondary font-medium max-w-2xl text-deep-navy/80 mt-5 tracking-normal'>
            The all-in-one platform for small teams to plan, execute, and track social media campaigns across all platforms seamlessly.
          </p>
          <div>
            <Input
              type='email'
              placeholder='Enter your email'
              className='w-75 bg-white rounded-md p-5 font-secondary font-normal ring-0 border-2 focus:!border-confident-blue/80 focus-visible:ring-offset-0 focus-visible:ring-0' 
            />
            <Button 
              size='sm' 
              type='submit' 
              className='ml-4 p-5 bg-confident-blue text-white rounded-md hover:bg-confident-blue/80 font-secondary font-normal cursor-pointer'>
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
    {/* Problem Section */}
    <section className='py-15 h-screen px-25'>
      <div className='flex flex-row items-center gap-160 px-10'>
        <div className='flex flex-col items-start max-w-xl'>
          <div className='inline-flex items-center gap-2 bg-deep-navy/10 text-deep-navy px-4 py-2 rounded-full'>
            <CircleOffIcon className='w-5 h-5' />
            <p className='tracking-normal text-sm font-medium font-secondary'>
              The Problem
            </p>
          </div>
          <h2 className='text-5xl font-bold font-primary text-deep-navy mt-5 mb-10'>
            Social Media Management feels disorganized
          </h2>
          <p className='text-lg text-deep-navy/80 font-medium font-secondary'>
            Managing social media shouldn't feel like a chaos. Yet small teams face the same frustrations everyday.
          </p>
        </div>
        <div className='h-[500px] relative'>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={1500}
            pauseOnHover={false}
            height={300}
            width={600}
          >
            {problems.map((problem, index) => (
              <CSCard key={index} className='bg-white'>
                <Card className='h-full border-red-600/20 border-2'>
                  <CardHeader>
                    <problem.icon className='w-5 h-5 text-red-600 mb-4' />
                    <CardTitle className='text-2xl font-bold font-secondary text-red-600 mb-2'>
                      {problem.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-deep-navy/80 font-secondary font-medium'>
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </CSCard>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
    {/* Why Us Section */}
    <section className='py-15 px-25 h-screen'>
      <div className='flex flex-col items-start justify-center px-10 gap-5'>
        <div className='inline-flex items-center gap-2 bg-deep-navy/10 text-deep-navy px-4 py-2 rounded-full'>
          <LayoutGridIcon className='w-5 h-5' />
          <p className='tracking-normal text-sm font-medium font-secondary'>
            Why Structured?
          </p>
        </div>
        <h2 className='text-5xl font-bold font-primary text-deep-navy max-w-2xl mb-10'>
          Designed to streamline your social media management
        </h2>
        <p className='text-lg text-deep-navy/80 font-medium font-secondary max-w-2xl mb-10'>
          Supercharge your social media workflow with Structured. Our platform is built to help small teams collaborate, organize, and execute social media campaigns effortlessly.
        </p>
        <div className='grid grid-cols-12 gap-5 w-full'>
          {whyUs.map((feature, index) => (
            <div key={index} className='col-span-4 bg-gradient-to-br from-white to-confident-blue/10 p-6 rounded-lg'>
              <div className='px-4 py-2 rounded-full mb-5 bg-confident-blue/20 inline-flex items-center'>
                <feature.icon className='w-6 h-6 text-confident-blue' />
              </div>
              <div className='flex flex-col max-w-sm gap-2'>
                <h2 className='text-2xl font-bold font-secondary text-deep-navy mb-2'>
                  {feature.title}
                </h2>
                <p className='text-deep-navy/80 font-secondary font-medium mb-4'>
                  {feature.description}
                </p>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </section>
    {/* Features Section */}
    <section className='py-15 px-25'>
      <div className='flex flex-col items-start justify-center px-10 gap-15'>
        <div className='flex flex-row items-end  justify-between w-full'>
          <div>
            <div className='inline-flex items-center gap-2 bg-deep-navy/10 text-deep-navy px-4 py-2 rounded-full mb-5'>
              <CheckCircle2Icon className='w-5 h-5' />
              <p className='tracking-normal text-sm font-medium font-secondary'>
                Campaign Planning
              </p>
            </div>
            <h2 className='text-5xl font-bold font-primary text-deep-navy max-w-md mb-10'>
              Crafting Campaigns for Success
            </h2>
          </div>
          <p className='text-lg text-deep-navy/80 font-medium font-secondary max-w-2xl mb-10 mt-5'>
            From content scheduling to analytics, Structured offers a comprehensive suite of tools designed to simplify your social media management process.
          </p>
        </div>
        <div className='grid grid-cols-12 gap-5 w-full'>
          {campaignPlanningData.map((feature, index) => (
            <div key={index} className='col-span-4 bg-gradient-to-br from-white to-fresh-teal/10  p-6 rounded-lg'>
              <div className='px-4 py-2 rounded-full mb-5 bg-fresh-teal/20 inline-flex items-center'>
                <feature.icon className='w-6 h-6 text-fresh-teal' />
              </div>
              <div className='flex flex-col max-w-sm gap-2'>
                <h2 className='text-2xl font-bold font-secondary text-deep-navy mb-2'>
                  {feature.title}
                </h2>
                <p className='text-deep-navy/80 font-secondary font-medium mb-4'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          <div className='col-span-4 bg-gradient-to-br from-white to-fresh-teal/10  p-6 rounded-lg'>
            <div className='inline-flex items-center gap-3 bg-fresh-teal/20 px-4 py-2 rounded-full mb-5'>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <TiktokIcon />
            </div>
            <div className='flex flex-col max-w-sm gap-2'>
              <h2 className='text-2xl font-bold font-secondary text-deep-navy mb-2'>
                Multi-Platform Management
              </h2>
              <p className='text-deep-navy/80 font-secondary font-medium mb-4'>
                Manage campaigns across multiple platforms including Facebook, Instagram, Twitter, and TikTok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='py-15 px-25 h-screen'>
      <div className='flex flex-col items-start justify-center px-10 gap-15'>
        <div className='flex flex-row items-end justify-between w-full'>
          <div>
            <div className='inline-flex items-center gap-2 bg-deep-navy/10 text-deep-navy px-4 py-2 rounded-full mb-5'>
              <UsersRoundIcon className='w-5 h-5' />
              <p className='tracking-normal text-sm font-medium font-secondary'>
                Team Collaboration
              </p>
            </div>
            <h2 className='text-5xl font-bold font-primary text-deep-navy max-w-lg'>
              Empowering Teams to Work Together
            </h2>
          </div>
          <p className='text-lg text-deep-navy/80 font-medium font-secondary max-w-2xl'>
            From post assignments to real-time task tracking, our tools help teams collaborate efficiently, ensuring timely content delivery and seamless workflow management.
          </p>
        </div>
        <div className='grid grid-cols-12 gap-5 w-full'>
          {teamCollaborationData.map((feature, index) => (
            <div key={index} className='col-span-4 bg-gradient-to-br from-white to-fresh-teal/10 p-6 rounded-lg'>
              <div className='px-4 py-2 rounded-full mb-5 bg-fresh-teal/20 inline-flex items-center'>
                <feature.icon className='w-6 h-6 text-fresh-teal' />
              </div>
              <div className='flex flex-col max-w-sm gap-2'>
                <h2 className='text-2xl font-bold font-secondary text-deep-navy mb-2'>
                  {feature.title}
                </h2>
                <p className='text-deep-navy/80 font-secondary font-medium mb-4'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* Footer */}
    <footer className='py-10 px-25  flex flex-col gap-5 justify-center items-center'>
      <Separator className='my-4 ' />
      <p className='text-deep-navy font-semibold font-secondary'>
        &copy; {new Date().getFullYear()} Structured. All rights reserved.
      </p>
    </footer>
    </>
  )
}

export const Route = createFileRoute('/')({
  component: RouteComponent,
})
