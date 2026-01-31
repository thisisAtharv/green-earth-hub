import { useState } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { QuizCard } from '@/components/learn/QuizCard';
import { TipsCarousel } from '@/components/learn/TipsCarousel';
import { BookOpen, Lightbulb } from 'lucide-react';

const LearnPage = () => {
  return (
    <AppLayout>
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="pt-2 pb-2">
          <h1 className="text-2xl font-bold text-foreground">Learn & Earn</h1>
          <p className="text-muted-foreground">Boost your eco knowledge</p>
        </div>

        {/* Daily Quiz Section */}
        <div className="flex items-center gap-3 mb-2">
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

export default LearnPage;
