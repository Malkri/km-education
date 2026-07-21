"use client";

import { useState } from "react";

const results = [
  { name: "Elaine Z.", school: "Haileybury", score: "RAW 50", atar: "99.95" },
  { name: "Patrick P.", school: "MHS", score: "RAW 50", atar: "99.95" },
  { name: "Vaibhav R.", school: "MHS", score: "Raw 49", atar: "99.95" },
  { name: "Anon.", school: "MHS", score: "RAW 50", atar: "99.95" },
  { name: "Eddie L.", school: "MHS", score: "RAW 50", atar: "99.80" },
  { name: "Ethan W.", school: "MHS", score: "Raw 48", atar: "99.85" },
  { name: "Ethan W.", school: "MHS", score: "Raw 47", atar: "99.85" },
  { name: "Dawood", school: "Sirius College", score: "Raw 49", atar: "99.80" },
  { name: "Tanmay", school: "MHS", score: "Raw 49", atar: "99.65" },
  { name: "David H.", school: "Frankston High", score: "Raw 49", atar: "99.40" },
  { name: "Xavier S.", school: "MHS", score: "Raw 47", atar: "—" },
  { name: "Daania", school: "Al Taqwa", score: "Raw 46", atar: "—" },
];

const INITIAL_COUNT = 6;

export function Results({ showAllDefault = false }: { showAllDefault?: boolean }) {
  const [showAll, setShowAll] = useState(showAllDefault);
  const visible = showAll ? results : results.slice(0, INITIAL_COUNT);

  return (
    <section id="results" className="py-24 lg:py-32 px-6 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
            Our Results
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">
            KM Education Results — our students topped the state.
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-base font-light">
            <thead>
              <tr className="border-b border-paper/10">
                <th className="text-left text-xs uppercase tracking-[0.2em] text-brand font-mono py-4 pr-8">Student</th>
                <th className="text-left text-xs uppercase tracking-[0.2em] text-brand font-mono py-4 pr-8">School</th>
                <th className="text-left text-xs uppercase tracking-[0.2em] text-brand font-mono py-4 pr-8">Study Score</th>
                <th className="text-left text-xs uppercase tracking-[0.2em] text-brand font-mono py-4">ATAR</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((r, i) => (
                <tr key={i} className="border-b border-paper/5 hover:bg-paper/5 transition-colors">
                  <td className="py-4 pr-8 text-paper/90">{r.name}</td>
                  <td className="py-4 pr-8 text-paper/50">{r.school}</td>
                  <td className="py-4 pr-8 text-brand font-mono">{r.score}</td>
                  <td className="py-4 text-paper/90">{r.atar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-paper/40 text-base font-light mt-6 font-mono">
          …and many more Raw 40+ study scores.
        </p>
        {!showAllDefault && results.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="mt-6 border border-paper/20 px-6 py-3 text-xs uppercase tracking-[0.2em] font-light hover:bg-paper hover:text-ink transition-colors"
          >
            {showAll ? "Show fewer results" : "Show more results"}
          </button>
        )}
      </div>
    </section>
  );
}
