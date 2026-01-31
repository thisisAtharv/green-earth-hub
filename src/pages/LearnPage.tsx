import { AppLayout } from '@/components/layout/AppLayout';
import { QuizCard } from '@/components/learn/QuizCard';
import { TipsCarousel } from '@/components/learn/TipsCarousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Lightbulb, FileText, Video, Image } from 'lucide-react';

const LearnPage = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="pt-2 pb-2">
          <h1 className="text-2xl font-bold text-foreground">Climate Lab</h1>
          <p className="text-muted-foreground">Explore, learn, and take action</p>
        </div>

        {/* Tab Switcher */}
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-card rounded-2xl p-1 h-auto shadow-soft">
            <TabsTrigger 
              value="articles" 
              className="rounded-xl py-3 font-semibold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <FileText size={18} strokeWidth={2.5} className="mr-2" />
              Articles
            </TabsTrigger>
            <TabsTrigger 
              value="videos" 
              className="rounded-xl py-3 font-semibold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <Video size={18} strokeWidth={2.5} className="mr-2" />
              Videos
            </TabsTrigger>
            <TabsTrigger 
              value="infographics" 
              className="rounded-xl py-3 font-semibold data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              <Image size={18} strokeWidth={2.5} className="mr-2" />
              Visuals
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <ContentCard
                title="10 Ways to Reduce Your Carbon Footprint"
                category="Lifestyle"
                readTime="5 min read"
              />
              <ContentCard
                title="The Impact of Fast Fashion"
                category="Environment"
                readTime="8 min read"
              />
              <ContentCard
                title="Sustainable Commuting Guide"
                category="Transport"
                readTime="4 min read"
              />
              <ContentCard
                title="Zero Waste Kitchen Tips"
                category="Home"
                readTime="6 min read"
              />
            </div>
          </TabsContent>

          {/* Videos Tab */}
          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <ContentCard
                title="Climate Change Explained"
                category="Education"
                readTime="12 min"
                isVideo
              />
              <ContentCard
                title="DIY Composting at Home"
                category="Tutorial"
                readTime="8 min"
                isVideo
              />
              <ContentCard
                title="Electric vs Hybrid Cars"
                category="Transport"
                readTime="15 min"
                isVideo
              />
              <ContentCard
                title="Plant-Based Cooking Basics"
                category="Food"
                readTime="10 min"
                isVideo
              />
            </div>
          </TabsContent>

          {/* Infographics Tab */}
          <TabsContent value="infographics" className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <ContentCard
                title="Carbon Emissions by Sector"
                category="Data"
                readTime="Infographic"
                isInfographic
              />
              <ContentCard
                title="Water Usage Comparison"
                category="Resources"
                readTime="Infographic"
                isInfographic
              />
              <ContentCard
                title="Recycling Symbols Guide"
                category="Reference"
                readTime="Infographic"
                isInfographic
              />
              <ContentCard
                title="Seasonal Food Calendar"
                category="Food"
                readTime="Infographic"
                isInfographic
              />
            </div>
          </TabsContent>
        </Tabs>

        {/* Daily Quiz Section */}
        <div className="flex items-center gap-3 mb-2 mt-6">
          <div className="w-10 h-10 rounded-2xl bg-accent/20 flex items-center justify-center">
            <BookOpen size={20} strokeWidth={2.5} className="text-coral" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Daily Quiz</h2>
            <p className="text-sm text-muted-foreground">Earn 50 points per correct answer</p>
          </div>
        </div>
        
        <QuizCard />

        {/* Tips Section */}
        <div className="flex items-center gap-3 mb-2 mt-6">
          <div className="w-10 h-10 rounded-2xl bg-success/20 flex items-center justify-center">
            <Lightbulb size={20} strokeWidth={2.5} className="text-lime" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Did You Know?</h2>
            <p className="text-sm text-muted-foreground">Simple tips for a greener life</p>
          </div>
        </div>

        <TipsCarousel />
      </div>
    </AppLayout>
  );
};

// Content Card Component
interface ContentCardProps {
  title: string;
  category: string;
  readTime: string;
  isVideo?: boolean;
  isInfographic?: boolean;
}

const ContentCard = ({ title, category, readTime, isVideo, isInfographic }: ContentCardProps) => {
  return (
    <div className="lisboa-card-soft flex flex-col justify-between min-h-[160px] cursor-pointer hover:shadow-card transition-shadow">
      {/* Category Badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
          isVideo ? 'bg-coral/20 text-coral' : 
          isInfographic ? 'bg-success/20 text-lime' : 
          'bg-primary/10 text-foreground'
        }`}>
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-foreground line-clamp-3 flex-1">
        {title}
      </h3>

      {/* Meta */}
      <div className="flex items-center gap-2 mt-3">
        {isVideo && <Video size={14} strokeWidth={2.5} className="text-coral" />}
        {isInfographic && <Image size={14} strokeWidth={2.5} className="text-lime" />}
        {!isVideo && !isInfographic && <FileText size={14} strokeWidth={2.5} className="text-muted-foreground" />}
        <span className="text-xs text-muted-foreground">{readTime}</span>
      </div>
    </div>
  );
};

export default LearnPage;
