import React from 'react';
import { LESSON_DATA, KAHOOT_QUESTIONS } from '../constants';
import { Card, Badge } from './UI';

export const TeacherMode: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-8">
      <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-3xl p-8 text-white shadow-xl">
        <h1 className="text-4xl font-black mb-2 gamify-font">Teacher Dashboard</h1>
        <p className="opacity-90">Unit 55: Phrasal Verbs - CELTA TTT Lesson Plan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Lesson Structure (TTT)</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Badge color="bg-red-100 text-red-800">Test 1</Badge>
              <span className="ml-3 text-slate-600">Lead-in Match Game. Diagnostic of current knowledge.</span>
            </li>
            <li className="flex items-start">
              <Badge color="bg-blue-100 text-blue-800">Teach</Badge>
              <span className="ml-3 text-slate-600">Interactive Slides covering: Definition, Tenses, Separable (w/ pronoun rule), 3-word verbs.</span>
            </li>
            <li className="flex items-start">
              <Badge color="bg-green-100 text-green-800">Test 2</Badge>
              <span className="ml-3 text-slate-600">Kahoot Game. Controlled practice under time pressure.</span>
            </li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">Common Mistakes</h3>
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-red-700 dark:text-red-300">Object placement with Pronouns</p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Students often say "Pick up it" instead of "Pick it up". Emphasize slide #3 in Teach phase.</p>
          </div>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Content Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LESSON_DATA.map((section, idx) => (
             <Card key={idx} className="h-full">
               <h4 className="font-bold text-primary mb-2">{section.title}</h4>
               <p className="text-sm text-slate-500 mb-4">{section.subtitle}</p>
               <div className="text-xs space-y-2">
                 {section.content.map(c => (
                   <div key={c.id} className="p-2 bg-slate-50 dark:bg-slate-700 rounded">
                     <span className="font-semibold text-slate-700 dark:text-slate-200">{c.type.toUpperCase()}:</span> {c.en.substring(0, 50)}...
                   </div>
                 ))}
               </div>
             </Card>
          ))}
        </div>
      </div>
    </div>
  );
};